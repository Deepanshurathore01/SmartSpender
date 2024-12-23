const mongoose =require('mongoose')
const bcrypt =require('bcryptjs')

mongoose.connect(`mongodb://127.0.0.1:27017/smartspender`,{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
.catch(err => console.error("Connection Error", err));

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNo: { type: String, required: true },
  city: { type: String, required: true },
  password: { type: String, required: true },
});



const User = mongoose.model('User', userSchema);

module.exports = User;