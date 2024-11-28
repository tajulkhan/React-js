// import { useState } from "react";
import { useFilter } from "./useFilter";

export default function NameFilterComponent() {
  const initialNames = ["taj", "vasim", "sulthan", "faree"];
    const {filterItems, searchTerm, setSearchTerm} = useFilter(initialNames);
  // state to manage to search term
//   const [searchTerm, setSearchTerm] = useState("");

  // Basic filter logic directory in the component
//   const filterItems = initialNames.filter((name) =>
//     name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
//   );
  return (
    <div>
      <h2>Name Filter Component Basic filter & custom hooks</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search names.."
      /> <br />
      <h5 style={{marginTop:5, marginBottom:5 }}>Filtered Names</h5>
      {filterItems.map((name, index)=>(<div key={index}>{name}</div>))}
    </div>
  );
}
