import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { get, update } from "./api/productAPI";

const Edit = (props) => {
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const [product, setProduct] = useState({});

  useEffect(() => {
    get(id).then((response) => {
      setProduct(response.data);
      reset(response.data);
    });
  }, [reset]);

  const onSubmit = (data) => {
    const product = {
      id: id,
      ...data
    };
    update(product).then((response) => {
      
      props.onUpdate(response.data);
    });
  };
  return (
    <>
    <p> Tên sản Phẩm : {JSON.stringify(product.name)}</p>
      
      <p> Giá sản phẩm: {JSON.stringify(product.price)}</p>
      
      <p> mô tả sản phẩm: {JSON.stringify(product.desc)}</p>
      
      <hr />
      <h2>Cập nhật sản phẩm</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className="update" type="text" defaultValue={product.name} {...register("name")} />
        <br />
        <input
        className="update"
          type="number"
          defaultValue={product.price}
          {...register("price")}
        />
        <br />
        <input className="update" type="text" defaultValue={product.desc} {...register("desc")} />
        <br/>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default Edit;
