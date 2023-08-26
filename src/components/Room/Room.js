import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { appid,secret } from '../healper';

export default function Room() {
     const {roomid}=useParams();
   
      const myLivestream=async(element)=>{ 
        const appID =appid;
        const serverSecret = secret;
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomid,  Date.now().toString(), "yogesh");
      

        //cretea instance
        const zc=ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({

             container:element,

              sharedLinks:[
                {
                    name:" CoPy Link",
                  url:`http://localhost:3000/room/${roomid}`
        }
    ],
    scenario:{
         mode:ZegoUIKitPrebuilt.LiveStreaming
    },
              
               showScreenSharingButton:true
        })
      
       
        
    }
  return (
    <div>
      <div ref={myLivestream}/>
    </div>
  );
}
