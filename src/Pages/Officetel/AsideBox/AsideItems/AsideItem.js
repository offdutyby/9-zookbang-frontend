import React from 'react';

const AsideItem = ({ img, type, price, size, address, description }) => {
  return (
    <li className='aside-item'>
      <div className='item-img' style={{ backgroundImage: `url(${img}?w=400&h=300&q=70&a=1)` }}></div>
      <div className='item-text'>
        <div className='room-type'>
          <div className='room-recommend-icon' />
          {type}
        </div>
        <div className='room-price'>{price}</div>
        <div className='room-size'>${size}평 중층/10층</div>
        <div className='room-address'>{address}</div>
        <div className='room-description'>{description}</div>
      </div>
    </li>
  );
};

export default AsideItem;
