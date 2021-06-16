import { PortfolioContent } from 'components/PortfolioContent';
import AppContext from 'contexts/AppContext';
import { useContext } from 'react';
import {Button, Jumbotron} from 'react-bootstrap';
import style from './Page_Home.module.scss';
import { filmDTO, localeDTO } from 'burovalex-webdal/DAL';

export const Page_Home = () => {
    const ctx = useContext(AppContext);

    const fetchData = () => {
        fetch('/films', {
            method: "POST",
            body: JSON.stringify({temp: 'ttt'}),
            headers: {
              "Content-Type": "application/json"
            },
            credentials: "same-origin"
          })
        .then(res => res.json())
        .then(
            (result => {
                const film = result as filmDTO;
                alert('result: '+film.description + '  ' + film.year)})
            ,
            (error => {
                alert('error: '+error)
            }));
    };

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
            <Button onClick={(x) => {fetchData();}}>Fetch</Button> 
            <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            
            </a>
        </>
    );
}