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
    <div className={styles.leaderboard}>
      <h1>Top 10 Scores</h1>
      {scores.length > 0 ? (
        <ul>
          {scores.map((score, index) => (
            <li key={index}>
              <p>Rank: {index + 1}</p>
              <p>Score: {score.score}</p>
              <p>Auto: {score.auto}</p>
              <p>TeleOp: {score.teleOp}</p>
              <p>End: {score.end}</p>
              <p>Auto Task Pts: {score.autoTaskPts}</p>
              <p>Auto Pixels: {score.autoPixels}</p>
              <p>Tele Pixels: {score.telePixels}</p>
              <p>Tele Bonus: {score.teleBonus}</p>
              <p>Drone Pts: {score.dronePts}</p>
              <p>Hang: {score.hang}</p>
              <p>Teams: {score.teams}</p>
              <p>Event: {score.event}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading scores...</p>
      )}
    </div>
  );
};

export default IndexPage;
