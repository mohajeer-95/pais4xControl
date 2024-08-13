
//Add broker
name
email
description
cashback
title
entity_name
broker_type
branch_offices
headquarters
bonus
islamic_accounts
trailing_stop
hedging
scalping
ea
segregated_accounts
number_of_instruments
categories_of_instruments
channels
hours
languages
pc_platforms
mobile_platforms
demo_period
MAM_PAMM
leverage_levels
margin_call_evel
stop_out_level
closing_method_stop_out
avg_spread_on_EURUSD_val_1
avg_spread_on_EURUSD_val_2
avg_spread_on_EURUSD_val_3
commissions_on_FX_val_1
commissions_on_FX_val_2
commissions_on_FX_val_3
FX_margin_bonus
FX_scalping_account
FX_floating_bonus
metals_margin_bonus
metals_floating_bonus
metals_scalping_account
energies_margin_bonus
energies_floating_bonus
energies_scalping_account
indicies_margin_bonus
indicies_scalping_account
indicies_floating_bonus
stocks_margin_bonus
stocks_floating_bonus
stocks_scalping_account
account_currency
minimum_deposit_val1
minimum_deposit_val2
minimum_deposit_val3
payment_methods
logo
youtube_link
currency





//update broker
name
email
description
logo
cashback
title
entity_name
broker_type
branch_offices
headquarters
bonus
islamic_accounts
trailing_stop
hedging
scalping
ea
segregated_accounts
number_of_instruments
categories_of_instruments
channels
hours
languages
pc_platforms
mobile_platforms
demo_period
MAM_PAMM
leverage_levels
margin_call_evel
stop_out_level
closing_method_stop_out
avg_spread_on_EURUSD_val_1
avg_spread_on_EURUSD_val_2
avg_spread_on_EURUSD_val_3
commissions_on_FX_val_1
commissions_on_FX_val_2
commissions_on_FX_val_3
FX_margin_bonus
FX_scalping_account
FX_floating_bonus
metals_margin_bonus
metals_floating_bonus
metals_scalping_account
energies_margin_bonus
energies_floating_bonus
energies_scalping_account
indicies_margin_bonus
indicies_scalping_account
indicies_floating_bonus
stocks_margin_bonus
stocks_floating_bonus
stocks_scalping_account
account_currency
minimum_deposit_val1
minimum_deposit_val2
minimum_deposit_val3
payment_methods




// import React, { useState } from 'react';
// import { Container, Form, FormGroup, Label, Input, Button, Row, Col, Card, CardImg, CardBody, CardText } from 'reactstrap';

// const UploadForm = () => {
//   const [image1, setImage1] = useState(null);
//   const [image2, setImage2] = useState(null);
//   const [text1, setText1] = useState('');
//   const [text2, setText2] = useState('');

//   // Handle file input changes and image preview
//   const handleImageChange = (event, setImage) => {
//     const file = event.target.files[0];
//     if (file) {
//       setImage(URL.createObjectURL(file));
//     }
//   };

//   // Handle text input changes
//   const handleText1Change = (event) => {
//     setText1(event.target.value);
//   };

//   const handleText2Change = (event) => {
//     setText2(event.target.value);
//   };

//   // Handle form submission
//   const handleSubmit = async (event) => {
//     const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjg2MDllNzQ0OTgxZjMwNzIyZTllNmRlMDQyMjY2MDJmNDM0NTk3ODBlNzUzM2FiNDc3MGFhMjhiZDFjZjRhMjU5NGNhYjI3MGJhM2UxNzUiLCJpYXQiOjE3MTc2MjA2NDQsIm5iZiI6MTcxNzYyMDY0NCwiZXhwIjoxNzQ5MTU2NjQ0LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.cRRWjwpsvG5cYb-5n_YpfrOHfoWzRTEoYndZffA08MrJxWnv4KZ1mezT6PaKxPdDNEnRQaeqPSdo4Wtf5xWrlgpZTnNQmd8-_xXjz_LJHIXdGtT5YosL6If__d1psx6nsW8ckyXx2mKWF2hiM6a1c65keOgtmiEwCsADxBYZv-VAE1eZz8eQHaYmc_dBFZnfevZqaDOcYjSdijRBGXYGCb65-wolO08is5cf6jq-r6m0pWKQ1Gwq8h5BRV4HBqxLVJK-2Mbk2hHF0EsxrUSIE9wTKxqBcH0SL4wOA8GWeiQUSlAncTkwvGQwFBdGVMou67XDz5UeiN0ek6JayemFZcpq-fkHP7l1fNpT_6SgQSRaIxca2rx9Q_nQYrjIczzuvPchbs9MbOdKdEpuolOWAbI4VBGS0FvMiXF596LCLuyAnnAC2YppkMF6AepxMBWtvCpYgL_Kr6KK4e-39_7tzhe1nMZsIRg-2jEYkHv8TB1vr4VaN4IikA6gEVlfml51VW6aiej2YkY4WtdJSeVAOhPgcPYX396v7awfW7liQz4TOIS0sxSaFTTlCrKvqxBz676uzmqxq0oUqTBm_4vlAirm1iluAXP9NwxYKHxIF8SNHaKtsBvMIzjaN79pBHmQdvRc_mJRf-Z9y5Wzn0-m6LmM2c60WA0Hu-vquTPZmbc'; // Your actual token

