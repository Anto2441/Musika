import React from 'react';

import './Album.scss';

const Album = (props) => {
    return (
      <div className="Album">
        <div className="cardLeft">
          <img className="albumImage" src={props.albumImage} alt="albumImage" />
        </div>
        <div className="cardRight">
          <h3 className='title'>{props.title}</h3>
          <h4 className="artist">{props.artist}</h4>
          <h5 className="genre">{props.genre}</h5>
          <a className="clip" href={props.clip}>Clip vidéo</a>
        </div>
      </div>
    );
}

export default Album;