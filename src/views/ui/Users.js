import { Card, CardBody, CardTitle, CardSubtitle, Table, Row, Col } from "reactstrap";
import React, { useState, useEffect } from "react";
import { callApiWithToken } from '../../api/api'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";

const usersAvatar = [user1, user2, user3, user4, user5]
const Users = () => {



    useEffect(() => {
        getUsers()
    }, [])

    const [rows, setRows] = React.useState(null);
    const [rowModesModel, setRowModesModel] = React.useState({});
    const [brokersList, setBrokersList] = useState([])
    const [loading, setLoading] = useState(false)
    const [viewMode, setViewMode] = useState(1)


    // State for Form 1
    const [paymentData, setPaymentData] = useState({
        amount: '',
        payment_type: '',
        payment_image: null,
    });

    // State for Form 2
    const [cashbackData, setCashbackData] = useState({
        user_id: 0,
        amount: '',
        broker_id: '',
    });


    const getUsers = async () => {
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjg2MDllNzQ0OTgxZjMwNzIyZTllNmRlMDQyMjY2MDJmNDM0NTk3ODBlNzUzM2FiNDc3MGFhMjhiZDFjZjRhMjU5NGNhYjI3MGJhM2UxNzUiLCJpYXQiOjE3MTc2MjA2NDQsIm5iZiI6MTcxNzYyMDY0NCwiZXhwIjoxNzQ5MTU2NjQ0LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.cRRWjwpsvG5cYb-5n_YpfrOHfoWzRTEoYndZffA08MrJxWnv4KZ1mezT6PaKxPdDNEnRQaeqPSdo4Wtf5xWrlgpZTnNQmd8-_xXjz_LJHIXdGtT5YosL6If__d1psx6nsW8ckyXx2mKWF2hiM6a1c65keOgtmiEwCsADxBYZv-VAE1eZz8eQHaYmc_dBFZnfevZqaDOcYjSdijRBGXYGCb65-wolO08is5cf6jq-r6m0pWKQ1Gwq8h5BRV4HBqxLVJK-2Mbk2hHF0EsxrUSIE9wTKxqBcH0SL4wOA8GWeiQUSlAncTkwvGQwFBdGVMou67XDz5UeiN0ek6JayemFZcpq-fkHP7l1fNpT_6SgQSRaIxca2rx9Q_nQYrjIczzuvPchbs9MbOdKdEpuolOWAbI4VBGS0FvMiXF596LCLuyAnnAC2YppkMF6AepxMBWtvCpYgL_Kr6KK4e-39_7tzhe1nMZsIRg-2jEYkHv8TB1vr4VaN4IikA6gEVlfml51VW6aiej2YkY4WtdJSeVAOhPgcPYX396v7awfW7liQz4TOIS0sxSaFTTlCrKvqxBz676uzmqxq0oUqTBm_4vlAirm1iluAXP9NwxYKHxIF8SNHaKtsBvMIzjaN79pBHmQdvRc_mJRf-Z9y5Wzn0-m6LmM2c60WA0Hu-vquTPZmbc'; // Your actual token

        const myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${token}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        try {
            const response = await fetch("http://lab.app2serve.com/public/api/users", requestOptions);
            if (!response.status) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();

            console.log('responsess', result.users);
            setRows(result.users)

        } catch (error) {
            throw error;
        }
    };




    ///////////////////// FORMS



    // Handle changes for Form 1
    const handlePaymentChange = (e) => {
        const { name, value, type, files } = e.target;
        setPaymentData({
            ...paymentData,
            [name]: type === 'file' ? files[0] : value,
        });
    };

    // Handle changes for Form 2
    const handleCashbackChange = (e) => {
        const { name, value } = e.target;
        setCashbackData({
            ...cashbackData,
            [name]: value,
        });
    };

    // Submit Form 1
    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjg2MDllNzQ0OTgxZjMwNzIyZTllNmRlMDQyMjY2MDJmNDM0NTk3ODBlNzUzM2FiNDc3MGFhMjhiZDFjZjRhMjU5NGNhYjI3MGJhM2UxNzUiLCJpYXQiOjE3MTc2MjA2NDQsIm5iZiI6MTcxNzYyMDY0NCwiZXhwIjoxNzQ5MTU2NjQ0LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.cRRWjwpsvG5cYb-5n_YpfrOHfoWzRTEoYndZffA08MrJxWnv4KZ1mezT6PaKxPdDNEnRQaeqPSdo4Wtf5xWrlgpZTnNQmd8-_xXjz_LJHIXdGtT5YosL6If__d1psx6nsW8ckyXx2mKWF2hiM6a1c65keOgtmiEwCsADxBYZv-VAE1eZz8eQHaYmc_dBFZnfevZqaDOcYjSdijRBGXYGCb65-wolO08is5cf6jq-r6m0pWKQ1Gwq8h5BRV4HBqxLVJK-2Mbk2hHF0EsxrUSIE9wTKxqBcH0SL4wOA8GWeiQUSlAncTkwvGQwFBdGVMou67XDz5UeiN0ek6JayemFZcpq-fkHP7l1fNpT_6SgQSRaIxca2rx9Q_nQYrjIczzuvPchbs9MbOdKdEpuolOWAbI4VBGS0FvMiXF596LCLuyAnnAC2YppkMF6AepxMBWtvCpYgL_Kr6KK4e-39_7tzhe1nMZsIRg-2jEYkHv8TB1vr4VaN4IikA6gEVlfml51VW6aiej2YkY4WtdJSeVAOhPgcPYX396v7awfW7liQz4TOIS0sxSaFTTlCrKvqxBz676uzmqxq0oUqTBm_4vlAirm1iluAXP9NwxYKHxIF8SNHaKtsBvMIzjaN79pBHmQdvRc_mJRf-Z9y5Wzn0-m6LmM2c60WA0Hu-vquTPZmbc'; // Your actual token

        const myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${token}`);

        const formData = new FormData();
        console.log("user_id", paymentData.user_id);
        console.log("amount", paymentData.amount);
        console.log("payment_type", paymentData.payment_type);
        console.log("payment_image", paymentData.payment_image);

        formData.append("user_id", paymentData.user_id);
        formData.append("amount", paymentData.amount);
        formData.append("payment_type", paymentData.payment_type);
        formData.append("payment_image", paymentData.payment_image);

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formData,
            redirect: "follow",
        };

        fetch("http://lab.app2serve.com/public/api/payments", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                resetPaymentForm();
                console.log(result)
            })
            .catch((error) => console.error(error));
    };

    const formattedCashbackData = {
        ...cashbackData,
        user_id: Number(cashbackData.user_id), // Ensure user_id is a number
    };

    // Submit Form 2
    const handleCashbackSubmit = (e) => {
        e.preventDefault();
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjg2MDllNzQ0OTgxZjMwNzIyZTllNmRlMDQyMjY2MDJmNDM0NTk3ODBlNzUzM2FiNDc3MGFhMjhiZDFjZjRhMjU5NGNhYjI3MGJhM2UxNzUiLCJpYXQiOjE3MTc2MjA2NDQsIm5iZiI6MTcxNzYyMDY0NCwiZXhwIjoxNzQ5MTU2NjQ0LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.cRRWjwpsvG5cYb-5n_YpfrOHfoWzRTEoYndZffA08MrJxWnv4KZ1mezT6PaKxPdDNEnRQaeqPSdo4Wtf5xWrlgpZTnNQmd8-_xXjz_LJHIXdGtT5YosL6If__d1psx6nsW8ckyXx2mKWF2hiM6a1c65keOgtmiEwCsADxBYZv-VAE1eZz8eQHaYmc_dBFZnfevZqaDOcYjSdijRBGXYGCb65-wolO08is5cf6jq-r6m0pWKQ1Gwq8h5BRV4HBqxLVJK-2Mbk2hHF0EsxrUSIE9wTKxqBcH0SL4wOA8GWeiQUSlAncTkwvGQwFBdGVMou67XDz5UeiN0ek6JayemFZcpq-fkHP7l1fNpT_6SgQSRaIxca2rx9Q_nQYrjIczzuvPchbs9MbOdKdEpuolOWAbI4VBGS0FvMiXF596LCLuyAnnAC2YppkMF6AepxMBWtvCpYgL_Kr6KK4e-39_7tzhe1nMZsIRg-2jEYkHv8TB1vr4VaN4IikA6gEVlfml51VW6aiej2YkY4WtdJSeVAOhPgcPYX396v7awfW7liQz4TOIS0sxSaFTTlCrKvqxBz676uzmqxq0oUqTBm_4vlAirm1iluAXP9NwxYKHxIF8SNHaKtsBvMIzjaN79pBHmQdvRc_mJRf-Z9y5Wzn0-m6LmM2c60WA0Hu-vquTPZmbc'; // Your actual token
        const myHeaders = new Headers();
        myHeaders.append("X-Custom-Token", "9f1f21f6a19140a9bb91b7a5b001e467dc699b1f76e29ee3acc98955b6377c36");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append('Authorization', `Bearer ${token}`);

        const raw = JSON.stringify(formattedCashbackData);

        console.log('CashbackData', raw);
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        fetch("http://lab.app2serve.com/public/api/cashback", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                resetCashbackForm()
                console.log(result)
            })
            .catch((error) => console.error(error));
    };


    const addPaymentAndCashback = (id) => {
        console.log('id', id);
        setCashbackData({
            user_id: id
        })
        setPaymentData({
            user_id: id
        })
        setViewMode(2)
    }


    const resetPaymentForm = () => {
        setPaymentData({
            user_id: 0,
            amount: '',
            payment_type: '',
            payment_image: null,
        });
        setViewMode(1)
    };

    // Reset Form 2
    const resetCashbackForm = () => {
        setCashbackData({
            user_id: 0,
            amount: '',
            broker_id: '',
        });
        setViewMode(1)
    };

    const callBack = () => {
        setViewMode(1)
    }
    return (
        <Row>
            {/* --------------------------------------------------------------------------------*/}
            {/* table-1*/}
            {/* --------------------------------------------------------------------------------*/}
            <Col lg="12">
                <div>
                    <Card>
                        <CardBody>


                            {viewMode == 1 ? <Table className="no-wrap mt-3 align-middle" responsive borderless>
                                <CardTitle tag="h5">Users List</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" tag="h6">
                                    Overview of the projects
                                </CardSubtitle>
                                <thead>
                                    <tr>
                                        <th>User Name</th>
                                        <th>Country</th>
                                        <th>Verified</th>
                                        <th>Payment type</th>
                                        <th>Phone</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {2 > 0 ? rows?.map((tdata, index) => (
                                        <tr key={index} className="border-top" onClick={() => addPaymentAndCashback(tdata.id)} style={{ cursor: 'pointer' }}>
                                            <td>
                                                <div className="d-flex align-items-center p-2">
                                                    <img
                                                        src={user2}
                                                        className="rounded-circle"
                                                        alt="avatar"
                                                        width="45"
                                                        height="45"
                                                    />
                                                    <div className="ms-3">
                                                        <h6 className="mb-0">{tdata.name + ' ' + tdata.last_name}</h6>
                                                        <span className="text-muted">{tdata.email}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{tdata.country}</td>
                                            <td>
                                                {tdata.verified == 1 ? (
                                                    <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>

                                                ) : tdata.verified == 0 ? (
                                                    <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>

                                                ) : (
                                                    <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                                                )}
                                            </td>
                                            <td>{tdata.payment_type}</td>
                                            <td>{tdata.phone}</td>
                                        </tr>
                                    )) : null}
                                </tbody>
                            </Table>
                                :

                                <div>
                                    <div className="dev-row" style={{ marginBottom: 10 }}>
                                        <span><ArrowBackIcon onClick={() => callBack()} /></span>
                                        <span style={{ marginInline: 10 }}>Back</span>
                                    </div>
                                    <h2>Payment Form</h2>
                                    <Form onSubmit={handlePaymentSubmit}>

                                        <FormGroup>
                                            <Label for="amount">Amount</Label>
                                            <Input
                                                type="text"
                                                name="amount"
                                                id="amount"
                                                value={paymentData.amount}
                                                onChange={handlePaymentChange}
                                                required
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="payment_type">Payment Type</Label>
                                            <Input
                                                type="text"
                                                name="payment_type"
                                                id="payment_type"
                                                value={paymentData.payment_type}
                                                onChange={handlePaymentChange}
                                                required
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="payment_image">Payment Image</Label>
                                            <Input
                                                type="file"
                                                name="payment_image"
                                                id="payment_image"
                                                onChange={handlePaymentChange}
                                                required
                                            />
                                        </FormGroup>
                                        <Button type="submit">Submit Payment</Button>
                                    </Form>

                                    <hr />

                                    <h2 style={{ marginTop: 50 }}>Cashback Form</h2>
                                    <Form onSubmit={handleCashbackSubmit}>

                                        <FormGroup>
                                            <Label for="amount">Amount</Label>
                                            <Input
                                                type="text"
                                                name="amount"
                                                id="amount"
                                                value={cashbackData.amount}
                                                onChange={handleCashbackChange}
                                                required
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="broker_id">Broker ID</Label>
                                            <Input
                                                type="text"
                                                name="broker_id"
                                                id="broker_id"
                                                value={cashbackData.broker_id}
                                                onChange={handleCashbackChange}
                                                required
                                            />
                                        </FormGroup>
                                        <Button type="submit">Submit Cashback</Button>
                                    </Form>
                                </div>



                            }
                        </CardBody>
                    </Card>
                </div>


            </Col>
        </Row>
    );
};

export default Users;

