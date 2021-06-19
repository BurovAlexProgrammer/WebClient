import { Col, Container, DropdownButton, Row } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { genreDTO } from "burovalex-webdal/DAL";
import { CapitalizeString } from 'common/useful'
import { useEffect, useState } from "react";

export const FilmAPI_HomePage = () => {
    const [ genres, setGenres] = useState<genreDTO[]>([]);
    const [ selectedGenreId, setSelectedGenreId] = useState<number>(0);

    if (genres.length === 0) fetchGenres();

    useEffect(() => {
        const temp = selectedGenreId;
    }, [selectedGenreId]);

    const genreItems = genres.map(x => {
        return <DropdownItem key={x.id} eventKey={x.id} active={x.id === selectedGenreId}>
            {x.name}
        </DropdownItem>
    });

    return (<div>
                <Col className='col-3 bg-primary'>
                    <Row>
                        <DropdownButton title='Genres' disabled={genres.length === 0} onSelect={onSelectGenre}>
                            {genreItems}
                        </DropdownButton>
                    </Row>
                </Col>
                <Col className='col-9'>
                    <Row>

                    </Row>
                </Col>
            </div>);

    function fetchGenres() {
        fetch('/movie-api/genres/ru', {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        })
        .then(res => res.json())
        .then(
            (result => {
                let _genres = result as genreDTO[];
                _genres = _genres.map(x => {
                    x.name = CapitalizeString(x.name);
                    return x;
                });
                setGenres(_genres);
            })
            ,
            (error => {
                alert('error: '+error)
            })
        );
    }

    function onSelectGenre(genreId) {
        setSelectedGenreId(Number(genreId || 0));
    }
}