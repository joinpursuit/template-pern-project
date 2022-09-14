import { useState, useEffect } from "react";
import Lounge from "./Lounge.js";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


// const API = "http://localhost:3333"; // should use Heroku/ netlify link
const API2 = "https://warm-ravine-05696.herokuapp.com"
const API = process.env.REACT_APP_API_URL;

function Lounges() {
  const [lounges, setLounges] = useState([]);
  
  useEffect(() => {
    axios
    .get(`${API2}/lounges`)
    .then((res) => setLounges(res.data))
    .catch((err) => console.error(err));
  }, []);
console.log("lounges=", lounges)

  return (
      <Container fluid>
        <Row className="g-2">
          {lounges.map((lounge, id) => {
            return <Lounge key={id} lounge={lounge} id={id} />;
            
          })}
        </Row>
      </Container>
  );
}

export default Lounges;