function notFound(res, req) {
    res.status(404).send('not found page');
}

module.exports = notFound;