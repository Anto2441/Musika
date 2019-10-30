import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { NotificationContainer, NotificationManager } from 'react-notifications';

import './AddAlbum.scss';

class AddAlbum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titre: "",
      album_image: "",
      artiste: "",
      genre: "",
      youtube_url: "",
    }
  }

  changeInput= (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitAlbum = (e) => {
    e.preventDefault();
    const { titre, album_image, artiste, genre, youtube_url } = this.state;
    const album = {
      titre,
      album_image,
      artiste,
      genre,
      youtube_url
    }


    fetch('http://localhost:3000/api/album/new',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(album),
      })
      .then((res) => {
        if (res.ok) {
          NotificationManager.success('', 'Entreprise ajoutée avec succès!');
        } else {
          NotificationManager.warning('', 'Erreur lors de l\'ajout de l\'album.', 3000);
        }
      }).catch(() => {
        NotificationManager.error('', 'Erreur lors de l\'ajout de l\'album.', 5000);
      });
  }

  render() {
    return (
      <div className="AddAlbum">
        <Container >
          <h2 className="title">Ajouter un album</h2>
          <NotificationContainer />
          <Row>
            <Col>
              <Form onSubmit={this.submitAlbum} className="form-album">
                <FormGroup>
                  <Label for="albumName">Titre de l'album</Label>
                  <Input
                    type="text"
                    name="titre"
                    id="exampleTitre"
                    value={this.state.titre}
                    onChange={this.changeInput}
                    placeholder="Entrer le titre de l'album"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="albumPoster">Pochette</Label>
                  <Input
                    type="text"
                    name="album_image"
                    id="examplePoster"
                    value={this.state.album_image}
                    onChange={this.changeInput}
                    placeholder="Entrer l'url de la pochette album au format .jpg"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="albumArtist">Artiste</Label>
                  <Input
                    type="text"
                    name="artiste"
                    id="exampleArtist"
                    value={this.state.artiste}
                    onChange={this.changeInput}
                    placeholder="Entrer le nom de l'artiste"
                    required
                  />
                  <FormGroup>
                    <Label for="albumGenre">Genre</Label>
                    <Input
                      type="text"
                      name="genre"
                      onChange={this.changeInput}
                      value={this.state.genre}
                      placeholder="Entrer le genre de musique"
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="albumClip">Clip Video</Label>
                    <Input
                      type="text"
                      name="youtube_url"
                      onChange={this.changeInput}
                      value={this.state.youtube_url}
                      placeholder="Entrer le lien YouTube du clip vidéo"
                      required
                    />
                  </FormGroup>
                </FormGroup>
                <Button>Soumettre</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AddAlbum;