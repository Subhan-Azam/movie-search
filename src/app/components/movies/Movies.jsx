"use client";
import { useEffect, useState } from "react";
import EachMovies from "../eachMovie/EachMovie";
import axios from "axios";

export default function Movies() {
  const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
  const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const getAllMovies = async () => {
    try {
      const res = await axios.get(APIURL);
      setMovies("response==>", res.data.results);
      console.log("response==>", res.data.results);
    } catch (error) {
      console.log("error==>", error);
    }
  };

  useEffect(() => {
    if (search === "") {
      getAllMovies();
    } else {
      // getSearchedMovies();
    }
  }, [search]);

  return (
    <div className="container max-w-[1100px] mx-auto min-h-[500px] shadow-xl px-6 py-4">
      <input
        type="search"
        className="w-full h-10 px-5 rounded-md border border-black"
      />
      <EachMovies movies={movies} />
    </div>
  );
}



// import React from 'react'
// import Box from '../box/Box'

// export default function Result(props) {
//     const boxes = props.movies.map(
//         (item,index) => {
//             return <Box key={index} image={item.poster_path} title={item.original_title} rating={item.vote_average} />
//         }
//     )
//     return (
//         <div className='w-full grid md:grid-cols-4 gap-5'>
//             {boxes}
//         </div>
//     )
// }

