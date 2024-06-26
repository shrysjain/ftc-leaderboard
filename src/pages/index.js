import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Leaderboard.module.css';

const IndexPage = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await axios.get('/api/scores');
        setScores(response.data);
      } catch (error) {
        console.error('Error fetching scores:', error);
      }
    };

    fetchScores();
  }, []);

  return (
    <div className={styles['dark-mode-wrapper']}>
      <div className={styles.leaderboard}>
        <h1>FIRST Tech Challenge Chesapeake Region Leaderboard</h1>
        <h2>An automatically-updating scoresheet of the current top 10 games amongst all FTC teams and events in the Chesapeake region.</h2>
        {scores.length > 0 ? (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Score</th>
                <th>Auto</th>
                <th>TeleOp</th>
                <th>End</th>
                <th>Auto Task Pts</th>
                <th>Auto Pixels</th>
                <th>Tele Pixels</th>
                <th>Tele Bonus</th>
                <th>Drone Pts</th>
                <th>Hang</th>
                <th>Teams</th>
                <th>Event</th>
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
                  <td>{score.teams[0]}</td>
                  <td>{score.teams[1]}</td>
                  <td>{score.teams[2]}</td>
                  <td>{score.event}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Loading scores...</p>
        )}
      </div>
    </div>
  );
};

export default IndexPage;
