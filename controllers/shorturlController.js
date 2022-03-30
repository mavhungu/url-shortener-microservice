const validUrl = require('valid-url');
const Shorturl = require('../models/shorturl')

const Error = (res) => res.json({ error: 'invalid url' });
const Successfull = (res, { original_url, short_url }) => res.json({ original_url, short_url });
const Redirect = (res, location) =>  res.redirect(location);
const getAllShorturl = async() => await Shorturl.find();
const getShorturlByOriginalUrl = async(original_url) => await Shorturl.find({ original_url });
const getShorturlByShortUrl = async(short_url) => await Shorturl.find({ short_url });
const createShorturlAndSave = async (original_url, short_url) => {
const newShorturl = new Shorturl({ original_url, short_url });
  await newShorturl.save();
};

const saveShorturlIfNotFound = async(original_url) => {
  const shorturlItem = await getShorturlByOriginalUrl(original_url);
    if (shorturlItem.length === 0) {
      const shorturlDocuments = await getAllShorturl();
      await createShorturlAndSave(original_url, shorturlDocuments.length + 1)
    }
}

const postShorturlHandler = async (req, res) => {
  const { url } = req.body;
    if (!validUrl.isWebUri(url)) {
      Error(res);
    } else {
      await saveShorturlIfNotFound(url);
      const shorturlItem = await getShorturlByOriginalUrl(url);
      Successfull(res, shorturlItem[0]);
    }
}

const getShorturlByCodeHandler = async (req, res) => {
  const { short_url } = req.params
    if (isNaN(+short_url)) {
      Error(res)
    } else {
      const shorturlItem = await getShorturlByShortUrl(short_url)
        shorturlItem.length === 0 ? Error(res) : Redirect(res, shorturlItem[0].original_url)
    }
}


module.exports = {getShorturlByCodeHandler ,postShorturlHandler}