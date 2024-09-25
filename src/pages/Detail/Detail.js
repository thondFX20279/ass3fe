import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductItem from "../../Component/ProductItem/ProductItem";
import classNames from "classnames/bind";
import classes from "./Detail.module.scss";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import productApi from "../../api/productApi";
import cartApi from "../../api/cartApi";
// variable
const cx = classNames.bind(classes);

// component
const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // get id to fetch data
  const { id } = useParams();

  // state to update quantity
  const [quantity, setQuantity] = useState(1);

  // state to hold product info and related-product
  const [product, setProduct] = useState(null);

  const [relatedProduct, setRelatedProduct] = useState(null);
  useEffect(() => {
    try {
      const getProduct = async () => {
        const res = await productApi.getProduct(id);
        if (res.data.success) {
          setProduct(res.data.product);
        } else {
          setProduct(null);
        }
      };
      getProduct();
      const getRelatedProduct = async () => {
        const res = await productApi.getRelatedProduct(id);
        if (res.data.success) {
          setRelatedProduct(res.data.relatedProducts);
        } else {
          setRelatedProduct(null);
        }
      };
      getRelatedProduct();
    } catch (error) {
      alert(error.response.data.message);
    }
  }, [id]);
  // call api

  // convert price format
  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  // reject (1) (2) (3) in description
  const rejectNumber = (text) => {
    return text.replace(/\(\d\)/g, "");
  };

  // handle change quantity
  const quantityChangeHandler = (quantity) => {
    setQuantity(Math.max(1, quantity));
  };

  // handle add to cart
  const addToCartHandler = async (product) => {
    try {
      dispatch(cartActions.addToCart({ productId: product._id, quantity: +quantity }));
      const res = await cartApi.addProduct({ productId: product._id, quantity: +quantity });
      if (res.data.success) {
        alert(res.data.message);
        navigate("/shop");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mb-5 mt-5">
      {/* item detail */}
      {product && (
        <div className={cx("item-detail", "d-flex mb-5 align-items-center")}>
          <div className={cx("item-img", "me-5")}>
            <img src={product.img1} alt="no found" />
          </div>
          <div className={cx("item-info", "fst-italic")}>
            <h5 className="mb-3 fs-3">{product.name}</h5>
            <span className="text-muted fs-4">{numberWithCommas(product.price)}</span>
            <p className={cx("short-desc", "text-muted mt-3 text-capitalize")}>{product["short_desc"]}</p>
            <p>
              CATEGORY: <span className="text-muted">{product.category}</span>
            </p>
            <div className={cx("actions", "d-flex")}>
              <input
                type="number"
                placeholder="QUANTITY"
                min={1}
                step={1}
                onChange={(e) => quantityChangeHandler(e.target.value)}
                value={quantity}
              />
              <button className="btn btn-dark rounded-0" onClick={() => addToCartHandler(product)}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      )}
      {/* item descrioption */}
      {product && (
        <div className={cx("item-description", "fst-italic mb-5")}>
          <button className="btn btn-dark mb-3 rounded-0">Description</button>
          <h5 className="fs-5 text-uppercase fw-normal mb-2">Product Description</h5>
          <div className={cx("long-desc")}>
            {rejectNumber(product["long_desc"])
              .split("\n")
              .map((item, index) => (
                <p key={index}>{item}</p>
              ))}
          </div>
        </div>
      )}
      {/* related item */}
      <div className={cx("related")}>
        <h5 className="fst-italic">RELATED PRODUCTS</h5>
        {relatedProduct &&
          relatedProduct.map((item, index) => (
            <ProductItem item={item} onShowPopup={false} price={numberWithCommas(item.price)} key={index} />
          ))}
      </div>
    </div>
  );
};
export default Detail;
