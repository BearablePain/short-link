import validUrl from 'valid-url';

// Проверяет введенный пользователем URL

const checkUrl = (req, res, next) => {
  const { longLink } = req.body;
  if (!validUrl.isUri(longLink)) {
    res.status(401).json({ shortUrl: 'Invalid url' });
  }
  next();
};

export default checkUrl;
