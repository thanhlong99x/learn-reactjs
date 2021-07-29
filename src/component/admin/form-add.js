import { useState } from "react/cjs/react.development";
import { useForm } from "react-hook-form";

const AddFormProduct = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const fakeValue = {
      id: Math.random().toString(36).substring(7),
      ...data,
    };
    props.onAdd(fakeValue);
    // console.log(fakeValue);
  };
  //     const [controlValue, setControlValue] = useState({});
  // const onHandleChange = (event) => {
  //     const target = event.target;
  //     const value = target.value;
  //     const name = target.name;
  //     setControlValue({
  //         ...controlValue, //spread operator 41 38
  //         [name]: value
  //     });
  // };

  // const onHandleSubmit = (e) =>{
  //   e.preventDefault();
  //   const fakeValue= {
  //     id: Math.random().toString(36).substring(7), ... controlValue
  //   }
  //   props.onAdd(fakeValue);
  // }
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="h2">Add product</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="nb-3">
          <label className="form-label">tên sản phẩm</label> <br />
          <input
            type="text"
            className="form-control"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-danger mt-3">ten khong duoc de trong</span>
          )}
        </div>
        <div className="nb-3">
          <label className="form-label" />
          giá sản phẩm
          <input
            type="number"
            className="form-control"
            {...register("price", { required: true })}
          />
          {errors.price && (
            <span className="text-danger mt-3">gia khong duoc de trong</span>
          )}
        </div>
        <div className="nb-3">
          <label className="form-label" />
          tình trạng
          <select className="form-control" {...register("status")}>
            <option value={false}>het hang</option>
            <option value={true}>con hang</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Them san pham
        </button>
      </form>
    </div>
  );
};
export default AddFormProduct;
