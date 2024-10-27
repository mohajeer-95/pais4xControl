


import React, { useState, useEffect } from "react";
import { Col, Row, Form, FormGroup, Label, Input, Alert, Container, Card, CardBody, CardTitle, Spinner } from 'reactstrap';
// import { Card, CardBody, CardTitle, Container, FormFeedback, Spinner } from "reactstrap";
import { useNavigate } from "react-router-dom";

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
import { callApiWithToken } from '../../api/api';


const initialFormAccountType = {
  account_type: '',
  account_type_minimum_trading_size: '',
  account_type_maximum_trading_size: '',
  broker_id: 0,
}
const initialEditForm = {

}





const initialFormData = {
  name: "",
  email: "",
  description: "",
  cashback: "",
  account_currency: "",
  currency: "",
  title: "",
  entity_name: "",
  broker_type: "",
  branch_offices: "",
  headquarters: "",
  bonus: "",
  islamic_accounts: "",
  trailing_stop: "",
  hedging: "",
  scalping: "",
  ea: "",
  segregated_accounts: "",
  number_of_instruments: "",
  categories_of_instruments: "",
  channels: "",
  hours: "",
  languages: "",
  pc_platforms: "",
  mobile_platforms: "",
  demo_period: "",
  MAM_PAMM: "",
  leverage_levels: "",
  margin_call_evel: "",
  stop_out_level: "",
  closing_method_stop_out: "",
  avg_spread_on_EURUSD_val_1: "",
  avg_spread_on_EURUSD_val_2: "",
  avg_spread_on_EURUSD_val_3: "",
  commissions_on_FX_val_1: "",
  commissions_on_FX_val_2: "",
  commissions_on_FX_val_3: "",
  FX_margin_bonus: "",
  FX_scalping_account: "",
  FX_floating_bonus: "",
  metals_margin_bonus: "",
  metals_floating_bonus: "",
  metals_scalping_account: "",
  energies_margin_bonus: "",
  energies_floating_bonus: "",
  energies_scalping_account: "",
  indicies_margin_bonus: "",
  indicies_scalping_account: "",
  indicies_floating_bonus: "",
  stocks_margin_bonus: "",
  stocks_floating_bonus: "",
  stocks_scalping_account: "",
  minimum_deposit_val1: "",
  minimum_deposit_val2: "",
  minimum_deposit_val3: "",
  payment_methods: "",
  youtube_link: "",
  whatsapp_link: "",
  twitter_link: "",
  instagram_link: "",
  facebook_link: "",
  linkedin_link: "",
};

const currencyOptions = [
  { value: 'dollar', label: 'Dollar' },
  { value: 'jd', label: 'JD' },
  { value: 'p', label: 'P' },
];

