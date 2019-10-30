import React, { Component } from 'react';
import Album from './Album';

import './AlbumList.scss';

class AlbumList extends Component {
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
    const { albums } = this.state
    return (
      <div className="AlbumList">
        <div className="mainTitle">
          <h1>Tous les albums</h1>
        </div>
        <div className="list">
          {albums.map(album =>
            <Album
              id={album.id}
              albumImage={album.album_image} title={album.titre} artist={album.artiste} genre={album.genre} clip={album.youtube_url}
            />
          )}
        </div>
      </div>
    );
  }
}

export default AlbumList;