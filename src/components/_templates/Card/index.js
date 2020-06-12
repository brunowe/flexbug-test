import React from 'react';

export default function Card(props) {
  return (
    <>
      <div className="card h-100">
        <img
          className="card-img-top"
          src={props.cardImgSrc}
          alt={props.cardImgAlt}
        />
        <div className="card-body">
          <h4 className="card-title">{props.cardTitle}</h4>
          <p className="card-text">{props.cardText}</p>
        </div>
        <div className="card-footer">
          <a href="/" className="btn btn-primary">
            {props.cardButtonText}
          </a>
        </div>
      </div>
    </>
  );
}
