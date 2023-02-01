import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cats = () => {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    axios
      .get('https://api.thecatapi.com/v1/images/search?limit=35&api_key=live_2iTYDHO3IIltr8nHV8DS3ERMdf6MaOD69XmHNtfw5GINuX5lXoHdJBBKzgXbR6lP')
      .then((response) => setCats(response.data))
      .catch((error) => console.log(error));
  }, []);
  
  return (
    
    <div className= "max-w-7xl laptop:columns-5 mx-auto space-y-4">
      {cats.map((cat) => (
        <div key={cat.id} className="overflow-hidden bg-gray-300 rounded-md">
          <img  src={cat.url} alt="cat" />
        </div>
      ))}
    </div>
    
    
    
  );
};

export default Cats;
// https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME