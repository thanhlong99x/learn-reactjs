// import Header from "./component/header";

import Header from "./component/admin/header";
import Main from "./component/admin/main";
import Nav from "./component/admin/nav";

// eslint-disable-next-line
function App(){
  return(
    <div>
      <div>
  <Header/>
  <div className="container-fluid">
    <div className="row">
      <Nav/>
      <Main/>
    </div>
  </div>
</div>

    </div>
  )
}

export default App;
