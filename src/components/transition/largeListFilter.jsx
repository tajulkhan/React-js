import { useState, useTransition } from "react";

export default function LargeListFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [list, setList] = useState(
    Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`)
  );
  const [filteredList, setFilteredList] = useState(list);

  // Using the transition hook
  const [isPending, startTransition] = useTransition();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Mark this update as a transition not priorty
    startTransition(() => {
      const filtered = list.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredList(filtered);    
    });

  };
  return (
    <>
      <h2>With useTransition Example</h2>
      <div className="">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search..."
        />{" "}
        <br />
        {isPending && <p>Loading...</p> }{' '}
        {/* Show a loading spinner or message during the transition */}
        {filteredList.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </>
  );
}
