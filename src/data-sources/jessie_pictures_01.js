export default {
  id: 'hikes',
  type: 'http-get',
  dependent: 'none',
  resettable: false,
  compile: false,
  url: 'https://api.airtable.com/v0/appUQBJX2udkVPwp6/jessie_pictures',
  options: {
    params: {
    },
    headers: {
      'Authorization': 'Bearer ' + process.env.VUE_APP_AIRTABLE_ACCESS_TOKEN,
    },
  },
};
