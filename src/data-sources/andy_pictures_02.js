export default {
  id: 'hikes',
  type: 'http-get',
  dependent: 'none',
  resettable: false,
  compile: false,
  url: 'https://api.airtable.com/v0/appqasIqir5SS0S9s/andy_pictures?api_key=' + process.env.VUE_APP_AIRTABLE_API_KEY,
  options: {
    params: {
      offset: 'itrOH34m4vwAH3Xr5/recrrSlBNiWx5yKvN',
    },
  },
};
