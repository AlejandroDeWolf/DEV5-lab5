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

const getById = (req, res) => {
    const id = req.params.id;
    const response = {
        status: 'success',
        message: `GETTING message with id ${id}`,
        data: { id: id, user: "John", message: 'Hello' }
    }
    res.json(response);
};


module.exports.getAll = getAll;
module.exports.getById = getById;