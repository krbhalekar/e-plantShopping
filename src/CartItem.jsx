import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let total = 0.0;
    cart.forEach((item) => {
        total += parseFloat(item.cost.substring(1)) * item.quantity;
    });
    return total.toFixed(2); // Format to 2 decimal places
  };

  const handleContinueShopping = (e) => {
   onContinueShopping(e);
  };



  const handleIncrement = (item) => {
    if (item.quantity < 100) { // Add max quantity limit
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
    }
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      handleRemove(item); // Remove item if quantity reaches 0
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckoutShopping = (e) => {
  alert('Functionality to be added for future reference');
};


  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    return (parseFloat(item.cost.substring(1)) * item.quantity).toFixed(2);
  };

  return (
    <div className="cart-container">
      {cart.length > 0 ? (
        <>
          <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
          <div>
            {cart.map(item => (
              <div className="cart-item" key={item.name}>
                <img className="cart-item-image" src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-cost">{item.cost}</div>
                  <div className="cart-item-quantity">
                    <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                    <span className="cart-item-quantity-value">{item.quantity}</span>
                    <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
                  </div>
                  <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
                  <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
          <div className="continue_shopping_btn">
            <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
            <br />
            <button className="get-started-button" onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
          </div>
        </>
      ) : (
        <div style={{ textAlign: 'center', padding: '40px', color: 'black' }}>
          <h2>Your cart is empty</h2>
          <p>Add some plants to get started!</p>
          <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        </div>
      )}
    </div>
  );
};

export default CartItem;


