const User = require('../../models/User')
const bcrypt = require('bcryptjs')

module.exports = {
  async registerUser(parent,{data},ctx,info){
    console.log('hello',data);
    const {firstname,lastname,username,email,short_info,password,confirmPassword} = data
    const usernameMatch = await User.findOne({username})
    if(usernameMatch) throw new Error("Username taken.")
    const emailMatch = await User.findOne({email})
    if(emailMatch) throw new Error("Email taken.")
    if(password !== confirmPassword) throw new Error("Confirm Password does not match with password.")
    const user = await new User({firstname,lastname,username,email,short_info,password})
    if(!user) throw new Error("Something wrong!")
    const salt = await bcrypt.genSalt(12);
    user.password = await bcrypt.hash(password,salt);
    await user.save()
    return true
  },
  async loginUser(parent,{username,password},ctx,info){
    const user = await User.findOne({username})
    if(!user) throw new Error("Username or Password is invalid!")
    const passMacth = await bcrypt.compare(password,user.password);
    if(!passMacth) throw new Error("Username or Password is invalid")
    return user.createToken()
  },
  async updateUser(parent,{data},ctx,info){
    const {_id,firstname,lastname,username,short_info,email,password} = data
    let user = await User.findById(_id);
    if(!user) throw new Error("User not found")
    if(user.username !== username){
      const matchUsername = await User.findOne({username})
      if(matchUsername) throw new Error("Username Taken.")
    }
    if(user.email !== email){
      const matchEmail = await User.findOne({email})
      if(matchEmail) throw new Error("Email taken.")
    }
    const match = await bcrypt.compare(password,user.password);
    if(!match) throw new Error("Password is invalid")
    user = await User.findByIdAndUpdate(_id,{$set: {firstname,lastname,username,short_info,email}},{new: true});
    if(!user) throw new Error("Something wrong")
    return user
  },
  async deleteUser(parent,{id,password},ctx,info){
    if(!id) throw new Error("Id is required")
    const user = await User.findById(id);
    if(!user) throw new Error("User not found")
    const passwordMatch = await bcrypt.compare(password,user.password);
    if(!passwordMatch) throw new Error("Password is invalid")
    const deletedUser = await User.findByIdAndDelete(id).select('-password')
    if(!deletedUser) throw new Error("Something wrong")
    return deletedUser
  }
}
