const mongoose = require("mongoose")
// const uri = "mongodb+srv://admin:lYgybrMHChHqrAOA@hyperplane-cluster.fydlc5p.mongodb.net/player-app?retryWrites=true&w=majority";

mongoose.set('strictQuery',false)

module.exports=()=>{
  return mongoose.connect(process.env.BEST_DB ,{useNewUrlParser: true,useUnifiedTOpology: true});
}