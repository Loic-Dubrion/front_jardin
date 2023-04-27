/* eslint-disable react/prop-types */
import React, { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const logger = require('../../logger');

const apiBaseUrl = 'http://localhost:1664';

function DeleteButton({
  squareId, cropId, onDelete, isSquare,
}) {
  // Requête API pour supprimer une culture
  const deleteCultureFromApi = async () => {
    try {
      const response = await fetch(`${apiBaseUrl}/squares/${squareId}/crops/${cropId}`, {
        method: 'DELETE',
      });

      // Modifier mon API pour retourner un status 204 qui conditionne la suppression dans le DOM
      if (response.ok) {
        logger.log(`La culture avec l'ID ${cropId} a été supprimée.`);
      } else {
        logger.log(`Erreur lors de la suppression de la culture avec l'ID ${cropId}.`);
      }
    } catch (error) {
      logger.log(`Erreur lors de la suppression de la culture avec l'ID ${cropId}: ${error.message}`);
    }
  };

  // Requête API pour supprimer un carré
  const deleteSquareFromApi = async () => {
    try {
      const response = await fetch(`${apiBaseUrl}/squares/${squareId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        logger.log(`Le square avec l'ID ${squareId} a été supprimé.`);
      } else {
        logger.log(`Erreur lors de la suppression du square avec l'ID ${squareId}.`);
      }
    } catch (error) {
      logger.log(`Erreur lors de la suppression du square avec l'ID ${squareId}: ${error.message}`);
    }
  };

  // useCallback est un hook qui renvoie une version mémoïsée de la fonction
  // si ces props ne changent pas, la fonction ne sera pas recalculée (performance)
  const handleClick = useCallback(() => {
    // Aguillage vers la bonne requête API
    if (isSquare) {
      deleteSquareFromApi();
    } else {
      deleteCultureFromApi();
    }
  }, [onDelete, squareId, cropId, isSquare]);

  const handleButtonClick = () => {
    handleClick();

    // Détermine l'ID de l'élément à supprimer
    const elementId = isSquare ? `square-id-${squareId}` : `crop-id-${cropId}`;

    const element = document.getElementById(elementId);
    if (element) {
      element.remove();
    }
  };

  return (
    <button type="button" className="delete-button" onClick={handleButtonClick}>
      <FontAwesomeIcon icon={faTrash} />
    </button>
  );
}

export default DeleteButton;
