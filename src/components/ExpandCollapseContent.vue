<template>
  <div class="main-content">
    <div>
      <!-- Date: {{ item.fields.Date }}<br> -->
      Town/City: {{ item.fields.Town }}<br>
      State: {{ item.fields.State }}
    </div>
    <div class="columns is-vcentered">
      <div class="column is-2 has-text-centered">
        <button
          v-show="photoNumber+1>1"
          class="button"
          @click="changePhotoNumber('down')"
        >
          <font-awesome-icon icon="arrow-left" />
        </button>
      </div>
      <div
        v-if="picsLength"
        class="column is-8 has-text-centered"
      >
        <!-- <img :src="pictures[photoNumber].url"> -->
        <div
          class="image-div"
        >
          <img :src="imgsrc">
        </div>
        Date: {{ pictures[photoNumber].date }}
      </div>
      <div
        v-if="!picsLength"
        class="column is-8 has-text-centered"
      >
        No photos
      </div>
      <div class="column is-2 has-text-centered">
        <button
          v-show="picsLength && photoNumber+1<picsLength"
          class="button"
          @click="changePhotoNumber('up')"
        >
          <font-awesome-icon icon="arrow-right" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>

// import SharedFunctions from './mixins/SharedFunctions.vue';
// import { VueGoodTable } from 'vue-good-table';
// import 'vue-good-table/dist/vue-good-table.css';

export default {
  name: 'ExpandCollapseContent',
  components: {
    // VueGoodTable,
  },
  // mixins: [ SharedFunctions ],
  props: {
    item: {
      type: Object,
      default: function(){
        return {};
      },
    },
  },
  data() {
    return {
      photoNumber: 0,
      imgsrc: null,
    };
  },
  computed: {
    pictures() {
      let pics = [];
      let pics1 = this.item.fields.Date1Pics;
      console.log('pictures computed, pics1:', pics1);
      let pics2 = this.item.fields.Date2Pics;
      console.log('pictures computed, pics2:', pics2);

      if (pics1 && pics2) {
        for (let pic1 of pics1) {
          pic1.date = this.item.fields.Date1;
        }
        for (let pic2 of pics2) {
          pic2.date = this.item.fields.Date2;
        }
        pics = pics1.concat(pics2);
      } else if (pics1) {
        for (let pic1 of pics1) {
          pic1.date = this.item.fields.Date1;
        }
        pics = pics1;
      }
      return pics;
    },
    picsLength() {
      return this.pictures.length;
    },
    // currentPic() {
    //   // let imgsrc;
      
    // },
  },
  watch: {
    photoNumber(nextPhotoNumber) {
      // console.log('watch photoNumber, nextPhotoNumber:', nextPhotoNumber);
      this.imgsrc = './images/spinner2.PNG';
      let myImage = new Image();
      myImage.src = this.pictures[this.photoNumber].url;
      myImage.onload = () => {
        this.imgsrc = myImage.src;
      };
    },
  },
  mounted() {
    this.imgsrc = './images/spinner2.PNG';
    let myImage = new Image();
    myImage.src = this.pictures[this.photoNumber].url;
    myImage.onload = () => {
      this.imgsrc = myImage.src;
    };
  },
  methods: {
    changePhotoNumber(direction) {
      console.log('changePhotoNumber, direction:', direction);
      let newNumber;
      if (direction == 'up') {
        newNumber = this.photoNumber + 1;
      } else if (direction == 'down') {
        newNumber = this.photoNumber - 1;
      }
      this.photoNumber = newNumber;
    },
    // parseAddress(address) {
    //   const formattedAddress = address.replace(/(Phila.+)/g, city => `<div>${city}</div>`).replace(/^\d+\s[A-z]+\s[A-z]+/g, lineOne => `<div>${lineOne}</div>`).replace(/,/, '');
    //   return formattedAddress;
    // },
  },
};

</script>

<style lang="scss">

table {
  border: 0px none;
  border-style: none !important;
}

.image-div {
  min-height: 540px;
}

// .img-div {
//   padding-left: 100px;
//   padding-right: 100px;
//   padding-top: 10px;
//   padding-bottom: 10px;
// }

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