//     event.preventDefault();

//     // Create FormData object
//     const formData = new FormData();
//     formData.append('link', text1);
//     // formData.append('link2', text2);

//     if (image1) {
//       const image1File = await fetch(image1).then(res => res.blob());
//       formData.append('image', image1File, 'image1.jpg');
//     }
//     if (image2) {
//       const image2File = await fetch(image2).then(res => res.blob());
//       // formData.append('image2', image2File, 'image2.jpg');
//     }

//     // Headers for the request
//     const myHeaders = new Headers();
//     myHeaders.append('Authorization', `Bearer ${token}`);

//     try {
//       const response = await fetch('http://lab.app2serve.com/public/api/slider', {
//         method: 'POST',
//         headers: myHeaders,
//         body: formData
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const result = await response.json();
//       console.log(result);
//       // Optionally handle the result
//     } catch (error) {
//       console.error('There was a problem with the fetch operation:', error);
//     }
//   };

//   return (
//     <Container>
//       <h1>Upload Slider</h1>
//       <Form onSubmit={handleSubmit}>
//         <FormGroup>
//           <Label for="text1">Text for Image 1</Label>
//           <Input
//             type="text"
//             id="text1"
//             value={text1}
//             onChange={handleText1Change}
//             placeholder="Enter text for Image 1"
//           />
//         </FormGroup>

//         <FormGroup>
//           <Label for="image1">Image 1</Label>
//           <Input
//             type="file"
//             id="image1"
//             accept="image/*"
//             onChange={(e) => handleImageChange(e, setImage1)}
//           />
//         </FormGroup>

//         <FormGroup>
//           <Label for="text2">Text for Image 2</Label>
//           <Input
//             type="text"
//             id="text2"
//             value={text2}
//             onChange={handleText2Change}
//             placeholder="Enter text for Image 2"
//           />
//         </FormGroup>

//         <FormGroup>
//           <Label for="image2">Image 2</Label>
//           <Input
//             type="file"
//             id="image2"
//             accept="image/*"
//             onChange={(e) => handleImageChange(e, setImage2)}
//           />
//         </FormGroup>

//         <Button type="submit" color="primary">Upload</Button>
//       </Form>

//       <Row style={{ marginTop: 50 }}>
//         <Col sm="6">
//           {image1 && (
//             <Card>
//               <CardImg top width="100%" src={image1} alt="Selected Image 1" />
//               <CardBody>
//                 <CardText>{text1}</CardText>
//               </CardBody>
//             </Card>
//           )}
//         </Col>
//         <Col sm="6">
//           {image2 && (
//             <Card>
//               <CardImg top width="100%" src={image2} alt="Selected Image 2" />
//               <CardBody>
//                 <CardText>{text2}</CardText>
//               </CardBody>
//             </Card>
//           )}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default UploadForm;



import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";

