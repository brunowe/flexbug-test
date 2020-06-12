import React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <div id="bg">
        <div id="content">
          <h1 id="content-h1">Olá Mundo! Esta será a página do Clã Podcast!</h1>
          <h2 id="content-h2">
            Ou seja lá o nome que a gente for dar pra isso.
          </h2>
          <a href="/casts">Casts</a>
        </div>
      </div>
    );
  }
}
