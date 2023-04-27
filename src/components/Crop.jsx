/* eslint-disable react/prop-types */
import React from 'react';
import DeleteButton from './buttons/DeleteButton';

function Crop({
  id, sowing, planting, vegetable, squareId,
}) {
  return (
    <div className="crop" id={`crop-id-${id}`}>
      <h2 className="crop-title">{vegetable.name}</h2>
      <div>
        {sowing ? (
          <p>
            semé le :
            {' '}
            {sowing}
          </p>
        ) : (
          <p>
            planté le :
            {' '}
            {planting}
          </p>
        )}
        <DeleteButton squareId={squareId} cropId={id} />
      </div>
    </div>
  );
}

export default Crop;
