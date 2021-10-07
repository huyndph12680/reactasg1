import { useEffect, useState } from "react";
import { getAll } from "./api/productAPI";
import Routes from "./Routes";
import "./styles.css";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAll().then((response) => setProducts(response.data));
  }, []);
  const onHandleAdd = (product) => {
    setProducts([...products, product]);
  };
  const onHandleDelete = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  };
  const onHandleUpdate = (product) => {
    const newProducts = products.map((item) =>
      item.id === product.id ? product : item
    );
    setProducts(newProducts);
  };
  return (
    <div className="App">
      <Routes
        products={products}
        onAdd={onHandleAdd}
        onDelete={onHandleDelete}
        onUpdate={onHandleUpdate}
      />
    </div>
  );
}