const ImageUploadForm = () => {
  const [images, setImages] = useState([]);
  const [link, setLink] = useState("");

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setImages(files.slice(0, 10)); // Limit to 10 images
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("link", link);
    images.forEach((image, index) => {
      formData.append(`image${index + 1}`, image);
    });

    const myHeaders = new Headers();
    myHeaders.append(
      "X-Custom-Token",
      "ef1a90ec8546e4d9cf7f057dd4d58c394626f277b0c18b9d3098cc80c9a0ecf0"
    );
    myHeaders.append(
      "Authorization",
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYzdjNGNmZTM2OWRkNDE2NTNlZjdkYmE1ZDE2MTJiZTc3ZmZmZWZmMDY5MzA4YmM2Nzk2M2U1ZTBhNWI5MDMwYjA0NzZhYmNmMGUyM2E1ZDQiLCJpYXQiOjE3MTcxODc1MzcsIm5iZiI6MTcxNzE4NzUzNywiZXhwIjoxNzQ4NzIzNTM3LCJzdWIiOiI1Iiwic2NvcGVzIjpbXX0.cHOzHYEFH1oO93l6r8bVD5LcYVBmcP3bxt6PsVLyVb7eFhGeDog7uyH4sCrvWFRYIUVXItVnetu5frhHkfVQIzSpnvSeXO1osWkpjA3Ql7onlUxadZZOlFg68oE5F1GSOQvQbC8JGaqcl-DlqF9L6qlVvtaqI2hxA7mr0BtUz3kM5NV6yJgxF3vw9inM7O3Hom0Jl2HH2zPvwlxhrnQ3ysqqm9Slgr11VQvYpGwl-MTvCezHGl4UJmJFgHdBLwWGLNQKXzMoyoWNmof076afvuZO_E8Sqr_HnnR6aSpMFIbsXj2lyCoUoikQmjZS1uGsgE8VpaAUj6OMD_HFveSQQzsxoIs2HKeHkjfOZpQoD-LDxtuSCUzNB96EsjoBb9q1AnBUMI-gFFq_SjcuVTuwmlmzHeQZGxwIG7TzBbTm5pLbBLrXR3r0xRHBF3BTA97E--WjD5QDOp9Wc_oNXzIDNvdVbxxe_9jl7zDtO2WOLxHWNtwOTbl5zKinYlBbFQXYoivtLpUEjvuYnvDxEUHPjbkaN57l3tlLKzJP1p6KA87EMawdauM8ktXuyiAELYbqNvUJb1YQNhRu_sIvjdURRur-ntjq85hmKhnqUvQYsTWwu5Bno4g89enYZU7iWq1zjLmS_HcEGXuNDRuEoPBMPKT2Oz0tTGIibhLmHaXxKIM"
    );

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formData,
      redirect: "follow",
    };

    fetch("http://lab.app2serve.com/public/api/slider", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="link">Link</Label>
        <Input
          type="text"
          name="link"
          id="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="images">Upload Images (10 images required)</Label>
        <Input
          type="file"
          name="images"
          id="images"
          onChange={handleImageChange}
          multiple
          required
        />
      </FormGroup>
      <Row>
        {images.map((image, index) => (
          <Col key={index} xs="6" sm="4" md="2">
            <img
              src={URL.createObjectURL(image)}
              alt={`preview-${index}`}
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
          </Col>
        ))}
      </Row>
      <Button type="submit" color="primary" disabled={images.length !== 10}>
        Submit
      </Button>
    </Form>
  );
};

export default ImageUploadForm;


https://github.com/mohajeer-95/pais4xControl.git
https://github.com/mohajeer-95/pais4xControl.git' not found

// import React, { useEffect, useState } from 'react';
// import { Table, Button, Card, CardImg, CardBody, CardTitle, Spinner } from 'reactstrap';

// const SliderList = () => {
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const myHeaders = new Headers();
//       myHeaders.append("Authorization", "Bearer aaa");

//       const requestOptions = {
//         method: 'GET',
//         headers: myHeaders,
//         redirect: 'follow'
//       };

//       try {
//         const response = await fetch("http://lab.app2serve.com/public/api/slider", requestOptions);
//         const result = await response.json();
//         setData(result.sliders);
//       } catch (error) {
//         setError('Failed to fetch data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return (
//       <div className="text-center">
//         <Spinner type="grow" color="primary" />
//         <p>Loading...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <div className="d-none d-md-block">
//         {/* Table view for larger screens */}
//         <Table responsive>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Image</th>
//               <th>Link</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map(slider => (
//               <tr key={slider.id}>
//                 <td>{slider.id}</td>
//                 <td><img
//                   src={`http://lab.app2serve.com/storage/app/public/${slider.image}`}
//                   alt="slider" height="60" /></td>
//                 <td>{slider.link}</td>
//                 <td>
//                   <Button color={slider.status === 1 ? 'danger' : 'success'}>
//                     {slider.status === 1 ? 'Remove' : 'Add'}
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>

//       <div className="d-block d-md-none">
//         {/* Card view for smaller screens */}
//         {data.map(slider => (
//           <Card key={slider.id} className="mb-3">
//             <CardImg top width="100%"
//               src={`http://lab.app2serve.com/storage/app/public/${slider.image}`}
//               alt="slider" />
//             <CardBody>
//               <CardTitle>ID: {slider.id}</CardTitle>
//               <p>{slider.link}</p>
//               <Button color={slider.status === 1 ? 'danger' : 'success'}>
//                 {slider.status === 1 ? 'Remove' : 'Add'}
//               </Button>
//             </CardBody>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SliderList;


import React, { useState, useEffect } from 'react';
import { Table, Button, Spinner, Card, CardImg, CardBody, CardText } from 'reactstrap';

