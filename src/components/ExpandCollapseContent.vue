<template>
  <div>
    <div>
      Town/City: {{ item.fields.Town }}<br>
      State: {{ item.fields.State }}
    </div>
    
    <div
      v-if="picsLength"
      class="has-text-centered"
    >
      <div
        class="image-div"
      >
        <img :src="imgsrc">
      </div>
    </div>
    <div
      v-if="!picsLength"
      class="has-text-centered"
    >
      No photos
    </div>

    <div class="columns is-vcentered is-mobile">
      <div class="column is-2 is-offset-3 has-text-centered">
        <button
          v-show="photoNumber+1>1"
          class="button square-button"
          @click="changePhotoNumber('down')"
        >
          <font-awesome-icon icon="arrow-left" />
        </button>
      </div>

      <div class="column is-2 is-offset-2 has-text-centered">
        <button
          v-show="picsLength && photoNumber+1<picsLength"
          class="button square-button"
          @click="changePhotoNumber('up')"
        >
          <font-awesome-icon icon="arrow-right" />
        </button>
      </div>
    </div>

    <div class="has-text-centered">
      Date: {{ photoDate }}
    </div>
    <div class="has-text-centered">
      {{ photoCaption }}
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
      photoDate: null,
      photoCation: null,
      imgsrc: null,
    };
  },
  computed: {
    person() {
      let person = this.item._featureId.split('-')[1];
      return person;
    },
    allPics() {
      let pics;
      if (this.$store.state.sources[this.person+'_pictures']) {
        pics = this.$store.state.sources[this.person+'_pictures'].data.records;
      }
      if (this.$store.state.sources[this.person+'_pictures_01']) {
        let pics_01 = this.$store.state.sources[this.person+'_pictures_01'].data.records;
        let pics_02 = this.$store.state.sources[this.person+'_pictures_02'].data.records;
        pics = pics_01.concat(pics_02);
      }
      return pics;
    },
    itemPictures() {
      return this.item.fields.pictures;
    },
    pictures() {
      let pics = this.allPics.filter(x => this.itemPictures.includes(x.id));
      return pics;
    },
    picsLength() {
      return this.pictures.length;
    },
  },
  watch: {
    photoNumber(nextPhotoNumber) {
      console.log('watch photoNumber, nextPhotoNumber:', nextPhotoNumber);
      this.photoDate = this.pictures[nextPhotoNumber].fields.date;
      this.photoCaption = this.pictures[this.photoNumber].fields.caption;
      this.imgsrc = './images/spinner3.png';
      let myImage = new Image();
      myImage.src = this.pictures[nextPhotoNumber].fields.picture[0].url;
      myImage.onload = () => {
        this.imgsrc = myImage.src;
      };
    },
  },
  mounted() {
    this.photoDate = this.pictures[this.photoNumber].fields.date;
    this.photoCaption = this.pictures[this.photoNumber].fields.caption;
    this.imgsrc = './images/spinner3.png';
    let myImage = new Image();
    myImage.src = this.pictures[this.photoNumber].fields.picture[0].url;
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
