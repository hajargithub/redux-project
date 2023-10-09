import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeProduct } from "../../store/features/product/productActions";
import {
  setProduct,
  updateProduct,
} from "../../store/features/product/productSlice";

const ProductForm = () => {
  const { product, edit } = useSelector((state) => state.product);

  const dispatch = useDispatch();
  const submit = (e) => {
    e.preventDefault();
    if (edit) {
      dispatch(updateProduct(product));
    } else {
      dispatch(storeProduct(product));
    }
  };
  return (
    <>
      {/* (.row.my-5>.col-6-mx-auto>h1.my-3{New Product})+(.row.my-4>.col-md-6.mx-auto>(.form-group.my-3>label+input#title.form-control)+(.form-group.my-3>label+input:number.form-control#price))+(.d-grid.my-3>button.btn.btn-success{Add a product}) */}

      <div className="row my-4">
        <div className="col-6-mx-auto">
          <h1 className="my-3 text-center">New Product</h1>
        </div>
      </div>
      <div className="row my-4">
        <form onSubmit={submit}>
          <div className="col-md-6 mx-auto">
            <div className="form-group my-3">
              <label htmlFor="title"> Title</label>
              <input
                value={product.title}
                onChange={({ target: { name, value } }) =>
                  dispatch(setProduct({ name, value }))
                }
                type="text"
                name="title"
                id="title"
                className="form-control"
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor=""> Price</label>
              <input
                value={product.price}
                onChange={({ target: { name, value } }) =>
                  dispatch(setProduct({ name, value }))
                }
                type="number"
                name="price"
                id="price"
                className="form-control"
              />
            </div>
            <div className="d-grid my-3">
              {edit && (
                <button className="btn btn-warning">Update a product</button>
              )}
              {!edit && (
                <button className="btn btn-success">Add a product</button>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductForm;
