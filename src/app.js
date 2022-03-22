import React from 'react';
import styles from './style.css';
import myImage from './images/dog.jpg'

const App = ({ title }) =>
  <>
    <h1 className={styles.title}>{title}</h1>;
    <img className = {styles.image} src = {myImage} alt='wooow'/>;
  </>
  

export default App; 