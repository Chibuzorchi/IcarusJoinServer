const express = require('express');
const app = express();

app.use(express.json());

app.post('/join', (req, res) => {
    const { characterName, serverAddress, password } = req.body;
    if (!characterName || !serverAddress) {
        return res.status(400).json({ error: 'Character name and server address are required' });
    }

    if (password && password !== 'correctpassword') {
        return res.status(401).json({ error: 'Invalid server password' });
    }

    // Simulate joining the server
    return res.status(200).json({ message: 'Joined server successfully' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
