import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Spinner, Button, Modal, ModalHeader, ModalBody, ModalFooter, CardTitle } from 'reactstrap';

export default function BasicEditingGrid() {
    const [cashBackList, setCashBackList] = useState([]); // State to hold fetched data
    const [loading, setLoading] = useState(true); // State to manage loading state
    const [modalOpen, setModalOpen] = useState(false); // State to manage modal visibility
    const [selectedImage, setSelectedImage] = useState(null); // State to hold the selected image

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiM2RkNmQ3YjYyNjllMGNlNzc4Nzc3ZDAyYzAyZWYyOTIwNmRiMTI3OTBjYWRkOGEzNzI2NmEzNTNkNzg3OTM5YTMxYzZmZDlkYzE4MmE3ZWQiLCJpYXQiOjE3MjQ0MTY2NzEsIm5iZiI6MTcyNDQxNjY3MSwiZXhwIjoxNzU1OTUyNjcxLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.QCXDl52UIo-ENs8Uyv6XA4AMXtcb5Ee62XKZIIbyMA_ZVjQ9FApS-eoXJV8ikxsqbMOpaVAqX86ns0Dfwp69ABhBxGRWVvk4TxtMdL1Jb4OfTqdHmZfKipvBZ40PeKGSPRiMXudT9Z2iDpI0Z-CHg5ohm9eyZcPmO2Bk46fmersCIVBn8DhYD2N8bSYghOyyR6M2FdtZIF6HATIrLxYVnZcUpNuum09TxNPhF0bxOqpxMOpiNDhN7RxGEd80Wx8PqtPH7ZrCzgK3P5Usfc605sR4LBIzUXRpEeTP_qNL85E255_430PhE3QBvJUIgx4b_EDlygimylJUdGZXY1SMJs2foK2cJdJai4o3JWj9ZP204NOqxPSKIKlcIj0H1rvcE53YZ9Az7cj_bhalDG-gbVp-cjSKEhSKcPsyRLSJq-_BPgWixcDRQTIQhtMlc2B39AWxOdOp6ICivxNB6LGOEeeM4RYvfYCVRECSl8Lf3YhgTUvay3Jsx5-EMGVINs1ouHLWv6Lg2UwwBHRjeh3ZT7T25Onx_CdXUQriuplUnOCJ9Qe3v2ba2pCxtnoP4d7ly5Bnbs0B4h8oiilP00oSENfVpIVo2nacbDOeV0KYrSesdPIJQ-V4aVCWbpl9A-JB_SsNqllaqgH-JRAtSSDxUVtr9ImSqQvRNnjIILTBTec");

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch("https://lab.app2serve.com/public/api/payments-list", requestOptions)
            .then((response) => response.json()) // Parse the JSON response
            .then((result) => {
                const updatedArray = result.payment_list.map(item => {
                    const { payment_id, ...rest } = item; // Destructure to get the color and the rest of the object
                    return {
                        ...rest,          // Spread the rest of the properties
                        id: payment_id // Add the new property with the old value
                    };
                });

                setCashBackList(updatedArray); // Update the state with fetched data
                setLoading(false); // Set loading to false after data is fetched
            })
            .catch((error) => {
                console.error(error);
                setLoading(false); // Set loading to false in case of an error
            });
    }, []); // Empty dependency array ensures this runs once when the component mounts

    const handleShowMore = (row) => {
        setSelectedImage('https://lab.app2serve.com/storage/app/public/' + row.payment_image); // Set the selected image
        setModalOpen(true); // Open the modal
    };

    const toggleModal = () => {
        setModalOpen(!modalOpen); // Toggle modal visibility
    };

    const columns = [
        {
            field: 'user_full_name',
            headerName: 'Name',
            type: 'string',
            width: 220
        },
        {
            field: 'payment_type',
            headerName: 'Payment Type',
            type: 'string',
            width: 180
        },
        {
            field: 'amount',
            headerName: 'Amount',
            type: 'string',
            width: 180
        },
        {
            field: 'created_at',
            headerName: 'Created Date',
            type: 'string',
            width: 220
        },
        {
            field: 'id',
            headerName: 'Payment ID',
            type: 'string',
            width: 220
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleShowMore(params.row)}
                >
                    Show Reset
                </Button>
            ),
        },
    ];

    return (
        <div style={{ height: 500, width: '100%' }}>
            <div>
                <CardTitle style={{ marginTop: 5, marginBottom: 20 }} tag="h3">Payment Listing</CardTitle>
            </div>
            {loading ? (
      <div style={{marginTop: 300}} className="text-center">
      <Spinner  type="grow" style={{width: '5rem', height: '5rem', backgroundColor: '#26c6da'}} />
      <p style={{marginTop: 20, fontWeight: 'bold'}}>Loading...</p>
    </div>            ) : (
                <DataGrid rows={cashBackList} columns={columns} />
            )}

            <Modal isOpen={modalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Image Preview</ModalHeader>
                <ModalBody>
                    {selectedImage && (
                        <img src={selectedImage} alt="Payment" style={{ width: '100%' }} />
                    )}
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggleModal}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
