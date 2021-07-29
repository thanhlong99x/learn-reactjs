import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink
              exact activeClassName="active"
              className="nav-link active"
              aria-current="page"
              to="/product"
            >
              <span data-feather="home">Dashboard</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to="/dashboard">
              <span data-feather="file" >
                Orders
              </span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to="#">
              <span data-feather="shopping-cart">Products</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
