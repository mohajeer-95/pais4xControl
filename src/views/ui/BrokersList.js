


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

// const initialFormData = {
//   name: "",
//   nameAr: "",
//   email: "",
//   emailAr: "",
//   description: "",
//   descriptionAr: "",
//   cashback: "",
//   cashbackAr: "",
//   account_currency: "",
//   account_currencyAr: "",
//   currency: "",
//   currencyAr: "",
//   title: "",
//   titleAr: "",
//   entity_name: "",
//   entity_nameAr: "",
//   broker_type: "",
//   broker_typeAr: "",
//   branch_offices: "",
//   branch_officesAr: "",
//   headquarters: "",
//   headquartersAr: "",
//   bonus: "",
//   bonusAr: "",
//   islamic_accounts: "",
//   islamic_accountsAr: "",
//   trailing_stop: "",
//   trailing_stopAr: "",
//   hedging: "",
//   hedgingAr: "",
//   scalping: "",
//   scalpingAr: "",
//   ea: "",
//   eaAr: "",
//   segregated_accounts: "",
//   segregated_accountsAr: "",
//   number_of_instruments: "",
//   number_of_instrumentsAr: "",
//   categories_of_instruments: "",
//   categories_of_instrumentsAr: "",
//   channels: "",
//   channelsAr: "",
//   hours: "",
//   hoursAr: "",
//   languages: "",
//   languagesAr: "",
//   pc_platforms: "",
//   pc_platformsAr: "",
//   mobile_platforms: "",
//   mobile_platformsAr: "",
//   demo_period: "",
//   demo_periodAr: "",
//   MAM_PAMM: "",
//   MAM_PAMMAr: "",
//   leverage_levels: "",
//   leverage_levelsAr: "",
//   margin_call_evel: "",
//   margin_call_evelAr: "",
//   stop_out_level: "",
//   stop_out_levelAr: "",
//   closing_method_stop_out: "",
//   closing_method_stop_outAr: "",
//   avg_spread_on_EURUSD_val_1: "",
//   avg_spread_on_EURUSD_val_1Ar: "",
//   avg_spread_on_EURUSD_val_2: "",
//   avg_spread_on_EURUSD_val_2Ar: "",
//   avg_spread_on_EURUSD_val_3: "",
//   avg_spread_on_EURUSD_val_3Ar: "",
//   commissions_on_FX_val_1: "",
//   commissions_on_FX_val_1Ar: "",
//   commissions_on_FX_val_2: "",
//   commissions_on_FX_val_2Ar: "",
//   commissions_on_FX_val_3: "",
//   commissions_on_FX_val_3Ar: "",
//   FX_margin_bonus: "",
//   FX_margin_bonusAr: "",
//   FX_scalping_account: "",
//   FX_scalping_accountAr: "",
//   FX_floating_bonus: "",
//   FX_floating_bonusAr: "",
//   metals_margin_bonus: "",
//   metals_margin_bonusAr: "",
//   metals_floating_bonus: "",
//   metals_floating_bonusAr: "",
//   metals_scalping_account: "",
//   metals_scalping_accountAr: "",
//   energies_margin_bonus: "",
//   energies_margin_bonusAr: "",
//   energies_floating_bonus: "",
//   energies_floating_bonusAr: "",
//   energies_scalping_account: "",
//   energies_scalping_accountAr: "",
//   indicies_margin_bonus: "",
//   indicies_margin_bonusAr: "",
//   indicies_scalping_account: "",
//   indicies_scalping_accountAr: "",
//   indicies_floating_bonus: "",
//   indicies_floating_bonusAr: "",
//   stocks_margin_bonus: "",
//   stocks_margin_bonusAr: "",
//   stocks_floating_bonus: "",
//   stocks_floating_bonusAr: "",
//   stocks_scalping_account: "",
//   stocks_scalping_accountAr: "",
//   minimum_deposit_val1: "",
//   minimum_deposit_val1Ar: "",
//   minimum_deposit_val2: "",
//   minimum_deposit_val2Ar: "",
//   minimum_deposit_val3: "",
//   minimum_deposit_val3Ar: "",
//   payment_methods: "",
//   payment_methodsAr: "",
//   youtube_link: "",
//   whatsapp_link: "",
//   twitter_link: "",
//   instagram_link: "",
//   facebook_link: "",
//   linkedin_link: "",
// };


