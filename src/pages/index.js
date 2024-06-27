// src/pages/index.js

import Link from 'next/link';
import styles from './Homepage.module.css';

const regions = [
  { code: 'ak', name: 'Alaska' },
  { code: 'al', name: 'Alabama' },
  { code: 'ar', name: 'Arkansas' },
  { code: 'az', name: 'Arizona' },
  { code: 'ca', name: 'California' },
  { code: 'calno', name: 'California: Northern' },
  { code: 'cals', name: 'California: Southern' },
  { code: 'casd', name: 'California: San Diego' },
  { code: 'chs', name: 'Chesapeake' },
  { code: 'co', name: 'Colorado' },
  { code: 'ct', name: 'Connecticut' },
  { code: 'de', name: 'Delaware' },
  { code: 'fl', name: 'Florida' },
  { code: 'ga', name: 'Georgia' },
  { code: 'hi', name: 'Hawaii' },
  { code: 'ia', name: 'Iowa' },
  { code: 'id', name: 'Idaho' },
  { code: 'in', name: 'Indiana' },
  { code: 'ky', name: 'Kentucky' },
  { code: 'la', name: 'Louisiana' },
  { code: 'ma', name: 'Massachusetts' },
  { code: 'mi', name: 'Michigan' },
  { code: 'mn', name: 'Minnesota' },
  { code: 'mt', name: 'Montana' },
  { code: 'nc', name: 'North Carolina' },
  { code: 'nd', name: 'North Dakota' },
  { code: 'nh', name: 'New Hampshire' },
  { code: 'nj', name: 'New Jersey' },
  { code: 'nm', name: 'New Mexico' },
  { code: 'nv', name: 'Nevada' },
  { code: 'ny', name: 'New York' },
  { code: 'nyex', name: 'New York: Excelsior' },
  { code: 'nyli', name: 'New York: Long Island' },
  { code: 'nyny', name: 'New York City' },
  { code: 'ok', name: 'Oklahoma' },
  { code: 'or', name: 'Oregon' },
  { code: 'pa', name: 'Pennsylvania' },
  { code: 'ri', name: 'Rhode Island' },
  { code: 'sc', name: 'South Carolina' },
  { code: 'tn', name: 'Tennessee' },
  { code: 'tx', name: 'Texas' },
  { code: 'txho', name: 'Texas: Houston' },
  { code: 'ut', name: 'Utah' },
  { code: 'vt', name: 'Vermont' },
  { code: 'wa', name: 'Washington' },
  { code: 'wi', name: 'Wisconsin' },
  { code: 'wy', name: 'Wyoming' },
];

const HomePage = () => {
  return (
    <div className="home">
    <div className={styles.main}>
      <h1 className={styles.title}>FIRST Tech Challenge Leaderboard</h1>
      <h2 className={styles.description}>A live automagically updating leaderboard for FTC matches and teams across all FIRST regions and events in the United States.</h2>
    </div>
      <div className={styles.container}>
        <div className={styles.regionButtons}>
          {regions.map((region) => (
            <Link key={region.code} href={`${region.code}`} className={styles.regionButton}>
              {region.name}
            </Link>
          ))}
        </div>
        <footer className={styles.footer}>
          <p>developed with <span role="img" aria-label="heart">❤️</span> by <a href="https://shrysjain.github.io" target="_blank" rel="noopener noreferrer">shreyas jain</a></p>
          <p><i>© 2024 shreyas jain • all rights reserved</i></p>
        </footer>
      </div>
      </div>
  );
};

export default HomePage;
