require('dotenv').config();

exports.getOperation = (req, res) => {
    return res.status(200).json({ operation_code: 1 });
};

exports.processData = (req, res) => {
    const { data } = req.body;

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highest_alphabet = alphabets.length ? [alphabets.sort().pop()] : [];

    res.json({
        is_success: true,
        user_id: `${process.env.FULL_NAME}_${process.env.DOB}`,
        email: process.env.EMAIL,
        roll_number: process.env.ROLL_NUMBER,
        numbers,
        alphabets,
        highest_alphabet
    });
};
