// achievements.js

let achievements = [
    { name: "First Click", description: "Clicked for the first time", points: 10 },
    { name: "High Scorer", description: "Achieved a high score", points: 50 }
];

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(achievements);
    } else if (req.method === 'POST') {
        // Logic to add new achievement
        const newAchievement = req.body;
        achievements.push(newAchievement);
        res.status(201).json(newAchievement);
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
