import { Card, Container, Row, Col } from 'react-bootstrap';

export const FilmCard = (props: Props) => {

    return (
        <Card className='w-100'>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Container>
                    <Row>
                        <Col>{props.year}</Col>
                        <Col>{props.rating}</Col>
                    </Row>
                </Container>
            </Card.Footer>
        </Card>);
}

interface Props {
    title: string;
    imgPath?: string;
    description?: string;
    year?: number;
    rating?: number;
}

export default FilmCard;

