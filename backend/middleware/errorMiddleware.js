
//404 Error middleware
const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error);
}

//500 error;
const errorHandler = (err,req,res,next)=>{
    //Check if statusCode is 200 OK, if it is return server error, else return status code
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode)//Set status of res to statusCode
    //Do stack trace ONLY if we're in development
    res.json({//In the response call. then return json in the form of an error message
        message : err.message, //Show error message 
        stack : process.env.NODE_ENV === 'production' ? null : err.stack //Do stack trace ONLY if we're in development
    })
}

export {notFound, errorHandler}