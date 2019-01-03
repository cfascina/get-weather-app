var React = require('react');

var About = (props) => {
  return (
    <div>
    <h1 className="text-center page-title">About</h1>
    <p>This is a weather application developed with React. It was developed within the course The Complete Rect Web App Developer Course.</p>
    <p>Here are some tools that were used:</p>
    <ul>
      <li>
        <a target="_blank" href="https://facebook.github.io/react/">React</a> - Javascript framework used.
      </li>
      <li>
        <a target="_blank" href="http://openweathermap.org/">Open Weather Map</a> - API used for search for weather data by city name.
      </li>
    </ul>
  </div>
  );
}

module.exports = About;
