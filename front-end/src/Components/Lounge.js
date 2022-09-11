import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function Lounge({ lounge }) {
  console.log(lounge)
  return (
    <Col xs={2} className='g-4 w-50'>
      <Card className="text-center" >
        <Card.Img variant="top" src={lounge.photos} alt="pic"></Card.Img>
        <Card.Title>
          <Link to={`/lounges/${lounge.id}`}>{lounge.lounge_name} </Link>
        </Card.Title>
      </Card>
    </Col>
  );
}

export default Lounge;