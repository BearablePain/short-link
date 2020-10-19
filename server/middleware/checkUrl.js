import validUrl from 'valid-url';

const checkUrl = (req, res, next) => {
  const { longLink } = req.body;
  if (!validUrl.isUri(baseUrl)) {
  }
  res.send('check');
  next();
};

export default checkUrl;
