import {Container} from 'react-bootstrap';

export const Footer = (props: Props) => {
    return (
        <div className={props.fixed ? 'fixed-bottom' : ''}>  
            <Container>
                <h2>Footer</h2>
            </Container>
        </div>
    );
}

interface Props {
    //Bottom fixed footer
    fixed?: boolean;
} 