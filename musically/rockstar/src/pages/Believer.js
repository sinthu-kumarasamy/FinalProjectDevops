import React from "react";
import "github-markdown-css";
import { Component } from "react";
import Parser from 'html-react-parser';

class Believer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        songData: '',
    };
};


  getLyrics() {
    fetch('http://localhost:5000/Song/Believer',{
      headers: {
        'Content-Type': 'application/html',
      }
    })
    .then(response => response.text())
    .then(data => this.setState({
      songData: data
    }));
  }
  
  
  render(){
   
  return (
   
      <div class="main">
      <div class="songs" id="first">

      <div id="accordion">
        <div class="card-header" id="headingOne" class="main_container">
          <div class="grid-child-0">
          </div>
        </div>
        <div
          id="collapseOne"
          class="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div class="card-body" class="lyrics">

          <br/><br/><br/><br/>
          <paper>
          <b>"Believer"</b><br/>
          <br/>
          <img src ="data:image/jpeg;base64,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" alt="loading..."/>
          <div>
          First things first<br/>
          I'mma say all the words inside my head<br/>
          I'm fired up and tired of the way that things have been, oh ooh<br/>
          The way that things have been, oh ooh<br/>
          <br/>
          Second things second<br/>
          Don't you tell me what you think that I could be<br/>
          I'm the one at the sail, I'm the master of my sea, oh ooh<br/>
          The master of my sea, oh ooh<br/>
          <br/>
          I was broken from a young age<br/>
          Taking my sulking to the masses<br/>
          Writing my poems for the few<br/>
          That look at me, took to me, shook to me, feeling me<br/>
          Singing from heartache from the pain<br/>
          Taking my message from the veins<br/>
          Speaking my lesson from the brain<br/>
          Seeing the beauty through the...<br/>
          <br/>
          Pain!<br/>
          You made me a, you made me a believer, believer<br/>
          Pain!<br/>
          You break me down, you build me up, believer, believer<br/>
          Pain!<br/>
          Oh let the bullets fly, oh let them rain<br/>
          My life, my love, my drive, it came from...<br/>
          Pain!<br/>
          You made me a, you made me a believer, believer<br/>
          <br/>
          Third things third<br/>
          Send a prayer to the ones up above<br/>
          All the hate that you've heard has turned your spirit to a dove, oh ooh<br/>
          Your spirit up above, oh ooh<br/>
          <br/>
          I was choking in the crowd<br/>
          Building my rain up in the cloud<br/>
          Falling like ashes to the ground<br/>
          Hoping my feelings, they would drown<br/>
          But they never did, ever lived, ebbing and flowing<br/>
          Inhibited, limited<br/>
          Till it broke open and rained down<br/>
          It rained down, like...<br/>
          <br/>
          Pain!<br/>
          You made me a, you made me a believer, believer<br/>
          Pain!<br/>
          You break me down, you build me up, believer, believer<br/>
          Pain!<br/>
          Oh let the bullets fly, oh let them rain<br/>
          My life, my love, my drive, it came from...<br/>
          Pain!<br/>
          You made me a, you made me a believer, believer<br/>
          <br/>
          Last things last<br/>
          By the grace of the fire and the flames<br/>
          You're the face of the future, the blood in my veins, oh ooh<br/>
          The blood in my veins, oh ooh<br/>
          But they never did, ever lived, ebbing and flowing<br/>
          Inhibited, limited<br/>
          Till it broke open and rained down<br/>
          It rained down, like...<br/>
          <br/>
          Pain!<br/>
          You made me a, you made me a believer, believer<br/>
          Pain!<br/>
          You break me down, you build me up, believer, believer<br/>
          Pain!<br/>
          Oh let the bullets fly, oh let them rain<br/>
          My life, my love, my drive, it came from...<br/>
          Pain!<br/>
          You made me a, you made me a believer, believer
          </div>
          </paper>
      </div>
    </div>
        
        </div>
    </div>
    </div>
  );
  }
};
export default Believer;
