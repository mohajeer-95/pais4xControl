import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, Card, CardBody, CardImg, Form, FormGroup, Label, Input, Row, Col, Spinner } from 'reactstrap';
import impImage from "../../assets/images/bg/impImage.png";

const defaultImage = 'https://via.placeholder.com/150'; // Default image URL

const ItemForm = () => {
  const { handleSubmit, control, setValue, formState: { errors }, reset, trigger, getValues } = useForm();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submittingStates, setSubmittingStates] = useState({});
  const [changedStates, setChangedStates] = useState({});
  const imageUrl = 'https://paid4x.com/broker/public/'

  useEffect(() => {
    var token = localStorage.getItem('token');

    // Fetch the data from the API
    const fetchData = async () => {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
      };

      try {
        const response = await fetch("https://paid4x.com/broker/public/api/slider", requestOptions);
        const result = await response.json();

        if (result.status === 1) {
          const sliders = result.sliders.map(slider => ({
            ...slider,
            image: imageUrl+slider.image
          }));
          setItems(sliders);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // Set loading to false when done
      }
    };

    fetchData();
  }, [setValue]);


  const getColor = (number) => {
    switch (number) {
      case 1:
        return ' About ';
      case 2:
        return ' FAQS ';
      case 3:
        return ' Broker ';
      case 4:
        return ' Broker List ';
      case 5:
        return ' Cash Back';
        case 6:
          return ' Contact ';
        case 7:
          return ' Courses ';
        case 8:
          return ' Instractor ';
        case 9:
          return ' Payments ';
        case 10:
          return ' Profile ';
          case 11:
            return ' Refund ';
          case 12:
            return ' Seminars ';
          case 13:
            return ' Training ';
          case 14:
            return ' Webinars ';
          case 15:
            return ' Promotions ';
            case 16:
              return ' Socials ';
      default:
        return 'Page'; // default color if the number doesn't match any case
    }
  };

  const handleImageChange = (index, file) => {
    if (file && file[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setItems(prevItems => {
          const newItems = [...prevItems];
          newItems[index] = {
            ...newItems[index],
            image: e.target.result,
          };
          return newItems;
        });

        // Mark this item as changed
        setChangedStates(prevState => ({
          ...prevState,
          [index]: true,
        }));
      };
      reader.readAsDataURL(file[0]);
    }
  };

  const handleUrlChange = (index, value) => {
    setChangedStates(prevState => ({
      ...prevState,
      [index]: true,
    }));

    setItems(prevItems => {
      const newItems = [...prevItems];
      newItems[index] = {
        ...newItems[index],
        image: impImage, // Use the imported default image here
      };
      return newItems;
    });

  };

  const onSubmit = async (index) => {
    const token = localStorage.getItem('token');

    setSubmittingStates(prevState => ({
      ...prevState,
      [index]: true,
    }));

    // Validate the specific item
    const valid = await trigger([`url-${index}`]);

    if (valid) {
      const url = getValues(`url-${index}`);
      const imageUrl = items[index].image;

      let imageFile = null;

      if (imageUrl.startsWith('data:image')) {
        // Convert base64 image data to Blob if it's a base64 string
        const response = await fetch(imageUrl);
        imageFile = await response.blob();
      }

      const formData = new FormData();
      formData.append("link", url);
      if (imageFile) {
        formData.append("image", imageFile, `item-${index}.jpg`);
      }
      formData.append("type_id", (index + 1).toString());

      const myHeaders = new Headers();

      myHeaders.append('Authorization', `Bearer ${token}`);
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formData,
        redirect: "follow"
      };

      try {
        const response = await fetch("https://paid4x.com/broker/public/api/slider", requestOptions);
        const result = await response.json();
        console.log('Submitted Data:', result);
      } catch (error) {
        console.error('Submission Error:', error);
      } finally {
        setSubmittingStates(prevState => ({
          ...prevState,
          [index]: false,
        }));

        // Reset the changed state after submission
        setChangedStates(prevState => ({
          ...prevState,
          [index]: false,
        }));
      }
    } else {
      setSubmittingStates(prevState => ({
        ...prevState,
        [index]: false,
      }));
    }
  };

  // if (loading) {
  //   <div className="text-center">
  //   <Spinner type="grow" color="primary" />
  //   <p>Loading...</p>
  // </div>  }

  return (
    <Form>
      {items.length > 0 && !loading ?  (
        <Row>
          {items.map((item, index) => (
            <Col md="6" sm="12" key={index} className="mb-4">
              <Card>
                <CardImg
                  top
                  width="100%"
                  height={100}
                  src={item.image}
                  alt={`Item ${index + 1}`}
                />
                <CardBody>
                  <FormGroup>
                    <Label for={`item-${index}`}>{getColor(item.type_id)}Page</Label>
                    <div className="d-flex flex-column align-items-start mb-3">
                      <Controller
                        name={`image-${index}`}
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <Input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              field.onChange(e.target.files);
                              handleImageChange(index, e.target.files);
                            }}
                          />
                        )}
                      />
                    </div>
                    {errors[`image-${index}`] && <span className="text-danger">Image is required</span>}
                  </FormGroup>

                  <FormGroup>
                    <Label for={`url-${index}`}>URL</Label>
                    <Controller
                      name={`url-${index}`}
                      control={control}
                      defaultValue={item.link}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Input
                          type="text"
                          placeholder="Enter URL"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            handleUrlChange(index, e.target.value);
                          }}
                        />
                      )}
                    />
                    {errors[`url-${index}`] && <span className="text-danger">URL is required</span>}
                  </FormGroup>

                  <Button
                    color="primary"
                    onClick={() => onSubmit(index)}
                    disabled={submittingStates[index] || !changedStates[index]}
                  >
                    {submittingStates[index] ? 'Submitting...' : 'Submit'}
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      ): 
      <div style={{marginTop: 300}} className="text-center">
      <Spinner  type="grow" style={{width: '5rem', height: '5rem', backgroundColor: '#26c6da'}} />
      <p style={{marginTop: 20, fontWeight: 'bold'}}>Loading...</p>
    </div>}
    </Form>
  );
};

export default ItemForm;





