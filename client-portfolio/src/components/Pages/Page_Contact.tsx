import { Paths } from "common/paths";
import { Icon } from "components/Icon";
import AppContext from "contexts/AppContext";
import { useContext, useState } from "react";
import { Button, Col, Row, Container } from "react-bootstrap";

export const Page_Contact = () => {
    const ctx = useContext(AppContext);
    const [ showPhone, setShowPhone ] = useState(false);
    const [ showEmail, setShowEmail ] = useState(false);

    const showEmailClick = () => {
        setShowEmail(true);
    }

    const showPhoneClick = () => {
        setShowPhone(true);
    }

    return (
        <Container>
            <Row className='mt-5 mb-5'>
                <Col>
                    <p className='text-left display-3 font-weight-bold'>My Contacts</p>
                </Col>
                <Col className='text-right display-3 font-weight-bold'>
                    <Icon src={Paths.icons.github_sqr} url='https://github.com/BurovAlexProgrammer' target='_blank'/>
                    <Icon src={Paths.icons.linkedin} url='https://www.linkedin.com/in/alexisburov/' target='_blank'/>
                    <Icon src={Paths.icons.telegram} url='https://telegram.me/BurovAlex88' target='_blank'/>
                    <Icon src={Paths.icons.whatsapp} url='https://wa.me/qr/2HVMEOHQ7ZXKG1' target='_blank'/>
                </Col>
            </Row>
            <Row className='mt-5 mb-5 text-left'>
                <Col className='col-3'>
                    <p className='h3'>Email</p>
                </Col>
                <Col>
                    {showEmail ?
                    <p className='h3'>
                        <span>BurovAlexProgrammer</span><span>@gmail.com</span>
                    </p>                    
                    :
                    <Button className='btn btn-primary' onClick={showEmailClick}>Show Email</Button> 
                    }
                </Col>
            </Row>
            <Row className='mt-5 mb-5 text-left'>
                <Col className='col-3'>
                    <p className='h3'>Phone</p>
                </Col>
                <Col>
                    {showPhone? 
                    <p className='h3'>
                        <span>+7912</span><span  className='mr-3'>9063242</span>
                    </p>
                    :
                    <Button className='btn btn-primary' onClick={showPhoneClick}>Show Phone</Button>
                    }
                </Col>
            </Row>
        </Container>
    );
}