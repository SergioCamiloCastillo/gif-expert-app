import React from "react";
import { useState, useEffect } from "react/cjs/react.development";

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

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
    setImages(gifs);
  };
  return (
    <div>
      <h3>{category}</h3>
      <ol>
        {images.map((item) => (
          <li key={item.id}>
            <img src={item.url} alt={item.titlw} />
            <p>{item.title}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default GifGrid;
