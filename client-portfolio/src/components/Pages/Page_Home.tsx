import { PortfolioContent } from 'components/PortfolioContent';
import AppContext from 'contexts/AppContext';
import logo from 'logo.svg'; 
import { useContext } from 'react';
import {Button, Jumbotron} from 'react-bootstrap';
import style from './Page_Home.module.scss';

export const Page_Home = () => {
    const ctx = useContext(AppContext);
    return (
        <>
            <br/>
            <Jumbotron className={`${style.mainJumboStyle}`}>
                <p className='text-white text-left display-3 font-weight-bold'>Alexey's Portfolio</p>
                <p className='text-white text-left h3'>I'm Aleksei Burov - C# developer. I have created the portfolio to reach my dream - work on Unity 3D engine.</p>
            </Jumbotron>
            <p className='text-left display-3 font-weight-bold'>My Works</p>
            <PortfolioContent/>
            <Button onClick={(x) => {ctx.refresh();}}>Refresh</Button> 
            <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            <img src={logo} className="App-logo" alt="logo"/>
            </a>
        </>
    );
}