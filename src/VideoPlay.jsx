import React from "react";
import ReactPlayer from "react-player";

export default function VideoPlay() {
  const params = new URLSearchParams(window.location.search);
  const link = params.get("id");
  return (
    <div style={{ backgroundImage:'linear-gradient(#304352, #d7d2cc)', height:'725px'}}>
      <center style={{paddingTop:'100px'}}>
      <ReactPlayer url={"https://www.youtube.com/watch?v=" + link}  width='70%' height='500px' />

      </center>
      
    </div>
  );
}