const mongoose=require('mongoose');

const DashboardSchema= mongoose.Schema(
    {
        user:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        },
        dryWaste:
        {
            type:Number,
            default:0
        },
        wetWaste:
        {
            type:Number,
            default:0
        },
        EWaste:
        {
            type:Number,
            default:0
        },
        Total:
        {
            type:Number,
            default:0
        }
    }
)

module.exports=mongoose.model("Dashboard",DashboardSchema);