import React, { useEffect, useState } from "react";
import { Form, FormGroup, Label, Input, Button, Spinner } from "reactstrap";

const BrokerForm = () => {
  const [brokerInfo, setBrokerInfo] = useState({});
  const [cashbackInfo, setCashbackInfo] = useState({});
  const [tradingCostInfo, setTradingCostInfo] = useState({});
  const [brokerAccountInfo, setBrokerAccountInfo] = useState({});

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

  const [token] = useState("your_bearer_token_here"); // Replace with your token

  // Fetch broker info, cashback info, trading cost info, and broker account info on component mount
  useEffect(() => {
    setLoading(true);
    fetch("https://paid4x.com/broker/public/api/broker/90", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const info = data.broker.info;
        const cashback = data.broker.broker_cashback_info;
        const tradingCost = data.broker.trading_cost;
        const brokerAccount = data.broker.broker_account;
        setBrokerInfo(info);
        setCashbackInfo(cashback);
        setTradingCostInfo(tradingCost);
        setBrokerAccountInfo(brokerAccount);

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
  const handleCashbackChange = (e) => {
    const { name, value } = e.target;
    setCashbackInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (value !== originalCashbackData[name]) {
      setModifiedCashbackFields((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else {
      const { [name]: _, ...remaining } = modifiedCashbackFields;
      setModifiedCashbackFields(remaining);
    }
  };

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

    setSubmitting(true);
    fetch("https://paid4x.com/broker/public/api/broker/90", {
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
  const handleCashbackSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(modifiedCashbackFields).length === 0) {
      alert("No changes to submit.");
      return;
    }

    setSubmittingCashback(true);
    fetch("https://paid4x.com/broker/public/api/broker-cashback-info/90", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(modifiedCashbackFields),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Cashback info updated successfully!");
        setModifiedCashbackFields({});
      })
      .catch((error) => console.error("Error updating cashback info:", error))
      .finally(() => setSubmittingCashback(false));
  };

  // Submit trading cost info form
  const handleTradingCostSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(modifiedTradingCostFields).length === 0) {
      alert("No changes to submit.");
      return;
    }

    setSubmittingTradingCost(true);
    fetch("https://paid4x.com/broker/public/api/broker-trading-cost/90", {
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
    fetch("https://paid4x.com/broker/public/api/broker-account/90", {
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
          {/* Form for broker info */}
          <Form onSubmit={handleBrokerSubmit}>
            <h3>Broker Info</h3>
            {Object.keys(brokerInfo).map((key) => (
              <FormGroup key={key}>
                <Label for={key}>{key}</Label>
                <Input
                  type="text"
                  name={key}
                  id={key}
                  value={brokerInfo[key] || ""}
                  onChange={handleBrokerChange}
                />
              </FormGroup>
            ))}
            <Button color="primary" type="submit" disabled={isBrokerSubmitDisabled}>
              {submitting ? <Spinner size="sm" /> : "Update Broker Info"}
            </Button>
          </Form>

          {/* Form for broker cashback info */}
          <Form onSubmit={handleCashbackSubmit}>
            <h3>Broker Cashback Info</h3>
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
            <Button color="primary" type="submit" disabled={isCashbackSubmitDisabled}>
              {submittingCashback ? <Spinner size="sm" /> : "Update Cashback Info"}
            </Button>
          </Form>

          {/* Form for trading cost info */}
          <Form onSubmit={handleTradingCostSubmit}>
            <h3>Broker Trading Cost Info</h3>
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
            <Button color="primary" type="submit" disabled={isTradingCostSubmitDisabled}>
              {submittingTradingCost ? <Spinner size="sm" /> : "Update Trading Cost Info"}
            </Button>
          </Form>

          {/* Form for broker account info */}
          <Form onSubmit={handleBrokerAccountSubmit}>
            <h3>Broker Account Info</h3>
            {Object.keys(brokerAccountInfo).map((key) => (
              <FormGroup key={key}>
                <Label for={key}>{key}</Label>
                <Input
                  type="text"
                  name={key}
                  id={key}
                  value={brokerAccountInfo[key] || ""}
                  onChange={handleBrokerAccountChange}
                />
              </FormGroup>
            ))}
            <Button color="primary" type="submit" disabled={isBrokerAccountSubmitDisabled}>
              {submittingBrokerAccount ? <Spinner size="sm" /> : "Update Broker Account Info"}
            </Button>
          </Form>
        </>
      )}
    </div>
  );
};

export default BrokerForm;
