/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Crop from './Crop';
import DeleteButton from './buttons/DeleteButton';

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
        <div>
          <h2 className="square-title">{this.name}</h2>
          <DeleteButton squareId={this.id} isSquare />
        </div>
        {this.crops.map((crop) => (
          !crop.harvest && (
          <Crop
            key={crop.id}
            id={crop.id}
            squareId={this.id}
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
