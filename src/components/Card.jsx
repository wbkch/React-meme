import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const MemeCard = (props) => {
  const navigate = useNavigate()
  return (
    <div>
      <Card style={{ width: '1rem', margin: '5px', display:'inline-grid' }}>
        <Card.Img variant="top" width='200px'src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Button variant="primary" onClick={e=>navigate(`/edit?url=${props.img}`)}>Edit</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MemeCard;