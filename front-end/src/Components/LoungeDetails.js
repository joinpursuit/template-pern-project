import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const API = process.env.REACT_APP_API_URL;

export default function LoungeDetails() {
  const [lounge, setLounge] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  let serves_hookah =lounge[0]?.serves_hookah ? "Yup" :"Nah"

  useEffect(() => {
    axios
      .get(`${API}/lounges/${id}`)
      .then((res) => setLounge(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`${API}/lounges/${id}`)
      .then((res) => navigate("/lounges"))
      .catch((err) => console.log(err));
  };
  console.log("lounge",lounge[0]);

  return (
    <Container className=" text-center" fluid>
      <article>
        <div>
          {/* <img src={lounge[0]?.photos} alt={lounge[0]?.lounge_name} /> */}
          <div>
          <img src={lounge[0]?.photos} alt={lounge[0]?.lounge_name} />
            <h1 class="title">{lounge[0]?.lounge_name}</h1>
            <p>{lounge[0]?.borough}</p>
            <p >{lounge[0]?.street_address}</p>
            <p>{lounge[0]?.phone_number}</p>
            <p>{lounge[0]?.serves_hookah}</p>
            <p>Hookah? {serves_hookah}</p>
          </div>


          
          <div className="showNavigation">
            <div>
              {" "}
              <Link to={`/lounges`}>
                <Button className="me-4 mt-4">Back</Button>
              </Link>
            </div>
            <div>
              <Link to={`/lounges/${id}/edit`}>
                <Button className="me-4 mt-4">Edit</Button>
              </Link>
            </div>
            <div>
              <Button className="mt-4" onClick={handleDelete}>
                Delete
              </Button>
            </div>
          </div>
        </div>
      </article>
    </Container>
  );
}