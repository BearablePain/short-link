import express from 'express';
import Url from '../models/Url.js';

const router = express.Router();
router.get('/', (req, res) => {
  res.json('Connect backend');
});

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
    // console.error(err);
    res.status(500).json('Server error');
  }
});

export default router;
