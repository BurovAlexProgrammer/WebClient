import { CookieKeys } from 'common/cookies';
import { Paths } from 'common/paths';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { Icon } from './Icon';
import logo from 'logo.svg'; 

export const Footer = (props: Props) => {
    const [ cookies, setCookies, ] = useCookies();
    const acceptUseCookie = cookies[CookieKeys.acceptUseCookie];
    
    let classes = !acceptUseCookie ? 'fixed-bottom' : '';
    classes += ' bg-primary text-light';
    
    const acceptCookies = () => {
        setCookies(CookieKeys.acceptUseCookie, true);
    }

    const useCookiesNotification = (
        <div className=''>
            <Row>
                <br/>
            </Row>
            <Row>
               <Col className='pf-v-center'>
                    <p className='blockquote'>
                        <Icon src={Paths.icons.cookie} iconSize='small'/> We use cookie files: it helps the site perform better.
                    </p>
                </Col>
                <Col className='pf-v-center text-right col-1'>
                <p className='text-right'>
                    <Button className='btn-secondary' onClick={acceptCookies}>Accept</Button>
                </p>
                </Col>
            </Row>
        </div>
    );      

    const footerContent = (
        <Row>
            <Col></Col>
            <Col className='col-3'>
                <p className='h6 text-light mt-3 mb-3'>
                2021 &emsp; Aleksei Burov 
                </p>
            </Col>
            <Col className='col-1 pf-v-center'> 
                <a href='https://reactjs.org/'>
                    <img src={logo} className="App-logo" alt="logo"/>
                </a>
            </Col>
        </Row>
    );

    return (
        <div className={classes}>  
            <Container>
                {acceptUseCookie ? footerContent : useCookiesNotification }
            </Container>
        </div>
    );
}

interface Props {
    //Bottom fixed footer
    fixed?: boolean;
} 