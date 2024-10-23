import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, CardTitle, Spinner } from 'reactstrap';

export default function BasicEditingGrid() {
    const [cashBackList, setCashBackList] = useState([]); // State to hold fetched data
    const [loading, setLoading] = useState(true); // State to manage loading state
    const [modalOpen, setModalOpen] = useState(false); // State to manage modal visibility
    const [selectedImage, setSelectedImage] = useState(null); // State to hold the selected image

    useEffect(() => {
        const token = localStorage.getItem('token');

        const myHeaders = new Headers();
        console.log('token',token);
        
        myHeaders.append("Authorization", `Bearer ${token}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch("https://paid4x.com/broker/public/api/payments-list", requestOptions)
            .then((response) => response.json()) // Parse the JSON response
            .then((result) => {
                const updatedArray = result?.payment_list?.map(item => {
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
        setSelectedImage('https://paid4x.com/broker/public/' + row.payment_image); // Set the selected image
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
                  <div style={{ marginTop: 300 }} className="text-center">
                  <Spinner type="grow" color="primary" />
                  <p>Loading...</p>
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
