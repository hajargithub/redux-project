import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTitle } from "../../store/features/product/productSlice";
const ProductList = () => {
  const [label, setLabel] = useState("");
  const { title, products } = useSelector((state) => state.product);
  const { title: titleblog } = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const changeTitle = () => {
    dispatch(setTitle(label));
  };
  return (
    <>
      <div className="my-3 mx-auto">
        <h1>{title}</h1>
        <input
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
        <button className="btn-primary" onClick={changeTitle}>
          Click here
        </button>
        <h2>{titleblog}</h2>
        <div className="div">
          <ul>
            {products.map((product) => (
              <li key={product.id}> {product.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductList;
