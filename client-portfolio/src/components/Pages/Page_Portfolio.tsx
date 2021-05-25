import { PortfolioContent } from "components/PortfolioContent";
import AppContext from "contexts/AppContext";
import { useContext } from "react";
import { Button, Row } from "react-bootstrap";

export const Page_Portfolio = () => {
    const ctx = useContext(AppContext);

    const onClick = () => {
        ctx.refresh();
    }

    return (
        <div>
            <Row>
                <br/> <p className='text-left display-3 font-weight-bold'>My Works</p> <br/>
            </Row>
            <PortfolioContent/>
        </div>
    );
}