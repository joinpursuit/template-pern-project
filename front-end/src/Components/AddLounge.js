import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";

const API = process.env.REACT_APP_API_URL;

function AddLounge() {
  let navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const addLounge = (newlounge) => {
    axios
      .post(`${API}/lounges`, newlounge)
      .then(() => navigate(`/lounges`))
      .catch((error) => console.log(error));
  };

  const [lounge, setlounge] = useState({
    Lounge_Name: "",
    Borough: "",
    Zip_Code: 0,
    Phone_Number: "",
    Days_Closed: "",
    Street_Address: "",
    Photos: "",
    Serves_Hookah: "",
  });

  const handleTextChange = (e) => {
    setlounge({ ...lounge, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      e.stopPropagation();
    }
    if (e.target.checkValidity()) {
      addLounge(lounge);
    }
    setValidated(true);
  };

  return (
    <div>
      <section>
        <h3> Hey there, wanna add a Lounge ? </h3>
        <ul>
          <li>Get all your details</li>
          <li>Fill in the required fields</li>
          <li>Congratulations, you've added a new lounge !</li>
        </ul>
      </section>
      <br />
      <h1>Add A New Lounge: </h1>
      <Container>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="name">Name:</Form.Label>
            <Form.Control
              id="Lounge_Name"
              type="text"
              value={lounge.Lounge_Name}
              placeholder="Name"
              onChange={handleTextChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please add a Lounge name
            </Form.Control.Feedback>
            <Form.Control.Feedback type="valid">
              Looks Good!
            </Form.Control.Feedback>
          </Form.Group>
          <br/>
          <Form.Group>
            <Form.Label htmlFor="Street_Address">Street Address:</Form.Label>
            <Form.Control
              id="Street_Address"
              type="text"
              value={lounge.Street_Address}
              placeholder="Street Address"
              onChange={handleTextChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please add a Lounge Address
            </Form.Control.Feedback>
            <Form.Control.Feedback type="valid">
              Nice !
            </Form.Control.Feedback>
          </Form.Group>
          <br/>
          <Row>
            <Col md>
              <Form.Group>
                <Form.Label htmlFor="Phone_Number">Phone Number:</Form.Label>
                <Form.Control
                  id="Phone_Number"
                  type="number"
                  value={lounge.Phone_Number}
                  placeholder="Phone_Number"
                  onChange={handleTextChange}
                />
              </Form.Group>
            </Col>
            <br/>
            <Col md>
              <Form.Group>
                <Form.Label htmlFor="Borough">Borough:</Form.Label>
                <Form.Control
                  id="Borough"
                  type="text"
                  value={lounge.Borough}
                  placeholder="Borough"
                  onChange={handleTextChange}
                />
              </Form.Group>
            </Col>
            <br/>
            <Col md>
              <Form.Group>
                <Form.Label htmlFor="Days_Closed">Days Closed:</Form.Label>
                <Form.Control
                  id="Days_Closed"
                  type="text"
                  value={lounge.Days_Closed}
                  placeholder="Days_Closed"
                  onChange={handleTextChange}
                />
              </Form.Group>
            </Col>
            <br/>
            <Col md>
              <Form.Group>
                <Form.Label htmlFor="Zip_Code">Zip Code:</Form.Label>
                <Form.Control
                  id="Zip_Code"
                  type="number"
                  value={lounge.Zip_Code}
                  placeholder="Zip Code"
                  onChange={handleTextChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <br/>
          <Form.Group>
            <Form.Label htmlFor="Photos">Image:</Form.Label>
            <Form.Control
              id="Photos"
              type="text"
              value={lounge.Photos}
              pattern="http[s]*://.+"
              placeholder="http://"
              onChange={handleTextChange}
            />
            <Form.Control.Feedback type="invalid">
              Please add a valid url
            </Form.Control.Feedback>
            <Form.Control.Feedback type="valid">
              Perfect!
            </Form.Control.Feedback>
          </Form.Group>
          <br/>
          <Form.Group>
            <Form.Label htmlFor="name">Serves Hookah:</Form.Label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Do They Serve Hookah</option>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </Form.Group>
          <br/>
          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default AddLounge;