import React, { useEffect, useState } from 'react';
import Square from '../components/Square';

const logger = require('../logger');

const apiBaseUrl = 'http://localhost:1664';

function App() {
  const [squares, setSquares] = useState([]);

  useEffect(() => {
    const getSquaresFromApi = async () => {
      try {
        const httpResponse = await fetch(`${apiBaseUrl}/squares`);
        const squaresData = await httpResponse.json();
        setSquares(squaresData);
      } catch (error) {
        logger.error(error);
      }
    };
    getSquaresFromApi();
  }, []);

  return (
    <>
      {squares.map((square) => (
        <Square
          key={square.id}
          id={square.id}
          name={square.name}
          crops={square.crops}
        />
      ))}
    </>
  );
}

export default App;
