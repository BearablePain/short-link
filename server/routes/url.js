/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
/* eslint-disable import/first */
import validUrl from 'valid-url';
import shortid from 'shortid';
import express from 'express';

import Url from '../models/Url.js';

const router = express.Router();

// Создает короткий URL

router.post('/shorten', async (req, res) => {
  const { longLink } = req.body;
  const baseUrl = 'http://localhost:4000';

  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json({ shortUrl: 'Invalid url' });
  }
  // Создает code
  const urlCode = shortid.generate();

  // Проверяет введенный пользователем URL 

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
    res.status(401).json({ shortUrl: 'Invalid url' });
  }
});

//      GET /api/url/list
//       Load all URLs

router.get('/list', async (req, res) => {
  try {
    let urls = await Url.find();
    urls = urls.reverse();
    return res.json(urls);
  } catch (error) {
    res.status(500).json('Server error');
  }
});

export default router;
