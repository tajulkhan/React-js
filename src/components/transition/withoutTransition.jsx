import { useState } from "react";

export default function WithoutTransition(){
    const [searchTerm, setSearchTerm] = useState('');
    const [list, setList] = useState(
        Array.from({length: 10}, (_, i) => `Item ${i + 1}`)
    );

    const [filteredList, setFilteredList] = useState(list);
    const handleSearch = (e)=>{
        const value = e.target.value;
        setSearchTerm(value);
        const filtered = list.filter((item)=>
            item.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredList(filtered);
    }
    return(
        <>
        <h2>Without useTransition Example</h2>
        <div className="">
            <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search..." /> <br />
            {filteredList.map((item, index)=>(<div key={index}>{item}</div>))}
        </div>
        </>
    );
}