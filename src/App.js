// import Header from "./component/header";

import Header from "./component/admin/header";
import Main from "./component/admin/main";
import Nav from "./component/admin/nav";
import { useState } from "react";
import { onHandleAdd } from "react";
import { useEffect } from "react";
import { add, getAll, remove } from "./api/productApi";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// eslint-disable-next-line
function App() {
  const API = "https://60f7acd19cdca00017454f2e.mockapi.io/product";

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
    setProducts([...products, item]);
  };

  return (
    <Router>
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Nav />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Switch>
              <Route exact path="/product">
                <Main 
                  products={products}
                  onRemove={onRemoveHandler}
                  onAdd={onAddHandler}
                />
              </Route>
              <Route path="/product/:id/edit">
                Edit
              </Route>
            </Switch>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
