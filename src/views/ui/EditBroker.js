import React, { useEffect, useState } from "react";
import { Form, FormGroup, Label, Input, Button, Spinner, Table, Modal, ModalHeader, ModalBody, ModalFooter, Col, Row } from "reactstrap";

import { useParams } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { useNavigate } from "react-router-dom";

const BrokerForm = () => {
  const { id } = useParams();  // Get the id from the URL
  const navigate = useNavigate();

    const [bId, setBId] = useState(null);
    const [brokerInfo, setBrokerInfo] = useState({});
    const [cashbackInfo, setCashbackInfo] = useState({});
    const [tradingCostInfo, setTradingCostInfo] = useState({});
    const [tradingCostId, setTradingCostId] = useState({});
    const [brokerAccountInfo, setBrokerAccountInfo] = useState({});
    const [brokerAccountId, setBrokerAccountId] = useState({});
    const [brokerType, setBrokerType] = useState({});


  const [images, setImages] = useState({ logo: '', image: '', video_image: '' });
  const [modalImage, setModalImage] = useState(false);
  const [currentImageType, setCurrentImageType] = useState('');
  const [newImage, setNewImage] = useState(null);

  const toggleModalImage = () => setModalImage(!modalImage);


  const [originalData, setOriginalData] = useState({});
  const [originalCashbackData, setOriginalCashbackData] = useState({});
  const [originalTradingCostData, setOriginalTradingCostData] = useState({});
  const [originalBrokerAccountData, setOriginalBrokerAccountData] = useState({});

  const [modifiedFields, setModifiedFields] = useState({});
  const [modifiedCashbackFields, setModifiedCashbackFields] = useState({});
  const [modifiedTradingCostFields, setModifiedTradingCostFields] = useState({});
  const [modifiedBrokerAccountFields, setModifiedBrokerAccountFields] = useState({});

  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submittingCashback, setSubmittingCashback] = useState(false);
  const [submittingTradingCost, setSubmittingTradingCost] = useState(false);
  const [submittingBrokerAccount, setSubmittingBrokerAccount] = useState(false);

  const [modal, setModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [loadingTypeDelete, setLoadingTypeDelete] = useState(false); // For managing loading state
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    brokerType: "",
    FX: "",
    Metals: "",
    Energies: "",
    Indicies: "",
    Stocks: "",
    brokerType_ar: "",
    FX_ar: "",
    Metals_ar: "",
    Energies_ar: "",
    Indicies_ar: "",
    Stocks_ar: ""
  });
  const [submittingType, setSubmittingType] = useState(false);
  const [loadingType, setLoadingType] = useState(false);

  const [token, setToken] = useState("your_bearer_token_here");

  // Fetch broker info, cashback info, trading cost info, and broker account info on component mount
  useEffect(() => {
    setBId(id)
    setToken(localStorage.getItem('token'))
    setLoading(true);
    fetch(`https://paid4x.com/broker/public/api/broker/${id}`, {
      headers: {
        "Accept-Language": 'en',
        "Authorization": `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const info = data.broker.info;
        const cashback = data.broker.broker_cashback_info;
        const tradingCost = data.broker.trading_cost;
        const tradingCostId = data.broker.trading_cost.trading_cost;
        const brokerAccount = data.broker.broker_account;
        const brokerAccountId = data.broker.broker_account.broker_account_id;
        const type = data.broker.broker_type;
        console.log('TYPE', type);

        setImages({
          logo: 'https://paid4x.com/broker/public/' + info.logo,
          image: 'https://paid4x.com/broker/public/' + info.image,
          video_image: 'https://paid4x.com/broker/public/' + info.video_image,
        });

        setBrokerInfo(info);
        setCashbackInfo(cashback);
        setTradingCostInfo(tradingCost);
        setTradingCostId(tradingCostId);
        setBrokerAccountInfo(brokerAccount);
        setBrokerAccountId(brokerAccountId);
        setBrokerType(type);

        setOriginalData(info); // Keep original for comparison
        setOriginalCashbackData(cashback); // Keep original for cashback comparison
        setOriginalTradingCostData(tradingCost); // Keep original for trading cost comparison
        setOriginalBrokerAccountData(brokerAccount); // Keep original for broker account comparison
      })
      .catch((error) => console.error("Error fetching broker data:", error))
      .finally(() => setLoading(false));
  }, [token]);

  // Handle changes for broker info
  const handleBrokerChange = (e) => {
    const { name, value } = e.target;
    setBrokerInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (value !== originalData[name]) {
      setModifiedFields((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else {
      const { [name]: _, ...remaining } = modifiedFields;
      setModifiedFields(remaining);
    }
  };

  // Handle changes for cashback info
  // const handleCashbackChange = (e) => {
  //   const { name, value } = e.target;
  //   setCashbackInfo((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));

  //   if (value !== originalCashbackData[name]) {
  //     setModifiedCashbackFields((prevState) => ({
  //       ...prevState,
  //       [name]: value,
  //     }));
  //   } else {
  //     const { [name]: _, ...remaining } = modifiedCashbackFields;
  //     setModifiedCashbackFields(remaining);
  //   }
  // };

  // Handle changes for trading cost info
  const handleTradingCostChange = (e) => {
    const { name, value } = e.target;
    setTradingCostInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (value !== originalTradingCostData[name]) {
      setModifiedTradingCostFields((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else {
      const { [name]: _, ...remaining } = modifiedTradingCostFields;
      setModifiedTradingCostFields(remaining);
    }
  };

  // Handle changes for broker account info
  const handleBrokerAccountChange = (e) => {
    const { name, value } = e.target;
    setBrokerAccountInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (value !== originalBrokerAccountData[name]) {
      setModifiedBrokerAccountFields((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else {
      const { [name]: _, ...remaining } = modifiedBrokerAccountFields;
      setModifiedBrokerAccountFields(remaining);
    }
  };

  // Submit broker info form
  const handleBrokerSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(modifiedFields).length === 0) {
      alert("No changes to submit.");
      return;
    }
    console.log('modifiedFields', modifiedFields);

    setSubmitting(true);
    fetch(`https://paid4x.com/broker/public/api/broker/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(modifiedFields),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Broker info updated successfully!");
        setModifiedFields({});
      })
      .catch((error) => console.error("Error updating broker info:", error))
      .finally(() => setSubmitting(false));
  };

  // Submit cashback info form
  // const handleCashbackSubmit = (e) => {
  //   e.preventDefault();
  //   if (Object.keys(modifiedCashbackFields).length === 0) {
  //     alert("No changes to submit.");
  //     return;
  //   }

  //   setSubmittingCashback(true);
  //   fetch(`https://paid4x.com/broker/public/api/broker-cashback-info/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: JSON.stringify(modifiedCashbackFields),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       alert("Cashback info updated successfully!");
  //       setModifiedCashbackFields({});
  //     })
  //     .catch((error) => console.error("Error updating cashback info:", error))
  //     .finally(() => setSubmittingCashback(false));
  // };

  // Submit trading cost info form
  const handleTradingCostSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(modifiedTradingCostFields).length === 0) {
      alert("No changes to submit.");
      return;
    }

    setSubmittingTradingCost(true);
    fetch(`https://paid4x.com/broker/public/api/broker-trading-cost/${tradingCostId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(modifiedTradingCostFields),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Trading cost info updated successfully!");
        setModifiedTradingCostFields({});
      })
      .catch((error) => console.error("Error updating trading cost info:", error))
      .finally(() => setSubmittingTradingCost(false));
  };

  // Submit broker account info form
  const handleBrokerAccountSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(modifiedBrokerAccountFields).length === 0) {
      alert("No changes to submit.");
      return;
    }

    setSubmittingBrokerAccount(true);
    fetch(`https://paid4x.com/broker/public/api/broker-account/${brokerAccountId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(modifiedBrokerAccountFields),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Broker account info updated successfully!");
        setModifiedBrokerAccountFields({});
      })
      .catch((error) => console.error("Error updating broker account info:", error))
      .finally(() => setSubmittingBrokerAccount(false));
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form inputs
  const isFormValid = () => {
    return (
      formData.brokerType &&
      formData.FX &&
      formData.Metals &&
      formData.Energies &&
      formData.Indicies &&
      formData.Stocks
    );
  };

  const req = {
    broker_id: id,
    type_name: formData.brokerType,
    forex: formData.FX,
    metals: formData.Metals,
    energies: formData.Energies,
    indicies: formData.Indicies,
    crypto: formData.Stocks,
    type_name_ar: formData.brokerType_ar,
    forex_ar: formData.FX_ar,
    metals_ar: formData.Metals_ar,
    energies_ar: formData.Energies_ar,
    indicies_ar: formData.Indicies_ar,
    crypto_ar: formData.Stocks_ar
  }
  // Submit the form to the API
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittingType(true);
    setLoadingType(true);

    fetch("https://paid4x.com/broker/public/api/broker-account-type", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,  // Include the Bearer token for authentication
      },
      body: JSON.stringify(req),  // Convert form data to JSON format
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Broker account type info submitted successfully!");
        setFormData({
          brokerType: "",
          FX: "",
          Metals: "",
          Energies: "",
          Indicies: "",
          Stocks: "",
          brokerType_ar: "",
          FX_ar: "",
          Metals_ar: "",
          Energies_ar: "",
          Indicies_ar: "",
          Stocks_ar: ""
        });
      })
      .catch((error) => {
        console.error("Error submitting broker account type info:", error);
        alert("Failed to submit broker account type info.");
      })
      .finally(() => {
        setSubmittingType(false)
        setLoadingType(false);
      }
      );
  };


  // Toggle modal
  const toggleModal = () => setModal(!modal);

  // Open delete confirmation modal
  const handleDeleteClick = (id) => {
    setDeleteId(id);
    toggleModal();
  };
  // Confirm deletion and call API
  const confirmDelete = async () => {
    setLoadingTypeDelete(true);
    setError(null);

    try {
      const response = await fetch(`https://paid4x.com/broker/public/api/broker-account-type/${deleteId}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,  // Include the Bearer token for authentication
        }
      });

      if (!response.ok) {
        throw new Error('Failed to delete item');
      }

      // Update the table data after successful deletion
      setBrokerType(brokerType?.filter(item => item.broker_account_type_id !== deleteId));

      // Close modal after successful deletion
      toggleModal();
    } catch (error) {
      console.error('Error deleting item:', error);
      setError('Error deleting item');
    } finally {
      setLoadingTypeDelete(false); // Stop the loading state
    }
  };





  const handleImageUpdate = async () => {
    if (!newImage || !currentImageType) return;

    // Create headers and form data
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);

    const formData = new FormData();
    formData.append(currentImageType, newImage);
    formData.append("broker_id", id);

    // Request options
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formData,
      redirect: 'follow',
    };

    try {
      const response = await fetch("https://paid4x.com/broker/public/api/update-broker-image", requestOptions);
      const result = await response.json();
      console.log(result);

      if (result.status == 1) {


        toggleModalImage();
        alert("Broker Image updated successfully!");
      } else {
        toggleModalImage();
        alert("Failed to update broker image.");
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Update image handler
  const handleImageUpdateOLD = () => {
    if (!newImage || !currentImageType) return;

    const formData = new FormData();
    formData.append(currentImageType, newImage);
    formData.append('broker_id', id);

    fetch(`https://paid4x.com/broker/public/api/update-broker-image/`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setImages((prevState) => ({
          ...prevState,
          [currentImageType]: data[currentImageType],
        }));
        toggleModalImage();
      })
      .catch((error) => console.error('Error updating image:', error));
  };

  // Open the modal for image editing
  const openImageEditor = (imageType) => {
    setCurrentImageType(imageType);
    setNewImage(null);
    toggleModalImage();
  };

  const handleArEditClick = () => () => {
    navigate(`/editBrokerAr/${id}`);
  }
  const isBrokerSubmitDisabled = Object.keys(modifiedFields).length === 0 || submitting;
  const isCashbackSubmitDisabled = Object.keys(modifiedCashbackFields).length === 0 || submittingCashback;
  const isTradingCostSubmitDisabled = Object.keys(modifiedTradingCostFields).length === 0 || submittingTradingCost;
  const isBrokerAccountSubmitDisabled = Object.keys(modifiedBrokerAccountFields).length === 0 || submittingBrokerAccount;

  return (
    <div>
      {loading ? (
        <Spinner color="primary" />
      ) : (
        <>

          <div onClick={handleArEditClick()} style={{ cursor: "pointer", padding: 20, backgroundColor: 'rgb(38, 198, 218)', borderRadius: 9, marginTop: 10, marginBottom: 40, alignItems: 'center', textAlign: 'center' }}>
            <h3>For Arabic Language Click here</h3>
          </div>

          <div className="text-center">
            <Row>
              <Col xs="4">
                <img style={{ height: 150, borderRadius: 15 }} src={images.image} alt="Image" className="img-fluid" />
              </Col>
              <Col xs="4">
                <img style={{ height: 150, borderRadius: 15 }} src={images.logo} alt="Image" className="img-fluid" />
              </Col>
              <Col xs="4">
                <img style={{ height: 150, borderRadius: 15 }} src={images.video_image} alt="Image" className="img-fluid" />
              </Col>
            </Row>

            <Modal isOpen={modalImage} toggle={toggleModalImage}>
              <ModalHeader toggle={toggleModalImage}>Edit {currentImageType.replace('_', ' ')}</ModalHeader>
              <ModalBody>
                <Form>
                  <FormGroup>
                    <Label for="imageFile">Select new image</Label>
                    <Input
                      type="file"
                      id="imageFile"
                      onChange={(e) => setNewImage(e.target.files[0])}
                    />
                  </FormGroup>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={handleImageUpdate}>Update</Button>
                <Button color="secondary" onClick={toggleModalImage}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </div>








          <Form onSubmit={handleSubmit}>

            <Row>
              <Col xs="4">
                <Button style={{ marginTop: 55 }} color="primary" onClick={() => openImageEditor('image')}>Edit Logo</Button>

              </Col>
              <Col xs="4">
                <Button style={{ marginTop: 55 }} color="primary" onClick={() => openImageEditor('logo')}>Edit Carousel Image</Button>
              </Col>
              <Col xs="4">
                <Button style={{ marginTop: 55 }} color="primary" onClick={() => openImageEditor('video_image')}>Edit Video Image</Button>
              </Col>
            </Row>

            <h3 style={{ marginTop: 55 }}>Add New Broker Account Type</h3>

            <FormGroup>
              <Label for="brokerType">Broker Type</Label>
              <Input
                type="text"
                name="brokerType"
                id="brokerType"
                value={formData.brokerType}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="FX">FX</Label>
              <Input
                type="text"
                name="FX"
                id="FX"
                value={formData.FX}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="Metals">Metals</Label>
              <Input
                type="text"
                name="Metals"
                id="Metals"
                value={formData.Metals}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="Energies">Energies</Label>
              <Input
                type="text"
                name="Energies"
                id="Energies"
                value={formData.Energies}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="Indicies">Indicies</Label>
              <Input
                type="text"
                name="Indicies"
                id="Indicies"
                value={formData.Indicies}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="Stocks">Crypto</Label>
              <Input
                type="text"
                name="Stocks"
                id="Stocks"
                value={formData.Stocks}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            
            <FormGroup>
              <Label for="brokerType_ar">Broker Type Arabic</Label>
              <Input
                type="text"
                name="brokerType_ar"
                id="brokerType_ar"
                value={formData.brokerType_ar}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="FX_ar">FX Arabic</Label>
              <Input
                type="text"
                name="FX_ar"
                id="FX_ar"
                value={formData.FX_ar}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="Metals_ar">Metals Arabic</Label>
              <Input
                type="text"
                name="Metals_ar"
                id="Metals_ar"
                value={formData.Metals_ar}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="Energies_ar">Energies Arabic</Label>
              <Input
                type="text"
                name="Energies_ar"
                id="Energies_ar"
                value={formData.Energies_ar}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="Indicies_ar">Indicies Arabic</Label>
              <Input
                type="text"
                name="Indicies_ar"
                id="Indicies_ar"
                value={formData.Indicies_ar}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="Stocks_ar">Crypto Arabic</Label>
              <Input
                type="text"
                name="Stocks_ar"
                id="Stocks_ar"
                value={formData.Stocks_ar}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <Button style={{ marginBottom: 60 }} color="primary" type="submit" disabled={submittingType}>
              {submittingType || loadingType ? <Spinner size="sm" /> : "Submit"}
            </Button>
          </Form>



          {brokerType?.length && <div>
            <h3>Edit Account types</h3>

            <Table bordered>
              <thead>
                <tr>
                  <th>Account Type</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {brokerType?.length && brokerType?.map((item) => (
                  <tr key={item.broker_account_type_id}>
                    <td>{item.type_name}</td>
                    <td>
                      <i
                        onClick={() => handleDeleteClick(item.broker_account_type_id)}
                        style={{ cursor: 'pointer', color: 'red', padding: '5px' }} // Change color and padding as needed
                      >
                        <DeleteIcon />
                      </i>

                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            {/* Error message */}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {/* Confirmation Modal */}
            <Modal isOpen={modal} toggle={toggleModal}>
              <ModalHeader toggle={toggleModal}>Confirm Delete</ModalHeader>
              <ModalBody>
                Are you sure you want to delete this item?
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onClick={confirmDelete} disabled={loadingTypeDelete}>
                  {loadingTypeDelete ? 'Deleting...' : 'Delete'}
                </Button>{' '}
                <Button color="secondary" onClick={toggleModal} disabled={loadingTypeDelete}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </div>}

          {/* Form for broker info */}
          <Form onSubmit={handleBrokerSubmit}>
            <h3>Edit Broker Info</h3>
            {Object.keys(brokerInfo).map((key) => (
              <FormGroup key={key}>
                <Label for={key}>{key == 'whatsapp_link' ? 'Video Link' : key}</Label>
                <Input
                  type="text"
                  name={key}
                  id={key}
                  value={brokerInfo[key] || ""}
                  onChange={handleBrokerChange}
                  disabled={['broker_id', 'date_added', 'logo', 'avg_rating', 'rating', 'video_image', 'image', 'status'].includes(key)}
                />
              </FormGroup>
            ))}
            <Button style={{ marginBottom: 60 }} color="primary" type="submit" disabled={isBrokerSubmitDisabled}>
              {submitting ? <Spinner size="sm" /> : "Update Broker Info"}
            </Button>
          </Form>

          {/* Form for broker cashback info */}
          {/* <Form onSubmit={handleCashbackSubmit}>
            <h3>Edit Broker Cashback Info</h3>
            {Object.keys(cashbackInfo).map((key) => (
              <FormGroup key={key}>
                <Label for={key}>{key}</Label>
                <Input
                  type="text"
                  name={key}
                  id={key}
                  value={cashbackInfo[key] || ""}
                  onChange={handleCashbackChange}
                />
              </FormGroup>
            ))}
            <Button style={{ marginBottom: 60 }} color="primary" type="submit" disabled={isCashbackSubmitDisabled}>
              {submittingCashback ? <Spinner size="sm" /> : "Update Cashback Info"}
            </Button>
          </Form> */}

          {/* Form for trading cost info */}
          <Form onSubmit={handleTradingCostSubmit}>
            <h3>Edit Broker Trading Cost Info</h3>
            {Object.keys(tradingCostInfo).map((key) => (
              <FormGroup key={key}>
                <Label for={key}>{key}</Label>
                <Input
                  type="text"
                  name={key}
                  id={key}
                  value={tradingCostInfo[key] || ""}
                  onChange={handleTradingCostChange}
                />
              </FormGroup>
            ))}
            <Button style={{ marginBottom: 60 }} color="primary" type="submit" disabled={isTradingCostSubmitDisabled}>
              {submittingTradingCost ? <Spinner size="sm" /> : "Update Trading Cost Info"}
            </Button>
          </Form>

          {/* Form for broker account info */}
          <Form onSubmit={handleBrokerAccountSubmit}>
            <h3>Edit Broker Account Info</h3>
            {Object.keys(brokerAccountInfo).map((key) => (
              <FormGroup key={key}>
                <Label for={key}>{key}</Label>
                <Input
                  type="text"
                  name={key}
                  id={key}
                  value={brokerAccountInfo[key] || ""}
                  disabled={['broker_account_id'].includes(key)}
                  onChange={handleBrokerAccountChange}
                />
              </FormGroup>
            ))}
            <Button style={{ marginBottom: 60 }} color="primary" type="submit" disabled={isBrokerAccountSubmitDisabled}>
              {submittingBrokerAccount ? <Spinner size="sm" /> : "Update Broker Account Info"}
            </Button>
          </Form>
        </>
      )}
    </div>
  );
};

export default BrokerForm
