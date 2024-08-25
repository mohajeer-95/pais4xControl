import React, { useState, useEffect } from 'react';
import { Table, Button, Spinner, Card, CardImg, CardBody, CardText, Form, FormGroup, Label, Input, FormFeedback, Alert } from 'reactstrap';

const SliderList = () => {
  const [sliders, setSliders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formLoading, setFormLoading] = useState(false);
  const [formData, setFormData] = useState({ link: '', image: null });
  const [errors, setErrors] = useState({ link: '', image: '' });
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    fetchSliders();
  }, []);

  const fetchSliders = async () => {
    const myHeaders = new Headers();
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjg2MDllNzQ0OTgxZjMwNzIyZTllNmRlMDQyMjY2MDJmNDM0NTk3ODBlNzUzM2FiNDc3MGFhMjhiZDFjZjRhMjU5NGNhYjI3MGJhM2UxNzUiLCJpYXQiOjE3MTc2MjA2NDQsIm5iZiI6MTcxNzYyMDY0NCwiZXhwIjoxNzQ5MTU2NjQ0LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.cRRWjwpsvG5cYb-5n_YpfrOHfoWzRTEoYndZffA08MrJxWnv4KZ1mezT6PaKxPdDNEnRQaeqPSdo4Wtf5xWrlgpZTnNQmd8-_xXjz_LJHIXdGtT5YosL6If__d1psx6nsW8ckyXx2mKWF2hiM6a1c65keOgtmiEwCsADxBYZv-VAE1eZz8eQHaYmc_dBFZnfevZqaDOcYjSdijRBGXYGCb65-wolO08is5cf6jq-r6m0pWKQ1Gwq8h5BRV4HBqxLVJK-2Mbk2hHF0EsxrUSIE9wTKxqBcH0SL4wOA8GWeiQUSlAncTkwvGQwFBdGVMou67XDz5UeiN0ek6JayemFZcpq-fkHP7l1fNpT_6SgQSRaIxca2rx9Q_nQYrjIczzuvPchbs9MbOdKdEpuolOWAbI4VBGS0FvMiXF596LCLuyAnnAC2YppkMF6AepxMBWtvCpYgL_Kr6KK4e-39_7tzhe1nMZsIRg-2jEYkHv8TB1vr4VaN4IikA6gEVlfml51VW6aiej2YkY4WtdJSeVAOhPgcPYX396v7awfW7liQz4TOIS0sxSaFTTlCrKvqxBz676uzmqxq0oUqTBm_4vlAirm1iluAXP9NwxYKHxIF8SNHaKtsBvMIzjaN79pBHmQdvRc_mJRf-Z9y5Wzn0-m6LmM2c60WA0Hu-vquTPZmbc'; // Your actual token
    myHeaders.append('Authorization', `Bearer ${token}`);

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    try {
      const response = await fetch("https://lab.app2serve.com/public/api/all-brokers-link-request", requestOptions);
      const result = await response.json();
      const data = result.brokers_link.reverse()
      setSliders(data);
    } catch (error) {
      console.error('Error fetching sliders:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const myHeaders = new Headers();
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjg2MDllNzQ0OTgxZjMwNzIyZTllNmRlMDQyMjY2MDJmNDM0NTk3ODBlNzUzM2FiNDc3MGFhMjhiZDFjZjRhMjU5NGNhYjI3MGJhM2UxNzUiLCJpYXQiOjE3MTc2MjA2NDQsIm5iZiI6MTcxNzYyMDY0NCwiZXhwIjoxNzQ5MTU2NjQ0LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.cRRWjwpsvG5cYb-5n_YpfrOHfoWzRTEoYndZffA08MrJxWnv4KZ1mezT6PaKxPdDNEnRQaeqPSdo4Wtf5xWrlgpZTnNQmd8-_xXjz_LJHIXdGtT5YosL6If__d1psx6nsW8ckyXx2mKWF2hiM6a1c65keOgtmiEwCsADxBYZv-VAE1eZz8eQHaYmc_dBFZnfevZqaDOcYjSdijRBGXYGCb65-wolO08is5cf6jq-r6m0pWKQ1Gwq8h5BRV4HBqxLVJK-2Mbk2hHF0EsxrUSIE9wTKxqBcH0SL4wOA8GWeiQUSlAncTkwvGQwFBdGVMou67XDz5UeiN0ek6JayemFZcpq-fkHP7l1fNpT_6SgQSRaIxca2rx9Q_nQYrjIczzuvPchbs9MbOdKdEpuolOWAbI4VBGS0FvMiXF596LCLuyAnnAC2YppkMF6AepxMBWtvCpYgL_Kr6KK4e-39_7tzhe1nMZsIRg-2jEYkHv8TB1vr4VaN4IikA6gEVlfml51VW6aiej2YkY4WtdJSeVAOhPgcPYX396v7awfW7liQz4TOIS0sxSaFTTlCrKvqxBz676uzmqxq0oUqTBm_4vlAirm1iluAXP9NwxYKHxIF8SNHaKtsBvMIzjaN79pBHmQdvRc_mJRf-Z9y5Wzn0-m6LmM2c60WA0Hu-vquTPZmbc'; // Your actual token
    myHeaders.append('Authorization', `Bearer ${token}`);

    const requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      redirect: 'follow'
    };

    try {
      const response = await fetch(`https://lab.app2serve.com/public/api/slider/${id}`, requestOptions);
      if (response.ok) {
        setSliders(sliders.filter(slider => slider.id !== id));
      } else {
        console.error('Failed to delete slider');
      }
    } catch (error) {
      console.error('Error deleting slider:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
    setErrors({ ...errors, image: '' });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { link: '', image: '' };

    if (!formData.link) {
      newErrors.link = 'URL is required';
      valid = false;
    }

    if (!formData.image) {
      newErrors.image = 'Image is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };



  const updateLinkRequestStatus = async (requestId) => {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjg2MDllNzQ0OTgxZjMwNzIyZTllNmRlMDQyMjY2MDJmNDM0NTk3ODBlNzUzM2FiNDc3MGFhMjhiZDFjZjRhMjU5NGNhYjI3MGJhM2UxNzUiLCJpYXQiOjE3MTc2MjA2NDQsIm5iZiI6MTcxNzYyMDY0NCwiZXhwIjoxNzQ5MTU2NjQ0LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.cRRWjwpsvG5cYb-5n_YpfrOHfoWzRTEoYndZffA08MrJxWnv4KZ1mezT6PaKxPdDNEnRQaeqPSdo4Wtf5xWrlgpZTnNQmd8-_xXjz_LJHIXdGtT5YosL6If__d1psx6nsW8ckyXx2mKWF2hiM6a1c65keOgtmiEwCsADxBYZv-VAE1eZz8eQHaYmc_dBFZnfevZqaDOcYjSdijRBGXYGCb65-wolO08is5cf6jq-r6m0pWKQ1Gwq8h5BRV4HBqxLVJK-2Mbk2hHF0EsxrUSIE9wTKxqBcH0SL4wOA8GWeiQUSlAncTkwvGQwFBdGVMou67XDz5UeiN0ek6JayemFZcpq-fkHP7l1fNpT_6SgQSRaIxca2rx9Q_nQYrjIczzuvPchbs9MbOdKdEpuolOWAbI4VBGS0FvMiXF596LCLuyAnnAC2YppkMF6AepxMBWtvCpYgL_Kr6KK4e-39_7tzhe1nMZsIRg-2jEYkHv8TB1vr4VaN4IikA6gEVlfml51VW6aiej2YkY4WtdJSeVAOhPgcPYX396v7awfW7liQz4TOIS0sxSaFTTlCrKvqxBz676uzmqxq0oUqTBm_4vlAirm1iluAXP9NwxYKHxIF8SNHaKtsBvMIzjaN79pBHmQdvRc_mJRf-Z9y5Wzn0-m6LmM2c60WA0Hu-vquTPZmbc'; // Your actual token

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);


    const raw = JSON.stringify({
      "request_id": requestId,
      "status": 1
    });

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    try {
      const response = await fetch("https://lab.app2serve.com/public/api/link-request", requestOptions);
      const result = await response.text();
      console.log(result);
      fetchSliders()
    } catch (error) {
      console.error('Error:', error);
    }
  };


  if (loading) {
    return      <div style={{marginTop: 300}} className="text-center">
    <Spinner  type="grow" style={{width: '5rem', height: '5rem', backgroundColor: '#26c6da'}} />
    <p style={{marginTop: 20, fontWeight: 'bold'}}>Loading...</p>
  </div> ;
  }

  return (
    <div>
      {/* Screen width dependent rendering */}
      <div className="d-none d-lg-block">
        <Table>
          <thead>
            <tr>
              <th>Request Id</th>
              <th>User Identifier</th>
              <th>Broker Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sliders.map(request => (
              <tr key={request.request_id}>
                <td>
                  {request.request_id}
                </td>
                <td>{request.broker_identifier}</td>
                <td>{request.name}</td>
                <td>
                  {request.broker_link_status === '0' ?
                    <Button color={'danger'} onClick={() => updateLinkRequestStatus(request.request_id)}>
                      {'Accept'}
                    </Button>
                    :
                    <Button color={'success'}>
                      {'Linked'}
                    </Button>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

      </div>
      <div className="d-lg-none">
        {sliders.map(request => (
          <Card key={request.request_id} className="mb-3">
            <CardImg top
              src={`https://lab.app2serve.com/storage/app/public/slider/tSdpNzscJY0XVkRfedK3BC7JtmiSAraPijVOdVrA.jpg`}
              alt={request.name} />
            <CardBody>
              <CardText>{request.broker_identifier}</CardText>
              <CardText>{request.name}</CardText>
              {request.broker_link_status === '0' ?
                <Button color={'danger'} onClick={() => updateLinkRequestStatus(request.request_id)}>
                  {'Accept'}
                </Button>
                :
                <Button color={'success'}>
                  {'Linked'}
                </Button>
              }
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SliderList;
