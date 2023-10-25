exports.register = (req, res) => {
    const newUserData = req.body;
    res.send(newUserData)
}