import { filmDTO } from 'burovalex-webdal/DAL';
import 'react-bootstrap';
import { FilmCard } from 'components/FilmSearchAPI/FilmCard';

export const FilmCardDeck = (props: Props) => {
    return <>{
        props.films.map(film => {
            return (<FilmCard title={film.title}></FilmCard>);
        })
    }</>
}

interface Props {
    films: filmDTO[];
}