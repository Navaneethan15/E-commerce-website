import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Nave() {
  const navigate = useNavigate();

  const headerStyle = {
    backgroundColor: '#3498db',
    padding: '20px',
    color: 'white',
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#27ae60',
    color: 'white',
    marginRight: '10px',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const searchInputStyle = {
    padding: '10px',
    border: '2px solid #27ae60',
    borderRadius: '5px',
    width: '250px',
    marginRight: '10px',
  };

  const searchButtonStyle = {
    backgroundColor: '#27ae60',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  // Add hover effects
  buttonStyle[':hover'] = {
    backgroundColor: '#1d9439',
  };

  searchButtonStyle[':hover'] = {
    backgroundColor: '#1d9439',
  };

  return (
    <div style={headerStyle}>
      <h3>Tik Tok Shop</h3>
      <div className='row justify-content-center pt-2 pb-1'>
        <div className='col-sm-12 col-md-7 col-lg-6 col-xl-5 d-flex'>
          <button style={buttonStyle} onClick={() => navigate('/')}>Home</button>
          <input
            style={searchInputStyle}
            type='search'
            placeholder='Search...'
          />
          <button style={searchButtonStyle} onClick={() => navigate('/cart')}>Cart</button>
        </div>
      </div>
    </div>
  );
}
