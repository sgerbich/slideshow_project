var slideshow= {
    photoList:["strings go here", "next string", "another one", "one more for good measure"],
    currentPhotoIndex: 0,
    nextPhoto: function(){
        
        if(this.currentPhotoIndex<this.photoList.length - 1){
            this.currentPhotoIndex++;
            console.log(this.photoList[this.currentPhotoIndex])
            // console.log(this.currentPhotoIndex);
        }
        else if (this.currentPhotoIndex<this.photoList.length)
        {
            console.log("End Of Slideshow");
        //    console.log(this.currentPhotoIndex);
        }
    },
    prevPhoto: function(){
        
        if(this.currentPhotoIndex>0){
            this.currentPhotoIndex--;
             console.log(this.photoList[this.currentPhotoIndex])
        }
        else if(this.currentPhotoIndex + 1> 0)
        {
            console.log( "Start Of Slideshow");
            // console.log(this.currentPhotoIndex);
        }
    },
    getCurrentPhoto: function()
    {
        console.log(this.photoList[this.currentPhotoIndex]);
    }
}
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.getCurrentPhoto();