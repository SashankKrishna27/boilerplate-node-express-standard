export const errorHandler = (error, req, res, next) => {
  console.log(error?.message, error?.statusCode);
  if (res.headersSent) {
    return next(error);
  }
  res.status(error.statusCode || 500).json({
    message: error.message || "An unknown error",
  });
};
