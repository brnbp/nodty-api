const defaultResponse = (data, statusCode = 200) => ({data, statusCode})
const errorResponse = (message = '', statusCode = 400) => ({error: message, statusCode})

function FeedsController(feeds) {
    this.feeds = feeds

    this.getById = id => defaultResponse(this.feeds.findOne(id))

    this.latests = (limit = 10) => defaultResponse(this.feeds.latests(limit))

    this.top = (limit = 24) => defaultResponse(this.feeds.top(limit))

    this.getByName = (name) => defaultResponse(this.feeds.findByName(name))

    this.episodes = (id) => defaultResponse({episodes: [id]})
}

module.exports = FeedsController
