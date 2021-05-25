import { useParams } from "react-router";
import { PortfolioPage_PortfolioSite } from "./PortfolioPages/PortfolioPage_PortfolioSite";


export const Page_PortfolioWork = () => {
    const params = useParams() as Params;
    const workName = params.workName;
    switch (workName) {
        case 'portfolioSite': return <PortfolioPage_PortfolioSite/>;
    }
    return (<p className='text-center display-1 font-weight-bold'>
                Portfolio Work Item
                <br/>
                <span className='text-secondary'> Not </span>
                <span className='text-primary'> Found </span>
            </p>);
}

interface Params {
    workName: string;
}