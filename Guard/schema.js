var mongoose=require("mongoose");
const {Schema}=mongoose;

const guardSchema=new Schema({
    active:{
        type:Boolean,
        default:true,
        required:true,
        min:15,
        max:20
    },
    firstname:{
        type:String,
        required:true,
        min:15,
        max:50
    },
    lastname:{
        type:String,
        required:true,
        min:15,
        max:50
    },
    email:{
        type:String,
        required:true,
        min:15,
        max:50
    },
    dateofbirth:{
        type:String,
        required:true,
        min:15,
        max:50
    },
    address:{
        type:String,
        required:true,
        min:15,
        max:50
    },
    profileimage: {
        type: String,
        require:false,
        default: 0
    },
    IDfront: {
        type: String,
        require:false,
        default: 0
    },
    IDback: {
        type: String,
        require:false,
        default: 0
    },
    liscensefront: {
        type: String,
        require:false,
        default: 0
    },
    liscenseback: {
        type: String,
        require:false,
        default: 0
    },
    personalsummary:{
        type:String,
        required:true,
        min:15,
        max:50
    },
    skills:[
        {
            doorsupervisor:{
                type:String,
                required:true
            },
            KeyHolding:{
                type:String,
                required:true
            },
            doghandlingservice:{
                type:String,
                required:true
            },
            vipcloseprotection:{
                type:String,
                required:true
            },

        }
    ],      
    previouswork:{
        type:String,
        required:true,
        min:15,
        max:50
    },
    Uid: {
        type: String,
        required: false,
      },
});

const Guard = mongoose.model("registers", guardSchema);
module.exports = { Guard:Guard};