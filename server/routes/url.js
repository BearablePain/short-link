import validUrl from 'valid-url';
import shortid from 'shortid';
import config from 'config';
import express from 'express';

const router = express.Router();

import Url from '../models/Url.js';

// @route     POST /api/url/shorten
// @desc      Create short URL
router.post('/shorten', async (req, res) => {
  console.log(
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
  );
  console.log(req.body);

  const { longLink } = req.body;
  console.log(longLink);
  // const baseUrl = config.get('baseUrl');
  const baseUrl = 'http://localhost:4000';

  // Check base url
  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json('Invalid base url');
  }
  console.log(longLink);
  // Create url code
  const urlCode = shortid.generate();

  // Check long url
  // if (validUrl.isUri(Longlink)) {
  try {
    let url = await Url.findOne({ longLink });

    if (url) {
      res.json(url);
    } else {
      const shortUrl = `${baseUrl}/${urlCode}`;
      console.log(longLink);
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
    console.error(err);
    res.status(500).json('Server error');
  }
  // } else {
  //   res.status(401).json('Invalid long url');
  // }
});

export default router;
