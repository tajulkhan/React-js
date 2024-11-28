import { useState } from "react";

export function useFilter(initialItems) {
  const [searchTerm, setSearchTerm] = useState("");
  const filterItems = initialItems.filter((item) => 
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return { filterItems, searchTerm, setSearchTerm };
}
