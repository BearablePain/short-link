/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
import express from 'express';
import Url from '../models/Url.js';

const router = express.Router();
router.get('/', (req, res) => {
  res.json('Connect backend');
});

// GET /:code
// redirects to original URL

router.get('/:code', async (req, res) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.code });
    if (url) {
      url.count += 1;
      url.save();
      return res.redirect(url.longLink);
    }
    return res.status(404).json('No url found');
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
});

export default router;
