const asyncHandler = (requesthandler) => {
    (req, res,  next) =>{
        Promise.resolve(requesthandler(req,res,next)).
        catch((err) => next(err) )
    }
}
export {asyncHandler}

// const asyncHandler = () => {};
// const asyncHandler = () => {() => {}}
// const asyncHandler = (func) =>() => {}
// const asyncHandler = (func) => async() => {} 


// const asyncHandler = (func) => async(req, res, next) =>{
//     try {
//         await func(req,res,next);
//     } catch (error) {
//         res.status(err.status || 500).json({
//             success :false,
//             message: err.message
//          })
//     }
// }
      