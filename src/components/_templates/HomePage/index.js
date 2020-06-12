import React from 'react';

import Header from '../Header';
import CardRow from '../CardRow';
import TemplateContentRow from '../TemplateContentRow';

export default function Home() {
  return (
    <>
      <Header
        headerTitle="Business Name or Tagline"
        headerDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                possimus ab labore provident mollitia. Id assumenda voluptate
                earum corporis facere quibusdam quisquam iste ipsa cumque unde
                nisi, totam quas ipsam."
      />
      <div className="container">
        <TemplateContentRow />
        <CardRow />
      </div>
    </>
  );
}
