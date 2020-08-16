import React, { Component } from 'react';
import './imagesource.css';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

class ImageSource extends Component {
  
    render(props) {

        return (
        <div className="Alaiment">
            <label>Image Source</label>
            <br/>
            <div className="positions">
            <label className="container ">Upload a Image<input name ="imgsource" type="checkbox" id="imagefromstorage" onClick={this.props.onImageUploadMode} /><span className="checkmark"></span></label>
            <label className="container ">Take a Photo<input name ="imgsource" type="checkbox" id="imagefromcamara" onClick={this.props.onImageUploadMode} /><span className="checkmark"></span></label>
            <label className="container ">Use real-time snapshot<input name ="imgsource" type="checkbox" id="imagefromcontioussnap" onClick={this.props.onImageUploadMode}/><span className="checkmark"></span></label>
                   <br/>
            { this.props.imagefromstorage &&
               <input type="file" onChange={(e) =>  this.props.updateImageObject(e)} />   
              
            }
            { (this.props.imagefromcamara || this.props.imagefromcontioussnap )&&
               <Camera onTakePhoto = { (dataUri) => { this.props.handleTakePhoto(dataUri); } }    isSilentMode = {true} 
                imageCompression = {1.00}
                isMaxResolution = {true} />
            } 
            
            </div>        
        </div>
        );
      }
    
    
    }
    
    export default ImageSource;