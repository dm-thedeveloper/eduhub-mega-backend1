import APIResponse from "../utils/apiResponse.utils.js";
import asyncHandler from "../utils/asyncHandler.utils.js";

const Register = asyncHandler((req, res) => {
  console.log(req.url);

  res.status(200).json(new APIResponse("User Register Controller", {}, 200));
});




export  {Register}