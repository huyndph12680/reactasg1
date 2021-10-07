import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { add } from "./api/productAPI";
import "./styles.css"
const AddProduct = (props) => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  // Submit form để thêm sản phẩm
  const onSubmit = async (product) => {
    try {
      const { data } = await add(product);
      props.onAdd(data);
      history.push("/product");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className = "from">
      <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input type="text"{...register("name", { required: true })}placeholder="Tên sản phẩm" className="inputtext" />
        <br />
        {errors.name && <span>Field name is require</span>}
      </div>
      <div>
         <input type="price"{...register("price", { required: true })}placeholder="Giá sản phẩm" className="inputtext"/>
        <br />
        {errors.price && <span>Field price is require</span>}
      </div>
      <div>
        <textarea {...register("desc")} placeholder="mô tả sản phẩm" className="inputtext" ></textarea>
      </div>
      <button type="submit">Thêm sản phẩm</button>
    </form>
    </div>
  );
};
export default AddProduct;
