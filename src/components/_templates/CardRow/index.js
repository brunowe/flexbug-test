import React from 'react';
import Card from '../Card';

export default function CardRow() {
  return (
    <>
      <div className="row">
        <div className="col-md-4 mb-5">
          <Card
            cardTitle="Card title"
            cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            esse necessitatibus neque sequi doloribus."
            cardImgSrc="http://placehold.it/300x200"
            cardImgAlt="Image 300x200px"
            cardButtonText="Find Out More!"
          />
        </div>
        <div className="col-md-4 mb-5">
          <Card
            cardTitle="Card title"
            cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            esse necessitatibus neque sequi doloribus."
            cardImgSrc="http://placehold.it/300x200"
            cardImgAlt="Image 300x200px"
            cardButtonText="Find Out More!"
          />
        </div>
        <div className="col-md-4 mb-5">
          <Card
            cardTitle="Card title"
            cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            esse necessitatibus neque sequi doloribus."
            cardImgSrc="http://placehold.it/300x200"
            cardImgAlt="Image 300x200px"
            cardButtonText="Find Out More!"
          />
        </div>
      </div>
    </>
  );
}
