import React from "react";
import { useState } from "react/cjs/react.development";

const GifGrid = ({ category }) => {

  const [count, setCount] = useState(0);
  
  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?q=Rick+and+morty&limit=10&api_key=gImX2b1jM1O2RXEp2rQdgKCkHECDOLsV`;
    const rta = await fetch(url);
    const { data } = await rta.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    console.log(gifs);
  };
  getGifs();
  return (
    <div>
      <h3>{category}</h3>
    </div>
  );
};

export default GifGrid;
