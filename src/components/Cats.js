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
  // space-y-1.5 p-10 h-96 w-96 flex justify-evenly
  return (
    
    <div className= "max-w-7xl columns-5 mx-auto space-y-4">
      {cats.map((cat) => (
        <div key={cat.id} className="overflow-hidden rounded-md">
          <img  src={cat.url} alt="cat" />
        </div>
      ))}
    </div>
    
    
  );
};

export default Cats;
// rounded grid grid-cols-5 gap-2 content-evenly