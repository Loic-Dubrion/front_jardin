// src/components/buttons/DeleteButton.jsx
import React, { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const logger = require('../../logger');

const apiBaseUrl = 'http://localhost:1664';

function DeleteButton({ squareId, cropId, onDelete, isSquare }) {
  const deleteFromApi = async () => {
    const itemType = isSquare ? 'squares' : `squares/${squareId}/crops`;
    const itemId = isSquare ? squareId : cropId;

    try {
      const response = await fetch(`https://${apiBaseUrl}/${itemType}/${itemId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        logger.log(`L'élément avec l'ID ${itemId} a été supprimé.`);
      } else {
        logger.log(`Erreur lors de la suppression de l'élément avec l'ID ${itemId}.`);
      }
    } catch (error) {
      logger.log(`Erreur lors de la suppression de l'élément avec l'ID ${itemId}: ${error.message}`);
    }
  };

  const handleClick = useCallback(() => {
    if (typeof onDelete === 'function') {
      onDelete();
    } else {
      deleteFromApi();
    }
  }, [onDelete, squareId, cropId, isSquare]);

  const handleButtonClick = (event) => {
    handleClick();
    event.currentTarget.closest(isSquare ? '.square' : '.crop').remove();
  };

  return (
    <button type="button" className="delete-button" onClick={handleButtonClick}>
      <FontAwesomeIcon icon={faTrash} />
    </button>
  );
}

export default DeleteButton;
