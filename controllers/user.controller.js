
function createUser(req, res) {
    if (!req.body.name) {
        res.status(400).json({
            error: 'missing user name'
        })
    }
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    }
    users.push(newUser)
    res.status(201).json({
        message: 'Successfully added user'
    })
}

function getAllUsers(req, res) {
    res.status(200).json(users)
}

function getUser(req, res) {
    const id = req.params.id
    if (users[id - 1]) {
        return res.status(200).json(users[id - 1])
    } else {
        return res.status(404).json({
            status_code: 404,
            message: 'Could not find user'
        })
    }
}

module.exports = {
    getUser, createUser, getAllUsers
}
