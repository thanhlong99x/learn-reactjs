import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from "./pages/admin/product/list";
import Header from "./component/admin/header";
import Nav from "./component/admin/nav";
import AddFormProduct from "./pages/admin/product/add";
import Dashboard from "./component/admin/dashboard"
import EditFormProduct from "./pages/admin/product/edit";

const Routes = ( props ) => {
    return(
        <Router>
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Nav />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Switch>
            <Route exact path="/">
                <Dashboard />
              </Route>
              <Route exact path="/product">
                <List {...props} />
              </Route>
              <Route path="/product/:id/edit">
                <EditFormProduct {...props} />
              </Route>
              <Route path="/product/add">
                <AddFormProduct {...props} />
              </Route>
            </Switch>
            </main>
          </div>
        </div>
      </div>
    </Router>
    )
}
export default Routes;