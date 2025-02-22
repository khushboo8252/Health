module.exports = (req, res, next) => {
    if (!req.body.data || !Array.isArray(req.body.data)) {
        return res.status(400).json({ is_success: false, message: "Invalid input format" });
    }
    next();
};
