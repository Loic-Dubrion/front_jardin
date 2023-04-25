/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import DeleteButton from './buttons/DeleteButton';

class Crop extends Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.sowing = props.sowing;
    this.planting = props.planting;
    this.vegetable = props.vegetable;
  }

  render() {
    return (
      <div className="crop" id={`crop-id-${this.id}`}>
        <h2 className="crop-title">{this.vegetable.name}</h2>
        <div>
          {this.sowing ? (
            <p>
              semé le :
              {' '}
              {this.sowing}
            </p>
          ) : (
            <p>
              planté le :
              {' '}
              {this.planting}
            </p>
          )}
          <DeleteButton />
        </div>
      </div>
    );
  }
}

export default Crop;
