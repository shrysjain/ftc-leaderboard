// src/pages/[region].js

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from './Leaderboard.module.css';
import { getTeamInfo } from '../utils/api';

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

  { code: 'ab', name: 'Alberta' },
  { code: 'aus', name: 'Australia' },
  { code: 'bc', name: 'British Columbia' },
  { code: 'bel', name: 'Belgium' },
  { code: 'bra', name: 'Brazil' },
  { code: 'chn', name: 'China' },
  { code: 'cyp', name: 'Cyprus' },
  { code: 'gbr', name: 'United Kingdom' },
  { code: 'grc', name: 'Greece' },
  { code: 'idn', name: 'Indonesia' },
  { code: 'ind', name: 'India' },
  { code: 'isr', name: 'Israel' },
  { code: 'ita', name: 'Italy' },
  { code: 'jam', name: 'Jamaica' },
  { code: 'kaz', name: 'Kazakhstan' },
  { code: 'ly', name: 'Libya' },
  { code: 'mad', name: 'Military and Diplomatic' },
  { code: 'mar', name: 'Morocco' },
  { code: 'mex', name: 'Mexico' },
  { code: 'mys', name: 'Malaysia' },
  { code: 'nga', name: 'Nigeria' },
  { code: 'nld', name: 'Netherlands' },
  { code: 'nzl', name: 'New Zealand' },
  { code: 'on', name: 'Ontario' },
  { code: 'pr', name: 'Puerto Rico' },
  { code: 'qat', name: 'Qatar' },
  { code: 'qc', name: 'Quebec' },
  { code: 'rou', name: 'Romania' },
  { code: 'skr', name: 'South Korea' },
  { code: 'tha', name: 'Thailand' },
  { code: 'twn', name: 'Taiwan' },
  { code: 'vnm', name: 'Vietnam' },
  { code: 'zaf', name: 'South Africa' },
];

const RegionPage = () => {
  const [scores, setScores] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);

  const router = useRouter();
  const { region } = router.query;

  useEffect(() => {
    if (region) {
      const fetchScores = async () => {
        try {
          const response = await axios.get(`/api/scores/${region}`);
          setScores(response.data);
        } catch (error) {
          for (let i = 0; i < 10; i++) {
            console.error(`Error creating leaderboard. Try again in a bit, and if this is still not working, open an issue on the GitHub repository @ github.com/shrysjain/ftc-leaderboard/issues/new - rntas${i+1}`);
          }
        }
      };

      fetchScores();
    }
  }, [region]);

  const fetchTeamInfo = async (teamNumber) => {
    try {
      const response = await getTeamInfo(teamNumber);
      setSelectedTeam(response[0]);
    } catch (error) {
      for (let i = 0; i < 10; i++) {
        console.error(`Error fetching information for team ${teamNumber}. If you're seeing this, The Orange Alliance API is probably down. Try again in a bit, and if it is still not working, open an issue on the GitHub repository @ github.com/shrysjain/ftc-leaderboard/issues/new - rntas${i+1}`);
      }
      setSelectedTeam(null);
    }
  };

  const handleCloseTeamInfo = () => {
    setSelectedTeam(null);
  };

  const regionCode = region ? region.toUpperCase() : '';
  const regionName = regions.find(r => r.code === region)?.name;

  return (
    <><div className={styles['dark-mode-wrapper']}>
      <div className={styles.leaderboard}>
        <h1>FIRST Tech Challenge {regionName} Region Leaderboard</h1>
        <h2>An automatically-updating scoresheet of the current top 10 games amongst all FTC teams and events in the {regionName} region.</h2>
        {scores.length > 0 ? (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Score</th>
                <th>Auto</th>
                <th>Teleop</th>
                <th>Endgame</th>
                <th>Auto Task</th>
                <th>Auto Pixels</th>
                <th>Teleop Pixels</th>
                <th>Teleop Bonus</th>
                <th>Drone Points</th>
                <th>Hang Points</th>
                <th>Teams</th>
                <th>Event & Match Info</th>
              </tr>
            </thead>
            <tbody>
              {scores.map((score, index) => (
                <tr key={index} className={index < 3 ? styles['top-team'] : ''}>
                  <td>{index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : index + 1}</td>
                  <td>{score.score}</td>
                  <td>{score.auto}</td>
                  <td>{score.teleOp}</td>
                  <td>{score.end}</td>
                  <td>{score.autoTaskPts}</td>
                  <td>{score.autoPixels}</td>
                  <td>{score.telePixels}</td>
                  <td>{score.teleBonus}</td>
                  <td>{score.dronePts}</td>
                  <td>{score.hang}</td>
                  <td>
                    <button onClick={() => fetchTeamInfo(score.teams[0])}>{score.teams[0]}</button>
                  </td>
                  <td>
                    <button onClick={() => fetchTeamInfo(score.teams[1])}>{score.teams[1]}</button>
                  </td>
                  <td>
                    {score.teams[2] && (
                    <button onClick={() => fetchTeamInfo(score.teams[2])}>{score.teams[2]}</button>
                    )}
                  </td>
                  <td>{score.event}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <><p>Hang on, we're crunching the latest numbers just for you :)</p><p>Loading scores....</p><p>If this is taking too long, check the JavaScript console.</p></>
        )}
        {selectedTeam && (
          <div className={styles.popup}>
            <div className={styles.popupContent}>
              <button className={styles.closeButton} onClick={handleCloseTeamInfo}>
                &times;
              </button>
              <h2>{selectedTeam.team_number} {selectedTeam.team_name_short}</h2>
              <p>
                <i>{selectedTeam.team_name_long}</i>
              </p>
              <p>
                <strong>rookie year:</strong> {selectedTeam.rookie_year}
              </p>
              <p>
                <strong>city:</strong> {selectedTeam.city}
              </p>
              <p>
                <strong>state/province:</strong> {selectedTeam.state_prov}
              </p>
              <p>
                <strong>country:</strong> {selectedTeam.country}
              </p>
              <p>
                <strong>last active season:</strong> {selectedTeam.last_active.split('')[0]}{selectedTeam.last_active.split('')[1]}/{selectedTeam.last_active.split('')[2]}{selectedTeam.last_active.split('')[3]}
              </p>
              <p>
                <strong>website:</strong> <a href={selectedTeam.website} target="_blank" rel="noopener noreferrer">{selectedTeam.website}</a>
              </p>
              <h6 class="footer"><i>team information sourced from firstinspires</i></h6>
            </div>
          </div>
        )}
      </div>
    </div>
    
    <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <i>powered by <a href="http://www.ftcstats.org/" target='_blank' rel="noopener noreferrer">ftc stats</a> & <a href="https://theorangealliance.org" target='_blank' rel="noopener noreferrer">the orange alliance</a></i>
        </div>
        <div className={styles.footerRight}>
          <i>developed with <span role="img" aria-label="heart">❤️</span> by <a href="https://shrysjain.github.io" target="_blank" rel="noopener noreferrer">shreyas jain</a> • all rights reserved</i>
        </div>
    </div></>
  );
};

export default RegionPage;
