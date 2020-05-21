"use strict";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <p className="greeting">Welcome to the homepage.</p>
        <a id="homepage-link" href="/cards">Check out the cards</a>
        <img id="ballonicorn-img" src="/static/img/balloonicorn.jpg"/>
      </div>
    );
  }
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
