import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import { useForm } from "react-hook-form";
import { get } from "../../../api/productApi";

const EditFormProduct = (props) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const history = useHistory();

  const edit = () => {
    console.log(id);
  };

  //call api
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await get(id);
        setProduct(data);
        reset(data);
        edit(id);
      } catch (error) {
        console.log("error", error);
      }
    };
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const fakeValue = {
      id: id,
      ...data,
    };

    props.onEdit(fakeValue);
    history.push("/product");
  };
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="h2">Cập nhập sản phẩm</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="nb-3">
          <label className="form-label">tên sản phẩm</label> <br />
          <input
            type="text"
            className="form-control"
            defaultValue={product.name}
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-danger mt-3">
              Tên sản phẩm không được để trống
            </span>
          )}
        </div>
        <div className="nb-3">
          <label className="form-label" />
          giá sản phẩm
          <input
            type="number"
            className="form-control"
            defaultValue={product.price}
            {...register("price", { required: true })}
          />
          {errors.price && (
            <span className="text-danger mt-3">
              Giá sản phẩm không được để trống
            </span>
          )}
        </div>
        <div className="nb-3">
          <label className="form-label" />
          Tình trạng
          <select
            className="form-control"
            {...register("status")}
            defaultValue={product.status}
          >
            <option value={false}>Hết Hàng</option>
            <option value={true}>Còn hàng</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Cập nhật sản phẩm
        </button>
      </form>
    </div>
  );
};
export default EditFormProduct;
