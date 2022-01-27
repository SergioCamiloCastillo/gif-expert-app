import React from "react";
import { useState, useEffect } from "react/cjs/react.development";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category).then((gifs) => setImages(gifs));
  }, [category]);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((item) => (
          <ol>
            <li key={item.id} className="card animate__animated animate__bounce">
              <img src={item.url} alt={item.title} />
              <p>{item.title}</p>
            </li>
          </ol>
        ))}
      </div>
    </>
  );
};

export default GifGrid;
