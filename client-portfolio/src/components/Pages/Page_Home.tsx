import logo from 'logo.svg'; 
import {Jumbotron} from 'react-bootstrap';
import style from './Page_Home.module.scss';

export const Page_Home = () => {
    let temp = style.mainJumboStyle;
    return (
        <>
            <br/>
            <Jumbotron className={`jumbotron ${style.mainJumboStyle}`}>

            </Jumbotron>
            <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            <img src={logo} className="App-logo" alt="logo"/>
            </a>
        </>
    );
}