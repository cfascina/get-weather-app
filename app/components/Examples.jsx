var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few examples to try out:</p>
      <ol>
        <li>
          <Link to="/?location=Philadelphia">Philadelphia, USA</Link>
        </li>
        <li>
          <Link to="/?location=São+Paulo">São Paulo, Brazil</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Examples;
