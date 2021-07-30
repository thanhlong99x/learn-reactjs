import { useState } from "react";
import { useEffect } from "react";
import { add, edit, getAll, remove } from "./api/productApi";
import Routes from "./routes";

// eslint-disable-next-line
function App() {
  //chay sau khi return
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await getAll();
        setProducts(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getProducts();
  }, []);

  const [products, setProducts] = useState([]);

  // xoa san pham
  const onRemoveHandler = async (id) => {
    const { data } = await remove(id);
    const newProducts = products.filter((item) => item.id !== data.id);
    setProducts(newProducts);
  };
  // them san pham
  const onAddHandler = async (item) => {
    const { data } = await add(item);
    setProducts([...products, data]);
  };
// cap nhat san pham
  const onEditHandler =async (item) => {
    try {
      const {data} = await edit(item);
      const newProducts = products.map((product) =>
        product.id == item.id ? data : product
      );
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <Routes
      products={products}
      onRemove={onRemoveHandler}
      onAdd={onAddHandler}
      onEdit={onEditHandler}
    ></Routes>
  );
}

export default App;
