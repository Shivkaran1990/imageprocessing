import React, { Component } from 'react';
import './App.css';
import ImageCrop from './component/cropImage';
import 'react-html5-camera-photo/build/css/index.css';
import ImageSource from './component/imagesource'
const download = require("downloadjs");

class App extends Component {
  
  constructor() {
    super();
    this.state={
      scaleValue:1,
      contrast:0.1,
      brightness:0.1,
      selectedImage:null,
      flip:false,
      sepia:false,
      background :0x00ff001c,
      fade :0,
      rotate:{degree:0},
      posterize:50,
      imagefromcamara:false,
      name:'Shivkaran'
    };
  }

  onSepia=(event)=>{
    if(event.target.checked){
      this.setState({sepia :true})
     }else
     {
      this.setState({sepia :false})
     }  
    }
  onImageUploadMode=(event)=>{
      var id=event.target.id
      var isclicked=event.target.checked;


      var myCheckbox = document.getElementsByName("imgsource");
       Array.prototype.forEach.call(myCheckbox,function(el){
          el.checked = false;  
       });
       if(isclicked)
       {
        event.target.checked=true;
       }
      
     var imagefromcamara=this.state.imagefromcamara;       
     var imagefromcontioussnap=this.state.imagefromcontioussnap;  
     var imagefromstorage=this.state.imagefromstorage;
   
    if(event.target.checked){
      imagefromcamara=(id==='imagefromcamara')?true:false;
      imagefromcontioussnap=(id==='imagefromcontioussnap')?true:false;
      imagefromstorage=(id==='imagefromstorage')?true:false;
      this.setState({imagefromcamara :imagefromcamara});
      this.setState({imagefromcontioussnap :imagefromcontioussnap});
      this.setState({imagefromstorage :imagefromstorage});
    }else
    {
      this.setState({imagefromcamara :false})
      this.setState({imagefromcontioussnap :false})
      this.setState({imagefromstorage :false})
    }
   
    if(imagefromcontioussnap===true && event.target.checked)
    {
       this.state.timeInterval = setInterval(() => { 
        this.timer() 
      }, 10000);
    }else{
      window.clearInterval( this.state.timeInterval);
    }

    }
    timer() {
      if(document.getElementById('inner-circle')!=null)
      document.getElementById('inner-circle').click();    
    }
    changeColor=(event)=>{
       var clr=event.target.id
      var isclicked=event.target.checked;
      var myCheckbox = document.getElementsByName("color");
       Array.prototype.forEach.call(myCheckbox,function(el){
          el.checked = false;  
       });
       if(isclicked)
       {
        event.target.checked=true;
       }
       var color={}  ;
       color.green=(clr==='green')&& isclicked?90:0;
       color.red=(clr==='red')&& isclicked?90:0;
       color.blue=(clr==='blue')&& isclicked?90:0;
       this.setState({color :color})

      }
  onFlip=(event)=>{
    var flip;
    if(event.target.checked){
      flip={horizontal:true}  ;
      this.setState({flip :flip})
     }else
     {
      flip={horizontal:false}  ;
      this.setState({flip :flip})
     }
    }
 onBackground=(scalEvent)=>{
        const scaleValue=parseFloat(scalEvent.target.value);
        this.setState({background :scaleValue});
        }  

  onFade=(scalEvent)=>{
    const scaleValue=parseFloat(scalEvent.target.value);
    this.setState({fade :scaleValue});
    }
  onRotate=(scalEvent)=>{
    const scaleValue=parseFloat(scalEvent.target.value);
    var rotate={degree:scaleValue}  ;
    this.setState({rotate :rotate});
    }
  onPosterize=(scalEvent)=>{
    const scaleValue=parseFloat(scalEvent.target.value);
    this.setState({posterize :scaleValue});
    }
onBrightNess=(scalEvent)=>{
  const scaleValue=parseFloat(scalEvent.target.value);
  this.setState({brightness :scaleValue});
  }

  onContrast=(scalEvent)=>{
    const scaleValue=parseFloat(scalEvent.target.value);
    this.setState({contrast :scaleValue});
  }

  onScaleChange=(scalEvent)=>{
    const scaleValue=parseFloat(scalEvent.target.value);
    this.setState({scaleValue :scaleValue});
      
    }
  onInvert=(event)=>{
       if(event.target.checked){
        this.setState({invert :true})
       }else
       {
        this.setState({invert :false})
       }  
    }
    onGray=(event)=>{
         if(event.target.checked){
          this.setState({greyscale :true})
         }else
         {
          this.setState({greyscale :false})
         }  
      }

      updateImageObject =(e)=> {
        const file  = e.target.files[0];
        this.setState({selectedImage: file});
         const reader = new FileReader();
       reader.readAsDataURL(file);
         reader.onload = () => {
             this.setState({selectedImage: reader.result});
         };
         console.log("New one"+reader.result);
      }
     
      saveImage =(e)=> {
        const data=this.state.selectedImage;;
        if (data) {
          const mimeType = data.split(";")[0];
          const extension = data.split(";")[0].split("/")[1];
          download(data, `image.${extension}`, mimeType);
        }
      }
    
  handleTakePhoto =(dataUri)=> {
    this.setState({selectedImage: dataUri});
    console.log('takePhoto');
  }

  componentDidMount() {
    
  }


  render() {
    return (
    <div className="App">
      <div>
      
      </div>
      <br/>
  <div>
  <ImageSource onImageUploadMode={this.onImageUploadMode}
      imagefromcamara={this.state.imagefromcamara}
      imagefromstorage={this.state.imagefromstorage}
      imagefromcontioussnap={this.state.imagefromcontioussnap}
      handleTakePhoto={this.handleTakePhoto}
      updateImageObject={this.updateImageObject}
        ></ImageSource>

    <ImageCrop imagesrc={this.state.selectedImage}
    saveImage={this.saveImage}
    onCrop={this.onCrop}
    brightness={this.state.brightness}
    onBrightNess={this.onBrightNess}
    contrast={this.state.contrast}
    onContrast={this.onContrast}
    scaleValue={this.state.scaleValue}
    onScaleChange={this.onScaleChange}
    invert={this.state.invert}
    onInvert={this.onInvert}
    greyscale={this.state.greyscale}
    onGray={this.onGray}
    onFlip={this.onFlip}
    flip={this.state.flip}
    onSepia={this.onSepia}
    sepia={this.state.sepia}
    onBackground={this.onBackground}
    background={this.state.background}
    onPosterize={this.onPosterize}
    posterize={this.state.posterize}
    onRotate={this.onRotate}
    rotate={this.state.rotate}
    onFade={this.onFade}
    fade={this.state.fade}
    changeColor={this.changeColor}
    color={this.state.color}
    ></ImageCrop>
   </div>
    </div>
    );
  }


}

export default App;
