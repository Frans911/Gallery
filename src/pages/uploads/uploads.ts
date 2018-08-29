import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase'
/**
 * Generated class for the UploadsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var config = {
  apiKey: "AIzaSyDoUbjvLnryIjwHw91GvRT-w5fM97bppHE",
  authDomain: "firelist-4538c.firebaseapp.com",
  databaseURL: "https://firelist-4538c.firebaseio.com",
  projectId: "firelist-4538c",
  storageBucket: "firelist-4538c.appspot.com",
  messagingSenderId: "563232712777"
}; 
@IonicPage()
@Component({
  selector: 'page-uploads',
  templateUrl: 'uploads.html',
})
export class UploadsPage {
  display:number;
  firebaseUploads;
  upload;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.display = 0;
    // firebase.initializeApp(config);
    // this.upload = firebase.database().ref('/upload/');
    // this.firebaseUploads = firebase.database().ref('/fireuploads/');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadsPage');
  }
  b;
  imageUrl;
  count =0;
  images =[];
  retriveImages(){
    this.display = 1;
    firebase.database().ref('/fireuploads/').on("value",(snapshot) =>{
      snapshot.forEach((snap) =>{
        this.b = {keyname : snap.key, name :snap.val().downloadUrl};
        this.imageUrl =  this.b.name;
        if(this.imageUrl.indexOf('.jpg')>0){
          this.images.push(this.imageUrl);
        }
       //  this.images.push(this.imageUrl);
        return false;
      })
    });
   }
   
   imageVideoSrc:string;
   imageEmp;
   videos = [];
   videoUrl;
   getVideos(){
     this.display = 3;
     firebase.database().ref('/fireuploads/').on("value",(snapshot) =>{
       snapshot.forEach((snap) =>{
         this.b = {keyname: snap.key,name: snap.val().downloadUrl};
         this.videoUrl = this.b.name;
         if(this.videoUrl.indexOf('.mp4') >= 0){
           this.videos.push(this.videoUrl);
           console.log("...."+this.videoUrl);
         }
         return false;
       })
     });
   }
   audios = [];
   audionUrl;
    
   getAudios(){
     this.display = 2;
     firebase.database().ref('/fireuploads/').on("value",(snapshot) =>{
       snapshot.forEach((snap) =>{
         this.b = {keyname:snap.key,name:snap.val().downloadUrl};
         this.audionUrl = this.b.name;
         if(this.audionUrl.indexOf('.mp4') >= 0){
           this.audios.push(this.audionUrl);
           console.log("****"+this.audionUrl);
         }
         return false;
       })
     });
   }
}
