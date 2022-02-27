import React from 'react';

function Coin(props) {
  return (
    <div className='coin'>
      <h1> Name: {props.name}</h1>
      <img src={props.icon} />
      <h3>Rank: {props.rank}</h3>
      <h3>Symobl: {props.symbol}</h3>
      <h3>Price: ${props.price}</h3>
      <a href={props.websiteUrl}>Website: {props.websiteUrl}</a>
    </div>
  );
}

export default Coin;