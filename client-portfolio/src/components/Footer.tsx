import { Paths } from 'common/paths';
import {Container, Row, Col, Button} from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { Icon } from './Icon';

export const Footer = (props: Props) => {
    let classes = props.fixed ? 'fixed-bottom' : '';
    classes += ' bg-primary';
    classes += ' text-light';
    return (
        <div className={classes}>  
            <Container>
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
                        <Button className='btn-secondary'>Accept</Button>
                    </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

interface Props {
    //Bottom fixed footer
    fixed?: boolean;
} 