const User = require('../../models/User')

module.exports = {
  async createService(parent,args,ctx,info){
    const {ownar,name,details} = args
    const user = await User.findById(ownar)
    if(!user) throw new Error("User not found")
    const services = user.services
    const service = services.push({name,details})
    await user.save()
    console.log(service);
    return services[service-1]
  },
  async updateService(parent,args,ctx,info){
    const {id,ownar,name,details} = args
    const user = await User.findById(ownar);
    if(!user) throw new Error("User not found")
    const {services} = user
    const service = services.find(i => i._id == id)
    if(!service) throw new Error("Service not found")
    service.name = name
    service.details = details
    await user.save()
    return service
  },
  async deleteService(parent,args,ctx,info){
    const {id,ownar} = args
    const user = await User.findById(ownar);
    if(!user) throw new Error("User not found")
    const {services} = user
    const index = services.findIndex(i => i._id == id);
    if(index == -1) throw new Error("Service not found")
    const service = services.splice(index,1)
    await user.save()
    return service[0]
  }
}
