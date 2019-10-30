import React from 'react';
import CarouselHome from './CarouselHome';
import RandomAlbum from './RandomAlbum';

function Home() {
  return(
    <div className="Home">
      <h1>Musika !</h1>
      <CarouselHome />
      <RandomAlbum />
    </div>
  );
}

export default Home;

