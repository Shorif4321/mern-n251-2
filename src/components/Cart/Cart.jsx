import { faArrowRight, faDeleteLeft, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Cart = ({cart,handleClearCart}) => {
  return (
    <div className="m-6 space-y-6">
      <h3 className="text-2xl font-semibold mb-10">Order Summary</h3>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: $1140</p>
      <p>Total Shipping Charge: $5</p>
      <p>Tax: $114</p>
      <h4 className="text-[21px] font-bold">Grand Total: $1559</h4>

      <button onClick={handleClearCart} className="btn bg-[#FF3030] text-white w-full">Clear the Cart <FontAwesomeIcon className="ms-1" icon={faTrash} /></button>

     <Link to="/order">
      <button className="btn btn-primary text-white w-full">View The Order <FontAwesomeIcon className="ms-1" icon={faArrowRight} /></button>
     </Link>
    </div>
  );
};

export default Cart;
