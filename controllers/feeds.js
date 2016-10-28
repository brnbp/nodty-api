const defaultResponse = (data, statusCode = 200) => ({data, statusCode})
const errorResponse = (message = '', statusCode = 400) => ({error: message, statusCode})

function FeedsController(FeedsModel) {
    this.FeedsModel = FeedsModel

    this.getById = id => this.FeedsModel.findOne(defaultResponse(id))

    this.latests = () => defaultResponse({latests:[]})

    this.top = (count = 24) => defaultResponse({top:[count]})

    this.getByName = (name) => defaultResponse({name})

    this.episodes = (id) => defaultResponse({episodes: [id]})


}

module.exports = FeedsController
