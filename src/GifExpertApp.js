import React, { useState } from "react";
import CategoryAdd from "./components/CategoryAdd";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [newValue, setNewValue] = useState("");
  const [categories, setCategories] = useState([]);

  return (
    <div>
      <h2>Gif expert app</h2>
      <CategoryAdd setCategories={setCategories} />
      <hr />
      <ol>
        {categories?.map((category) => (
          <GifGrid category={category} key={category} />
        ))}
      </ol>
    </div>
  );
};

export default GifExpertApp;
