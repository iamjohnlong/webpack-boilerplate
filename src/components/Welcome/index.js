import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const Welcome = ({
  text,
  subText
}) => (
  <div className={styles.welcome}>
    <h1>{ text }</h1>
    <h2>{ subText }</h2>
  </div>
);

Welcome.propTypes = {
  text: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired
};

export default Welcome;
