import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
  import "./styles.css";
  import Product from "./SanPham";
  import TrangChu from "./TrangChu";
  import Login from "./pages/login";
import Dangki from "./pages/resign";
  const Routes = (props) => {
    return (
     <div className ="header">
        <Router>
        <nav className ="Nav-header">
          <ul> 
              <NavLink   to="/" activeClassName="active" exact className="menu"> Trang chủ </NavLink>      
              <NavLink to="/product" activeClassName="active" className="menu" >Sản Phẩm</NavLink> 
              <NavLink to="/product/add" activeClassName="active" className="menu"> Thêm sản Phẩm</NavLink> 
              <NavLink to="/product/login" activeClassName="active" className="menu"> Đăng nhập</NavLink> 
              <NavLink to="/product/Regsign" activeClassName="active" className="menu"> Đăng kí</NavLink> 
          </ul>
        </nav>
        <Switch>
          {/* <Route path="/" exact> Home</Route> */}
          <Route path="/" exact><TrangChu/></Route>
          <Route path="/product/login" ><Login /></Route>
          <Route path="/product/Regsign" ><Dangki/></Route>
          <Route path="/product"> <Product {...props} /> </Route>
        </Switch>
      </Router>
     </div>
    );
  };
  export default Routes;
  