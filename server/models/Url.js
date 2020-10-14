import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
  urlCode: String,
  longLink: String,
  shortUrl: String,
  date: { type: String, default: Date.now },
  count: { type: Number, default: 0 },
});

const UrlModel = mongoose.model('Url', urlSchema);

export default UrlModel;
