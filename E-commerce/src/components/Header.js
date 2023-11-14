import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { BsCart3 } from "react-icons/bs";
// import { BsFillCartFill } from "react-icons/bs"; 
// import { IoCartSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

export default function Header(props) {
  const [cartItemCount, setCartItemCount] = useState(0);
  const list = useSelector((state) => state.cart.list);
  const navigate = useNavigate();

  useEffect(() => {
    setCartItemCount(list.length);
  }, [list]);

  return (
    <div className='tik-header'>
      <div className='tik-logo'>
        <h3>Tik Tok Shop</h3>
      </div>
      <button className='btn me-4 ' onClick={() => navigate('/')}>
            <FaHome  size={25}
            />
          </button>
      <div className='tik-search'>
        <input className='form-control' type='search' placeholder='Search...' />
        <button className='search-button'>
          <FaSearch  />
        </button>
      </div>
      <div className='tik-cart'>
        <button className='cart-button' onClick={() => navigate('/cart')}>
          <FaShoppingCart />
          <span className="badge">{cartItemCount}</span>
        </button>
      </div>
    </div>
  );
}
