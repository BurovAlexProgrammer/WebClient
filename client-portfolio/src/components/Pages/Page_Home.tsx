import logo from 'logo.svg'; 
import {Jumbotron} from 'react-bootstrap';
import style from './Page_Home.module.scss';

export const Page_Home = () => {
    let temp = style.mainJumboStyle;
    return (
        <>
            <br/>
            <Jumbotron className={`${style.mainJumboStyle}`}>
                <p>
                    <h1 className='display-1 text-white'>Hello world!</h1>
                </p>
            </Jumbotron>
            <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            <img src={logo} className="App-logo" alt="logo"/>
            </a>
        </>
    );
}