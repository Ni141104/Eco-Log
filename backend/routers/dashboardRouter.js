const express=require('express');
const dashboardRouter=express.Router();
const Dashboard = require('../models/dashboard');
const { authMiddleware } = require('../middlewares/userAuth');

dashboardRouter.post("/updateWaste",authMiddleware,async (req,res)=>{
    try {
        
        const {dryWasteVolume,wetWasteVolume,EWasteVolume}=req.body;

        if (dryWasteVolume === undefined || wetWasteVolume === undefined || EWasteVolume === undefined) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const userId=req.userId;
        const total=dryWasteVolume+wetWasteVolume+EWasteVolume;
        let user=await Dashboard.findOne({user:userId});
    
        if(!user)
        {
            const newUser=new Dashboard(
                {
                    user: userId,
                    dryWaste: dryWasteVolume,
                    wetWaste: wetWasteVolume,
                    EWaste: EWasteVolume,
                    Total: total
                }
            )
    
            await newUser.save();
          return  res.status(200).json(newUser);
            
        }
    
        else{
           user.dryWaste+=dryWasteVolume;
           user.wetWaste+=wetWasteVolume;
           user.EWaste+=EWasteVolume;
           user.total+=dryWasteVolume+wetWasteVolume+EWasteVolume;
           await user.save();
    
          return res.status(201).json(user);
        }
    } catch (err) {
        console.log(err)
       return  res.status(400).json(
            {
              error:'Error occurs in dashboard controller'
            }
        )
    }
}
)

module.exports=dashboardRouter;