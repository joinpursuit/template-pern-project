import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function Lounge({ lounge }) {
  return (
    <Col xs={2} className='g-4'>
      <Card className="text-center">
        <Card.Img variant="top" src={lounge.Photos} alt="pic"></Card.Img>
        <Card.Title>
          <Link to={`/lounges/${lounge.id}`}>{lounge.Lounge_Name} </Link>
        </Card.Title>
      </Card>
    </Col>
  );
}

export default Lounge;