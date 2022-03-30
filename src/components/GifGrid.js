import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "../components/GifGridItem";

export const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="category-h1 animate__animated animate__flipInY ">
        {category}
      </h3>

      {loading && <p className="center-loading">Loading ......</p>}

      <div className="card-grid ">
        {data.map((img) => (
          <GifGridItem key={img.id} {...img}></GifGridItem>
        ))}
      </div>
    </>
  );
};
