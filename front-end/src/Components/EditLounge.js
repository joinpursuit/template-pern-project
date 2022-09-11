import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const API = process.env.REACT_APP_API_URL;

export default function EditLounge() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const [lounge, setLounge] = useState({
   Serves_Hookah: false,
   Days_Closed: ""
  });

  useEffect(() => {
    axios
      .get(`${API}/Lounges/${id}`)
      .then((res) => setLounge(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const updatelounge = (updatedlounge) => {
    axios
      .put(`${API}/Lounges/${id}`, updatedlounge)
      .then(() => {
        navigate(`/Lounges`);
      })
      .catch((error) => console.log(error));
  };

  const handleTextChange = (e) => {
    setLounge({ ...lounge, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      e.stopPropagation();
    }
    if (e.target.checkValidity()) {
      updatelounge(lounge, id);
    }
    setValidated(true);
  };

  return (
    <div>
      <br />
      <h1>Edit the lounge: </h1>
      <Container>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="name">Serves Hookah:</Form.Label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Do They Serve Hookah</option>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </Form.Group>
          <br/>
          <Row>
            <Col md>
              <Form.Group>
                <Form.Label htmlFor="Days_Closed">Days Closed:</Form.Label>
                <Form.Control
                  id="Days_Closed"
                  type="text"
                  value={lounge.days_closed}
                  placeholder="Days_Closed"
                  onChange={handleTextChange}
                />
              </Form.Group>
            </Col>
            <br/>
          </Row>
          <br />
          <Button variant="secondary" type="submit">
            Submit
          </Button>
          <Link to={`/Lounges/${id}`}>
            <Button variant="secondary" className="ms-2">
              Cancel
            </Button>
          </Link>
        </Form>
      </Container>
    </div>
  );
}