const initialFormData = {
  name: "XYZ Brokerage",
  name_ar: "شركة XYZ للوساطة",
  email: "contact@xyzbrokerage.com",
  email_ar: "contact@xyzbrokerage.com",
  description: "XYZ Brokerage is a leading provider of online trading services.",
  description_ar: "شركة XYZ للوساطة هي مزود رائد لخدمات التداول عبر الإنترنت.",
  cashback: "Up to $100 cashback for each trade",
  cashback_ar: "استرداد نقدي يصل إلى 100 دولار لكل عملية تداول",
  account_currency: "USD, EUR, GBP",
  account_currency_ar: "الدولار الأمريكي، اليورو، الجنيه الإسترليني",
  currency: "USD",
  currency_ar: "الدولار الأمريكي",
  title: "Best Forex Broker",
  title_ar: "أفضل وسيط فوركس",
  entity_name: "XYZ Financial Services Ltd.",
  entity_name_ar: "خدمات XYZ المالية المحدودة",
  broker_type: "Market Maker",
  broker_type_ar: "صانع السوق",
  branch_offices: "London, New York, Dubai",
  branch_offices_ar: "لندن، نيويورك، دبي",
  headquarters: "London, UK",
  headquarters_ar: "لندن، المملكة المتحدة",
  bonus: "20% deposit bonus",
  bonus_ar: "20% مكافأة على الإيداع",
  islamic_accounts: "Yes",
  islamic_accounts_ar: "نعم",
  trailing_stop: "Available",
  trailing_stop_ar: "متاح",
  hedging: "Allowed",
  hedging_ar: "مسموح",
  scalping: "Allowed",
  scalping_ar: "مسموح",
  ea: "Supported",
  ea_ar: "مدعوم",
  segregated_accounts: "Yes",
  segregated_accounts_ar: "نعم",
  number_of_instruments: "200+",
  number_of_instruments_ar: "أكثر من 200",
  categories_of_instruments: "Forex, Commodities, Stocks, Indices",
  categories_of_instruments_ar: "الفوركس، السلع، الأسهم، المؤشرات",
  channels: "Email, Live Chat, Phone",
  channels_ar: "البريد الإلكتروني، الدردشة المباشرة، الهاتف",
  hours: "24/5",
  hours_ar: "24/5",
  languages: "English, Arabic, Spanish",
  languages_ar: "الإنجليزية، العربية، الإسبانية",
  pc_platforms: "MetaTrader 4, MetaTrader 5",
  pc_platforms_ar: "ميتاتريدر 4، ميتاتريدر 5",
  mobile_platforms: "iOS, Android",
  mobile_platforms_ar: "آي أو إس، أندرويد",
  demo_period: "30 days",
  demo_period_ar: "30 يومًا",
  MAM_PAMM: "Available",
  MAM_PAMM_ar: "متاح",
  leverage_levels: "1:500",
  leverage_levels_ar: "1:500",
  margin_call_evel: "50%",
  margin_call_evel_ar: "50%",
  stop_out_level: "20%",
  stop_out_level_ar: "20%",
  closing_method_stop_out: "Positions closed starting from highest margin",
  closing_method_stop_out_ar: "إغلاق المراكز بدءًا من أعلى هامش",
  avg_spread_on_EURUSD_val_1: "0.8 pips",
  avg_spread_on_EURUSD_val_1_ar: "0.8 نقطة",
  avg_spread_on_EURUSD_val_2: "1.2 pips",
  avg_spread_on_EURUSD_val_2_ar: "1.2 نقطة",
  avg_spread_on_EURUSD_val_3: "1.5 pips",
  avg_spread_on_EURUSD_val_3_ar: "1.5 نقطة",
  commissions_on_FX_val_1: "$3 per lot",
  commissions_on_FX_val_1_ar: "3 دولارات لكل لوت",
  commissions_on_FX_val_2: "$4 per lot",
  commissions_on_FX_val_2_ar: "4 دولارات لكل لوت",
  commissions_on_FX_val_3: "$5 per lot",
  commissions_on_FX_val_3_ar: "5 دولارات لكل لوت",
  FX_margin_bonus: "Yes",
  FX_margin_bonus_ar: "نعم",
  FX_scalping_account: "Yes",
  FX_scalping_account_ar: "نعم",
  FX_floating_bonus: "No",
  FX_floating_bonus_ar: "لا",
  metals_margin_bonus: "Yes",
  metals_margin_bonus_ar: "نعم",
  metals_floating_bonus: "No",
  metals_floating_bonus_ar: "لا",
  metals_scalping_account: "Yes",
  metals_scalping_account_ar: "نعم",
  energies_margin_bonus: "No",
  energies_margin_bonus_ar: "لا",
  energies_floating_bonus: "No",
  energies_floating_bonus_ar: "لا",
  energies_scalping_account: "Yes",
  energies_scalping_account_ar: "نعم",
  indicies_margin_bonus: "Yes",
  indicies_margin_bonus_ar: "نعم",
  indicies_scalping_account: "Yes",
  indicies_scalping_account_ar: "نعم",
  indicies_floating_bonus: "No",
  indicies_floating_bonus_ar: "لا",
  stocks_margin_bonus: "No",
  stocks_margin_bonus_ar: "لا",
  stocks_floating_bonus: "No",
  stocks_floating_bonus_ar: "لا",
  stocks_scalping_account: "Yes",
  stocks_scalping_account_ar: "نعم",
  minimum_deposit_val1: "$100",
  minimum_deposit_val1_ar: "100 دولار",
  minimum_deposit_val2: "$500",
  minimum_deposit_val2_ar: "500 دولار",
  minimum_deposit_val3: "$1000",
  minimum_deposit_val3_ar: "1000 دولار",
  payment_methods: "Credit Card, Bank Transfer, PayPal",
  payment_methods_ar: "بطاقة الائتمان، التحويل البنكي، باي بال",
  youtube_link: "https://youtube.com/xyzbrokerage",
  whatsapp_link: "https://wa.me/123456789",
  twitter_link: "https://twitter.com/xyzbrokerage",
  instagram_link: "https://instagram.com/xyzbrokerage",
  facebook_link: "https://facebook.com/xyzbrokerage",
  linkedin_link: "https://linkedin.com/company/xyzbrokerage",
  site_link: "https://xyzbrokerage.com",
  live_chat_link: "https://xyzbrokerage.com/live-chat",
  email_link: "mailto",
  telegram_link: "https://t.me/xyzbrokerage",

};


