const express=require('express')
const {summaryController,paragraphController,chatbotController,jsconverterController,scifiimageController} = require('../controllers/openaiController');

const router=express.Router()

router.post("/summary", summaryController);
router.post("/paragraph", paragraphController);
router.post("/chatbot", chatbotController);
router.post("/js-converter", jsconverterController);
router.post("/scifi-image", scifiimageController);

module.exports=router;



