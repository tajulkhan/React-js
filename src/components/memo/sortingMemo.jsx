import { useState, useMemo } from "react";

export default function SortingMemo() {
  const [sortOrder, setSortOrder] = useState("asc");
  const [items, setItems] = useState([8, 4, 5, 2, 1]);

  //   Sorting items without memory
  //   const sortedItems = items.sort((a, b) => {
  //     console.log("Sorting items without memory");
  //     return sortOrder === "asc" ? a - b : b - a;
  //   });
  const sortedItems = useMemo(() => {
    console.log("Sorting items with memory");
    return items.slice().sort((a, b) => {
      return sortOrder === "asc" ? a - b : b - a;
    });
  }, [items, sortOrder]);

  return (
    <div>
      <h2>SortingMemo example with (useMemo)</h2>
      {sortedItems.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
      <button
        onClick={() => {
          setSortOrder(sortOrder === "asc" ? "desc" : "asc");
          console.log(sortedItems);
        }}
      >
        Toggle Sort Order
      </button>
    </div>
  );
}
