import { useState } from "react";
import Card from "../state/card";
export default function Home() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [cardItems, setCardItems] = useState([]);
  
  const handleAddProduct = (e) => {
    e.preventDefault();
    if (productName && price) {
      const newProduct = {
        id: Date.now(),
        name: productName,
        price: parseFloat(price),
      };
      console.log(newProduct);
      setCardItems([...cardItems, newProduct])
      setProductName("");
      setPrice("");
    }
  };
  return (
    <>
    <div className="form-card">
      <h3>Add Product</h3>
      {/* Controlled inputs */}
      <form onClick={handleAddProduct}>
        <label htmlFor="productName">Product Name</label> <br />
        <input
          type="text"
          onChange={(e) => {
            setProductName(e.target.value);
          }}
          value={productName}
        />{" "}
        <br />
        <label htmlFor="price">Price</label> <br />
        <input
          type="text"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          value={price}
        />{" "}
        <br /> <br />
        <button type="submit">Add to Card</button>
      </form>
    </div>
    <div className="product-data">
        <Card products={cardItems} setProducts={setCardItems}/>
    </div>
    </>
  );
}
