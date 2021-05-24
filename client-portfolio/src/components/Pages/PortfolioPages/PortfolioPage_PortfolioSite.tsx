import { Paths } from "common/paths";
import { Col, Image, Row } from "react-bootstrap";

export const PortfolioPage_PortfolioSite = () => {
    return (
        <div>
            <Row>
                <Col className='col-8'>
                    <br/> 
                    <p className='text-left display-3 font-weight-bold'>Portfolio Site</p> 
                    <br/>
                </Col>
                <Col className='col-4 text-right pf-v-center'>
                    <Image src={Paths.icons.github} rounded={true} className='pf-icon-medium'/>
                    <Image src={Paths.icons.github} rounded={true} className='pf-icon-medium'/>
                    <Image src={Paths.icons.github} rounded={true} className='pf-icon-medium'/>
                </Col>
            </Row>
            <Row>
                <Col className='col-8'> 
                    <Image src={Paths.home_jumbotron} className='img-fluid'/>
                </Col>
                <Col className='col-4'>
                    <p>Этот сайт </p>
                </Col>
            </Row>
        </div>
    );
}