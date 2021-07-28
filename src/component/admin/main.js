import AddFormProduct from "./form-add";

export default function Main(props) {
    console.log(props);
    return(
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">

        <AddFormProduct {...props} />

        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Quản lý sản phẩm</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group me-2">
              <button type="button" className="btn btn-sm btn-outline-secondary" >Thêm sản phẩm</button>
            </div>
          </div>
        </div>
        
        <h2>Danh sách sản phẩm</h2>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Ten san pham</th>
                <th scope="col">Gia san pham</th>
                <th scope="col">Trang thai</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
            {props.products.map((product, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}đ</td>
                <td>
                  {product.status ? (
                    <span className="text-primary">Còn hàng</span>
                  ) : (
                    <span className="text-danger">Hết hàng</span>
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick= { () => props.onAdd(product.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </main>
    )
}