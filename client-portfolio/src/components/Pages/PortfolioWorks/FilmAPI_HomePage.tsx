import { Col, Container, DropdownButton, Row, Button, FormGroup, Form } from 'react-bootstrap';
import { LanguageDropdown } from 'components/LanguageDropdown';
import { genreDTO } from "burovalex-webdal/DAL";
import { CapitalizeString } from 'common/useful'
import { useEffect, useState } from "react";
import { FormControl } from 'react-bootstrap';

export const FilmAPI_HomePage = () => {
    const [ genres, setGenres] = useState<genreDTO[]>([]);
    const [ selectedGenreId, setSelectedGenreId] = useState<number>(0);

    if (genres.length === 0) fetchGenres();

    useEffect(() => {
        const temp = selectedGenreId;
    }, [selectedGenreId]);

    const genreItems = genres.map(x => {
        return <option key={x.id} value={x.id}>
            {x.name}
        </option>
    });

    return (<div>
                <Row className='mt-1 mb-1 container-fluid'>
                    <Col className='col-4 bg-primary d-flex'>
                        <div className='container vertical-left'>
                            <LanguageDropdown className='mt-2' onClick={() => alert()}/>
                            <p className='h2 mt-2 mb-4 text-light'>Search Film</p>
                            <FormGroup as={Row} className='mb-4'> 
                                <FormControl className='col-8'
                                    placeholder='Seach Query'
                                    aria-label='Seach Query'
                                    aria-describedby='searchQuery'/>
                                    <Button className='btn-secondary ml-2 col-3'>Search</Button>
                            </FormGroup>
                            <FormGroup as={Row} className='mb-4'>
                                <Form.Label column sm="4" className='text-left'>Genres</Form.Label>
                                <Col sm="8">
                                    <Form.Control as="select" disabled={genres.length === 0} onChange={onSelectGenre}>
                                        {genreItems}
                                    </Form.Control>
                                </Col>
                            </FormGroup>
                        </div>
                    </Col>
                    <Col className='col-8'>
                        
                    </Col>
                </Row>
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
                _genres.unshift({id: 0, name: '  *  '});
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

    function onSelectGenre(event) {
        setSelectedGenreId(Number(event.target.value || 0));
    }
}