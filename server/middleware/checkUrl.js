import validUrl from 'valid-url';

// eslint-disable-next-line consistent-return

// Проверяет введенный пользователем URL

const checkUrl = (req, res, next) => {
  const { longLink } = req.body;
  if (!validUrl.isUri(longLink)) {
    return res.status(401).json({ shortUrl: 'Invalid url' });
  }
  next();
};

export default checkUrl;
