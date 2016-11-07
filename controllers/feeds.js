const defaultResponse = (data, statusCode = 200) => ({data, statusCode})
const errorResponse = (message = '', statusCode = 400) => ({error: message, statusCode})

function FeedsController(FeedsModel) {
    this.FeedsModel = FeedsModel

    this.getById = id => defaultResponse(this.FeedsModel.findOne(id))

    this.latests = (limit = 10) => defaultResponse(this.FeedsModel.latests(limit))

    this.top = (limit = 24) => defaultResponse(this.FeedsModel.top(limit))

    this.getByName = (name) => defaultResponse({name})

    this.episodes = (id) => defaultResponse({episodes: [id]})
}

module.exports = FeedsController
