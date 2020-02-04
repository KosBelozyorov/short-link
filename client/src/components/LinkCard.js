import React from 'react';
import PropTypes from 'prop-types';

export const LinkCard = ({ link }) => {
  return (
    <>
      <h1>Link detail info</h1>
      <p>
        Shorted link:{' '}
        <a href={link.to} target="_blank" rel="noopener noreferrer">
          {link.to}
        </a>
      </p>
      <p>
        Original link:{' '}
        <a href={link.from} target="_blank" rel="noopener noreferrer">
          {link.from}
        </a>
      </p>
      <p>
        Clicks quantity: <strong>{link.clicks}</strong>
      </p>
      <p>
        Created: <strong>{new Date(link.date).toLocaleDateString()}</strong>
      </p>
    </>
  );
};

LinkCard.propTypes = {
  link: PropTypes.shape({
    to: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    clicks: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};
