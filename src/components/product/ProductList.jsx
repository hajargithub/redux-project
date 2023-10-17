import { useSelector } from "react-redux";
import Buttons from "./Buttons";
const ProductList = () => {
  const { products } = useSelector((state) => state.product);

  return (
    <>
      {/* (table.table.table-dark>(thead>tr>th{Title}+th{Price})+(tbody>tr>td*3)) */}

      <table className="table table-dark">
        <thead>
          <tr>
            <th>Brand</th>
            <th>Title</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            // products.lenght &&
            products.map((product) => (
              <tr key={product.id}>
                <td>
                  <img
                    width="200px"
                    height="100px"
                    alt="img"
                    src={product.thumbnail}
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td className="text-end">
                  <Buttons data={product} />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
};

export default ProductList;
