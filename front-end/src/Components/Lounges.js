import { useState, useEffect } from "react";
import Lounge from "./Lounge.js";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


const API = "https://warm-ravine-05696.herokuapp.com";
function Lounges() {
  const [Lounges, setLounges] = useState([]);
  
  useEffect(() => {
    axios
    .get(`${API}/lounges`)
    .then((res) => setLounges(res.data.payload))
    .catch((err) => console.error(err));
  }, []);
  
  console.log(`${API}/lounges`);
  console.log(Lounges);
  return (
      <Container fluid>
        <Row className="g-2">
          {Lounges.map((lounge, id) => {
            return <Lounge key={id} lounge={lounge} id={id} />;
          })}
        </Row>
      </Container>
  );
}

export default Lounges;