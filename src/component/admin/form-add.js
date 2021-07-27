const AddFormProduct = () => {
const onHandleChange = (event) => {
    console.log(event);
};
    return(
        <div >
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
  <h2 className='h2'>Add product</h2>
  
  <form>
    <div classname="nb-3">
      <label classname="form-lable" >tên sản phẩm</label> <br />
      <input type="text" classname="form-control" onchange={onHandleChange} />
    </div>
    {/* <div classname="nb-3">
      <label classname="form-lable" />giá sản phẩm
      <input type="number" classname="form-control" />
    </div>
    <div classname="nb-3">
      <label classname="form-lable" />tình trạng
      <select>
        <option value={0}>het hang</option>
        <option value={1}>con hang</option>
      </select>
    </div> */}
    <button type="submit" classname="btn btn-primary">Them san pham</button>
  </form>
  </div>
</div>

    )
};
export default AddFormProduct;