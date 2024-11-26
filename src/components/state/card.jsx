import { useState, useEffect } from "react";
// import { data } from "../../data/dataset";

export default function Card({ products = [], setProducts }) {
  const [totalNoOfProducts, setTotalNoOfProducts] = useState(products.length);

  useEffect(() => {
    setTotalNoOfProducts(products.length);
  }, [products]);

  const handleDeleteAll = () => {
    setProducts([]);
  };
  const handleDeleteProduct = (id) => {
    const updateProducts = products.filter((x) => x.id !== id);
    setProducts(updateProducts);
  };
  if (products.length === 0) {
    return <h2>Card is empy</h2>;
  }
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
      </div>
    </>
  );
}

// export default function Card() {
//   const [products, setProducts] = useState(data);
//   const [totalNoOfProducts, setTotalNoOfProducts] = useState(data.length);
//   const handleDeleteAll = () => {
//     setProducts([]);
//     setTotalNoOfProducts(0);
//   };
//   const handleDeleteProduct = (id) => {
//     const updateProducts = products.filter((x) => x.id !== id);
//     setProducts(updateProducts);
//     setTotalNoOfProducts(updateProducts.length);
//   };
//   const resetProducts = () => {
//     setProducts(data);
//     setTotalNoOfProducts(data.length);
//   };
//   return (
//     <>
//       <div className="cards">
//         <h1>Item in card: {totalNoOfProducts}</h1>
//         {products.map((product) => {
//           return (
//             <div className="card" key={product.id}>
//               <p>
//                 {product.name} Rs.{product.price}
//               </p>
//               <button
//                 className="btn-delete"
//                 onClick={() => {
//                   handleDeleteProduct(product.id);
//                 }}
//               >
//                 Delete
//               </button>
//             </div>
//           );
//         })}
//         <button className="btn-delete-all" onClick={handleDeleteAll}>
//           Delete all
//         </button>
//         <button className="btn-delete-all reset" onClick={resetProducts}>
//           Reset
//         </button>
//       </div>
//     </>
//   );
// }
