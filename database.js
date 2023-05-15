const mongoose = require("mongoose")
mongoose.set('strictQuery',false)

module.exports=()=>{
  return mongoose.connect(process.env.BEST_DB ,{useNewUrlParser: true,useUnifiedTOpology: true});
}
