module.exports = function FeedsModel(){

    const mongoose = {}

    this.findOne = id => mongoose.findOne({id:id})

    this.latests = function(limit = 10) {
      mongoose.find()
        .limit(limit)
        .sort({last_episode_at: -1})
    }
}
