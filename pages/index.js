import Card from "@/components/Card";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [hitsList, setHitsList] = useState([]);
  const [query, setQuery] = useState(""); // State to store the user's input

  // Function to fetch data based on the user input
  const fetchRecipes = () => {
    let url = `/api/data?query=${query}`; // Use the query state in the API request
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res.hits);
        setHitsList(res.hits);
      })
      .catch((err) => {
        console.log("error : ", err);
      });
  };
  useEffect(() => {
    let url = `/api/data?query=chicken`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res.hits);
        setHitsList(res.hits)
      })
      .catch((err) => {
        console.log("error : ", err);
      });
  },[]);

  return (
    <div>
      <h1 className="text-accent bg-secondary text-center font-styled text-xl">
        The Recipe Finder
      </h1>
      <div className="mb-4 flex justify-around mt-8">
        <input
          type="text"
          className="w-2/3 rounded-md bg-neutral p-4"
          id="searchQuery"
          placeholder="Insert ingredients"
          value={query}
          onChange={e => setQuery(e.target.value)} // Update query state on input change
        />
        <button onClick={fetchRecipes} className="bg-neutral text-white p-2 rounded-md bg-neutral p-4">Search</button> {/* Button to trigger the search */}
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8">
        {hitsList.map((hit, index) => (
          <Card key={index} hit={hit} /> // Added key prop for better performance
        ))}
      </div>
    </div>
  );
}
