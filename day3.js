var slideshow = {
  photoList: [
    "strings go here",
    "next string",
    "another one",
    "one more for good measure"
  ],
  currentPhotoIndex: 0,
  nextPhoto: function() {
    if (this.currentPhotoIndex < this.photoList.length - 1) {
      this.currentPhotoIndex++;
      console.log(this.photoList[this.currentPhotoIndex]);
      // console.log(this.currentPhotoIndex);
    } else if (this.currentPhotoIndex < this.photoList.length) {
        this.pause();
      console.log("End Of Slideshow");
      //    console.log(this.currentPhotoIndex);
    }
  },
  prevPhoto: function() {
    if (this.currentPhotoIndex > 0) {
      this.currentPhotoIndex--;
      console.log(this.photoList[this.currentPhotoIndex]);
    } else if (this.currentPhotoIndex + 1 > 0) {
      console.log("Start Of Slideshow");
      // console.log(this.currentPhotoIndex);
    }
  },
  getCurrentPhoto: function() {
    console.log(this.photoList[this.currentPhotoIndex]);
  },
  playInterval: null,
  play: function() {
    //   console.log(this);
    var self = this;
      this.playInterval = setInterval(function() {self.nextPhoto()}, 2000);
      this.nextPhoto();
    
  },
  pause: function(){
      clearInterval(this.playInterval);
  }
};
slideshow.play();