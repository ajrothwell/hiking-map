<template>
  <div
    class="custom-greeting content"
  >
    <div class="has-text-centered container">
      <button
        class="button open-list-button is-primary"
        @click="$emit('view-list')"
        v-html="$t('app.viewList')"
      />
    </div>
  </div>
</template>

<script>

export default {
  name: 'CustomGreeting',
  props: {
    'message': {
      type: String,
      default: function() {
        return 'defaultMessage';
      },
    },
  },
  data() {
    let data = {
      sections: {},
      subsections: {},
    };
    return data;
  },
  computed: {
    i18nEnabled() {
      if (this.$config.i18n) {
        return true;
      }
      return false;

    },
    calloutOptions() {
      return {};
    },
    calloutSlots() {
      return {
        text: 'test',
      };
    },
    database() {
      if (this.$store.state.sources[this.$appType].data) {
        return this.$store.state.sources[this.$appType].data.rows || this.$store.state.sources[this.$appType].data.features || this.$store.state.sources[this.$appType].data;
      }
      return [];
    },
    hasError() {
      return this.$store.state.geocode.status === 'error';
    },
    errorMessage() {
      const input = this.$store.state.geocode.input;
      return `
          <p>
            We couldn't find
            ${input ? '<strong>' + input + '</strong>' : 'that address'}.
            Are you sure everything was spelled correctly?
          </p>
          <p>
            Here are some examples of things you can search for:
          </p>
          <ul>
            <li>1234 Market St</li>
            <li>1001 Pine Street #201</li>
            <li>12th & Market</li>
            <li>883309050 (an OPA number with no hyphens or other characters)</li>
          </ul>
        `;
    },
  },
  // watch: {
  //   database() {
  //     let subsections = this.getCounts();
  //     this.subsections = subsections;
  //     this.$store.commit('setSubsections', subsections);
  //   },
  // },
  mounted() {
    this.sections = this.$config.sections;
  },
  methods: {
    getCounts() {
      // console.log('customGreeting.vue getCounts is running');
      const refineData = this.database;
      // const refineData = this.sources[this.$appType].data.rows;

      let service = '';

      // console.log('in getRefineSearchList, refineData:', refineData);
      refineData.forEach((arrayElem) => {
        // console.log('arrayElem:', arrayElem);
        if (arrayElem.services_offered) {
          service += `${arrayElem.services_offered},`;
        } else if (arrayElem.attributes.CATEGORY) {
          service += `${arrayElem.attributes.CATEGORY},`;
        }
      });

      // TODO: break this into smaller chunks
      // let serviceArray = service.split(/(,|;)/);
      let serviceArray = service.split(',');
      serviceArray = serviceArray.map(s => s.trim());

      // const uniqArray = [ ...new Set(serviceArray) ];
      // console.log('serviceArray:', serviceArray, 'uniqArray:', uniqArray);
      //
      // // clean up any dangling , or ;
      // let uniq = uniqArray.filter(a => a.length > 2);
      //
      // uniq.filter(Boolean); // remove empties

      let countObject = serviceArray.reduce(function (acc, curr) {
        if (typeof acc[curr] == 'undefined') {
          acc[curr] = 1;
        } else {
          acc[curr] += 1;
        }
        return acc;
      }, {});

      return countObject;
    },
  },
};
</script>

<style scoped>


  .custom-greeting {
    padding: 2rem;
  }

  .container {
    margin-bottom: 1rem;
  }

  .custom-callout {
    border-style: solid;
    border-width: 1px;
    padding: 10px;
  }

  .open-list-button {
    text-transform: uppercase;
  }

  .exclamation-holder {
    padding: 1rem;
    margin-bottom: 0px;
  }

  .fa-icon-class {
    margin: 0 auto;
    display: block;
  }

  .exclamation-details {
    margin-left: 14px;
  }

  .mb-panel-topics-greeting {
    padding-top: 20px;
  }

  /* .greeting {
    font-size: 20px;
    color: #444;
    padding: 14px;
  } */

  /* ul {
    margin-bottom: 6px;
  } */

  /* h1 {
    font-size: 20px;
  }

  h2 {
    font-size: 16px;
  } */

  /* .custom-greeting {
    padding: 1rem;
  } */

  /* .greeting-error {
    border-left-color: #ff0000;
  } */

  /* .custom-section {
    margin-left: 8px;
    margin-top: 4px;
  } */

  /* .custom-ul {
    margin-left: 4rem;
    font-size: 14px;
  } */

  /*medium*/
  /*make this scroll on medium screens*/
  /*REVIEW this is a little hacky. the 120px shouldn't be hard-coded.*/
  /* @media screen and (min-width: 750px) {
    .mb-panel-topics-greeting {
      height: calc(100vh - 120px);
      overflow: auto;
    }
  } */
</style>
