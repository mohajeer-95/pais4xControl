import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { CardTitle, Spinner } from 'reactstrap';

export default function BasicEditingGrid() {
    const [cashBackList, setCashBackList] = useState([]); // State to hold fetched data
    const [loading, setLoading] = useState(true); // State to manage loading state

    useEffect(() => {
        const myHeaders = new Headers();
        const token = localStorage.getItem('token');
        console.log('token',token);

        myHeaders.append("Authorization", `Bearer ${token}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch("https://paid4x.com/broker/public/api/cashback-list", requestOptions)
            .then((response) => response.json()) // Parse the JSON response
            .then((result) => {
                setCashBackList(result.cashback_list); // Update the state with fetched data
                setLoading(false); // Set loading to false after data is fetched
            })
            .catch((error) => {
                console.error(error);
                setLoading(false); // Set loading to false in case of an error
            });
    }, []); // Empty dependency array ensures this runs once when the component mounts

    return (
        <div style={{ height: 500, width: '100%' }}>
            <div>
            <CardTitle style={{marginTop: 5, marginBottom: 20}} tag="h3">Cash Back Listing</CardTitle>

            </div>
            {loading ? (
                  <div style={{ marginTop: 300 }} className="text-center">
                  <Spinner type="grow" color="primary" />
                  <p>Loading...</p>
                </div>            ) : (
                <DataGrid rows={cashBackList} columns={columns} />
            )}
        </div>
    );
}

const columns = [
    { field: 'user_full_name', headerName: 'Name', width: 220 },
    {
        field: 'name',
        headerName: 'Broker Name',
        type: 'string',
        width: 220
    },
    {
        field: 'user_id',
        headerName: 'User ID',
        type: 'number',
        align: 'left',
        headerAlign: 'left',
        width:220
    },
    {
        field: 'amount',
        headerName: 'Amount',
        type: 'string',
        width: 220
    },
    {
        field: 'created_at',
        headerName: 'Created Date',
        type: 'string',
        width: 220
    },
  
];
