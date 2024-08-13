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
      const response = await fetch("http://lab.app2serve.com/public/api/slider", requestOptions);
      const result = await response.json();
      setSliders(result.sliders);
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
      const response = await fetch(`http://lab.app2serve.com/public/api/slider/${id}`, requestOptions);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setFormLoading(true);

    const myHeaders = new Headers();
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjg2MDllNzQ0OTgxZjMwNzIyZTllNmRlMDQyMjY2MDJmNDM0NTk3ODBlNzUzM2FiNDc3MGFhMjhiZDFjZjRhMjU5NGNhYjI3MGJhM2UxNzUiLCJpYXQiOjE3MTc2MjA2NDQsIm5iZiI6MTcxNzYyMDY0NCwiZXhwIjoxNzQ5MTU2NjQ0LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.cRRWjwpsvG5cYb-5n_YpfrOHfoWzRTEoYndZffA08MrJxWnv4KZ1mezT6PaKxPdDNEnRQaeqPSdo4Wtf5xWrlgpZTnNQmd8-_xXjz_LJHIXdGtT5YosL6If__d1psx6nsW8ckyXx2mKWF2hiM6a1c65keOgtmiEwCsADxBYZv-VAE1eZz8eQHaYmc_dBFZnfevZqaDOcYjSdijRBGXYGCb65-wolO08is5cf6jq-r6m0pWKQ1Gwq8h5BRV4HBqxLVJK-2Mbk2hHF0EsxrUSIE9wTKxqBcH0SL4wOA8GWeiQUSlAncTkwvGQwFBdGVMou67XDz5UeiN0ek6JayemFZcpq-fkHP7l1fNpT_6SgQSRaIxca2rx9Q_nQYrjIczzuvPchbs9MbOdKdEpuolOWAbI4VBGS0FvMiXF596LCLuyAnnAC2YppkMF6AepxMBWtvCpYgL_Kr6KK4e-39_7tzhe1nMZsIRg-2jEYkHv8TB1vr4VaN4IikA6gEVlfml51VW6aiej2YkY4WtdJSeVAOhPgcPYX396v7awfW7liQz4TOIS0sxSaFTTlCrKvqxBz676uzmqxq0oUqTBm_4vlAirm1iluAXP9NwxYKHxIF8SNHaKtsBvMIzjaN79pBHmQdvRc_mJRf-Z9y5Wzn0-m6LmM2c60WA0Hu-vquTPZmbc'; // Your actual token
    myHeaders.append('Authorization', `Bearer ${token}`);

    const formdata = new FormData();
    formdata.append("link", formData.link);
    formdata.append("image", formData.image);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    try {
      const response = await fetch("http://lab.app2serve.com/public/api/slider", requestOptions);
      const result = await response.json();
      if (result.status === 1) {
        setSuccessMessage('Slider added successfully!');
        fetchSliders();
        setFormData({ link: '', image: null });
      } else {
        console.error('Failed to add slider');
      }
    } catch (error) {
      console.error('Error adding slider:', error);
    } finally {
      setFormLoading(false);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <div style={{ paddingBottom: 40 }}>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="link">Slider URL</Label>
            <Input
              type="text"
              name="link"
              id="link"
              value={formData.link}
              onChange={handleInputChange}
              invalid={!!errors.link}
            />
            {errors.link && <Alert color="danger">{errors.link}</Alert>}
          </FormGroup>
          <FormGroup>
            <Label for="image">Slider Image</Label>
            <Input
              type="file"
              name="image"
              id="image"
              onChange={handleFileChange}
              invalid={!!errors.image}
            />
            <div>
              {errors.image && <Alert color="danger">{errors.image}</Alert>}

            </div>
          </FormGroup>
          {formLoading ? <Spinner /> : <Button style={{ backgroundColor: '#26c6da' }} type="submit">Add Slider</Button>}
        </Form>
        <div style={{ marginTop: 20 }}>
          {successMessage && <Alert color="success">{successMessage}</Alert>}
        </div>
      </div>

      {/* Screen width dependent rendering */}
      <div className="d-none d-lg-block">
        <Table>
          <thead>
            <tr>
              <th>Image</th>
              <th>ID</th>
              <th>Link</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {sliders.map(slider => (
              <tr key={slider.id}>
                <td><img
                  src={`http://lab.app2serve.com/storage/app/public/${slider.image}`}
                  alt={slider.link} style={{ height: '60px' }} /></td>
                <td>{slider.id}</td>
                <td><a href={slider.link}>{slider.link}</a></td>
                <td>
                  <Button color={slider.status === 1 ? 'danger' : 'success'} onClick={() => handleDelete(slider.id)}>
                    {slider.status === 1 ? 'Remove' : 'Add'}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="d-lg-none">
        {sliders.map(slider => (
          <Card key={slider.id} className="mb-3">
            <CardImg top
              src={`http://lab.app2serve.com/storage/app/public/${slider.image}`}
              alt={slider.link} />
            <CardBody>
              <CardText>ID: {slider.id}</CardText>
              <CardText><a href={slider.link}>{slider.link}</a></CardText>
              <Button color={slider.status === 1 ? 'danger' : 'success'} onClick={() => handleDelete(slider.id)}>
                {slider.status === 1 ? 'Remove' : 'Add'}
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SliderList;
