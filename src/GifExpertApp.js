import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import "../src/index.css";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  return (
    <>
      <h2 className="text-expert">GiftExpertApp</h2>

      <AddCategory setCategories={setCategories}></AddCategory>
      <hr></hr>

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category}></GifGrid>
        ))}
      </ol>
    </>
  );
};
