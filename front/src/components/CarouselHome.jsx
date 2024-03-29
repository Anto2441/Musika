import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';


/* carousel's pictures */
const items = [
  {
    src: 'https://cerebralpalsynewstoday.com/wp-content/uploads/2018/03/shutterstock_567093166-1200x480.jpg',
  },
  {
    src: 'https://alsnewstoday.com/wp-content/uploads/2017/07/shutterstock_112280339-1200x480.jpg',
  },
  {
    src: 'https://smanewstoday.com/wp-content/uploads/2017/09/shutterstock_512250637-1200x480.jpg',
  }
];

/* Implement carousel  */

class CarouselHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    }
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }


  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img className="imageCarousel" src={item.src} alt={item.altText} />
        </CarouselItem>
      );
    });

    return (
      <div className="carousel">
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    );
  }
}

export default CarouselHome;