const SliderList = () => {
  const [sliders, setSliders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSliders();
  }, []);

  const fetchSliders = async () => {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjg2MDllNzQ0OTgxZjMwNzIyZTllNmRlMDQyMjY2MDJmNDM0NTk3ODBlNzUzM2FiNDc3MGFhMjhiZDFjZjRhMjU5NGNhYjI3MGJhM2UxNzUiLCJpYXQiOjE3MTc2MjA2NDQsIm5iZiI6MTcxNzYyMDY0NCwiZXhwIjoxNzQ5MTU2NjQ0LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.cRRWjwpsvG5cYb-5n_YpfrOHfoWzRTEoYndZffA08MrJxWnv4KZ1mezT6PaKxPdDNEnRQaeqPSdo4Wtf5xWrlgpZTnNQmd8-_xXjz_LJHIXdGtT5YosL6If__d1psx6nsW8ckyXx2mKWF2hiM6a1c65keOgtmiEwCsADxBYZv-VAE1eZz8eQHaYmc_dBFZnfevZqaDOcYjSdijRBGXYGCb65-wolO08is5cf6jq-r6m0pWKQ1Gwq8h5BRV4HBqxLVJK-2Mbk2hHF0EsxrUSIE9wTKxqBcH0SL4wOA8GWeiQUSlAncTkwvGQwFBdGVMou67XDz5UeiN0ek6JayemFZcpq-fkHP7l1fNpT_6SgQSRaIxca2rx9Q_nQYrjIczzuvPchbs9MbOdKdEpuolOWAbI4VBGS0FvMiXF596LCLuyAnnAC2YppkMF6AepxMBWtvCpYgL_Kr6KK4e-39_7tzhe1nMZsIRg-2jEYkHv8TB1vr4VaN4IikA6gEVlfml51VW6aiej2YkY4WtdJSeVAOhPgcPYX396v7awfW7liQz4TOIS0sxSaFTTlCrKvqxBz676uzmqxq0oUqTBm_4vlAirm1iluAXP9NwxYKHxIF8SNHaKtsBvMIzjaN79pBHmQdvRc_mJRf-Z9y5Wzn0-m6LmM2c60WA0Hu-vquTPZmbc'; // Your actual token

    const myHeaders = new Headers();
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
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjg2MDllNzQ0OTgxZjMwNzIyZTllNmRlMDQyMjY2MDJmNDM0NTk3ODBlNzUzM2FiNDc3MGFhMjhiZDFjZjRhMjU5NGNhYjI3MGJhM2UxNzUiLCJpYXQiOjE3MTc2MjA2NDQsIm5iZiI6MTcxNzYyMDY0NCwiZXhwIjoxNzQ5MTU2NjQ0LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.cRRWjwpsvG5cYb-5n_YpfrOHfoWzRTEoYndZffA08MrJxWnv4KZ1mezT6PaKxPdDNEnRQaeqPSdo4Wtf5xWrlgpZTnNQmd8-_xXjz_LJHIXdGtT5YosL6If__d1psx6nsW8ckyXx2mKWF2hiM6a1c65keOgtmiEwCsADxBYZv-VAE1eZz8eQHaYmc_dBFZnfevZqaDOcYjSdijRBGXYGCb65-wolO08is5cf6jq-r6m0pWKQ1Gwq8h5BRV4HBqxLVJK-2Mbk2hHF0EsxrUSIE9wTKxqBcH0SL4wOA8GWeiQUSlAncTkwvGQwFBdGVMou67XDz5UeiN0ek6JayemFZcpq-fkHP7l1fNpT_6SgQSRaIxca2rx9Q_nQYrjIczzuvPchbs9MbOdKdEpuolOWAbI4VBGS0FvMiXF596LCLuyAnnAC2YppkMF6AepxMBWtvCpYgL_Kr6KK4e-39_7tzhe1nMZsIRg-2jEYkHv8TB1vr4VaN4IikA6gEVlfml51VW6aiej2YkY4WtdJSeVAOhPgcPYX396v7awfW7liQz4TOIS0sxSaFTTlCrKvqxBz676uzmqxq0oUqTBm_4vlAirm1iluAXP9NwxYKHxIF8SNHaKtsBvMIzjaN79pBHmQdvRc_mJRf-Z9y5Wzn0-m6LmM2c60WA0Hu-vquTPZmbc'; // Your actual token

    const myHeaders = new Headers();
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

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      {/* Screen width dependent rendering */}
      <div className="d-none d-lg-block">
        {/* Render as a Table for large screens */}
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
                <td><img src={slider.image} alt={slider.link} style={{ width: '50px' }} /></td>
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
        {/* Render as Cards for small screens */}
        {sliders.map(slider => (
          <Card key={slider.id} className="mb-3">
            <CardImg top src={slider.image} alt={slider.link} />
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
