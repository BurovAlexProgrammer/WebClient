import { PortfolioContent } from "components/PortfolioContent";
import AppContext from "contexts/AppContext";
import { useContext } from "react";
import { Row, Container } from "react-bootstrap";

export const Page_Portfolio = () => {
    const ctx = useContext(AppContext);

    const onClick = () => {
        ctx.refresh();
    }

    return (
        <Container>
            <Row>
                <br/> <p className='text-left display-3 font-weight-bold'>My Works</p> <br/>
            </Row>
            <PortfolioContent/>
        </Container>
    );
}