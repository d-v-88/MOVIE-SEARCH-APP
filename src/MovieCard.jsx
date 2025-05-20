import React from 'react';

const MovieCard = ({
  movie: { imdbID, Year, Poster, Title, Type },
  onSave,
  isSaved
}) => {
  return (
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
          alt={Title}
        />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
        <button
          onClick={() => onSave({ imdbID, Year, Poster, Title, Type })}
          disabled={isSaved}
          className={`mt-2 px-3 py-1 rounded ${isSaved ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
        >
          {isSaved ? 'Saved' : 'Save'}
        </button>

        {/* <button
          onClick={() => onSave({ imdbID, Year, Poster, Title, Type })}
          disabled={isSaved}
          className={`mt-2 px-3 py-1 rounded ${isSaved ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
        >
          {isSaved ? 'Saved' : 'Save'}
        </button> */}
      </div>
    </div>
  );
};

export default MovieCard;

