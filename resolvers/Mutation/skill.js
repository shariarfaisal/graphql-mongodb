const Skill = require('../../models/Skill');

module.exports = {
  async createSkill(parent,args,ctx,info){
    const {name,level} = args;
    const addSkill = await new Skill({name,level});
    if(!addSkill) throw new Error("Something wrong")
    await addSkill.save();
    console.log(addSkill);
    return addSkill;
  },
  async updateSkill(parent,args,ctx,info){
    const {id,name,level} = args;
    let skill = await Skill.findById(id);
    if(!skill) throw new Error("Skill not found")
    const updatedSkill = await Skill.findByIdAndUpdate(id,{$set: {name,level}},{new: true})
    if(!updatedSkill) throw new Error("Something wrong!")
    return updatedSkill;
  },
  async deleteSkill(parent,args,ctx,info){
    const skill = await Skill.findByIdAndDelete(args.id);
    if(!skill) throw new Error("Skill not found or Something wrong")
    return skill;
  }
}
