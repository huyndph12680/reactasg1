import { Link } from "react-router-dom";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AddProduct from "./ThemSP";
import { remove } from "./api/productAPI";
import Edit from "./SuaSP";
import "./styles.css";
const Product = (props) => {
  const { url } = useRouteMatch();

  const removeProduct = async (id) => {
    try {
      remove(id);
      props.onDelete(id);
    } catch (error) {}
  };

  return (
    <div className = "product" >
      <Switch>
        <Route exact path={url}>
          {props.products.map((item, index) => (
            <div key={index} className = "box">
              
              <div className = "LinkEdit">
              <Link to={`/product/${item.id}`}>{item.name}</Link>
              </div>
              <div className = "LinkEdit">
              <button onClick={() => removeProduct(item.id)} className ="buttonproduct">Delete</button>
              </div>
              <div className = "LinkEdit">
              <Link to={`/product/${item.id}/edit`} className = "LinkEdit">Edit</Link>
              {/* <button to={`/product/${item.id}/edit`} className ="buttonproduct">edit</button> */}
              </div>
            </div>
          ))}
        </Route>
        <Route path={`${url}/add`}>
          <AddProduct {...props} />
        </Route>
        <Route path={`${url}/:id`} exact>
          Detail Product
        </Route>
        <Route path={`${url}/:id/edit`}>
          <Edit {...props} />
        </Route>
      </Switch>
    </div>
  );
};
export default Product;
