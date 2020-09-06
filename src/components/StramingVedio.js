//import liraries
import React, { Component ,useState} from 'react';
import { View, TextInput, StyleSheet, Text,Image ,TouchableOpacity,TouchableWithoutFeedback } from 'react-native';
import Video from 'react-native-video';


import {
    BallIndicator,
  } from 'react-native-indicators';




// create a component
class VedioStream extends Component {
// const [isPlaybtn ,setPlaybtn] = useState(false);
// const [isPlay ,setisPlay] = useState(true)

 toggleButton = () =>{
    this.setState({
        isPlaybtn : true
    })
    
    setTimeout(()=>{
        this.setState({
            isPlaybtn : false
        })
    },2000
    )
}
 handlePlay = (isPlay)=>{
     this.setState({
        isPlay    : !isPlay
     })

}
 onBuffer = (buffer)=>{
    console.log("onBuffer",buffer);
}
 videoError = (error)=>{
    console.log("videoError",error);
}
 onEnd = (onEnd,setisPlay)=>{
    // setisPlay(false)
    this.setState
    console.log("onEnd",onEnd);
}
 onLoad = (onEnd)=>{
    this.setState({
        isLoading:true
    })
    console.log("onLoad",onEnd);
}
 onLoadStart = (onEnd)=>{
     this.setState({
         isLoading:true
     })
    console.log("onLoadStart",onEnd);
}
 onReadyForDisplay = (onEnd)=>{
    this.setState({
        isLoading:false
    })
    console.log("onReadyForDisplay",onEnd);
}
 onResponderStart = (onEnd)=>{
    console.log("onResponderStart",onEnd);
}
 onVideoLoad = (onEnd)=>{
    console.log("onVideoLoad",onEnd);
}
    constructor(props){
        super(props)
        this.state={
            isPlaybtn:true,
            isPlay:true,
            isLoading:false
        }
    }

render(){
    return (
        <View style={{height:300,backgroundColor:"black",borderWidth:2,borderColor:"white",borderRadius:5}}>
    <Video  source={{uri: "https://5d5e28481f3ad.streamlock.net/NRT2/livestream/playlist.m3u8"}}   
    //    ref={(ref) => {
    //      player = ref
    //    }} 
        repeat={true}
       posterResizeMode={"cover"}
       onResponderStart={this.onResponderStart}
       ignoreSilentSwitch={"ignore"}
       paused={this.state.isPlay}
       resizeMode={"stretch"}                                     
       onBuffer={this.onBuffer}               
       onError={this.videoError}
       onEnd={this.onEnd} 
       onLoad={this.onLoad} 
       onLoadStart={this.onLoadStart}
       onReadyForDisplay={this.onReadyForDisplay}
       onVideoLoad={this.onVideoLoad}
       volume={1.0}
    //    controls={true}
       hideShutterView={true}
       hideShutterView={true}
            
       
       style={[styles.backgroundVideo]} />

        <View   style={{position:"absolute",top:0,bottom:0,right:0,left:0}}>
        <TouchableOpacity disabled={this.props.borderRadius} style={{flex:1,justifyContent:"center",alignItems:"center"}} onPress={this.toggleButton} >
              {
                  this.state.isPlaybtn ? 
                  <TouchableWithoutFeedback disabled={this.props.borderRadius} onPress={()=>{ this.handlePlay(this.state.isPlay)}}  > 

              <View style={{backgroundColor:"rgba(52, 52, 52, 0.8)",height: this.props.borderRadius ? 30 :50,width: this.props.borderRadius ? 30  :50,justifyContent:"center",alignItems:"center",borderRadius:25}}> 
        <Image resizeMode="contain" source={{uri: this.state.isPlay ? "play" : "pause"}} style={{height:this.props.borderRadius ? 10 :  20 ,width: this.props.borderRadius ? 10 : 20,marginLeft:this.state.isPlay ? 3 :0}}/>
                
                </View>
                 </TouchableWithoutFeedback>
                 :
                  this.state.isLoading ?
                 <View style={{justifyContent:"center",alignItems:"center",borderRadius:25}}> 
               <BallIndicator size={15} color='white' />
               </View> 
               : null
              }
             
              
        </TouchableOpacity>
    
       </View>
        </View>
    );
            }
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // height:responsiveHeight(25)
        
       
    },backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      },
    
});

//make this component available to the app
export default VedioStream;
