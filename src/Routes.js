import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
  import "./styles.css";
  import Product from "./SanPham";
  import TrangChu from "./TrangChu";

  const Routes = (props) => {
    return (
     <div className ="header">
        <Router>
        <nav className ="Nav-header">
          <ul> 
              <NavLink   to="/" activeClassName="active" exact className="menu"> Trang chủ </NavLink>      
              <NavLink to="/product" activeClassName="active" className="menu" >Sản Phẩm</NavLink> 
              <NavLink to="/product/add" activeClassName="active" className="menu"> Thêm sản Phẩm</NavLink> 
          </ul>
        </nav>
        <Switch>
          {/* <Route path="/" exact> Home</Route> */}
          <Route path="/" exact><TrangChu/></Route>
          {/* <Route path="/product" ></Route> */}
          <Route path="/product"> <Product {...props} /> </Route>
        </Switch>
      </Router>
     </div>
    );
  };
  export default Routes;
  