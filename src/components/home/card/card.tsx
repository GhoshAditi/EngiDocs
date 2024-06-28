import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  icon: JSX.Element;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, icon }) => {
    return (
      <div className={styles.card}>
        <div className={styles.thumb} style={{ backgroundImage: `url(${imageUrl})` }}>
        <h2 className={styles.title}>{title}</h2>
        </div>
        <div className={styles.infos}>
          <div className={styles.icon}>{icon}</div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.txt}>{description}</p>
          <button className={styles.button}>Get Started</button>
        </div>
      </div>
    );
  };

export default Card;