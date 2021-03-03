const location = (username,coords) => {
    return {
        username,
        url: `https://google.com/maps?q=${coords.latitude},${coords.longitude}`,
        ceatedAt : new Date().getTime()
    }
}

module.exports = location