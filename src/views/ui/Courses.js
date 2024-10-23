


import React, { useState, useEffect } from "react";
import { Col, Row, Form, FormGroup, Label, Input, Alert } from 'reactstrap';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';
import { Card, CardBody, CardTitle, Container, FormFeedback, Spinner } from "reactstrap";

import { callApiWithToken } from '../../api/api'



const initialRows = [
  {
    id: 'Loading',
    course_id: 'Loading',
    course_name: 'Loading',
    date_added: 'Loading',
    description: 'Loading',
    link: 'Loading',
  },
];

const initialFormDataWithData = {

};
const initialFormData = {
  course_name: '',
  description: '',
  link: '',
};

const BrokersList = () => {

  const [viewMode, setViewMode] = useState(true);
  const [rows, setRows] = useState(initialRows);
  const [rowModesModel, setRowModesModel] = useState({});
  const [loading, setLoading] = useState(false)

  //form
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState(initialFormData);
  const [file, setFile] = useState(null);
  const [itemId, setItemId] = useState(0);
  const [modeIs, setModeIs] = useState(0);
  const [imagePreview, setImagePreview] = useState("https://i0.wp.com/maidcleantx.com/wp-content/uploads/2017/10/logo.png?ssl=1"); // Path to your default image
  const imageUrl = 'https://paid4x.com/broker/public/'

  useEffect(() => {
    setModeIs(0)
    getCourses()
    setViewMode(true)
  }, [])

  const getCourses = async () => {
    var brokersWid = []
    setLoading(true)
    const response = await callApiWithToken('https://paid4x.com/broker/public/api/courses', {}, 'GET');
    brokersWid = await response.courses
    await brokersWid?.map((obj, index) => {
      obj.id = index + 1;
    });
    setLoading(false)

    setRows(brokersWid)
  }


  function EditToolbar(props) {
    const { setRows, setRowModesModel } = props;

    const handleClick = () => {
      const id = 2;
      setRows((oldRows) => [...oldRows, { id, name: '', email: '', isNew: true }]);
      setRowModesModel((oldModel) => ({
        ...oldModel,
        [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
      }));
    };

    return (
      <GridToolbarContainer>
        <Button style={{ backgroundColor: '#26c6da', color: '#ffffff' }} startIcon={<AddIcon />} onClick={() => addBroker()}>
          Add Course
        </Button>
      </GridToolbarContainer>
    );
  }

  const addBroker = () => {
    setImagePreview("https://i0.wp.com/maidcleantx.com/wp-content/uploads/2017/10/logo.png?ssl=1")
    setModeIs(1)
    setFormData(initialFormData);
    setViewMode(false)
  };
  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const getObjectById = (id) => {
    return rows.find(obj => obj.id === id);
  };

  const handleEditClick = (id) => () => {
    const item = getObjectById(id);

    setModeIs(2)

    setViewMode(false)
    const data = {
      course_name: item.course_name,
      description: item.description,
      link: item.link,
    };
    setFormData({ ...data });
    setItemId(item.course_id)
    var logo = imageUrl + item.image
    setImagePreview(logo)
  };

  const handleSaveClick = (id) => () => {

  };


  const handleDeleteClick = (id) => () => {

    const item = getObjectById(id);
    console.log('ooooooooooooooooooo', item);

    const isConfirmed = window.confirm("Are you sure you want to delete this item?");

    if (isConfirmed) {
      deleteItem(item.course_id)
      // Call your delete function here
      console.log("Item deleted");
    } else {
      console.log("Item not deleted");
    }
  };

  const deleteItem = (id) => {
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAA');

    // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjg2MDllNzQ0OTgxZjMwNzIyZTllNmRlMDQyMjY2MDJmNDM0NTk3ODBlNzUzM2FiNDc3MGFhMjhiZDFjZjRhMjU5NGNhYjI3MGJhM2UxNzUiLCJpYXQiOjE3MTc2MjA2NDQsIm5iZiI6MTcxNzYyMDY0NCwiZXhwIjoxNzQ5MTU2NjQ0LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.cRRWjwpsvG5cYb-5n_YpfrOHfoWzRTEoYndZffA08MrJxWnv4KZ1mezT6PaKxPdDNEnRQaeqPSdo4Wtf5xWrlgpZTnNQmd8-_xXjz_LJHIXdGtT5YosL6If__d1psx6nsW8ckyXx2mKWF2hiM6a1c65keOgtmiEwCsADxBYZv-VAE1eZz8eQHaYmc_dBFZnfevZqaDOcYjSdijRBGXYGCb65-wolO08is5cf6jq-r6m0pWKQ1Gwq8h5BRV4HBqxLVJK-2Mbk2hHF0EsxrUSIE9wTKxqBcH0SL4wOA8GWeiQUSlAncTkwvGQwFBdGVMou67XDz5UeiN0ek6JayemFZcpq-fkHP7l1fNpT_6SgQSRaIxca2rx9Q_nQYrjIczzuvPchbs9MbOdKdEpuolOWAbI4VBGS0FvMiXF596LCLuyAnnAC2YppkMF6AepxMBWtvCpYgL_Kr6KK4e-39_7tzhe1nMZsIRg-2jEYkHv8TB1vr4VaN4IikA6gEVlfml51VW6aiej2YkY4WtdJSeVAOhPgcPYX396v7awfW7liQz4TOIS0sxSaFTTlCrKvqxBz676uzmqxq0oUqTBm_4vlAirm1iluAXP9NwxYKHxIF8SNHaKtsBvMIzjaN79pBHmQdvRc_mJRf-Z9y5Wzn0-m6LmM2c60WA0Hu-vquTPZmbc'; // Your actual token
    const token = localStorage.getItem('token');

    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);

    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: "",
      redirect: "follow",
    };

    fetch(`https://paid4x.com/broker/public/api/courses-status/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) =>
        getCourses())
      .catch((error) => console.error(error));
  };

  const handleCancelClick = (id) => () => {

  };

  const processRowUpdate = (newRow) => {

  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };
  const columns = [
    {
      field: 'id',
      headerName: 'ROW Id',
      width: 100,
      editable: false,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'course_id',
      headerName: 'Course Id',
      width: 150,
      editable: false,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'course_name',
      headerName: 'Name',
      type: 'string',
      width: 200,
      align: 'center',
      headerAlign: 'center',
      editable: false,
    },
    {
      field: 'link',
      headerName: 'HTTP Link',
      type: 'string',
      width: 250,
      editable: false,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 200,
      editable: false,
      type: 'string',
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'date_added',
      headerName: 'Date added',
      width: 150,
      editable: false,
      type: 'string',
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 150,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];


  //form Function

  const callBack = () => {
    setModeIs(0)
    setViewMode(true)
  }


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const updateCourse = async (e, id) => {
    const token = localStorage.getItem('token');

    // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjg2MDllNzQ0OTgxZjMwNzIyZTllNmRlMDQyMjY2MDJmNDM0NTk3ODBlNzUzM2FiNDc3MGFhMjhiZDFjZjRhMjU5NGNhYjI3MGJhM2UxNzUiLCJpYXQiOjE3MTc2MjA2NDQsIm5iZiI6MTcxNzYyMDY0NCwiZXhwIjoxNzQ5MTU2NjQ0LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.cRRWjwpsvG5cYb-5n_YpfrOHfoWzRTEoYndZffA08MrJxWnv4KZ1mezT6PaKxPdDNEnRQaeqPSdo4Wtf5xWrlgpZTnNQmd8-_xXjz_LJHIXdGtT5YosL6If__d1psx6nsW8ckyXx2mKWF2hiM6a1c65keOgtmiEwCsADxBYZv-VAE1eZz8eQHaYmc_dBFZnfevZqaDOcYjSdijRBGXYGCb65-wolO08is5cf6jq-r6m0pWKQ1Gwq8h5BRV4HBqxLVJK-2Mbk2hHF0EsxrUSIE9wTKxqBcH0SL4wOA8GWeiQUSlAncTkwvGQwFBdGVMou67XDz5UeiN0ek6JayemFZcpq-fkHP7l1fNpT_6SgQSRaIxca2rx9Q_nQYrjIczzuvPchbs9MbOdKdEpuolOWAbI4VBGS0FvMiXF596LCLuyAnnAC2YppkMF6AepxMBWtvCpYgL_Kr6KK4e-39_7tzhe1nMZsIRg-2jEYkHv8TB1vr4VaN4IikA6gEVlfml51VW6aiej2YkY4WtdJSeVAOhPgcPYX396v7awfW7liQz4TOIS0sxSaFTTlCrKvqxBz676uzmqxq0oUqTBm_4vlAirm1iluAXP9NwxYKHxIF8SNHaKtsBvMIzjaN79pBHmQdvRc_mJRf-Z9y5Wzn0-m6LmM2c60WA0Hu-vquTPZmbc'; // Your actual token
    const fullHttpUrlPattern = /^(https?:\/\/)(?:[\w-]+\.)+[a-zA-Z]{2,6}(?:\/[\w\-.~:/?#[\]@!$&'()*+,;=]*)?$/i;

    console.log('file', file);
    e.preventDefault();
    setLoading(true)

    let errors = {};
    Object.keys(formData).forEach(key => {

      if (formData[key].trim() === '') {
        errors[key] = `${key.replace(/_/g, ' ')} is required`;
      }
      if (key.trim() === 'link') {

        if (!fullHttpUrlPattern.test(formData[key])) {
          errors[key] = `${key.replace(/_/g, ' ')} Please enter a valid URL`;
        }
      }
    });

    if (Object.keys(errors).length > 0) {

      setFormErrors(errors);
      return
    }

    const formdata = new FormData();
    Object.keys(formData).forEach(key => {
      formdata.append(key, formData[key]);
    });
    if (file) {
      formdata.append('image', file, file.name);
    }
    const courseData = {
      course_name: formData.course_name,
      link: formData.link,
      description: formData.description,
      image: formdata.image
    };


    console.log('courseData', courseData);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);

    const raw = JSON.stringify(courseData);

    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    try {
      const response = await fetch(`https://paid4x.com/broker/public/api/courses/${id}`, requestOptions);

      if (1 == 2) {
        throw new Error('Network response was not ok');
      }
      const result = await response.text();
      console.log('result', result);
      setFormData(initialFormData)
      setModeIs(0)
      getCourses()
      setLoading(false)
      setViewMode(true)
    } catch (error) {
      setLoading(false)

      throw error;
    }
  };

  const addItem = async (e) => {
    // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjg2MDllNzQ0OTgxZjMwNzIyZTllNmRlMDQyMjY2MDJmNDM0NTk3ODBlNzUzM2FiNDc3MGFhMjhiZDFjZjRhMjU5NGNhYjI3MGJhM2UxNzUiLCJpYXQiOjE3MTc2MjA2NDQsIm5iZiI6MTcxNzYyMDY0NCwiZXhwIjoxNzQ5MTU2NjQ0LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.cRRWjwpsvG5cYb-5n_YpfrOHfoWzRTEoYndZffA08MrJxWnv4KZ1mezT6PaKxPdDNEnRQaeqPSdo4Wtf5xWrlgpZTnNQmd8-_xXjz_LJHIXdGtT5YosL6If__d1psx6nsW8ckyXx2mKWF2hiM6a1c65keOgtmiEwCsADxBYZv-VAE1eZz8eQHaYmc_dBFZnfevZqaDOcYjSdijRBGXYGCb65-wolO08is5cf6jq-r6m0pWKQ1Gwq8h5BRV4HBqxLVJK-2Mbk2hHF0EsxrUSIE9wTKxqBcH0SL4wOA8GWeiQUSlAncTkwvGQwFBdGVMou67XDz5UeiN0ek6JayemFZcpq-fkHP7l1fNpT_6SgQSRaIxca2rx9Q_nQYrjIczzuvPchbs9MbOdKdEpuolOWAbI4VBGS0FvMiXF596LCLuyAnnAC2YppkMF6AepxMBWtvCpYgL_Kr6KK4e-39_7tzhe1nMZsIRg-2jEYkHv8TB1vr4VaN4IikA6gEVlfml51VW6aiej2YkY4WtdJSeVAOhPgcPYX396v7awfW7liQz4TOIS0sxSaFTTlCrKvqxBz676uzmqxq0oUqTBm_4vlAirm1iluAXP9NwxYKHxIF8SNHaKtsBvMIzjaN79pBHmQdvRc_mJRf-Z9y5Wzn0-m6LmM2c60WA0Hu-vquTPZmbc'; // Your actual token
    const token = localStorage.getItem('token');

    e.preventDefault();

    let errors = {};
    Object.keys(formData).forEach(key => {
      if (formData[key].trim() === '') {
        errors[key] = `${key.replace(/_/g, ' ')} is required`;
      }
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return
    }
    setLoading(true)
    const formdata = new FormData();
    Object.keys(formData).forEach(key => {
      formdata.append(key, formData[key]);
    });
    if (file) {
      formdata.append('image', file, file.name);
    }

    const myHeaders = new Headers();
    myHeaders.append("X-Custom-Token", "ef1a90ec8546e4d9cf7f057dd4d58c394626f277b0c18b9d3098cc80c9a0ecf0");
    myHeaders.append('Authorization', `Bearer ${token}`);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    try {
      const response = await fetch("https://paid4x.com/broker/public/api/courses", requestOptions);
      const result = await response.text();
      console.log(result);
      setLoading(false)

      setFormData(initialFormData)
      setModeIs(0)
      getCourses()
      setViewMode(true)
    } catch (error) {
      setLoading(false)

      console.error(error);
    }
  }
  const editItem = () => {

  }


  const handleSubmit = async (e) => {

    if (modeIs == 1) {
      console.log('item e', e);
      addItem(e)
    } else {
      updateCourse(e, itemId)
    }
  };


  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    if (e.target.files[0]) {
      setImagePreview(URL.createObjectURL(e.target.files[0])); // Create a preview URL for the selected image
    }
  };

  //form Function
  return (
    <React.Fragment>

      <div>
        <Row>
          <Col lg="12">
            <Card>

              {viewMode ? <CardBody>
                <CardTitle tag="h3">Courses Listing</CardTitle>

                {!loading ? <Box
                  sx={{
                    height: 500,
                    width: '100%',
                    '& .actions': {
                      color: 'text.secondary',
                    },
                    '& .textPrimary': {
                      color: 'text.primary',
                    },
                  }}
                >
                  <DataGrid
                    rows={rows}
                    columns={columns}
                    rowModesModel={rowModesModel}
                    onRowModesModelChange={handleRowModesModelChange}
                    onRowEditStop={handleRowEditStop}
                    processRowUpdate={processRowUpdate}
                    slots={{
                      toolbar: EditToolbar,
                    }}
                    slotProps={{
                      toolbar: { setRows, setRowModesModel },
                    }}
                  />
                </Box>
                  :
                  <div style={{ marginTop: 300 }} className="text-center">
                    <Spinner type="grow" color="primary" />
                    <p>Loading...</p>
                  </div>
                }

              </CardBody>
                :
                <CardBody>
                  <div>
                    <div className="dev-row" style={{ marginBottom: 10 }}>
                      <span><ArrowBackIcon onClick={() => callBack()} /></span>
                      <span style={{ marginInline: 10 }}>Back</span>
                    </div>
                    {modeIs == 1 ? <h1>Add Course</h1> : <h1>Edit {formData.name} Course</h1>}

                    <Container>
                      <Form onSubmit={handleSubmit}>

                        <Col md="12" className="text-center">
                          <FormGroup>
                            <div>
                              <img
                                src={imagePreview}
                                alt="Image Preview"
                                id="imagePreview"
                                style={{ border: '2px solid #26c6da', width: 150, maxWidth: 200, height: 'auto', maxHeight: '130', objectFit: 'cover', borderRadius: 9 }}
                              />
                            </div>
                          </FormGroup>
                        </Col>
                        <FormGroup>
                          <Label for="logo">Logo</Label>
                          <Input
                            type="file"
                            id="logo"
                            name="logo"
                            onChange={handleFileChange}
                          />
                        </FormGroup>
                        {Object.keys(formData)?.map((fieldName, index) => (
                          <FormGroup key={index}>
                            <Label for={fieldName}>{fieldName.replace(/_/g, ' ')}</Label>
                            <Input
                              type="text"
                              id={fieldName}
                              name={fieldName}
                              value={formData[fieldName]}
                              onChange={handleInputChange}
                              invalid={formErrors[fieldName] !== undefined}
                            />
                            {formErrors[fieldName] && <Alert color="danger">{formErrors[fieldName]}</Alert>}
                          </FormGroup>

                        ))}
                        {!loading ? <Button style={{ backgroundColor: '#26c6da', color: '#ffffff' }} type="submit">Submit</Button>
                          :

                          <div style={{ marginTop: 300 }} className="text-center">
                            <Spinner type="grow" color="primary" />
                            <p>Loading...</p>
                          </div>
                        }
                      </Form>
                    </Container>
                  </div>
                </CardBody>

              }
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>

  );
};

export default BrokersList;



