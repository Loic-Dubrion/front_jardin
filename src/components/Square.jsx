/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Crop from './Crop';

class Square extends Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.name = props.name;
    this.crops = props.crops;
  }

  render() {
    return (
      <div className="square" id={`square-id-${this.id}`}>
        <h2 className="square-title">{this.name}</h2>
        {this.crops.map((crop) => (
          !crop.harvest && (
          <Crop
            key={crop.id}
            id={crop.id}
            sowing={crop.sowing}
            planting={crop.planting}
            vegetable={crop.vegetable}
          />
          )
        ))}
      </div>
    );
  }
}

export default Square;
