import validUrl from 'valid-url';
import shortid from 'shortid';
import config from 'config';
import express from 'express';

const router = express.Router();

import Url from '../models/Url.js';

// @route     POST /api/url/shorten
// @desc      Create short URL
router.post('/shorten', async (req, res) => {
  const { longLink } = req.body;
  // const baseUrl = config.get('baseUrl');
  const baseUrl = 'http://localhost:4000';

  // Check base url
  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json({ shortUrl: 'Invalid long url' });
  }
  // Create url code
  const urlCode = shortid.generate();

  // Check long url
  if (validUrl.isUri(longLink)) {
    try {
      let url = await Url.findOne({ longLink });

      if (url) {
        res.json(url);
      } else {
        const shortUrl = `${baseUrl}/${urlCode}`;
        url = new Url({
          longLink,
          shortUrl,
          urlCode,
          date: new Date(),
          count: 0,
        });
        await url.save();

        res.json(url);
      }
    } catch (err) {
      res.status(500).json('Server error');
    }
  } else {
    res.status(401).json({ shortUrl: 'Invalid long url' });
  }
});

router.get('/list', async (req, res) => {
  try {
    const urls = await Url.find();
    return res.json(urls);
  } catch (error) {
    res.status(500).json('Server error');
  }
});

export default router;
