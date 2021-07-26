export default function Nav(){
    return(
        <nav id="sidebarMenu" classname="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
  <div classname="position-sticky pt-3">
    <ul classname="nav flex-column">
      <li classname="nav-item">
        <a classname="nav-link active" aria-current="page">
          <span data-feather="home">
            Dashboard
          </span></a>
      </li>
      <li classname="nav-item">
        <a classname="nav-link">
          <span data-feather="file">
            Orders
          </span></a>
      </li>
      <li classname="nav-item">
        <a classname="nav-link">
          <span data-feather="shopping-cart">
            Products
          </span></a>
      </li>
    </ul>
  </div>
</nav>

    )
}