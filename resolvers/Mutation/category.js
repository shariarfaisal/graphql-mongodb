const Category = require('../../models/Category')

module.exports = {
  async createCategory(parent,{name},ctx,info){
    const category = await new Category({name})
    if(!category) throw new Error("Something wrong")
    await category.save()
    return category
  },
  async updateCategory(parent,{id,name},ctx,info){
    const match = await Category.findById(id);
    if(!match) throw new Error("Category not found")
    const category = await Category.findByIdAndUpdate(id,{$set:{name}},{new: true})
    if(!category) throw new Error("Something Wrong")
    return category
  },
  async deleteCategory(parent,{id},ctx,info){
    const match = await Category.findById(id)
    if(!match) throw new Error("Category not found")
    const category = await Category.findByIdAndDelete(id);
    if(!category) throw new Error("Something Wrong")
    return category
  }
}
