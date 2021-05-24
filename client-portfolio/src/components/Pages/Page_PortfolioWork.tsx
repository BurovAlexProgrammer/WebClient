import { useParams } from "react-router";


export const Page_PortfolioWork = () => {
    const params = useParams() as Params;
    const workName = params.workName;
    return <><h1>WorkName: {workName}</h1></>;
}

interface Params {
    workName: string;
}