import React, {Component} from 'react';

class Carousel extends Component {


  render() {

    return (
  <div id="carousel-example-generic" className="carousel slide">
    <ol className="carousel-indicators">
      <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
      <li data-target="#carousel-example-generic" data-slide-to="1"></li>
      <li data-target="#carousel-example-generic" data-slide-to="2"></li>
    </ol>

    <div className="carousel-inner">
      <div className="item active">
        <img src="http://placehold.it/1200x480" alt="Slide 1" />
        <div className="carousel-caption">
          <h1>Slide 1</h1>
          <p>Slide 1 Description</p>
        </div>
     </div>

      <div className="item">
        <img src="http://placehold.it/1200x480" alt="Slide 2" />
        <div className="carousel-caption">
          <h1>Slide 2</h1>
          <p>Slide 2 Description</p>
        </div>
      </div>

      <div className="item">
        <img src="http://placehold.it/1200x480" alt="Slide 3" />
        <div className="carousel-caption">
          <h1>Slide 3</h1>
          <p>Slide 3 Description</p>
        </div>
      </div>
    </div>
  </div>
    );
  }

}
export default Carousel;
