import { Card, Col } from "react-bootstrap";


export const PortfolioCard: React.FC<Props> = ({
    title,
    description,
    imageUrl,
    }) => {
        return (
            <Col className='col-4 mb-5 align-items-stretch col-auto d-flex'>
                <Card>
                    <div className='card-header'>
                        <h2 className='font-weight-bold'>{title}</h2>
                    </div>
                    <img className='card-img-center' src={imageUrl}></img>
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