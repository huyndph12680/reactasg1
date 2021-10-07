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
      // console.log("response", response);
      props.onUpdate(response.data);
    });
  };
  return (
    <>
    <p> Tên sản Phẩm :</p>
      {JSON.stringify(product.name)}
      <p> Giá sản phẩm:</p>
      {JSON.stringify(product.price)}
      <p> mô tả sản phẩm:</p>
      {JSON.stringify(product.desc)}
      <hr />
      <h2>Cập nhật sản phẩm</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" defaultValue={product.name} {...register("name")} />
        <br />
        <input
          type="number"
          defaultValue={product.price}
          {...register("price")}
        />
        <br />
        <input type="text" defaultValue={product.desc} {...register("desc")} />
        <br/>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default Edit;
