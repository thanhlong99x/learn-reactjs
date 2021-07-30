
import { Link } from "react-router-dom";

export default function List(props) {
  console.log(props);
  return (
    <div >
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Quản lý sản phẩm</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <Link type="button" className="btn btn-sm btn-outline-secondary" to="/product/add">
              Thêm sản phẩm
            </Link>
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
                    onClick={() => props.onRemove(product.id)}
                  >
                    Delete
                  </button>
                  <Link className="btn btn-primary " to ={`/product/${product.id}/edit`}> Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
