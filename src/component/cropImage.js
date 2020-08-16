import React from 'react';
import "tui-image-editor/dist/tui-image-editor.css";
import { Button, Menu, Dropdown } from 'antd';
import './cropImage.css';
import 'antd/dist/antd.css';
import ProcessImage from 'react-imgpro';
import {Table} from 'react-bootstrap'
const download = require("downloadjs");

const imageEditor = React.createRef();
  
  const saveImageToDisk = () => {
    const data = imageEditor.current.state.src;
    if (data) {
      const mimeType = data.split(";")[0];
      const extension = data.split(";")[0].split("/")[1];
      download(data, `image.${extension}`, mimeType);
    }
  };

const ImageCrop = (props)=>(
        <div className="Alaiment" >
          <div>
          <label>Avatar Preview</label>
         <Table >
          <tbody>
            <tr>
              <td rowSpan="5">
              <ProcessImage className ="ProcessImage" image={props.imagesrc}
                  invert={props.invert}                               
                  blur={props.scaleValue}
                  greyscale={props.greyscale}
                  contrast={props.contrast}
                  brightness={props.brightness}
                  flip={props.flip}
                  sepia={props.sepia}
                  background={0x00ff002c}
                  fade={props.fade}
                 rotate={ props.rotate}
                 posterize={props.posterize}
                 colors = {props.color }
                 quality={10}
                 processedImage={props.imagesrc}
                 ref={imageEditor}
                  />
              </td>
              <td rowSpan="5" colSpan="5"className="detailsalaiment">
                <tr><td><label>Name :Shivkaran
                       </label>
                </td></tr>
              <tr><td>
              <label>Surname : Ravidas</label>
              </td></tr>
              <tr><td > 
              <label>Tag : fun</label>             
              </td></tr>
              
              </td>
              

            </tr>
          </tbody>
        </Table>
        </div>



        <div className="positions">
          <label>Image Effects</label>
        <Table >
          <tbody>
            <tr>
              <td rowSpan="5">
              </td>
              <td className="Line">
                <tr><td><label>
                    <input type="checkbox" onClick={props.onInvert}/>Invert</label>
                </td></tr>
              <tr><td>
              <label><input type="checkbox" onClick={props.onGray}/>Greyscale</label>
              </td></tr>
              <tr><td > 
              <label><input type="checkbox" onClick={props.onFlip}/>Flip</label>             
              </td></tr>
              <tr><td > 
              <label><input type="checkbox" onClick={props.onSepia}/>Sepia</label>             
              </td></tr>
              
              </td>

              <td >
                <tr><td>Blur      :
                 <input style={{width:'90%'}}
                  type="range" value={props.scaleValue}
                  min="1" max="100" step="10" onChange={props.onScaleChange}/>
                </td></tr>
              <tr ><td>Contrast   :
                  <input style={{width:'90%'}}
                  type="range" value={props.contrast}
                  min="-1" max="1" step="0.1" onChange={props.onContrast}/>
              </td></tr>
              <tr><td >Brightness :
              <input style={{width:'90%'}}
                  type="range" value={props.brightness}
                  min="-1" max="1" step="0.1" onChange={props.onBrightNess}/>
              </td></tr>
              </td>

              <td >
                <tr><td>Fade      :
                 <input style={{width:'90%'}}
                  type="range" value={props.fade}
                  min="0" max="1" step="0.1" onChange={props.onFade}/>
                </td></tr>
              <tr><td>Rotate      :
                 <input style={{width:'90%'}}
                  type="range" value={props.rotate.degree}
                  min="0" max="360" step="10" onChange={props.onRotate}/>
              </td></tr>
              <tr><td >Posterize :
              <input style={{width:'90%'}}
                  type="range" value={props.posterize}
                  min="1" max="100" step="5" onChange={props.onPosterize}/>
              </td></tr>
              </td>


              <td className="LeftLine">
                <tr><td><lable>
                    <input type="checkbox" name="color" id="green" onClick={props.changeColor}/>
                    <div class="color greenbackground" ></div> </lable>
                </td></tr>
              <tr><td><lable>
                    <input type="checkbox" name="color" id="red" onClick={props.changeColor}/>
                    <div class="color redbackground" ></div> </lable>
              </td></tr>
              <tr><td > 
              <lable>
                    <input type="checkbox"  name="color" id="blue" onClick={props.changeColor}/>
                    <div class="color bluebackground" ></div> </lable>           
              </td></tr>             
              </td>
            </tr>
          </tbody>
        </Table>         
        </div>
        <div className="savebuttondiv">
        <Button className="savebutton"   danger>
         cancel
        </Button>
        <Button type="primary" onClick={saveImageToDisk}>   
           save
        </Button>
        </div>             
        </div>
    ) ;




export default ImageCrop;