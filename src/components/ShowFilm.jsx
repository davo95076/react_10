import React, { useMemo, useState } from 'react';

const ShowFilms = React.memo(
  ({ genres, films, deleteGenreById, deleteFilmById }) => {
    const [str, setstr] = useState('');
    const filterFilm = useMemo(() =>
      films.filter((elm) => elm.genre.includes(str), [str]),
    );
    return (
      <div>
        <table className="table table-info table-hover table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>DeleteGenre</th>
            </tr>
          </thead>
          <tbody>
            {genres.map((elm) => {
              return (
                <tr key={elm.id}>
                  <td>{elm.name}</td>
                  <td>
                    <button
                      onClick={() => deleteGenreById(elm.id)}
                      className="btn btn-danger"
                    >
                      &times;
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <hr />
        <select onChange={(e) => setstr(e.target.value)}>
          {genres.map((elm) => {
            return (
              <option value={elm.name} key={elm.id}>
                {elm.name}
              </option>
            );
          })}
        </select>
        <hr />
        <table className="table table-info table-hover table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Genre</th>
              <th>Image</th>
              <th>Time</th>
              <th>Desc</th>
              <th>DeletFilms</th>
            </tr>
          </thead>
          <tbody>
            {filterFilm.map((elm) => {
              return (
                <tr key={elm.id}>
                  <td>{elm.name}</td>
                  <td>{elm.date}</td>
                  <td>{elm.genre}</td>
                  <td>
                    <img src={elm.img} alt="" width={100} />
                  </td>
                  <td>{elm.time}</td>
                  <td>{elm.desc}</td>
                  <td>
                    <button
                      onClick={() => deleteFilmById(elm.id)}
                      className="btn btn-danger"
                    >
                      &times;
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  },
);

export default ShowFilms;
