export default {
  id: 'hikes',
  type: 'http-get',
  dependent: 'none',
  deps: [ 'sources.andy_pictures_02' ],
  resettable: false,
  compile: false,
  url: 'https://api.airtable.com/v0/appqasIqir5SS0S9s/andy_pictures?api_key=' + process.env.VUE_APP_AIRTABLE_API_KEY,
  options: {
    params: {
      offset: function(feature, state) {
        // console.log('state.sources.andy_pictures_01.data:', state.sources.andy_pictures_01.data);
        return state.sources.andy_pictures_02.data.offset;
      },
    },
  },
};
