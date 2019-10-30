import React, { Component } from 'react';
import Album from './Album';

import './RandomAlbum.scss';

class RandomAlbum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/album')
      .then(results => results.json())
      .then(data => {
        this.setState({
          albums: data,
        })
      });
  }

  render() {
    /* const random4 = this.state.albums.slice(2, 6);
    console.log(random4) */
    const { albums } = this.state;
    const random = albums.slice([Math.floor(Math.random()*albums.length)])
    console.log(random)
    return (
      <div className="RandomAlbum">
        <h2>Users choice</h2>
        <hr />
        <p>Randomlyyyyyyyyyyyyy generated !</p>
        <div className="randomAlbums">
          {random.map((album, i) =>
            <Album
              id={album.id} 
              albumImage={album.album_image} 
              title={album.titre} 
              artist={album.artiste} 
              genre={album.genre} 
              clip={album.youtube_url}
              key={i}
            />
          )}
        </div>
      </div>
    );
  }
}

export default RandomAlbum;