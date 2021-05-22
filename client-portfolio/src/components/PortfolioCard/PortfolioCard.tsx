import { Card, Col, Jumbotron } from "react-bootstrap";
import img1 from 'assets/img/home_jumbotron.jpg';

export const PortfolioCard: React.FC<Props> = ({
    title,
    description,
    imageUrl,
    }) => {
        let t = img1;
        return (
            <Col className='col-4 mb-5 d-flex align-items-stretch'>
                <Card>
                    <div className='card-header'>
                        <h1 className='font-weight-bold'>{title}</h1>
                    </div>
                    <img className='card-img-center' src={img1}></img>
                    <div className='card-body'>
                        <p>{description}</p>
                    </div>
                </Card>

            </Col>);
}

interface Props {
    title: string,
    description?: string,
    imageUrl?: string,
}