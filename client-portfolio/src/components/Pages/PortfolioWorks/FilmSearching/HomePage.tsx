import { genreDTO } from "burovalex-webdal/DAL";
import { CapitalizeString } from 'common/useful'
import { useState } from "react";

export const FilmSearching_HomePage = () => {
    const [ genres, setGenres] = useState<genreDTO[]>([]);

    const fetchGenres = () => {
        fetch('/genres/ru', {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            },
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
            }));
    };


    return <></>;
}