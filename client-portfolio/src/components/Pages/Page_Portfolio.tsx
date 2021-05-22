import { PortfolioCard } from "components/PortfolioCard/PortfolioCard"
import AppContext from "contexts/AppContext"
import { useContext } from "react"
import { Button, Row } from "react-bootstrap"

export const Page_Portfolio = () => {
    const ctx = useContext(AppContext);
    
    const onClick = () => {
        ctx.refresh();
    }

    return (
        <div>
            <Row>
                <br/>
                <p className='text-left display-3 font-weight-bold'>My Works</p>
                <br/>
            </Row>
            <Row>
                <PortfolioCard title='The Title' description='AGskjdfh askdgf hjasfdgkl hasdgl akdjhgf asdklft hysadfjasjkdk ...'> <h3>Children</h3> </PortfolioCard>
                <PortfolioCard title='The Title' description='AGskjdfh askdgf hjasfdgkl hasdgl akdjhgf asdklft hysadfjasjkdk asdf jasdf asjdfhg asdkfg asjdhgf ajsdfgh...'> <h3>Children</h3> </PortfolioCard>
                <PortfolioCard title='The Title'> <h3>Children</h3> </PortfolioCard>
                <PortfolioCard title='The Title'> <h3>Children</h3> </PortfolioCard>
                <PortfolioCard title='The Title'> <h3>Children</h3> </PortfolioCard>
            </Row>
            <Button onClick={onClick}>Temp</Button>
        </div>
    );
}