import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


export const PortfolioCard: React.FC<Props> = ({
    title,
    description,
    imageUrl,
    url,
    }) => {
        return (
            <Col className='col-4 mb-5 align-items-stretch col-auto d-flex'>
                <Card>
                    <div className='card-header'>
                        <h2 className='font-weight-bold'>{title}</h2>
                    </div>
                    <img className='card-img-center' src={imageUrl} alt=''></img>
                    <div className='card-body'>
                        <div className='row'>
                            <p>{description}</p>
                        </div>
                        <div className='row d-flex align-items-end flex-column mr-1 text-bottom'>
                            { url && <Link to={url || '#'} className='stretched-link d-flex'>More Details</Link> }
                        </div>
                    </div>
                </Card>
            </Col>);
}

interface Props {
    title: string,
    description?: string,
    imageUrl?: string,
    url?: string,
}