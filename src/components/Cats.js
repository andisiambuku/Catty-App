import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cats = () => {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    axios
      .get('https://api.thecatapi.com/v1/images/search?limit=10')
      .then((response) => setCats(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {cats.map((cat) => (
        <img key={cat.id} src={cat.url} alt="cat" />
      ))}
    </div>
  );
};

export default Cats;
