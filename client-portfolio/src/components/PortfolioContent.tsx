import { Paths } from "common/paths";
import { Row } from "react-bootstrap";
import { PortfolioCard } from "./PortfolioCard";


export const PortfolioContent = () => {
    return (
        <Row>
            <PortfolioCard url='/portfolio/portfolioSite' title='Portfolio Site' description='My first project is Portfolio site for showing my skills on React' imageUrl={Paths.home_jumbotron}> <h3>Children</h3> </PortfolioCard>
            <PortfolioCard title='Film Rating' description='My next project which will work throw API' imageUrl={Paths.home_jumbotron}> <h3>Children</h3> </PortfolioCard>
        </Row>
    );
}