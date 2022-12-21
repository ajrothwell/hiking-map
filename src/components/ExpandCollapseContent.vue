<template>
  <div class="main-content">
    <div>
      Date: {{ item.fields.Date }}<br>
      Type: {{ item.fields.type }}
    </div>
    <div
      v-if="item.fields.Attachments"
      class="img-div"
    >
      <img :src="item.fields.Attachments[0].url">
    </div>
    <div
      v-if="!item.fields.Attachments"
    >
      No photo
    </div>
    <!-- <div>
      {{ item.fields.Name }}
    </div> -->
    <!-- <div class="columns">
      <div class="column">
        <div
          v-if="item.attributes.ADDRESS"
          class="columns is-mobile"
        >
          <div class="column is-1">
            <font-awesome-icon icon="map-marker-alt" />
          </div>
          <div class="column">
            {{ item.attributes.ADDRESS }}<br>
            Philadelphia, PA {{ item.attributes.ZIP_CODE }}<br>
          </div>
        </div>

        <div
          v-if="item.attributes.WEBSITE"
          class="columns is-mobile"
        >
          <div class="column is-1">
            <font-awesome-icon icon="globe" />
          </div>
          <div class="column">
            <a
              target="_blank"
              :href="item.attributes.WEBSITE"
            >{{ $t('website') }}</a>
          </div>
        </div>
        <div
          v-if="item.attributes.OFFICE_PHONE_NUM"
          class="columns is-mobile"
        >
          <div class="column is-1">
            <font-awesome-icon icon="phone" />
          </div>
          <div class="column">
            {{ item.attributes.OFFICE_PHONE_NUM }}
          </div>
        </div>
      </div>

      <div class="column">
        <div class="columns is-mobile">
          <div
            class="column is-1"
          >
            <font-awesome-icon icon="car-bus" />
          </div>
          <div class="column">
            <div>{{ item.attributes.PARKING_TRANSIT }}</div>

          </div>
        </div>

      </div>
    </div> -->

    <!-- <h3>{{ $t('ageSpecificServices') }}</h3>

    <vue-good-table
      :columns="ageSpecificServices.columns"
      :rows="ageSpecificServices.rows"
      :sort-options="{ enabled: false }"
      styleClass="vgt-table condensed"
    >
      <template slot="table-column" slot-scope="props">
        <span
          v-if="props.column.label =='Service'"
          class="table-header-text"
        >
          {{ $t(props.column.i18nLabel) }}
        </span>
        <div
          v-if="props.column.label =='Adult'"
          class="center table-header-text"
        >
          {{ $t(props.column.i18nLabel) }}
        </div>
        <div
          v-if="props.column.label =='Child'"
          class="center table-header-text"
        >
          {{ $t(props.column.i18nLabel) }}
        </div>
        <div
          v-if="props.column.label =='Existing'"
          class="center table-header-text"
        >
          {{ $t(props.column.i18nLabel) }}
        </div>
      </template>

      <template slot="table-row" slot-scope="props">
        <span
          v-if="props.column.field == 'service'"
          class="table-text"
        >
          {{ $t(props.row.service) }}
        </span>
        <div
          v-if="props.column.field == 'adult'"
          class="center"
        >
          <font-awesome-icon
            v-if="['Yes', 'Established Patients'].includes(props.row.adult)"
            :icon="['fa', 'check']"
          />
        </div>
        <div
          v-if="props.column.field == 'child'"
          class="center"
        >
          <font-awesome-icon
            v-if="['Yes', 'Established Patients'].includes(props.row.child)"
            :icon="['fa', 'check']"
          />
        </div>
        <div
          v-if="props.column.field == 'existing'"
          class="center"
        >
          <font-awesome-icon
            v-if="props.row.existing.includes('Established Patients')"
            :icon="['fa', 'check']"
          />
        </div>
      </template>
    </vue-good-table>

    <h3 class="section-heading">{{ $t('otherServices') }}</h3>
    <vue-good-table
      :columns="otherServices.columns"
      :rows="otherServices.rows"
      :sort-options="{ enabled: false }"
      styleClass="vgt-table condensed"
    >
      <template slot="table-column" slot-scope="props">
        <span
          v-if="props.column.label =='Service'"
          class="table-header-text"
        >
          {{ $t(props.column.i18nLabel) }}
        </span>
        <div
          v-if="props.column.label =='All'"
          class="center table-header-text"
        >
          {{ $t(props.column.i18nLabel) }}
        </div>
        <div
          v-if="props.column.label =='Existing'"
          class="center table-header-text"
        >
          {{ $t(props.column.i18nLabel) }}
        </div>
      </template>

      <template slot="table-row" slot-scope="props">
        <span
          v-if="props.column.field == 'service'"
          class="table-text"
        >
          {{ $t(props.row.service) }}
        </span>
        <div
          v-if="props.column.field == 'all'"
          class="center"
        >
          <font-awesome-icon
            v-if="props.row.value == 'Yes'"
            :icon="['fa', 'check']"
          />
        </div>
        <div
          v-if="props.column.field == 'existing'"
          class="center"
        >
          <font-awesome-icon
            v-if="['Yes', 'Established Patients'].includes(props.row.value)"
            :icon="['fa', 'check']"
          />
        </div>
      </template>
    </vue-good-table>

    <h3 class="section-heading">{{ $t('hours') }}</h3>
    <vue-good-table
      :columns="hours.columns"
      :rows="hours.rows"
      :sort-options="{ enabled: false }"
      styleClass="vgt-table condensed"
    >
      <template slot="table-column" slot-scope="props">
        <span
          v-if="props.column.label =='Days'"
          class="table-header-text"
        >
          {{ $t(props.column.i18nLabel) }}
        </span>
        <span
          v-if="props.column.label =='Schedule'"
          class="table-header-text"
        >
          {{ $t(props.column.i18nLabel) }}
        </span>
      </template>

      <template slot="table-row" slot-scope="props">
        <span
          v-if="props.column.field == 'days'"
          class="table-text"
        >
          {{ $t(props.row.days) }}
        </span>
        <div
          v-if="props.column.field == 'schedule'"
          class="table-text"
        >
          {{ props.row.schedule }}
        </div>
      </template>
    </vue-good-table>

    <h3 class="section-heading">{{ $t( 'tests.category' ) }}</h3>
    <span
      v-for="(type, index) of tests"
      :key="'test-'+index"
    >
      {{ $t('tests[\'' + type.toLowerCase() + '\']') }}<span v-if="index<tests.length-1">, </span>
    </span>

    <h3 class="section-heading">{{ $t( 'slidingScale' ) }}</h3>
    <div>
    </div>

    <h3 class="section-heading">{{ $t( 'languages.languagesSpoken' ) }}</h3>
    <span
      v-for="(language, index) of languagesSpoken"
      :key="'lang-'+index"
    >
      {{ $t('languages[\'' + language.toLowerCase() + '\']') }}<span v-if="index<languagesSpoken.length-1">, </span>
    </span> -->

  </div>
