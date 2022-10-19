const getAll = (req, res) => {
    let messages = [
        { user: "John", message: 'Hello' },
        { user: "Jane", message: 'Hi' },
    ];
    const response = {
        status: 'success',
        message: 'GETTING messages',
        data: messages

    }
    res.json(response);
};

module.exports.getAll = getAll;