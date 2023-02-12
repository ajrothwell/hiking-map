export default {
  id: 'hikes',
  type: 'http-get',
  dependent: 'none',
  resettable: false,
  compile: false,
  url: 'https://api.airtable.com/v0/app3baMd88ZTNQrTy/jennie_pictures?api_key=' + process.env.VUE_APP_AIRTABLE_API_KEY,
  options: {
    params: {
    },
  },
};
