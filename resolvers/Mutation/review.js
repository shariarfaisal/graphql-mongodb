const User = require('../../models/User')

module.exports = {
  async createReview(parent,args,ctx,info){
    const {ownar,name,body} = args
    const user = await User.findById(ownar)
    if(!user) throw new Error("User not found")
    const {reviews} = user
    const review = reviews.push({name,body})
    await user.save()
    return reviews[review-1]
  },
  async updateReview(parent,args,ctx,info){
    const {id,ownar,name,body} = args
    const user = await User.findById(ownar)
    if(!user) throw new Error("User not found")
    const {reviews} = user
    const review = reviews.find(i => i._id == id)
    if(!review) throw new Error("Review not found")
    review.name = name
    review.body = body
    await user.save()
    return review
  }
}