const BrokersList = () => {
  const navigate = useNavigate();

  const [viewMode, setViewMode] = useState(true);
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [editForm, setEditForm] = useState({});
  const [file, setFile] = useState(null);
  const [filePoster, setFilePoster] = useState(null);
  const [logoFile, setLogoFile] = useState(null);
  const [modeIs, setModeIs] = useState(0);
  const [imagePreview, setImagePreview] = useState("https://i0.wp.com/maidcleantx.com/wp-content/uploads/2017/10/logo.png?ssl=1"); // Path to your default image
  const [logoPreview, setLogoPreview] = useState("https://i0.wp.com/maidcleantx.com/wp-content/uploads/2017/10/logo.png?ssl=1"); // Path to your default image
  const [posterImage, setPosterImage] = useState("https://i0.wp.com/maidcleantx.com/wp-content/uploads/2017/10/logo.png?ssl=1"); // Path to your default image
  const [errorsAccountType, setErrorsAccountType] = useState({});
  const [loadingAccountType, setLoadingAccountType] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loadingAddEdit, setLoadingAddEdit] = useState(false);


  const [addError, setAddError] = useState('')
  const [responseCash, setresponseCash] = useState([])
  const [loading, setLoading] = useState(false)
  const [textSearch, setTextSearch] = useState('')

  //form
  const imageUrl = 'https://paid4x.com/broker/public/'



  const [accountType, setAccountType] = useState(initialFormAccountType);

  useEffect(() => {
    setModeIs(0);
    getBrokers();
  }, []);

  const getBrokers = async () => {
    const response = await callApiWithToken('https://paid4x.com/broker/public/api/brokers', {}, 'GET');
    const brokersWid = response?.brokers?.map((obj, index) => ({ ...obj, id: index + 1 }));
    setRows(brokersWid);
  };

  const handleInputChange = (e) => {

    const { name, value } = e.target;
    console.log('name is:', name);
    console.log('value is:', value);

    setEditForm(prevState => ({ ...prevState, [name]: value }));
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleCurrencyChange = (e) => {
    const { value } = e.target;
    setFormData(prevState => ({ ...prevState, currency: value }));
  };

  const handleSubmit = async (e) => {
    if (modeIs == 1) {
      setAddError('')
      addItem(e)
    } else {
      editItem(e)
    }
  };


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
          Add Broker
        </Button>
      </GridToolbarContainer>
    );
  }

  const addBroker = () => {
    setModeIs(1)

    setPosterImage('https://i0.wp.com/maidcleantx.com/wp-content/uploads/2017/10/logo.png?ssl=1')
    setImagePreview('https://i0.wp.com/maidcleantx.com/wp-content/uploads/2017/10/logo.png?ssl=1')
    setLogoPreview('https://i0.wp.com/maidcleantx.com/wp-content/uploads/2017/10/logo.png?ssl=1')
    // setFormData(initialFormData);
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
    navigate(`/editBroker/${item.broker_id}`);
    // setModeIs(2)
    // setAccountType({
    //   account_type: '',
    //   account_type_minimum_trading_size: '',
    //   account_type_maximum_trading_size: '',
    //   broker_id: item.broker_id
    // });
    // setViewMode(false)
    // setFormData({ ...item });
    // var logo = imageUrl + item.logo
    // var image = imageUrl + item.image
    // if (logo != 'https://paid4x.com/broker/public/') {
    //   setImagePreview(logo)
    // } else {
    //   setImagePreview('https://i0.wp.com/maidcleantx.com/wp-content/uploads/2017/10/logo.png?ssl=1')
    // }

    // if (image != 'https://paid4x.com/broker/public/') {
    //   setLogoPreview(image)
    // } else {
    //   setLogoPreview('https://i0.wp.com/maidcleantx.com/wp-content/uploads/2017/10/logo.png?ssl=1')
    // }
  };

  const handleSaveClick = (id) => () => {

  };


  const handleCancelClick = (id) => () => {
    // setRowModesModel({
    //   ...rowModesModel,
    //   [id]: { mode: GridRowModes.View, ignoreModifications: true },
    // });

    // const editedRow = rows.find((row) => row.id === id);
    // if (editedRow.isNew) {
    //   setRows(rows.filter((row) => row.id !== id));
    // }
  };

  const processRowUpdate = (newRow) => {
    // const updatedRow = { ...newRow, isNew: false };
    // setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    // return updatedRow;
  };



  const handleDeleteClick = (id) => () => {

    const item = getObjectById(id);
    console.log('ooooooooooooooooooo', item);
    console.log('ITEM IS================>>>', item);

    const isConfirmed = window.confirm("Are you sure you want to delete this item?");

    if (isConfirmed) {
      deleteItem(item.broker_id)
      deleteFromCarousel(item.broker_id)

      // Call your delete function here
      // console.log("Item deleted");
    } else {
      console.log("Item not deleted");
    }
  };

  const deleteItem = (id) => {
    console.log('SSSSSSSSSSSSS', id);

    // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjg2MDllNzQ0OTgxZjMwNzIyZTllNmRlMDQyMjY2MDJmNDM0NTk3ODBlNzUzM2FiNDc3MGFhMjhiZDFjZjRhMjU5NGNhYjI3MGJhM2UxNzUiLCJpYXQiOjE3MTc2MjA2NDQsIm5iZiI6MTcxNzYyMDY0NCwiZXhwIjoxNzQ5MTU2NjQ0LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.cRRWjwpsvG5cYb-5n_YpfrOHfoWzRTEoYndZffA08MrJxWnv4KZ1mezT6PaKxPdDNEnRQaeqPSdo4Wtf5xWrlgpZTnNQmd8-_xXjz_LJHIXdGtT5YosL6If__d1psx6nsW8ckyXx2mKWF2hiM6a1c65keOgtmiEwCsADxBYZv-VAE1eZz8eQHaYmc_dBFZnfevZqaDOcYjSdijRBGXYGCb65-wolO08is5cf6jq-r6m0pWKQ1Gwq8h5BRV4HBqxLVJK-2Mbk2hHF0EsxrUSIE9wTKxqBcH0SL4wOA8GWeiQUSlAncTkwvGQwFBdGVMou67XDz5UeiN0ek6JayemFZcpq-fkHP7l1fNpT_6SgQSRaIxca2rx9Q_nQYrjIczzuvPchbs9MbOdKdEpuolOWAbI4VBGS0FvMiXF596LCLuyAnnAC2YppkMF6AepxMBWtvCpYgL_Kr6KK4e-39_7tzhe1nMZsIRg-2jEYkHv8TB1vr4VaN4IikA6gEVlfml51VW6aiej2YkY4WtdJSeVAOhPgcPYX396v7awfW7liQz4TOIS0sxSaFTTlCrKvqxBz676uzmqxq0oUqTBm_4vlAirm1iluAXP9NwxYKHxIF8SNHaKtsBvMIzjaN79pBHmQdvRc_mJRf-Z9y5Wzn0-m6LmM2c60WA0Hu-vquTPZmbc'; // Your actual token
    const token = localStorage.getItem('token');

    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: "",
      redirect: "follow",
    };

    fetch(`https://paid4x.com/broker/public/api/broker/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => getBrokers())
      .catch((error) => console.error(error));
  };

  const deleteFromCarousel = async (id) => {

    const token = localStorage.getItem('token');

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`); // Replace with your actual token

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: "", // Body is empty for DELETE requests, so this can be omitted or set to null if preferred
      redirect: "follow"
    };

    try {
      const response = await fetch(`https://paid4x.com/broker/public/api/broker-carousel/${id}`, requestOptions);
      // if (!response.ok) {
      //   throw new Error('Network response was not ok');
      // }
      const result = await response.text();
      console.log('result', result);
      getBrokers()
    } catch (error) {
      throw error;
    }

  }


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
      field: 'broker_id',
      headerName: 'Broker Id',
      width: 150,
      editable: false,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'name',
      headerName: 'Name',
      type: 'string',
      width: 200,
      align: 'center',
      headerAlign: 'center',
      editable: false,
    },
    {
      field: 'email',
      headerName: 'Broker Email',
      type: 'string',
      width: 250,
      editable: false,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'avg_rating',
      headerName: 'Rate',
      width: 200,
      editable: false,
      type: 'string',
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'cashback',
      headerName: 'Cashback',
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



  const addItem = async (e) => {
    setLoadingAddEdit(1)

    console.log('IN ADD BROKER ITEM');
    setAddError('')

    //  const token ="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiZDhkMDJmNDFkNTIxNmFmMGFjYjI3NWVhMjI1ZTdhZjFlNTcwYjUwYWJhNWRhNzcwOWQ2Mzg3ZGJiOGM0Y2IyOWFlZjA3NjkyZGY2MGRkZjYiLCJpYXQiOjE3Mjg2NTAyOTQuMzUxOTY1OTA0MjM1ODM5ODQzNzUsIm5iZiI6MTcyODY1MDI5NC4zNTE5NjcwOTYzMjg3MzUzNTE1NjI1LCJleHAiOjE3NjAxODYyOTQuMzUwMTk3MDc2Nzk3NDg1MzUxNTYyNSwic3ViIjoiMiIsInNjb3BlcyI6W119.gCwmDBnzgu3PYfoeptYI1eeWMHxBlI4WOGIZ_EU4o_SXDEQ6EMymCIEcy554wcVuzdENL0LULTfUoW3GT98vtdP2cN1UYdAfEjNFUOj6bP2myqQxBl_ynfclV8n6ic-WVGcX2Puz_egXkcRDAPCwoH0PGZa3ybIf6XmldGQ8vclSGYnDNu58fGNQ5v3YH4O6kYABS1fqM6eWkx1g3snI7tlTYImFhg8JABa-90pzTJX0wX9Yy7-mPGfTw5-7iQVI-twuIIBnwPNCGCxjWsIKbzQ6-ig8A6ebQ225dR9EZ-XleXovdfwXfOQ5zj5dXLL15UOaWGxu_Ka1xq5txz4WykyYvid_GbslcV31EMPoXNdqMfLlGUeA2y105mlrAYbexdEZcMJvqktqHzYWfZz9diBY1TxrSwTDKBJC4JZeIKj2X_UhP4vt-KwiVrn7ZJAPMcT_NboSpXBigfTuwtfBRavTmNgWv2ntLIRMg9TTkwFV4bY9u2nml1VCJWJexWl4UKxob7Uvs9Q8YrAKSQiKPZI7f3WiIgJK6-hemqnIZafN3AyQORGNRG9AU2j05rH_6APXsOpxNV6lIQdzjEjoTuf-mU2dNIo64qXLClawrLLukm9kv5O-efqmz4A7vChg3L55FMRPwdl2GL3RdRQlYrJyzo2eq7fZHPrzCzJ69z8"
    const token = localStorage.getItem('token');

    e.preventDefault();

    let errors = {};
    Object.keys(formData).forEach(key => {
      if (formData[key] === '') {
        errors[key] = `${key.replace(/_/g, ' ')} is required`;
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
      formdata.append('logo', file, file.name);
    }


    if (logoFile) {
      formdata.append('image', logoFile, logoFile.name);
    }

    if (filePoster) {
      formdata.append('video_image', filePoster, filePoster.name);
    }

    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    try {
      const response = await fetch("https://paid4x.com/broker/public/api/brokers", requestOptions);
      const result = await response.json();
      console.log('response', response);
      console.log(result);

      if (result?.status == 1) {
        setLoadingAddEdit(2)
        getBrokers();

        setTimeout(() => {
          setViewMode(true)
          setLoadingAddEdit(0)

        }, 3000);

      } else {

        const firstKey = Object.keys(result)[0];
        const firstMessage = result[firstKey][0];
        setAddError(firstMessage)
        setLoadingAddEdit(0)

      }
    } catch (error) {
      setLoadingAddEdit(0)

      console.error(error);
      setAddError(error)
    }
  }



  const editItem = async (e) => {
    console.log('editForm is F====================== >', editForm);

    setLoadingAddEdit(1);
    e.preventDefault();
    // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjg2MDllNzQ0OTgxZjMwNzIyZTllNmRlMDQyMjY2MDJmNDM0NTk3ODBlNzUzM2FiNDc3MGFhMjhiZDFjZjRhMjU5NGNhYjI3MGJhM2UxNzUiLCJpYXQiOjE3MTc2MjA2NDQsIm5iZiI6MTcxNzYyMDY0NCwiZXhwIjoxNzQ5MTU2NjQ0LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.cRRWjwpsvG5cYb-5n_YpfrOHfoWzRTEoYndZffA08MrJxWnv4KZ1mezT6PaKxPdDNEnRQaeqPSdo4Wtf5xWrlgpZTnNQmd8-_xXjz_LJHIXdGtT5YosL6If__d1psx6nsW8ckyXx2mKWF2hiM6a1c65keOgtmiEwCsADxBYZv-VAE1eZz8eQHaYmc_dBFZnfevZqaDOcYjSdijRBGXYGCb65-wolO08is5cf6jq-r6m0pWKQ1Gwq8h5BRV4HBqxLVJK-2Mbk2hHF0EsxrUSIE9wTKxqBcH0SL4wOA8GWeiQUSlAncTkwvGQwFBdGVMou67XDz5UeiN0ek6JayemFZcpq-fkHP7l1fNpT_6SgQSRaIxca2rx9Q_nQYrjIczzuvPchbs9MbOdKdEpuolOWAbI4VBGS0FvMiXF596LCLuyAnnAC2YppkMF6AepxMBWtvCpYgL_Kr6KK4e-39_7tzhe1nMZsIRg-2jEYkHv8TB1vr4VaN4IikA6gEVlfml51VW6aiej2YkY4WtdJSeVAOhPgcPYX396v7awfW7liQz4TOIS0sxSaFTTlCrKvqxBz676uzmqxq0oUqTBm_4vlAirm1iluAXP9NwxYKHxIF8SNHaKtsBvMIzjaN79pBHmQdvRc_mJRf-Z9y5Wzn0-m6LmM2c60WA0Hu-vquTPZmbc'; // Your actual token
    const token = localStorage.getItem('token');

    const id = formData.broker_id;
    console.log('FORM ID IS ', id);
    console.log('FORM DATA IS ', formData);

    let errors = {};
    Object.keys(formData).forEach(key => {
      if (formData[key] === '') {
        errors[key] = `${key.replace(/_/g, ' ')} is required`;
      }
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);

    console.log('editForm', editForm);

    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: JSON.stringify(editForm),
      redirect: "follow"
    };

    try {
      const response = await fetch(`https://paid4x.com/broker/public/api/broker/${id}`, requestOptions);
      const result = await response.json();
      console.log(result);
      if (result.status) {
        setViewMode(true)
        setAddError('')
      } else {
        setAddError('There is an error, please try again later.')
      }

    } catch (error) {
      setAddError('There is an error, Or email has already been taken, please try again later.')
      console.error("Error:", error);
    }

  }


  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    if (e.target.files[0]) {
      setImagePreview(URL.createObjectURL(e.target.files[0])); // Create a preview URL for the selected image
    }
  };

  const handleLogoChange = (e) => {
    setLogoFile(e.target.files[0]);
    if (e.target.files[0]) {
      setLogoPreview(URL.createObjectURL(e.target.files[0])); // Create a preview URL for the selected image
    }
  };


  const handlePosterChange = (e) => {
    setFilePoster(e.target.files[0]);
    if (e.target.files[0]) {
      setPosterImage(URL.createObjectURL(e.target.files[0])); // Create a preview URL for the selected image
    }
  };
  //form Function




  // form account type 


  // Handle form field changes
  const handleChangeType = (e) => {
    const { name, value } = e.target;
    setAccountType({
      ...accountType,
      [name]: value
    });
  };

  // Validate the form inputs
  const validateForm = () => {
    console.log('FFFFFFFFFFFFF', accountType);
    const errors = {};
    Object.keys(accountType).forEach(key => {
      if (!accountType[key]) {
        errors[key] = 'This field is required';
      }
    });
    return errors;
  };


  const handleSubmitAccountType = async (e) => {
    // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjg2MDllNzQ0OTgxZjMwNzIyZTllNmRlMDQyMjY2MDJmNDM0NTk3ODBlNzUzM2FiNDc3MGFhMjhiZDFjZjRhMjU5NGNhYjI3MGJhM2UxNzUiLCJpYXQiOjE3MTc2MjA2NDQsIm5iZiI6MTcxNzYyMDY0NCwiZXhwIjoxNzQ5MTU2NjQ0LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.cRRWjwpsvG5cYb-5n_YpfrOHfoWzRTEoYndZffA08MrJxWnv4KZ1mezT6PaKxPdDNEnRQaeqPSdo4Wtf5xWrlgpZTnNQmd8-_xXjz_LJHIXdGtT5YosL6If__d1psx6nsW8ckyXx2mKWF2hiM6a1c65keOgtmiEwCsADxBYZv-VAE1eZz8eQHaYmc_dBFZnfevZqaDOcYjSdijRBGXYGCb65-wolO08is5cf6jq-r6m0pWKQ1Gwq8h5BRV4HBqxLVJK-2Mbk2hHF0EsxrUSIE9wTKxqBcH0SL4wOA8GWeiQUSlAncTkwvGQwFBdGVMou67XDz5UeiN0ek6JayemFZcpq-fkHP7l1fNpT_6SgQSRaIxca2rx9Q_nQYrjIczzuvPchbs9MbOdKdEpuolOWAbI4VBGS0FvMiXF596LCLuyAnnAC2YppkMF6AepxMBWtvCpYgL_Kr6KK4e-39_7tzhe1nMZsIRg-2jEYkHv8TB1vr4VaN4IikA6gEVlfml51VW6aiej2YkY4WtdJSeVAOhPgcPYX396v7awfW7liQz4TOIS0sxSaFTTlCrKvqxBz676uzmqxq0oUqTBm_4vlAirm1iluAXP9NwxYKHxIF8SNHaKtsBvMIzjaN79pBHmQdvRc_mJRf-Z9y5Wzn0-m6LmM2c60WA0Hu-vquTPZmbc'; // Your actual token
    const token = localStorage.getItem('token');

    setSuccess(false);

    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrorsAccountType(formErrors);
      return;
    }

    setLoadingAccountType(true);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);


    const raw = JSON.stringify(accountType);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    console.log('requestOptions', requestOptions);
    try {
      const response = await fetch('https://paid4x.com/broker/public/api/broker-account-type', requestOptions);
      if (response.ok) {
        const result = await response.text();
        console.log(result);
        setSuccess(true);

        setTimeout(() => {
          setAccountType({
            ...accountType,
            account_type: '',
            account_type_minimum_trading_size: '',
            account_type_maximum_trading_size: '',
          });

          setSuccess(false);

        }, 2000);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoadingAccountType(false);
    }
  };



  return (
    <React.Fragment>
      <div>
        <Row>
          <Col lg="12">
            <Card>
              {viewMode ? (
                <CardBody>
                  <CardTitle tag="h3">Broker Listing</CardTitle>
                  <Box
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
                      slots={{ toolbar: EditToolbar }}
                      slotProps={{ toolbar: { setRows, setRowModesModel } }}
                    />
                  </Box>
                </CardBody>
              ) : (
                <CardBody>
                  <div>
                    <div className="dev-row" style={{ marginBottom: 10 }}>
                      <span><ArrowBackIcon onClick={() => callBack()} /></span>
                      <span style={{ marginInline: 10 }}>Back</span>
                    </div>
                    {modeIs === 1 ? <h1>Add Broker</h1> : <h1>Edit {formData.name} Broker</h1>}
                    {!loading ? <Container>
                      <Form onSubmit={handleSubmit}>

                        <Row style={{ marginTop: 50, marginBottom: 40 }}>

                          <Col md="4" className="text-center">
                            <FormGroup>
                              <div>
                                <img
                                  src={logoPreview}
                                  alt="Image Preview"
                                  id="logoPreview"
                                  style={{ border: '2px solid #26c6da', width: 150, maxWidth: 200, height: 'auto', maxHeight: '130', objectFit: 'cover', borderRadius: 9 }}
                                />
                              </div>
                            </FormGroup>
                            <Label for="logoImg">Logo</Label>
                          </Col>
                          <Col md="4" className="text-center">
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
                            <Label for="logo">Logo for carousel</Label>
                          </Col>
                          <Col md="4" className="text-center">
                            <FormGroup>
                              <div>
                                <img
                                  src={posterImage}
                                  alt="Image Preview"
                                  id="posterImage"
                                  style={{ border: '2px solid #26c6da', width: 150, maxWidth: 200, height: 'auto', maxHeight: '130', objectFit: 'cover', borderRadius: 9 }}
                                />
                              </div>
                            </FormGroup>
                            <Label for="logo">Poster for video</Label>
                          </Col>


                        </Row>
                        <FormGroup>
                          <Label for="logoImg">Logo</Label>
                          <Input type="file" id="logoImg" name="logoImg" onChange={handleLogoChange} />
                        </FormGroup>

                        <FormGroup>
                          <Label for="logo">Logo for carousel</Label>
                          <Input type="file" id="logo" name="logo" onChange={handleFileChange} />
                        </FormGroup>

                        <FormGroup>
                          <Label for="logoImg">Poster fro video</Label>
                          <Input type="file" id="poster" name="poster" onChange={handlePosterChange} />
                        </FormGroup>


                        {Object.keys(formData)?.map((fieldName, index) => (
                          <FormGroup key={index}>
                            <Label for={fieldName}>{fieldName.replace(/_/g, ' ')}</Label>
                            {fieldName === 'currency' ? (
                              <Input
                                type="select"
                                id={fieldName}
                                name={fieldName}
                                value={formData[fieldName]}
                                onChange={handleCurrencyChange}
                              >
                                <option value="">Select Currency</option>
                                {currencyOptions?.map(option => (
                                  <option key={option.value} value={option.value}>
                                    {option.label}
                                  </option>
                                ))}
                              </Input>
                            ) : (
                              <Input
                                type={fieldName === 'description' ? "textarea" : "text"}
                                id={fieldName}
                                name={fieldName}
                                value={formData[fieldName]}
                                onChange={handleInputChange}
                                invalid={formErrors[fieldName] !== undefined}
                                disabled={(fieldName == 'broker_id') || (fieldName == 'logo') || (fieldName == 'image') || (fieldName == 'avg_rating') || (fieldName == 'id') ? true : false}

                              />
                            )}
                            {formErrors[fieldName] && <Alert color="danger">{formErrors[fieldName]}</Alert>}
                          </FormGroup>
                        ))}
                        {modeIs != 2 && <Button style={{ backgroundColor: '#26c6da', color: '#ffffff' }} type="submit">Submit</Button>}
                        {addError && <div className="alert alert-danger mt-3" role="alert">{addError}</div>}
                        {loadingAddEdit == 2 ? <Alert style={{ marginTop: 15, marginBottom: 40 }} color="success">{modeIs === 2 ? 'Edit successfuly' : 'Add successfuly'}</Alert> : loadingAddEdit == 1 ?
                          <div style={{ marginTop: 50 }} className="text-center">
                            <Spinner type="grow" color="primary" />
                            <p>Loading...</p>
                          </div> : null}

                      </Form>
                    </Container> :
                      <div style={{ marginTop: 90 }} className="text-center">
                        <Spinner type="grow" style={{ width: '5rem', height: '5rem', backgroundColor: '#26c6da' }} />
                        <p style={{ marginTop: 20, fontWeight: 'bold' }}>Loading...</p>
                      </div>}

                  </div>
                  {modeIs === 2 && !loading &&
                    <div style={{ marginTop: 30 }}>
                      <div className="dev-row" style={{ marginBottom: 10 }}></div>
                      <h1>Add Account Type</h1>
                      <Container>
                        <Form onSubmit={handleSubmitAccountType}>
                          <FormGroup>
                            <Label for="account_type">Account Type</Label>
                            <Input
                              type="text"
                              name="account_type"
                              id="account_type"
                              value={accountType.account_type}
                              onChange={handleChangeType}
                              invalid={!!errorsAccountType.account_type}
                            />
                            {errorsAccountType.account_type && <Alert color="danger">{errorsAccountType.account_type}</Alert>}
                          </FormGroup>

                          <FormGroup>
                            <Label for="account_type_minimum_trading_size">Minimum Trading Size</Label>
                            <Input
                              type="text"
                              name="account_type_minimum_trading_size"
                              id="account_type_minimum_trading_size"
                              value={accountType.account_type_minimum_trading_size}
                              onChange={handleChangeType}
                              invalid={!!errorsAccountType.account_type_minimum_trading_size}
                            />
                            {errorsAccountType.account_type_minimum_trading_size && <Alert color="danger">{errorsAccountType.account_type_minimum_trading_size}</Alert>}

                          </FormGroup>

                          <FormGroup>
                            <Label for="account_type_maximum_trading_size">Maximum Trading Size</Label>
                            <Input
                              type="text"
                              name="account_type_maximum_trading_size"
                              id="account_type_maximum_trading_size"
                              value={accountType.account_type_maximum_trading_size}
                              onChange={handleChangeType}
                              invalid={!!errorsAccountType.account_type_maximum_trading_size}
                            />
                            {errorsAccountType.account_type_maximum_trading_size && <Alert color="danger">{errorsAccountType.account_type_maximum_trading_size}</Alert>}
                          </FormGroup>
                          {success && <Alert style={{ marginTop: 15, marginBottom: 40 }} color="success">Add successfuly</Alert>}

                          <Button style={{ backgroundColor: '#26c6da', color: '#ffffff' }} type="submit">Save</Button>
                          <Button style={{ backgroundColor: '#e57373', color: '#ffffff', marginLeft: 10 }} onClick={() => setModeIs(0)}>Cancel</Button>
                        </Form>

                      </Container>
                    </div>
                  }
                </CardBody>
              )}
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default BrokersList;
