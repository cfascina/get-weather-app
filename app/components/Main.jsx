var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <Nav />
      <div className="grid-container fluid">
        <div className="grid-x">
          <div className="cell auto"></div>
          <div className="cell small-12 medium-12 large-12">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
