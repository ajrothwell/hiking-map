export default {
  id: 'hikes',
  type: 'http-get',
  dependent: 'none',
  resettable: false,
  url: 'https://api.airtable.com/v0/appUQBJX2udkVPwp6/jessie?api_key=' + process.env.VUE_APP_AIRTABLE_API_KEY,
  options: {
    params: {
    },
  },
};
