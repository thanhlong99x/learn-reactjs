// import Header from "./component/header";

import Header from "./component/admin/header";
import Main from "./component/admin/main";
import Nav from "./component/admin/nav";
import { useState } from "react";
import {onHandleAdd} from "react";

// eslint-disable-next-line
function App(){

  const [products, setProducts] = useState([
  {id: 1, name: 'san pham 1', price: 200, status: true},
   {id: 2, name: 'san pham 2', price: 200, status: false}
  ]);
  const onHandler = (id) => {
     const newProducts = products.filter((item) => item.id !=id);
     setProducts(newProducts);
    };
  return(
    <div>
      <div>
  <Header/>
  <div className="container-fluid">
    <div className="row">
      <Nav/>
      <Main products = {products} onAdd={onHandler}/>
    </div>
  </div>
</div>
    </div>
  )
}

export default App;