</template>

<script>

import SharedFunctions from './mixins/SharedFunctions.vue';
import { VueGoodTable } from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css'

export default {
  name: 'ExpandCollapseContent',
  components: {
    VueGoodTable,
  },
  mixins: [ SharedFunctions ],
  props: {
    item: {
      type: Object,
      default: function(){
        return {};
      },
    },
  },
  computed: {

  },
  // methods: {
  //   parseAddress(address) {
  //     const formattedAddress = address.replace(/(Phila.+)/g, city => `<div>${city}</div>`).replace(/^\d+\s[A-z]+\s[A-z]+/g, lineOne => `<div>${lineOne}</div>`).replace(/,/, '');
  //     return formattedAddress;
  //   },
  // },
};

</script>

<style lang="scss">

table {
  border: 0px none;
  border-style: none !important;
}

.img-div {
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 10px;
  padding-bottom: 10px;
}

// .vgt-table.bordered td, .vgt-table.bordered th {
//   border: 0px none #dcdfe6;
// }

// th, td {
//   padding-top: 7px !important;
//   padding-bottom: 7px !important;
// }

.vgt-responsive {
  // overflow-x: hidden;
}

th {
  background: #ffffff !important;
}

tr:nth-child(odd) {
  background: #eee;
}

.center {
  text-align: center;
}

.table-text {
  font-family: "OpenSans-Regular", "Open Sans", sans-serif;
  font-size: 14px;
}

.table-header-text {
  font-family: "OpenSans-SemiBold", "Open Sans SemiBold", "Open Sans", sans-serif;
  font-size: 14px;
}

h3 {
  font-family: "Montserrat-SemiBold", "Montserrat SemiBold", "Montserrat", sans-serif;
  font-weight: 650;
  font-size: 24px;
  padding-top: 14px;
  padding-bottom: 14px;
}

.section-heading {
  margin-top: 14px;
}

// .table-title {
//   font-family: "Montserrat-SemiBold", "Montserrat SemiBold", "Montserrat", sans-serif;
//   font-weight: 650;
//   font-size: 24px;
//   padding-top: 14px;
//   padding-bottom: 14px;
// }

.no-wrap {
  white-space: nowrap;
}

.no-margins {
  margin: 0px;
  margin-bottom: 0px !important;
}

.top-margins {
  margin-top: 10px;
}

.main-content {
  font-size: 14px,
}

.td-style {
  font-size: 14px !important;
}

.td-textbox {
  padding-left: 2rem;
}

</style>
