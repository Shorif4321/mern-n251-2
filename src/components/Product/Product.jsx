import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const Product = ({ product ,handleAddToCart}) => {
  const { img, name, price, category} = product;
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure className="m-2 rounded-lg">
        <img src={img} alt="product image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Category: {category}</p>
        <p>Price: {price}</p>
      </div>
       <button onClick={()=>handleAddToCart(product)} className="btn btn-secondary text-black">Buy Now  <FontAwesomeIcon className="ms-2" icon={faShoppingCart} /></button>
    </div>
  );
};

export default Product;
