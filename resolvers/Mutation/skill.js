const User = require('../../models/User');

module.exports = {
  async createSkill(parent,{data},ctx,info){
    const {ownar,name,level} = data;
    const user = await User.findOne({_id: ownar})
    if(!user) throw new Error("User not found!")
    const {skills} = user
    const skill = skills.push({name: "javascript",level: 80})
    await user.save()
    return skills[skill-1]
  },
  async updateSkill(parent,args,ctx,info){
    const {id,ownar,name,level} = args.data
    const user = await User.findOne({_id: ownar})
    if(!user) throw new Error("User not found")
    const skill = user.skills.find(i => i._id == id)
    skill.name = name
    skill.level = level
    await user.save()
    return skill
  },
  async deleteSkill(parent,args,ctx,info){
    const {id,ownar} = args
    const user = await User.findOne({_id: ownar})
    if(!user) throw new Error("User not found");
    const index = user.skills.findIndex(i => i._id == id)
    if(index == -1) throw new Error("Skill not found")
    const skill = user.skills.splice(index,1)
    await user.save()
    return skill[0]
  }
}