const currencyOptions = [
  { value: 'dollar', label: 'Dollar' },
  { value: 'jd', label: 'JD' },
  { value: 'p', label: 'P' },
];

const currencyArOptions = [
  { value: 'دولار', label: 'دولار' },
  { value: 'دينار', label: 'دينار' },
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

  
  const handleCurrencyArChange = (e) => {
    const { value } = e.target;
    setFormData(prevState => ({ ...prevState, currency_ar: value }));
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


                        <Row>
                          {Object.keys(formData)?.map((fieldName, index) => (
                            <Col key={index} md={index < 62 ? "6" : "6"} className={index < 62 ? "text-left" : "text-right"}>
                              <FormGroup>
                                <Label for={fieldName}>
                                  {fieldName.endsWith("Ar") ? (
                                    <>
                                      {fieldName.replace(/_/g, ' ').replace("Ar", "")}
                                      <span style={{ color: "rgb(38, 198, 218)" }}> (Arabic)</span>
                                    </>
                                  ) : (
                                    fieldName.replace(/_/g, ' ')
                                  )}
                                </Label>
                                {fieldName === 'currency' || fieldName === 'currency_ar' ? (
                                  <Input
                                    type="select"
                                    id={fieldName}
                                    name={fieldName}
                                    value={formData[fieldName]}
                                    onChange={fieldName === 'currency' ? handleCurrencyChange : handleCurrencyArChange}
                                  >
                                    <option value="">Select Currency</option>
                                    {fieldName === 'currency' && currencyOptions?.map(option => (
                                      <option key={option.value} value={option.value}>
                                        {option.label}
                                      </option>
                                    ))}
                                    {fieldName === 'currency_ar' && currencyArOptions?.map(option => (
                                      <option key={option.value} value={option.value}>
                                        {option.label}
                                      </option>
                                    ))}
                                  </Input>
                                ) : (
                                  <Input
                                    type={fieldName === 'description' || fieldName === 'description_ar' ? "textarea" : "text"}
                                    id={fieldName}
                                    name={fieldName}
                                    value={formData[fieldName]}
                                    onChange={handleInputChange}
                                    invalid={formErrors[fieldName] !== undefined}
                                    disabled={['broker_id', 'logo', 'image', 'avg_rating', 'id'].includes(fieldName)}
                                  />
                                )}
                                {formErrors[fieldName] && <Alert color="danger">{formErrors[fieldName]}</Alert>}
                              </FormGroup>
                            </Col>
                          ))}
                        </Row>




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
