<template>
  <div class="main-content">
    <div>
      <!-- Date: {{ item.fields.Date }}<br> -->
      Town/City: {{ item.fields.Town }}<br>
      State: {{ item.fields.State }}
    </div>
    <div class="columns is-vcentered is-mobile">
      <div class="column is-2 has-text-centered">
        <button
          v-show="photoNumber+1>1"
          class="button square-button"
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
          class="button square-button"
          @click="changePhotoNumber('up')"
        >
          <font-awesome-icon icon="arrow-right" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ExpandCollapseContent',
  components: {
  },
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
    allPics() {
      let allPics = {};
      for (let i=0; i<10; i++) {
        if (this.item.fields['Date'+i]) {
          this.item.fields['PicsDate'+i]['date'] = this.item.fields['Date'+i];
          allPics[this.item.fields['Date'+i]] = this.item.fields['PicsDate'+i];
        }
      }
      return allPics;
    },
    pictures2() {
      let pictures = [];
      for (let pics of Object.entries(this.allPics)) {
        for (let pic of pics) {
          pictures.push(pic);
        }
        console.log('in pictures2, pics:', pics);
      }
      return pictures;
    },
    pictures() {
      let pics = [];

      let pics1 = this.item.fields.PicsDate1;
      console.log('pictures computed, pics1:', pics1);
      let pics2 = this.item.fields.PicsDate2;
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
  },
  watch: {
    photoNumber(nextPhotoNumber) {
      // console.log('watch photoNumber, nextPhotoNumber:', nextPhotoNumber);
      this.imgsrc = './images/spinner3.png';
      let myImage = new Image();
      myImage.src = this.pictures[this.photoNumber].url;
      myImage.onload = () => {
        this.imgsrc = myImage.src;
      };
    },
  },
  mounted() {
    this.imgsrc = './images/spinner3.png';
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
  },
};

</script>

<style lang="scss">

table {
  border: 0px none;
  border-style: none !important;
}

.square-button {
  width: 46px;
}

.image-div {
  // min-height: 540px;
}

// th {
//   background: #ffffff !important;
// }
//
// tr:nth-child(odd) {
//   background: #eee;
// }
//
// .center {
//   text-align: center;
// }
//
// .table-text {
//   font-family: "OpenSans-Regular", "Open Sans", sans-serif;
//   font-size: 14px;
// }
//
// .table-header-text {
//   font-family: "OpenSans-SemiBold", "Open Sans SemiBold", "Open Sans", sans-serif;
//   font-size: 14px;
// }
//
// h3 {
//   font-family: "Montserrat-SemiBold", "Montserrat SemiBold", "Montserrat", sans-serif;
//   font-weight: 650;
//   font-size: 24px;
//   padding-top: 14px;
//   padding-bottom: 14px;
// }
//
// .section-heading {
//   margin-top: 14px;
// }
//
// .no-wrap {
//   white-space: nowrap;
// }
//
// .no-margins {
//   margin: 0px;
//   margin-bottom: 0px !important;
// }
//
// .top-margins {
//   margin-top: 10px;
// }
//
// .main-content {
//   font-size: 14px,
// }
//
// .td-style {
//   font-size: 14px !important;
// }
//
// .td-textbox {
//   padding-left: 2rem;
// }

</style>
