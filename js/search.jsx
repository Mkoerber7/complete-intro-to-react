import React from 'react';
import preload from '../data.json';
import ShowCard from './showCard';

const Search = () => (
    <div className="search">
    <div>
        {preload.shows.map(show => <ShowCard key={show.imdbID} {...show} />)}
    </div>
    </div>
);

export default Search;