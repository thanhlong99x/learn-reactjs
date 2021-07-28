import { useState } from "react/cjs/react.development";
import props from 'prop-types'

const AddFormProduct = (props) => {
    const [controlValue, setControlValue] = useState({});
const onHandleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setControlValue({
        ...controlValue, //spread operator 41 38
        [name]: value
    });
};

const onHandleSubmit = (e) =>{
  e.preventDefault();
  props.onAdd(controlValue);
}
    return(
        <div >
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
  <h2 className='h2'>Add product</h2>
  </div>
  <form onSubmit={onHandleSubmit}>
    <div className="nb-3">
      <label  className="form-label" >tên sản phẩm</label> <br />
      <input type="text" className="form-control" onChange={onHandleChange} name="name"/>
    </div>
    <div className="nb-3">
      <label className="form-label" />giá sản phẩm
      <input type="number" className="form-control" name="price" onChange={onHandleChange}/>
    </div>
    <div className="nb-3">
      <label className="form-label" />tình trạng
      <select className="form-control" name="status" onChange={onHandleChange}>
        <option value={0}>het hang</option>
        <option value={1}>con hang</option>
      </select>
    </div>
    <button type="submit" className="btn btn-primary">Them san pham</button>
  </form>
  
</div>

    )
};
export default AddFormProduct;