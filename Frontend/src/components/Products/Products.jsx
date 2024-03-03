import { useState } from "react";
import ProductItem from "./ProductItem";
import PropTypes from "prop-types";
import ProductsData from "../../data.json";
import Slider from "react-slick";
import "./Products.css";

function NextBtn({ onClick }) {
  return (
    <button className="glide__arrow glide__arrow--right" onClick={onClick}>
      <i className="bi bi-chevron-right"></i>
    </button>
  );
}

NextBtn.propTypes = {
  onclick: PropTypes.func,
};

function PrevBtn({ onClick }) {
  return (
    <button className="glide__arrow glide__arrow--left" onClick={onClick}>
      <i className="bi bi-chevron-left" />
    </button>
  );
}

PrevBtn.propTypes = {
  onclick: PropTypes.func,
};

const Products = () => {
  const [product] = useState(ProductsData);
  const [cartItems, setCartItems] = useState([]);

  console.log(cartItems.length)

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    autoplaySpeed: 3000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="products">
      <div className="container">
        <div className="section-title">
          <h2>Featured Products</h2>
          <p>Summer Collection New Morden Design</p>
        </div>
        <div className="product-wrapper product-carousel">
          <Slider {...sliderSettings}>
            {product.map((product) => (
              <ProductItem productItem={product} key={product.id} setCartItems={setCartItems} cartItems={cartItems}/>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Products;
