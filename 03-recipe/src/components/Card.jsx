/** @format */

import React, { useState } from 'react';

export default function Card(props) {
  const [isListed, setListed] = useState(false);
  const [buttonTitle, setTitle] = useState('Show more');

  function handleClick() {
    setListed(!isListed);
    setTitle('Hide');
  }

  return (
    <div className="col-3 my-4 mx-2">
      <div className="card " style={{ width: '15rem' }}>
        <img
          src={props.image}
          className="card-img-top"
          alt="..."
        />
        <div className=" card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.calories} Cal</p>
        </div>
        <ul className="list-group list-group-flush">
          {isListed
            ? props.ingredients
                .map((ingredient, index) => (
                  <li
                    className="list-group-item"
                    key={index}
                  >
                    {ingredient.text}
                  </li>
                ))
                .slice(0, 9)
            : props.ingredients
                .map((ingredient, index) => (
                  <li
                    className="list-group-item"
                    key={index}
                  >
                    {ingredient.text}
                  </li>
                ))
                .slice(0, 2)}
          <li className="list-group-item">
            <button className="btn " onClick={handleClick}>
              {buttonTitle}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
