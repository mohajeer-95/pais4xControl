import React, { useState, useEffect } from "react";
import { Col, Row } from "reactstrap";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';
import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import { callApiWithToken } from '../../api/api'


const initialRows = [
  {
    id: 'Loading',
    broker_id: 'Loading',
    name: 'Loading',
    email: 'Loading',
    dateAdded: 'Loading',
    cashback: 'Loading',
  },
];

const Carousel = () => {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const [brokersList, setBrokersList] = useState([])
  const [responseCash, setresponseCash] = useState([])
  const [loading, setLoading] = useState(false)
  const [textSearch, setTextSearch] = useState('')
  const [carouselData, setCarousel] = useState('')


  useEffect(() => {
    getBrokers()
    // getCarousel()
  }, [])

  const getBrokers = async () => {
    var brokersWid = []
    setLoading(true)
    const response = await callApiWithToken('https://lab.app2serve.com/public/api/brokers', {}, 'GET');
    brokersWid = await response.brokers

    await brokersWid.map((obj, index) => {
      obj.id = index + 1;
    });

    await setRows(await brokersWid)
    getCarousel(brokersWid)
    setLoading(false)
  }



  const getCarousel = async (brokersWid) => {
    var carouselIds = []
    setLoading(true)
    const response = await callApiWithToken('http://lab.app2serve.com/public/api/broker-carousel', {}, 'GET');

    await response.broker_carousel.map((obj, index) => {
      carouselIds.push(obj.broker_id)
    });
    var data = updateBrokersStatus(brokersWid, carouselIds)

    console.log('carouselIds', carouselIds);
    console.log('data', data);
    await setRows(await data)
    setLoading(false)
  }


  const updateBrokersStatus = (brokersWid, ids) => {
    // Create a Set from IDS for O(1) lookup time
    const idsSet = new Set(ids);
    var newList = []
    var carouselList = []
    // Update color if id is found in idsSet
    newList = brokersWid.map(broker => ({
      ...broker,
      statusInCarousel: idsSet.has(broker.broker_id) ? 1 : 0
    }

    ));
    newList.map((item) => {
      if (item.statusInCarousel == 1) {
        carouselList.push(item.id)
      }
    })
    setCarousel(carouselList)

    return newList
  };

  function EditToolbar(props) {
    // const { setRows, setRowModesModel } = props;

    // const handleClick = () => {
    //   const id = 2;
    //   setRows((oldRows) => [...oldRows, { id, name: '', email: '', isNew: true }]);
    //   setRowModesModel((oldModel) => ({
    //     ...oldModel,
    //     [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    //   }));
    // };

    // return (
    //   <GridToolbarContainer>
    //     <Button color="primary" startIcon={<AddIcon />} onClick={() => console.log('brokersList ISSSSS', brokersList)}>
    //       Add Broker
    //     </Button>
    //   </GridToolbarContainer>
    // );
  }

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const addToCarousel = async (id) => {
    const url = 'http://lab.app2serve.com/public/api/broker-carousel';
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjg2MDllNzQ0OTgxZjMwNzIyZTllNmRlMDQyMjY2MDJmNDM0NTk3ODBlNzUzM2FiNDc3MGFhMjhiZDFjZjRhMjU5NGNhYjI3MGJhM2UxNzUiLCJpYXQiOjE3MTc2MjA2NDQsIm5iZiI6MTcxNzYyMDY0NCwiZXhwIjoxNzQ5MTU2NjQ0LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.cRRWjwpsvG5cYb-5n_YpfrOHfoWzRTEoYndZffA08MrJxWnv4KZ1mezT6PaKxPdDNEnRQaeqPSdo4Wtf5xWrlgpZTnNQmd8-_xXjz_LJHIXdGtT5YosL6If__d1psx6nsW8ckyXx2mKWF2hiM6a1c65keOgtmiEwCsADxBYZv-VAE1eZz8eQHaYmc_dBFZnfevZqaDOcYjSdijRBGXYGCb65-wolO08is5cf6jq-r6m0pWKQ1Gwq8h5BRV4HBqxLVJK-2Mbk2hHF0EsxrUSIE9wTKxqBcH0SL4wOA8GWeiQUSlAncTkwvGQwFBdGVMou67XDz5UeiN0ek6JayemFZcpq-fkHP7l1fNpT_6SgQSRaIxca2rx9Q_nQYrjIczzuvPchbs9MbOdKdEpuolOWAbI4VBGS0FvMiXF596LCLuyAnnAC2YppkMF6AepxMBWtvCpYgL_Kr6KK4e-39_7tzhe1nMZsIRg-2jEYkHv8TB1vr4VaN4IikA6gEVlfml51VW6aiej2YkY4WtdJSeVAOhPgcPYX396v7awfW7liQz4TOIS0sxSaFTTlCrKvqxBz676uzmqxq0oUqTBm_4vlAirm1iluAXP9NwxYKHxIF8SNHaKtsBvMIzjaN79pBHmQdvRc_mJRf-Z9y5Wzn0-m6LmM2c60WA0Hu-vquTPZmbc'; // Your actual token

    const raw = JSON.stringify({ broker_id: id });

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: raw,
        redirect: 'follow'
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      getBrokers()
      const result = await response.text();
      console.log(result);
      // Handle the response data here
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  const deleteItem = async (id) => {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjg2MDllNzQ0OTgxZjMwNzIyZTllNmRlMDQyMjY2MDJmNDM0NTk3ODBlNzUzM2FiNDc3MGFhMjhiZDFjZjRhMjU5NGNhYjI3MGJhM2UxNzUiLCJpYXQiOjE3MTc2MjA2NDQsIm5iZiI6MTcxNzYyMDY0NCwiZXhwIjoxNzQ5MTU2NjQ0LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.cRRWjwpsvG5cYb-5n_YpfrOHfoWzRTEoYndZffA08MrJxWnv4KZ1mezT6PaKxPdDNEnRQaeqPSdo4Wtf5xWrlgpZTnNQmd8-_xXjz_LJHIXdGtT5YosL6If__d1psx6nsW8ckyXx2mKWF2hiM6a1c65keOgtmiEwCsADxBYZv-VAE1eZz8eQHaYmc_dBFZnfevZqaDOcYjSdijRBGXYGCb65-wolO08is5cf6jq-r6m0pWKQ1Gwq8h5BRV4HBqxLVJK-2Mbk2hHF0EsxrUSIE9wTKxqBcH0SL4wOA8GWeiQUSlAncTkwvGQwFBdGVMou67XDz5UeiN0ek6JayemFZcpq-fkHP7l1fNpT_6SgQSRaIxca2rx9Q_nQYrjIczzuvPchbs9MbOdKdEpuolOWAbI4VBGS0FvMiXF596LCLuyAnnAC2YppkMF6AepxMBWtvCpYgL_Kr6KK4e-39_7tzhe1nMZsIRg-2jEYkHv8TB1vr4VaN4IikA6gEVlfml51VW6aiej2YkY4WtdJSeVAOhPgcPYX396v7awfW7liQz4TOIS0sxSaFTTlCrKvqxBz676uzmqxq0oUqTBm_4vlAirm1iluAXP9NwxYKHxIF8SNHaKtsBvMIzjaN79pBHmQdvRc_mJRf-Z9y5Wzn0-m6LmM2c60WA0Hu-vquTPZmbc'; // Your actual token

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`); // Replace with your actual token

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: "", // Body is empty for DELETE requests, so this can be omitted or set to null if preferred
      redirect: "follow"
    };

    try {
      const response = await fetch(`http://lab.app2serve.com/public/api/broker-carousel/${id}`, requestOptions);
      // if (!response.ok) {
      //   throw new Error('Network response was not ok');
      // }
      const result = await response.text();
      console.log('result', result);
      getBrokers()
    } catch (error) {
      throw error;
    }
  };


  const handleDeleteClick = (id) => () => {

    const item = getObjectById(id);

    const isConfirmed = window.confirm("Are you sure you want to delete this item?");

    if (isConfirmed) {
      deleteItem(item.broker_id)
      // Call your delete function here
      console.log("Item deleted");
    } else {
      console.log("Item not deleted");
    }
  };


  const getObjectById = (id) => {
    return rows.find(obj => obj.id === id);
  };

  const handleEditClick = (id) => () => {
    const item = getObjectById(id);

    if (item.broker_id) {
      addToCarousel(item.broker_id)
    }
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
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
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
      width: 250,
      align: 'center',
      headerAlign: 'center',
      editable: false,
    },
    {
      field: 'currency',
      headerName: 'Currency',
      type: 'string',
      width: 100,
      align: 'center',
      headerAlign: 'center',
      editable: false,
    },
    {
      field: 'avg_rating',
      headerName: 'rate',
      type: 'string',
      width: 150,
      editable: false,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'cashback',
      headerName: 'Cashback',
      width: 222,
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

        const isInEditMode = carouselData.includes(id);
        if (!isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<AddCircleOutlineIcon />}
              label="Edit"
              className="textPrimary"
              onClick={handleEditClick(id)}
              color="inherit"
            />
          ];
        } else {
          return [
            <GridActionsCellItem
              icon={<DeleteIcon />}
              label="Delete"
              onClick={handleDeleteClick(id)}
              color="inherit"
            />,
          ];
        }


      },
    },
  ];
  return (
    <React.Fragment>

      <div>
        <Row>
          <Col lg="12">
            <Card>
              <CardBody>
                <CardTitle tag="h3">Carousel List</CardTitle>


                {/* <h2 className={'content-block'}>Brokers List</h2> */}
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
                    slots={{
                      toolbar: EditToolbar,
                    }}
                    slotProps={{
                      toolbar: { setRows, setRowModesModel },
                    }}
                  />
                </Box>


              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>

  );
};

export default Carousel;




{/* <Col sm="6" lg="6" xl="5" xxl="4">  */ }
