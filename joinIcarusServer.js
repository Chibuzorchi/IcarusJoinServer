const express = require('express');
const app = express();

app.use(express.json());

app.post('/join', (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Simulate saving user to the database
    return res.status(201).json({ message: 'User joined successfully' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
