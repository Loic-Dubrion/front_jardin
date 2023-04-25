import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const logger = require('../../logger');

/* eslint-disable react/prop-types */
class DeleteButton extends Component {
  handleClick() {
    const { onDelete } = this.props;

    if (typeof onDelete === 'function') {
      onDelete();
    } else {
      logger.log('Bouton Supprimer cliqué');
    }
  }

  render() {
    return (
      <button type="button" className="delete-button" onClick={this.handleClick}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    );
  }
}

export default DeleteButton;
