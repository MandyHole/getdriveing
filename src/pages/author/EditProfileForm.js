import React, { useState, useRef, useEffect } from "react";
import styles from "../../styles/CreateUpdateTipForms.module.css";
import Form from "react-bootstrap/Form";
import { Image } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import {
  useCurrentUser,
} from "../../contexts/CurrentUserContext";
import { useHistory } from "react-router-dom";
import btnStyles from "../../styles/Buttons.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import HeroComponent from "../../components/HeroComponent";

const EditProfileForm = () => {
  const currentUser = useCurrentUser();
  const { id } = useParams();
  const history = useHistory();
  const [createAuthorData, setCreateAuthorData] = useState({
    name: "",
    bio: "",
    image: "",
  });
  const imageInput = useRef(null);
  const [errors, setErrors] = useState({});
  const { name, bio, image } = createAuthorData;

  useEffect(() => {
    const handleMount = async () => {
        try {
            const {data} = await axiosReq.get(`/authors/${id}`)
            const {
              owner,
              name,
              bio,
              created_on,
              updated_on,
              image,
              is_owner,
              number_tips_created} = data;
              console.log(is_owner)
            is_owner ? setCreateAuthorData({name, bio, image}) : (history.push("/"))
        } catch(err) {
            console.log(err)
        }
    }
    handleMount()
  }, [history, id])

  

  const handleChange = (event) => {
    setCreateAuthorData({
      ...createAuthorData,
      [event.target.name]: event.target.value,
    });
  };
  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setCreateAuthorData({
        ...createAuthorData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("bio", bio);
    if (imageInput?.current.files[0]) {
    formData.append("image", imageInput.current.files[0]);}

    try {
      await axiosReq.put(`/authors/${id}/`, formData);
      history.push('/');
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <div>
      <HeroComponent  h1= {`Edit your profile, ${currentUser?.username.charAt(0).toUpperCase()}${currentUser?.username.slice(1)}`} />
      <>
      <Container fluid="lg">
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <Form onSubmit={handleSubmit} className={styles.FormMargin}>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label className={styles.Labels}>Name</Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  placeholder="Your name as you'd like it displayed"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.name?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              
              <Form.Group className="mb-3" controlId="bio">
                <Form.Label className={styles.Labels}>Your bio</Form.Label>
                <Form.Control
                  className={styles.Input}
                  as="textarea"
                  rows={3}
                  placeholder="Provide details about yourself"
                  value={bio}
                  onChange={handleChange}
                  name="bio"
                />
              </Form.Group>
              {errors.bio?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}

              <Form.Group controlId="image_upload" className="mb-3">
                <Form.Label className={styles.Labels}>
                  Upload a picture of yourself (square photos work best)
                </Form.Label>
                <Form.Control
                  className={`${styles.FileUpload} mx-auto d-block `}
                  type="file"
                  accept="image/*"
                  onChange={handleChangeImage}
                  ref={imageInput}
                />
                {image ? (
                  <Image
                    src={image}
                    className={`${styles.Image} mx-auto d-block `}
                    thumbnail
                    fluid
                  />
                ) : (
                  <></>
                )}
              </Form.Group>

              {errors.image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              <div className={btnStyles.CenterButtons}>
                <Button
                  className={`${btnStyles.Buttons} ${btnStyles.HeroButtons}`}
                  type="submit"
                >
                  Save changes
                </Button>
                <Button
                  className={`${btnStyles.Buttons} ${btnStyles.HeroButtons}`}
                onClick={() => history.goBack()}                >
                  Cancel
                </Button>
              </div>
              {errors.non_field_errors?.map((message, idx) => (
                <Alert variant="warning" key={idx} className="mt-3">
                  {message}
                </Alert>
              ))}
            </Form>
          </Col>
        </Row>
      </Container>{" "}
    </>

    </div>
  );
};

export default EditProfileForm;
