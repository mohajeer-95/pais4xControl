import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Container, Alert } from 'reactstrap';

const AddBroker = () => {
  const [brokerData, setBrokerData] = useState({
    info: {
      name: '',
      email: '',
      currency: 'dollar',
      logo: null,
      image: null,
      video_image: null,
      // أضف هنا الحقول الأخرى في object `info`
    },
    broker: {
      entity_name: '',
      broker_type: '',
      headquarters: '',
      branch_offices: '',
      // أضف هنا الحقول الأخرى في object `broker`
    },
    support: {
      channels: '',
      hours: '',
      languages: '',
      // أضف هنا الحقول الأخرى في object `support`
    },
    platform: {
      pc_platforms: '',
      mobile_platforms: '',
      demo_period: '',
      MAM_PAMM: '',
      // أضف هنا الحقول الأخرى في object `platform`
    },
    margin_leverage: {
      leverage_levels: '',
      margin_call_evel: '',
      stop_out_level: '',
      closing_method_stop_out: '',
      // أضف هنا الحقول الأخرى في object `margin_leverage`
    },
    broker_cashback_info: {
      column_instrument_account: '',
      column_margin_bonus: '',
      column_floating_bonus: '',
      column_scalping_account: '',
      // أضف هنا الحقول الأخرى في object `broker_cashback_info`
    },
    trading_cost: {
      avg_spread_on_EURUSD_val_1: '',
      avg_spread_on_EURUSD_val_2: '',
      avg_spread_on_EURUSD_val_3: '',
      commissions_on_FX_val_1: '',
      commissions_on_FX_val_2: '',
      commissions_on_FX_val_3: '',
      // أضف هنا الحقول الأخرى في object `trading_cost`
    },
    broker_account: {
      broker_account_id: '',
      bonus: '',
      islamic_accounts: '',
      trailing_stop: '',
      hedging: '',
      scalping: '',
      ea: '',
      segregated_accounts: '',
      number_of_instruments: '',
      categories_of_instruments: '',
      // أضف هنا الحقول الأخرى في object `broker_account`
    },
    broker_funding: [
      {
        account_currency: '',
        minimum_deposit_val1: '',
        minimum_deposit_val2: '',
        minimum_deposit_val3: '',
        payment_methods: '',
        // أضف هنا الحقول الأخرى في object `broker_funding`
      },
    ],
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleInputChange = (e, section, subIndex = null) => {
    const { name, value } = e.target;

    if (subIndex !== null) {
      // For handling arrays like broker_funding
      setBrokerData((prevData) => {
        const updatedSection = [...prevData[section]];
        updatedSection[subIndex] = {
          ...updatedSection[subIndex],
          [name]: value,
        };
        return {
          ...prevData,
          [section]: updatedSection,
        };
      });
    } else {
      setBrokerData((prevData) => ({
        ...prevData,
        [section]: {
          ...prevData[section],
          [name]: value,
        },
      }));
    }
  };

  const handleImageChange = (e, section, imageType) => {
    const file = e.target.files[0];
    setBrokerData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [imageType]: file,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    for (const section in brokerData) {
      if (Array.isArray(brokerData[section])) {
        brokerData[section].forEach((item, index) => {
          for (const key in item) {
            formData.append(`${section}[${index}][${key}]`, item[key]);
          }
        });
      } else {
        for (const key in brokerData[section]) {
          formData.append(`${section}[${key}]`, brokerData[section][key]);
        }
      }
    }

    try {
      const response = await fetch('/api/addBroker', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      setResponseMessage(result.message || 'Broker added successfully');
    } catch (error) {
      setResponseMessage(`Error adding broker: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <h2>Add Broker</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" value={brokerData.info.name} onChange={(e) => handleInputChange(e, 'info')} required />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" value={brokerData.info.email} onChange={(e) => handleInputChange(e, 'info')} required />
        </FormGroup>
        <FormGroup>
          <Label for="currency">Currency</Label>
          <Input type="select" name="currency" id="currency" value={brokerData.info.currency} onChange={(e) => handleInputChange(e, 'info')}>
            <option value="dollar">Dollar</option>
            <option value="jd">JD</option>
            <option value="eur">EUR</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="logo">Logo</Label>
          <Input type="file" name="logo" id="logo" onChange={(e) => handleImageChange(e, 'info', 'logo')} />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input type="file" name="image" id="image" onChange={(e) => handleImageChange(e, 'info', 'image')} />
        </FormGroup>
        <FormGroup>
          <Label for="video_image">Video Image</Label>
          <Input type="file" name="video_image" id="video_image" onChange={(e) => handleImageChange(e, 'info', 'video_image')} />
        </FormGroup>

        {/* كرر الحقول الأخرى في جميع الأقسام المختلفة كما تم توضيحه أعلاه */}

        <Button type="submit" color="primary" disabled={loading}>
          {loading ? 'Loading...' : 'Add Broker'}
        </Button>
        {responseMessage && <Alert color={responseMessage.includes('Error') ? 'danger' : 'success'}>{responseMessage}</Alert>}
      </Form>
    </Container>
  );
};

export default AddBroker;