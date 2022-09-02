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

  useEffect(() => {
    axios
      .get(`${API}/lounges/${id}`)
      .then((res) => setLounge(res.data.payload))
      .catch((err) => console.log(err));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`${API}/lounges/${id}`)
      .then((res) => navigate("/lounges"))
      .catch((err) => console.log(err));
  };

  return (
    <Container className=" text-center" fluid>
      <article>
        <div>
          <h2>{lounge.Lounge_Name}</h2>
          <img src={lounge.Photos} alt={lounge.Lounge_Name} />
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