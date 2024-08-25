import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { CardTitle ,Spinner} from 'reactstrap';

export default function BasicEditingGrid() {
    const [cashBackList, setCashBackList] = useState([]); // State to hold fetched data
    const [loading, setLoading] = useState(true); // State to manage loading state

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiM2RkNmQ3YjYyNjllMGNlNzc4Nzc3ZDAyYzAyZWYyOTIwNmRiMTI3OTBjYWRkOGEzNzI2NmEzNTNkNzg3OTM5YTMxYzZmZDlkYzE4MmE3ZWQiLCJpYXQiOjE3MjQ0MTY2NzEsIm5iZiI6MTcyNDQxNjY3MSwiZXhwIjoxNzU1OTUyNjcxLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.QCXDl52UIo-ENs8Uyv6XA4AMXtcb5Ee62XKZIIbyMA_ZVjQ9FApS-eoXJV8ikxsqbMOpaVAqX86ns0Dfwp69ABhBxGRWVvk4TxtMdL1Jb4OfTqdHmZfKipvBZ40PeKGSPRiMXudT9Z2iDpI0Z-CHg5ohm9eyZcPmO2Bk46fmersCIVBn8DhYD2N8bSYghOyyR6M2FdtZIF6HATIrLxYVnZcUpNuum09TxNPhF0bxOqpxMOpiNDhN7RxGEd80Wx8PqtPH7ZrCzgK3P5Usfc605sR4LBIzUXRpEeTP_qNL85E255_430PhE3QBvJUIgx4b_EDlygimylJUdGZXY1SMJs2foK2cJdJai4o3JWj9ZP204NOqxPSKIKlcIj0H1rvcE53YZ9Az7cj_bhalDG-gbVp-cjSKEhSKcPsyRLSJq-_BPgWixcDRQTIQhtMlc2B39AWxOdOp6ICivxNB6LGOEeeM4RYvfYCVRECSl8Lf3YhgTUvay3Jsx5-EMGVINs1ouHLWv6Lg2UwwBHRjeh3ZT7T25Onx_CdXUQriuplUnOCJ9Qe3v2ba2pCxtnoP4d7ly5Bnbs0B4h8oiilP00oSENfVpIVo2nacbDOeV0KYrSesdPIJQ-V4aVCWbpl9A-JB_SsNqllaqgH-JRAtSSDxUVtr9ImSqQvRNnjIILTBTec");

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch("https://lab.app2serve.com/public/api/cashback", requestOptions)
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
     <div style={{marginTop: 300}} className="text-center">
     <Spinner  type="grow" style={{width: '5rem', height: '5rem', backgroundColor: '#26c6da'}} />
     <p style={{marginTop: 20, fontWeight: 'bold'}}>Loading...</p>
   </div> 
) : (
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
