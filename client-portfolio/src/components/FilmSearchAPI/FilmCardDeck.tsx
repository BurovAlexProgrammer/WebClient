import { filmDTO } from 'burovalex-webdal/DAL';
import { Col, Row, CardGroup } from 'react-bootstrap';
import { FilmCard } from 'components/FilmSearchAPI/FilmCard';

export const FilmCardDeck = (props: Props) => {
    const cardCountInRow = props.cardCountInRow || 5;
    let itemNumber = 0;
    let renderResult : JSX.Element[] = [];
    while (itemNumber < props.films.length) {
        let rowRender : JSX.Element[] = [];
        for (let i = itemNumber; i < (itemNumber+cardCountInRow); i++) {
            const film = props.films[i];
            const year = film.release_date ? new Date(film.release_date).getFullYear() : null;
            rowRender.push(<Col xs={12} sm={12} md={6} lg={4} xl={4} className='mt-2 mb-2 d-flex'>
                    <FilmCard 
                        title={film.title} 
                        description = {film.overview}
                        year = {year}
                        rating = {film.vote_average}
                        key={`FilmCard${i}`} 
                        />
                </Col>);
        }
        renderResult.push(<>{rowRender}</>);
        itemNumber += cardCountInRow;
    }

    return <Row className='flex-row'>
            {renderResult}
        </Row>
}

interface Props {
    films: filmDTO[];
    cardCountInRow?: number;
}