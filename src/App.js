import logo from './logo.svg';
import './App.css';
import React, { useMemo, useState } from 'react';
import AddGenre from './components/AddGenre';
import AddFilm from './components/AddFilm';
import ShowFilms from './components/ShowFilm';

function App() {
  const url = [
    '/img/1.jpeg',
    '/img/2.webp',
    '/img/3.jpeg',
    '/img/5.webp',
    '/img/MV5BN5.jpg',
  ];
  const [genres, setGenres] = useState([
    { id: 1, name: 'gen1' },
    { id: 2, name: 'gen2' },
    { id: 3, name: 'gen3' },
  ]);
  const [films, setFilms] = useState([
    {
      id: 1,
      name: 'f1',
      date: 2012,
      genre: 'gen1',
      img: '/img/1.jpeg',
      time: 32,
      desc: 'nice film',
    },
    {
      id: 2,
      name: 'f2',
      date: 2015,
      genre: 'gen2',
      img: '/img/2.webp',
      time: 32,
      desc: 'nice film',
    },
    {
      id: 3,
      name: 'f3',
      date: 2018,
      genre: 'gen1',
      img: '/img/3.jpeg',
      time: 32,
      desc: 'nice film',
    },
    {
      id: 4,
      name: 'f4',
      date: 2022,
      genre: 'gen3',
      img: '/img/5.webp',
      time: 32,
      desc: 'nice film',
    },
    {
      id: 5,
      name: 'f5',
      date: 2024,
      genre: 'gen2',
      img: '/img/MV5BN5.jpg',
      time: 32,
      desc: 'nice film',
    },
  ]);
  const createGenre = (data) => {
    setGenres([...genres, data]);
  };
  const createFilm = (data) => {
    setFilms([...films, data]);
  };
  const deleteGenreById = (id) => {
    setGenres([...genres.filter((elm) => elm.id != id)]);
  };

  const deleteFilmById = (id) => {
    setFilms([...films.filter((elm) => elm.id != id)]);
  };
  
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="border border-3">
              <AddGenre createGenre={createGenre} />
            </div>
            <div className="border border-3">
              <AddFilm createFilm={createFilm} url={url} genres={genres} />
            </div>
          </div>
          <div className="col border border-3">
         
            <ShowFilms
              genres={genres}
              films={films}
              deleteGenreById={deleteGenreById}
              deleteFilmById={deleteFilmById}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
