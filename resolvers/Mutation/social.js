const User = require('../../models/User')

module.exports = {
  async createSocial(parent,args,ctx,info){
    const {ownar,name,link} = args.data;
    const user = await User.findOne({_id: ownar})
    if(!user) throw new Error("User not found")
    const {socials} = user
    const social = socials.push({name,link})
    await user.save();
    return socials[social-1]
  },
  async updateSocial(parent,args,ctx,info){
    const {id,ownar,name,link} = args.data
    const user = await User.findOne({_id: ownar})
    if(!user) throw new Error("User not found")
    const social = user.socials.find(i => i._id == id);
    if(social == -1) throw new Error("Id not found")
    social.name = name
    social.link = link
    await user.save()
    return social;
  },
  async deleteSocial(parent,args,ctx,info){
    const {id,ownar} = args
    const user = await User.findOne({_id: ownar})
    if(!user) throw new Error("User not found");
    const index = user.socials.findIndex(i => i._id == id)
    if(index == -1) throw new Error("Social not found")
    const social = user.socials.splice(index,1)
    await user.save()
    return social[0]
  }
}
