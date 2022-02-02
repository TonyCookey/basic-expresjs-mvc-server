function logIncomingRequests(req, res, next) {
    const start = Date.now()
    next()
    const delta = Date.now() - start
    console.log(`${req.method}: ${req.url} , ${delta}ms`);
}

module.exports = logIncomingRequests
