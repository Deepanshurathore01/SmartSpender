const mongoose =require('mongoose')

const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNo: { type: String, required: true },
  city: { type: String, required: true },
  password: { type: String, required: true },
});

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;