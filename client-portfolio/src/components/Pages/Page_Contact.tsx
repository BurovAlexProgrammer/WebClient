import { PortfolioContent } from "components/PortfolioContent";
import AppContext from "contexts/AppContext";
import { useContext } from "react";
import { Button, Row } from "react-bootstrap";

export const Page_Contact = () => {
    const ctx = useContext(AppContext);

    return (
        <div>
            <Row>
                <br/> <p className='text-left display-3 font-weight-bold'>My Contact</p> <br/>
            </Row>
        </div>
    );
}