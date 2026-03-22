const errorHandler = (err, req, res, next) => {
  console.error(err.message);

  const status = err.response?.status || 500;
  const message = err.response?.data?.msg || err.message || 'Internal Server Error';

  res.status(status).json({
    success: false,
    error: message,
  });
};

export default errorHandler;