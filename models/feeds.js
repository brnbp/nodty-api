module.exports = function FeedsModel(){

  const mongoose = {}

  this.findOne = id => mongoose.findOne({id})

  this.latests = (limit = 10) => mongoose.find()
                                            .limit(limit)
                                            .sort({last_episode_at: -1})

  this.top = (limit = 10) => mongoose.find()
                                      .limit(limit)
                                      .sort({listeners: -1, last_episode_at: -1})
}
