import "./styles.css";
import { useState } from "react";

export default function App() {
  const [list, setList] = useState([
    {
      name: "jackets",
      qty: 5
    },
    {
      name: "Pants",
      qty: 4
    },
    {
      name: "Scarf",
      qty: 2
    },
    {
      name: "Pajama",
      qty: 5
    },
    {
      name: "Shirt",
      qty: 6
    }
  ]);

  const handle = (e) => {
    const temp = [...list, e.target.innerHTML];
    setClicks(temp);
  };
  return (
    <>
      <h1>Clothing List</h1>
      {list.map((item, a) => (
        <button key={a} onClick={handle}>
          {item.name}:{item.qty}
        </button>
      ))}
      {/* <h1>Items Available</h1>

      {list.map((items, a) => (
        <button key={a} >
          {items} 
        </button>
      ))} */}
    </>
  );
}
