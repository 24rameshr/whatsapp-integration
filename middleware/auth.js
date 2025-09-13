const API_KEY = process.env.API_KEY; // Make sure to set your API key in the environment variables

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token || token !== API_KEY) {
        return res.sendStatus(403); // Forbidden
    }

    next();
};

module.exports = authMiddleware;