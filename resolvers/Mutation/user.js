const User = require('../../models/User')
const bcrypt = require('bcryptjs')

module.exports = {
  async registerUser(parent,{name,email,password},ctx,info){
    const match = await User.findOne({email})
    if(match) throw new Error("Email taken")
    const user = await new User({name,email,password})
    if(!user) throw new Error("Something wrong!")
    const salt = await bcrypt.genSalt(12);
    user.password = await bcrypt.hash(password,salt);
    await user.save()
    return true
  },
  async loginUser(parent,{email,password},ctx,info){
    const user = await User.findOne({email})
    if(!user) throw new Error("Email or Password is invalid!")
    const passMacth = await bcrypt.compare(password,user.password);
    if(!passMacth) throw new Error("Email or Password is invalid")
    return user.createToken()
  },
  async updateUser(parent,args,ctx,info){
    const {_id,name,email,password} = args
    let user = await User.findById(_id);
    if(!user) throw new Error("User not found")
    const match = await bcrypt.compare(password,user.password);
    if(!match) throw new Error("Password is invalid")
    user = await User.findByIdAndUpdate(_id,{$set: {name,email}},{new: true});
    if(!user) throw new Error("Something wrong")
    return user
  },
  async deleteUser(parent,{id},ctx,info){
    if(!id) throw new Error("Id is required")
    const user = await User.findByIdAndDelete(id).select('-password')
    if(!user) throw new Error("User not found")
    return user
  }
}
