import { useState } from "react";
import { data } from "../../data/dataset";

export default function Card() {
  const [products, setProducts] = useState(data);
  const [totalNoOfProducts, setTotalNoOfProducts] = useState(data.length);
  const handleDeleteAll = () => {
    setProducts([]);
    setTotalNoOfProducts(0);
  };
  const handleDeleteProduct = (id) => {
    const updateProducts = products.filter((x) => x.id !== id);
    setProducts(updateProducts);
    setTotalNoOfProducts(updateProducts.length);
  };
  const resetProducts = () => {
    setProducts(data);
    setTotalNoOfProducts(data.length);
  };
  return (
    <>
      <div className="cards">
        <h1>Item in card: {totalNoOfProducts}</h1>
        {products.map((product) => {
          return (
            <div className="card" key={product.id}>
              <p>
                {product.name} Rs.{product.price}
              </p>
              <button
                className="btn-delete"
                onClick={() => {
                  handleDeleteProduct(product.id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
        <button className="btn-delete-all" onClick={handleDeleteAll}>
          Delete all
        </button>
        <button className="btn-delete-all reset" onClick={resetProducts}>
          Reset
        </button>
      </div>
    </>
  );
}
