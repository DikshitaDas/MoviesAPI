const errorHandler = async (error,req,res,next) => {

    if(error) {
        console.log(error)
        if(error.messgase){
            res.status(400).json({
            status : "failed",
            messgase : error.messeage
        })
    }
        else{
            res.status(400).json({
                status : "failed",
                messgase : error,
        })
    }
    }

        else{
            next();
        }
    }
module.exports = errorHandler;