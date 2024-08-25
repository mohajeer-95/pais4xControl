import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, Card, CardBody, CardImg, Form, FormGroup, Label, Input, Row, Col, Spinner } from 'reactstrap';

const defaultImage = 'https://via.placeholder.com/150'; // Default image URL

const ItemForm = () => {
  const { handleSubmit, control, setValue, formState: { errors }, reset, trigger, getValues } = useForm();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submittingStates, setSubmittingStates] = useState({});
  const [changedStates, setChangedStates] = useState({});
  const imageUrl = 'https://lab.app2serve.com/storage/app/public/'

  useEffect(() => {
    // Fetch the data from the API
    const fetchData = async () => {
      const myHeaders = new Headers();
      const token = 'your_token_here'; // Replace with your actual token
      myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiM2RkNmQ3YjYyNjllMGNlNzc4Nzc3ZDAyYzAyZWYyOTIwNmRiMTI3OTBjYWRkOGEzNzI2NmEzNTNkNzg3OTM5YTMxYzZmZDlkYzE4MmE3ZWQiLCJpYXQiOjE3MjQ0MTY2NzEsIm5iZiI6MTcyNDQxNjY3MSwiZXhwIjoxNzU1OTUyNjcxLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.QCXDl52UIo-ENs8Uyv6XA4AMXtcb5Ee62XKZIIbyMA_ZVjQ9FApS-eoXJV8ikxsqbMOpaVAqX86ns0Dfwp69ABhBxGRWVvk4TxtMdL1Jb4OfTqdHmZfKipvBZ40PeKGSPRiMXudT9Z2iDpI0Z-CHg5ohm9eyZcPmO2Bk46fmersCIVBn8DhYD2N8bSYghOyyR6M2FdtZIF6HATIrLxYVnZcUpNuum09TxNPhF0bxOqpxMOpiNDhN7RxGEd80Wx8PqtPH7ZrCzgK3P5Usfc605sR4LBIzUXRpEeTP_qNL85E255_430PhE3QBvJUIgx4b_EDlygimylJUdGZXY1SMJs2foK2cJdJai4o3JWj9ZP204NOqxPSKIKlcIj0H1rvcE53YZ9Az7cj_bhalDG-gbVp-cjSKEhSKcPsyRLSJq-_BPgWixcDRQTIQhtMlc2B39AWxOdOp6ICivxNB6LGOEeeM4RYvfYCVRECSl8Lf3YhgTUvay3Jsx5-EMGVINs1ouHLWv6Lg2UwwBHRjeh3ZT7T25Onx_CdXUQriuplUnOCJ9Qe3v2ba2pCxtnoP4d7ly5Bnbs0B4h8oiilP00oSENfVpIVo2nacbDOeV0KYrSesdPIJQ-V4aVCWbpl9A-JB_SsNqllaqgH-JRAtSSDxUVtr9ImSqQvRNnjIILTBTec");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
      };

      try {
        const response = await fetch("https://lab.app2serve.com/public/api/slider", requestOptions);
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
  };

  const onSubmit = async (index) => {
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
      const token = 'your_token_here'; // Replace with your actual token
      myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiM2RkNmQ3YjYyNjllMGNlNzc4Nzc3ZDAyYzAyZWYyOTIwNmRiMTI3OTBjYWRkOGEzNzI2NmEzNTNkNzg3OTM5YTMxYzZmZDlkYzE4MmE3ZWQiLCJpYXQiOjE3MjQ0MTY2NzEsIm5iZiI6MTcyNDQxNjY3MSwiZXhwIjoxNzU1OTUyNjcxLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.QCXDl52UIo-ENs8Uyv6XA4AMXtcb5Ee62XKZIIbyMA_ZVjQ9FApS-eoXJV8ikxsqbMOpaVAqX86ns0Dfwp69ABhBxGRWVvk4TxtMdL1Jb4OfTqdHmZfKipvBZ40PeKGSPRiMXudT9Z2iDpI0Z-CHg5ohm9eyZcPmO2Bk46fmersCIVBn8DhYD2N8bSYghOyyR6M2FdtZIF6HATIrLxYVnZcUpNuum09TxNPhF0bxOqpxMOpiNDhN7RxGEd80Wx8PqtPH7ZrCzgK3P5Usfc605sR4LBIzUXRpEeTP_qNL85E255_430PhE3QBvJUIgx4b_EDlygimylJUdGZXY1SMJs2foK2cJdJai4o3JWj9ZP204NOqxPSKIKlcIj0H1rvcE53YZ9Az7cj_bhalDG-gbVp-cjSKEhSKcPsyRLSJq-_BPgWixcDRQTIQhtMlc2B39AWxOdOp6ICivxNB6LGOEeeM4RYvfYCVRECSl8Lf3YhgTUvay3Jsx5-EMGVINs1ouHLWv6Lg2UwwBHRjeh3ZT7T25Onx_CdXUQriuplUnOCJ9Qe3v2ba2pCxtnoP4d7ly5Bnbs0B4h8oiilP00oSENfVpIVo2nacbDOeV0KYrSesdPIJQ-V4aVCWbpl9A-JB_SsNqllaqgH-JRAtSSDxUVtr9ImSqQvRNnjIILTBTec");

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formData,
        redirect: "follow"
      };

      try {
        const response = await fetch("https://lab.app2serve.com/public/api/slider", requestOptions);
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












// import React, { useEffect, useState } from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import { Button, Card, CardBody, CardImg, Form, FormGroup, Label, Input, Row, Col, Spinner } from 'reactstrap';

// const defaultImage = 'https://via.placeholder.com/150'; // Default image URL

// const ItemForm = () => {
//   const { handleSubmit, control, setValue, formState: { errors }, reset, trigger, getValues } = useForm();
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [submitting, setSubmitting] = useState(false);
//   const imageUrl = 'https://lab.app2serve.com/storage/app/public/'

//   useEffect(() => {
//     // Fetch the data from the API
//     const fetchData = async () => {
//       const myHeaders = new Headers();
//       const token = 'your_token_here'; // Replace with your actual token
//       myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiM2RkNmQ3YjYyNjllMGNlNzc4Nzc3ZDAyYzAyZWYyOTIwNmRiMTI3OTBjYWRkOGEzNzI2NmEzNTNkNzg3OTM5YTMxYzZmZDlkYzE4MmE3ZWQiLCJpYXQiOjE3MjQ0MTY2NzEsIm5iZiI6MTcyNDQxNjY3MSwiZXhwIjoxNzU1OTUyNjcxLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.QCXDl52UIo-ENs8Uyv6XA4AMXtcb5Ee62XKZIIbyMA_ZVjQ9FApS-eoXJV8ikxsqbMOpaVAqX86ns0Dfwp69ABhBxGRWVvk4TxtMdL1Jb4OfTqdHmZfKipvBZ40PeKGSPRiMXudT9Z2iDpI0Z-CHg5ohm9eyZcPmO2Bk46fmersCIVBn8DhYD2N8bSYghOyyR6M2FdtZIF6HATIrLxYVnZcUpNuum09TxNPhF0bxOqpxMOpiNDhN7RxGEd80Wx8PqtPH7ZrCzgK3P5Usfc605sR4LBIzUXRpEeTP_qNL85E255_430PhE3QBvJUIgx4b_EDlygimylJUdGZXY1SMJs2foK2cJdJai4o3JWj9ZP204NOqxPSKIKlcIj0H1rvcE53YZ9Az7cj_bhalDG-gbVp-cjSKEhSKcPsyRLSJq-_BPgWixcDRQTIQhtMlc2B39AWxOdOp6ICivxNB6LGOEeeM4RYvfYCVRECSl8Lf3YhgTUvay3Jsx5-EMGVINs1ouHLWv6Lg2UwwBHRjeh3ZT7T25Onx_CdXUQriuplUnOCJ9Qe3v2ba2pCxtnoP4d7ly5Bnbs0B4h8oiilP00oSENfVpIVo2nacbDOeV0KYrSesdPIJQ-V4aVCWbpl9A-JB_SsNqllaqgH-JRAtSSDxUVtr9ImSqQvRNnjIILTBTec");

//       const requestOptions = {
//         method: "GET",
//         headers: myHeaders,
//         redirect: "follow"
//       };

//       try {
//         const response = await fetch("https://lab.app2serve.com/public/api/slider", requestOptions);
//         const result = await response.json();

//         if (result.status === 1) {
//           const sliders = result.sliders.map(slider => ({
//             ...slider,
//             image: imageUrl+slider.image
//           }));
//           setItems(sliders);
//         }
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false); // Set loading to false when done
//       }
//     };

//     fetchData();
//   }, [setValue]);

//   const handleImageChange = (index, file) => {
//     if (file && file[0]) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setItems(prevItems => {
//           const newItems = [...prevItems];
//           newItems[index] = {
//             ...newItems[index],
//             image: e.target.result,
//           };
//           return newItems;
//         });
//       };
//       reader.readAsDataURL(file[0]);
//     }
//   };

//   const onSubmit = async (index) => {
//     setSubmitting(true);
    
//     // Validate the specific item
//     const valid = await trigger([`url-${index}`]);

//     if (valid) {
//       const url = getValues(`url-${index}`);
//       const imageUrl = items[index].image;

//       let imageFile = null;

//       if (imageUrl.startsWith('data:image')) {
//         // Convert base64 image data to Blob if it's a base64 string
//         const response = await fetch(imageUrl);
//         imageFile = await response.blob();
//       }

//       const formData = new FormData();
//       formData.append("link", url);
//       if (imageFile) {
//         formData.append("image", imageFile, `item-${index}.jpg`);
//       }
//       formData.append("type_id", (index + 1).toString());

//       const myHeaders = new Headers();
//       const token = 'your_token_here'; // Replace with your actual token
//       myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiM2RkNmQ3YjYyNjllMGNlNzc4Nzc3ZDAyYzAyZWYyOTIwNmRiMTI3OTBjYWRkOGEzNzI2NmEzNTNkNzg3OTM5YTMxYzZmZDlkYzE4MmE3ZWQiLCJpYXQiOjE3MjQ0MTY2NzEsIm5iZiI6MTcyNDQxNjY3MSwiZXhwIjoxNzU1OTUyNjcxLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.QCXDl52UIo-ENs8Uyv6XA4AMXtcb5Ee62XKZIIbyMA_ZVjQ9FApS-eoXJV8ikxsqbMOpaVAqX86ns0Dfwp69ABhBxGRWVvk4TxtMdL1Jb4OfTqdHmZfKipvBZ40PeKGSPRiMXudT9Z2iDpI0Z-CHg5ohm9eyZcPmO2Bk46fmersCIVBn8DhYD2N8bSYghOyyR6M2FdtZIF6HATIrLxYVnZcUpNuum09TxNPhF0bxOqpxMOpiNDhN7RxGEd80Wx8PqtPH7ZrCzgK3P5Usfc605sR4LBIzUXRpEeTP_qNL85E255_430PhE3QBvJUIgx4b_EDlygimylJUdGZXY1SMJs2foK2cJdJai4o3JWj9ZP204NOqxPSKIKlcIj0H1rvcE53YZ9Az7cj_bhalDG-gbVp-cjSKEhSKcPsyRLSJq-_BPgWixcDRQTIQhtMlc2B39AWxOdOp6ICivxNB6LGOEeeM4RYvfYCVRECSl8Lf3YhgTUvay3Jsx5-EMGVINs1ouHLWv6Lg2UwwBHRjeh3ZT7T25Onx_CdXUQriuplUnOCJ9Qe3v2ba2pCxtnoP4d7ly5Bnbs0B4h8oiilP00oSENfVpIVo2nacbDOeV0KYrSesdPIJQ-V4aVCWbpl9A-JB_SsNqllaqgH-JRAtSSDxUVtr9ImSqQvRNnjIILTBTec");

//       const requestOptions = {
//         method: "POST",
//         headers: myHeaders,
//         body: formData,
//         redirect: "follow"
//       };

//       try {
//         const response = await fetch("https://lab.app2serve.com/public/api/slider", requestOptions);
//         const result = await response.json();
//         console.log('Submitted Data:', result);
//       } catch (error) {
//         console.error('Submission Error:', error);
//       } finally {
//         setSubmitting(false);
//       }
//     } else {
//       setSubmitting(false);
//     }
//   };

//   if (loading) {
//     return <Spinner>Loading...</Spinner>;
//   }

//   return (
//     <Form>
//       {items.length > 0 && (
//         <Row>
//           {items.map((item, index) => (
//             <Col md="6" sm="12" key={index} className="mb-4">
//               <Card>
//                 <CardImg
//                   top
//                   width="100%"
//                   height={100}
//                   src={item.image}
//                   alt={`Item ${index + 1}`}
//                 />
//                 <CardBody>
//                   <FormGroup>
//                     <Label for={`item-${index}`}>Item {index + 1}</Label>
//                     <div className="d-flex flex-column align-items-start mb-3">
//                       <Controller
//                         name={`image-${index}`}
//                         control={control}
//                         defaultValue=""
//                         render={({ field }) => (
//                           <Input
//                             type="file"
//                             accept="image/*"
//                             onChange={(e) => {
//                               field.onChange(e.target.files);
//                               handleImageChange(index, e.target.files);
//                             }}
//                           />
//                         )}
//                       />
//                     </div>
//                     {errors[`image-${index}`] && <span className="text-danger">Image is required</span>}
//                   </FormGroup>

//                   <FormGroup>
//                     <Label for={`url-${index}`}>URL</Label>
//                     <Controller
//                       name={`url-${index}`}
//                       control={control}
//                       defaultValue={item.link}
//                       rules={{ required: true }}
//                       render={({ field }) => (
//                         <Input
//                           type="text"
//                           placeholder="Enter URL"
//                           {...field}
//                         />
//                       )}
//                     />
//                     {errors[`url-${index}`] && <span className="text-danger">URL is required</span>}
//                   </FormGroup>

//                   <Button
//                     color="primary"
//                     onClick={() => onSubmit(index)}
//                     disabled={submitting}
//                   >
//                     {submitting ? 'Submitting...' : 'Submit'}
//                   </Button>
//                 </CardBody>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       )}
//     </Form>
//   );
// };

// export default ItemForm;













// import React, { useEffect, useState } from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import { Button, Card, CardBody, CardImg, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

// const defaultImage = 'https://via.placeholder.com/150'; // Default image URL

// const ItemForm = () => {
//   const { handleSubmit, control, setValue, formState: { errors }, reset, trigger, getValues } = useForm();
//   const [items, setItems] = useState({
//     image: defaultImage,
//     url: '',
//   });

//   useEffect(() => {
//     // Fetch the data from the API
//     const fetchData = async () => {
//       const myHeaders = new Headers();
//       const token = 'your_token_here'; // Your actual token
//       myHeaders.append('Authorization', `Bearer ${token}`);

//       const requestOptions = {
//         method: "GET",
//         headers: myHeaders,
//         redirect: "follow"
//       };

      
// const slidersislocal = [
//   {
//     "id": 18,
//     "lable_item": 1,
//     "link": "https://www.youtube.com/watch?v=t9dg_oAUoj0",
//     "image": "slider\/hmtP4YbNmqmPMQ7Sg2J0BBpiQf8j6LxGmcntRt56.jpg",
//     "status": 1
//   },
//   {
//     "id": 17,
//     "lable_item": 2,
//     "link": "https://www.youtube.com/watch?v=t9dg_oAUoj0",
//     "image": "slider\/pShho2F0VWxkSC7olZuF9ADRjRR0w6dZkc9MHkdD.jpg",
//     "status": 1
//   },
//   {
//     "id": 16,
//     "lable_item": 3,
//     "link": "https://www.youtube.com/watch?v=t9dg_oAUoj0",
//     "image": "slider\/dNsVIxVKjhsHzXvpHwy0hxmVB8UTnwTFDRffCVb1.jpg",
//     "status": 1
//   },
//   {
//     "id": 14,
//     "lable_item": 4,
//     "link": "https://www.youtube.com/watch?v=t9dg_oAUoj0",
//     "image": "slider\/axllgDzMvXN03HjyczytyLNS0CIDpBBS1IeBsgVZ.jpg",
//     "status": 1
//   },
//   {
//     "id": 18,
//     "lable_item": 5,
//     "link": "https://www.youtube.com/watch?v=t9dg_oAUoj0",
//     "image": "slider\/hmtP4YbNmqmPMQ7Sg2J0BBpiQf8j6LxGmcntRt56.jpg",
//     "status": 1
//   },
//   {
//     "id": 17,
//     "lable_item": 6,
//     "link": "https://www.youtube.com/watch?v=t9dg_oAUoj0",
//     "image": "slider\/pShho2F0VWxkSC7olZuF9ADRjRR0w6dZkc9MHkdD.jpg",
//     "status": 1
//   },
//   {
//     "id": 16,
//     "lable_item": 7,
//     "link": "https://www.youtube.com/watch?v=t9dg_oAUoj0",
//     "image": "slider\/dNsVIxVKjhsHzXvpHwy0hxmVB8UTnwTFDRffCVb1.jpg",
//     "status": 1
//   },
//   {
//     "id": 14,
//     "lable_item": 8,
//     "link": "https://www.youtube.com/watch?v=t9dg_oAUoj0",
//     "image": "slider\/axllgDzMvXN03HjyczytyLNS0CIDpBBS1IeBsgVZ.jpg",
//     "status": 1
//   },
//   {
//     "id": 18,
//     "lable_item": 9,
//     "link": "https://www.youtube.com/watch?v=t9dg_oAUoj0",
//     "image": "slider\/hmtP4YbNmqmPMQ7Sg2J0BBpiQf8j6LxGmcntRt56.jpg",
//     "status": 1
//   },
//   {
//     "id": 17,
//     "lable_item": 10,
//     "link": "https://www.youtube.com/watch?v=t9dg_oAUoj0",
//     "image": "slider\/pShho2F0VWxkSC7olZuF9ADRjRR0w6dZkc9MHkdD.jpg",
//     "status": 1
//   },
//   {
//     "id": 16,
//     "lable_item": 11,
//     "link": "https://www.youtube.com/watch?v=t9dg_oAUoj0",
//     "image": "slider\/dNsVIxVKjhsHzXvpHwy0hxmVB8UTnwTFDRffCVb1.jpg",
//     "status": 1
//   },
//   {
//     "id": 14,
//     "lable_item": 12,
//     "link": "https://www.youtube.com/watch?v=t9dg_oAUoj0",
//     "image": "slider\/axllgDzMvXN03HjyczytyLNS0CIDpBBS1IeBsgVZ.jpg",
//     "status": 1
//   },
//   {
//     "id": 18,
//     "lable_item": 13,
//     "link": "https://www.youtube.com/watch?v=t9dg_oAUoj0",
//     "image": "slider\/hmtP4YbNmqmPMQ7Sg2J0BBpiQf8j6LxGmcntRt56.jpg",
//     "status": 1
//   },
//   {
//     "id": 17,
//     "lable_item": 14,
//     "link": "https://www.youtube.com/watch?v=t9dg_oAUoj0",
//     "image": "slider\/pShho2F0VWxkSC7olZuF9ADRjRR0w6dZkc9MHkdD.jpg",
//     "status": 1
//   },
//   {
//     "id": 16,
//     "lable_item": 15,
//     "link": "https://www.youtube.com/watch?v=t9dg_oAUoj0",
//     "image": "slider\/dNsVIxVKjhsHzXvpHwy0hxmVB8UTnwTFDRffCVb1.jpg",
//     "status": 1
//   },
//   {
//     "id": 14,
//     "lable_item": 16,
//     "link": "https://www.youtube.com/watch?v=t9dg_oAUoj0",
//     "image": "slider\/axllgDzMvXN03HjyczytyLNS0CIDpBBS1IeBsgVZ.jpg",
//     "status": 1
//   },
// ]


//       try {
//         const response = await fetch("https://lab.app2serve.com/public/api/slider", requestOptions);
//         const result = await response.json();

//         if (result.status === 1) {
//           // Map the sliders to correct positions
        
// console.log('ITEM',items);

//           setItems( result.sliders);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, [setValue]);

//   const handleImageChange = (index, file) => {
//     if (file && file[0]) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setItems(prevItems => {
//           const newItems = [...prevItems];
//           newItems[index] = {
//             ...newItems[index],
//             image: e.target.result,
//           };
//           return newItems;
//         });
//       };
//       reader.readAsDataURL(file[0]);
//     }
//   };

//   const onSubmit = async (index) => {
//     // Validate the specific item
//     const valid = await trigger([`url-${index}`]);

//     if (valid) {
//       const url = getValues(`url-${index}`);
//       const imageFile = items[index].image.startsWith('data:image')
//         ? await fetch(items[index]).then(res => res.blob())
//         : null; // Convert image data to blob if it's a base64 string

//       const formData = new FormData();
//       formData.append("link", url);
//       if (imageFile) {
//         formData.append("image", imageFile, `item-${index}.jpg`);
//       }
//       formData.append("lable_item", (index + 1).toString());

//       const myHeaders = new Headers();
//       const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjg2MDllNzQ0OTgxZjMwNzIyZTllNmRlMDQyMjY2MDJmNDM0NTk3ODBlNzUzM2FiNDc3MGFhMjhiZDFjZjRhMjU5NGNhYjI3MGJhM2UxNzUiLCJpYXQiOjE3MTc2MjA2NDQsIm5iZiI6MTcxNzYyMDY0NCwiZXhwIjoxNzQ5MTU2NjQ0LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.cRRWjwpsvG5cYb-5n_YpfrOHfoWzRTEoYndZffA08MrJxWnv4KZ1mezT6PaKxPdDNEnRQaeqPSdo4Wtf5xWrlgpZTnNQmd8-_xXjz_LJHIXdGtT5YosL6If__d1psx6nsW8ckyXx2mKWF2hiM6a1c65keOgtmiEwCsADxBYZv-VAE1eZz8eQHaYmc_dBFZnfevZqaDOcYjSdijRBGXYGCb65-wolO08is5cf6jq-r6m0pWKQ1Gwq8h5BRV4HBqxLVJK-2Mbk2hHF0EsxrUSIE9wTKxqBcH0SL4wOA8GWeiQUSlAncTkwvGQwFBdGVMou67XDz5UeiN0ek6JayemFZcpq-fkHP7l1fNpT_6SgQSRaIxca2rx9Q_nQYrjIczzuvPchbs9MbOdKdEpuolOWAbI4VBGS0FvMiXF596LCLuyAnnAC2YppkMF6AepxMBWtvCpYgL_Kr6KK4e-39_7tzhe1nMZsIRg-2jEYkHv8TB1vr4VaN4IikA6gEVlfml51VW6aiej2YkY4WtdJSeVAOhPgcPYX396v7awfW7liQz4TOIS0sxSaFTTlCrKvqxBz676uzmqxq0oUqTBm_4vlAirm1iluAXP9NwxYKHxIF8SNHaKtsBvMIzjaN79pBHmQdvRc_mJRf-Z9y5Wzn0-m6LmM2c60WA0Hu-vquTPZmbc'; // Your actual token
//       myHeaders.append('Authorization', `Bearer ${token}`);

//       const requestOptions = {
//         method: "POST",
//         headers: myHeaders,
//         body: formData,
//         redirect: "follow"
//       };

//       try {
//         const response = await fetch("https://lab.app2serve.com/public/api/slider", requestOptions);
//         const result = await response.text();
//         console.log('Submitted Data:', result);

//         // Optionally reset the item state after successful submission
//         setItems(prev => {
//           const newItems = [...prev];
//           // newItems[index] = { image: defaultImage, url: '' }; // Reset to default values
//           return newItems;
//         });
//         // reset();
//       } catch (error) {
//         console.error('Submission Error:', error);
//       }
//     }
//   };

//   return (
//     <Form>
//       {items.length && <Row>
//         {items?.map((item, index) => (
//           <Col md="6" sm="12" key={index} className="mb-4">
//             <Card>
//               <CardImg
//                 top
//                 width="100%"
//                 height={100}
//                 src={item.image}
//                 alt={`Item ${index + 1}`}
//               />
//               <CardBody>
//                 <FormGroup>
//                   <Label for={`item-${index}`}>Item {index + 1}</Label>
//                   <div className="d-flex flex-column align-items-start mb-3">
//                     <Controller
//                       name={`image-${index}`}
//                       control={control}
//                       defaultValue=""
//                       render={({ field }) => (
//                         <Input
//                           type="file"
//                           accept="image/*"
//                           onChange={(e) => {
//                             field.onChange(e.target.files);
//                             handleImageChange(index, e.target.files);
//                           }}
//                         />
//                       )}
//                     />
//                   </div>
//                   {errors[`image-${index}`] && <span className="text-danger">Image is required</span>}
//                 </FormGroup>

//                 <FormGroup>
//                   <Label for={`url-${index}`}>URL</Label>
//                   <Controller
//                     name={`url-${index}`}
//                     control={control}
//                     defaultValue={item.url}
//                     rules={{ required: true, pattern: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/ }}
//                     render={({ field }) => (
//                       <Input
//                         type="url"
//                         placeholder="Enter URL"
//                         {...field}
//                       />
//                     )}
//                   />
//                   {errors[`url-${index}`] && <span className="text-danger">Valid URL is required</span>}
//                 </FormGroup>

//                 <Button
//                   type="button"
//                   color="primary"
//                   onClick={() => onSubmit(index)}
//                 >
//                   Submit Item {index + 1}
//                 </Button>
//               </CardBody>
//             </Card>
//           </Col>
//         ))}
//       </Row>}
//     </Form>
//   );
// };

// export default ItemForm;





// import React, { useEffect, useState } from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import { Button, Card, CardBody, CardImg, CardText, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

// const defaultImage = 'https://via.placeholder.com/150'; // Default image URL

// const ItemForm = () => {
//   const { handleSubmit, control, setValue, formState: { errors }, reset, trigger, getValues } = useForm();
//   const [items, setItems] = useState(Array(16).fill({
//     image: defaultImage,
//     url: '',
//   }));

//   useEffect(() => {
//     // Fetch the data from the API
//     const fetchData = async () => {


//       const myHeaders = new Headers();
//       const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjg2MDllNzQ0OTgxZjMwNzIyZTllNmRlMDQyMjY2MDJmNDM0NTk3ODBlNzUzM2FiNDc3MGFhMjhiZDFjZjRhMjU5NGNhYjI3MGJhM2UxNzUiLCJpYXQiOjE3MTc2MjA2NDQsIm5iZiI6MTcxNzYyMDY0NCwiZXhwIjoxNzQ5MTU2NjQ0LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.cRRWjwpsvG5cYb-5n_YpfrOHfoWzRTEoYndZffA08MrJxWnv4KZ1mezT6PaKxPdDNEnRQaeqPSdo4Wtf5xWrlgpZTnNQmd8-_xXjz_LJHIXdGtT5YosL6If__d1psx6nsW8ckyXx2mKWF2hiM6a1c65keOgtmiEwCsADxBYZv-VAE1eZz8eQHaYmc_dBFZnfevZqaDOcYjSdijRBGXYGCb65-wolO08is5cf6jq-r6m0pWKQ1Gwq8h5BRV4HBqxLVJK-2Mbk2hHF0EsxrUSIE9wTKxqBcH0SL4wOA8GWeiQUSlAncTkwvGQwFBdGVMou67XDz5UeiN0ek6JayemFZcpq-fkHP7l1fNpT_6SgQSRaIxca2rx9Q_nQYrjIczzuvPchbs9MbOdKdEpuolOWAbI4VBGS0FvMiXF596LCLuyAnnAC2YppkMF6AepxMBWtvCpYgL_Kr6KK4e-39_7tzhe1nMZsIRg-2jEYkHv8TB1vr4VaN4IikA6gEVlfml51VW6aiej2YkY4WtdJSeVAOhPgcPYX396v7awfW7liQz4TOIS0sxSaFTTlCrKvqxBz676uzmqxq0oUqTBm_4vlAirm1iluAXP9NwxYKHxIF8SNHaKtsBvMIzjaN79pBHmQdvRc_mJRf-Z9y5Wzn0-m6LmM2c60WA0Hu-vquTPZmbc'; // Your actual token
//       myHeaders.append('Authorization', `Bearer ${token}`);




//       const requestOptions = {
//         method: "GET",
//         headers: myHeaders,
//         redirect: "follow"
//       };

//       try {
//         const response = await fetch("http://lab.app2serve.com/public/api/slider", requestOptions);
//         const result = await response.json();

//         if (result.status === 1) {
//           // Map the sliders to correct positions
//           const updatedItems = Array(16).fill({ image: defaultImage, url: '' });
//           result.sliders.forEach(slider => {
//             if (slider.lable_item >= 1 && slider.lable_item <= 16) {
//               updatedItems[slider.lable_item - 1] = {
//                 image: `https://lab.app2serve.com/storage/app/public/${slider.image}`, // Full image URL
//                 url: slider.link,
//               };
//             }
//           });
//           setItems(updatedItems);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleImageChange = (index, file) => {
//     if (file && file[0]) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setItems(prevItems => {
//           const newItems = [...prevItems];
//           newItems[index] = {
//             ...newItems[index],
//             image: e.target.result,
//           };
//           return newItems;
//         });
//       };
//       reader.readAsDataURL(file[0]);
//     }
//   };

//   const onSubmit = async (index) => {
//     // Validate the specific item
//     const valid = await trigger([`url-${index}`]);

//     if (valid) {
//       const url = getValues(`url-${index}`);
//       const itemData = {
//         label: `Item ${index + 1}`,
//         image: items[index].image,
//         url: url,
//       };

//       console.log('Submitted Data:', itemData);

//       // Reset the form for the specific item after submission
//       reset({
//         [`url-${index}`]: ''
//       });
//       setItems(prev => {
//         const newItems = [...prev];
//         newItems[index] = {
//           ...newItems[index],
//           image: defaultImage,
//         };
//         return newItems;
//       });
//     }
//   };

//   return (
//     <Form>
//       <Row>
//         {items.map((item, index) => (
//           <Col md="6" sm="12" key={index} className="mb-4">
//             <Card>
//               <CardImg
//                 top
//                 width="100%"
//                 height={100}
//                 src={item.image}
//                 alt={`Item ${index + 1}`}
//               />
//               <CardBody>
//                 <FormGroup>
//                   <Label for={`item-${index}`}>Item {index + 1}</Label>
//                   <div className="d-flex flex-column align-items-start mb-3">
//                     <Controller
//                       name={`image-${index}`}
//                       control={control}
//                       defaultValue=""
//                       render={({ field }) => (
//                         <Input
//                           type="file"
//                           accept="image/*"
//                           onChange={(e) => {
//                             field.onChange(e.target.files);
//                             handleImageChange(index, e.target.files);
//                           }}
//                         />
//                       )}
//                     />
//                   </div>
//                   {errors[`image-${index}`] && <span className="text-danger">Image is required</span>}
//                 </FormGroup>

//                 <FormGroup>
//                   <Label for={`url-${index}`}>URL</Label>
//                   <Controller
//                     name={`url-${index}`}
//                     control={control}
//                     defaultValue={item.url}
//                     rules={{ required: true, pattern: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/ }}
//                     render={({ field }) => (
//                       <Input
//                         type="url"
//                         placeholder="Enter URL"
//                         {...field}
//                       />
//                     )}
//                   />
//                   {errors[`url-${index}`] && <span className="text-danger">Valid URL is required</span>}
//                 </FormGroup>

//                 <Button
//                   type="button"
//                   color="primary"
//                   onClick={() => onSubmit(index)}
//                 >
//                   Submit Item {index + 1}
//                 </Button>
//               </CardBody>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Form>
//   );
// };

// export default ItemForm;




/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

 






// import React, { useState } from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import { Button, Card, CardBody, CardImg, CardText, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

// const defaultImage = 'https://via.placeholder.com/150'; // Default image URL

// const ItemForm = () => {
//   const { handleSubmit, control, formState: { errors }, reset, getValues, trigger } = useForm();
//   const [images, setImages] = useState(Array(16).fill(defaultImage));

//   const handleImageChange = (index, file) => {
//     if (file && file[0]) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         const newImages = [...images];
//         newImages[index] = e.target.result;
//         setImages(newImages);
//       };
//       reader.readAsDataURL(file[0]);
//     }
//   };

//   const onSubmit = async (index) => {
//     // Validate the specific item
//     const valid = await trigger([`image-${index}`, `url-${index}`]);

//     if (valid) {
//       // Retrieve the URL value directly from the form's values
//       const url = getValues(`url-${index}`);
//       const itemData = {
//         label: `Item ${index + 1}`,
//         image: images[index],
//         url: url, // Ensure this is not undefined
//       };

//       console.log('Submitted Data:', itemData);

//       // Reset the form for the specific item after submission
//       reset({
//         [`image-${index}`]: '',
//         [`url-${index}`]: ''
//       });
//       setImages((prev) => {
//         const newImages = [...prev];
//         newImages[index] = defaultImage;
//         return newImages;
//       });
//     }
//   };

//   return (
//     <Form>
//       <Row>
//         {[...Array(16)].map((_, index) => (
//           <Col md="6" sm="12" key={index} className="mb-4">
//             <Card>
//               <CardImg
//                 top
//                 width="100%"
//                 src={images[index]}
//                 alt={`Item ${index + 1}`}
//               />
//               <CardBody>
//                 <FormGroup>
//                   <Label for={`item-${index}`}>Item {index + 1}</Label>
//                   <div className="d-flex flex-column align-items-start mb-3">
//                     <Controller
//                       name={`image-${index}`}
//                       control={control}
//                       defaultValue=""
//                       rules={{ required: true }}
//                       render={({ field }) => (
//                         <Input
//                           type="file"
//                           accept="image/*"
//                           onChange={(e) => {
//                             field.onChange(e.target.files);
//                             handleImageChange(index, e.target.files);
//                           }}
//                         />
//                       )}
//                     />
//                   </div>
//                   {errors[`image-${index}`] && <span className="text-danger">Image is required</span>}
//                 </FormGroup>

//                 <FormGroup>
//                   <Label for={`url-${index}`}>URL</Label>
//                   <Controller
//                     name={`url-${index}`}
//                     control={control}
//                     defaultValue=""
//                     rules={{ required: true, pattern: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/ }}
//                     render={({ field }) => (
//                       <Input
//                         type="url"
//                         placeholder="Enter URL"
//                         {...field}
//                       />
//                     )}
//                   />
//                   {errors[`url-${index}`] && <span className="text-danger">Valid URL is required</span>}
//                 </FormGroup>

//                 <Button
//                   type="button"
//                   color="primary"
//                   onClick={() => onSubmit(index)}
//                 >
//                   Submit Item {index + 1}
//                 </Button>
//               </CardBody>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Form>
//   );
// };

// export default ItemForm;
