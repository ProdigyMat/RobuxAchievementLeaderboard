// index.js

import { useEffect, useState } from 'react';

export default function Home() {
    const [achievements, setAchievements] = useState([]);

    useEffect(() => {
        async function fetchAchievements() {
            const res = await fetch('/api/achievements');
            const data = await res.json();
            setAchievements(data);
        }
        fetchAchievements();
    }, []);

    return (
        <div>
            <h1>Achievement Leaderboard</h1>
            <ul>
                {achievements.map((achievement, index) => (
                    <li key={index}>
                        <strong>{achievement.name}</strong>: {achievement.description} - {achievement.points} points
                    </li>
                ))}
            </ul>
        </div>
    );
}
