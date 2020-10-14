const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  date: { type: String, default: Date.now },
  count: Number,
});

const UrlModel = mongoose.model('Url', urlSchema);

export default UrlModel;
