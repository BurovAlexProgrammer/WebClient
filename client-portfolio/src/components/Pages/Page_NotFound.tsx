import { Container } from "react-bootstrap";

export const Page_NotFound = () => {
    const classNames404 = 'display-1 font-weight-bold';
    return (
        <Container>
            <div className={`${classNames404}`}>
                <div className='row'>
                    <div className='col'>
                        <p className='text-center'>
                            <span className='text-primary'>4</span>
                            <span className='text-primary'>0</span>
                            <span className='text-secondary'>4</span>
                        </p>
                        <p className='text-center'>
                            Page Not Found
                        </p>
                    </div>
                </div>
            </div>
        </Container>);
}