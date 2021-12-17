import React from "react";
import "github-markdown-css";
import { Component } from "react";

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
          <b>"Believer"</b><br/>
          <br/>
          <img src ="data:image/jpeg;base64,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" alt="loading..."/>
         <div id="songLyricsDiv-outer">
					<p id="songLyricsDiv"  class="songLyricsV14 iComment-text">Show me the meaning of being lonely<br />
<br />
So many words for the broken heart<br />
It's hard to see in a crimson love<br />
So hard to breathe<br />
Walk with me and maybe<br />
<br />
Nights of light so soon become<br />
Wild and free, I could feel the sun<br />
Your every wish will be done<br />
They tell me<br />
<br />
Show me the meaning of being lonely<br />
Is this the feeling I need to walk with?<br />
Tell me why I can't be there where you are<br />
There's something missing in my heart<br />
<br />
Life goes on as it never ends<br />
Eyes of stone observe the trends<br />
They never say, forever gaze, if only<br />
<br />
Beauty roams to an endless love<br />
There's no control, are you with me now?<br />
Your every wish will be done<br />
They tell me<br />
<br />
Show me the meaning of being lonely<br />
Is this the feeling I need to walk with?<br />
Tell me why I can't be there where you are<br />
There's something missing in my heart<br />
<br />
There's nowhere to run, I have no place to go<br />
Surrender my heart, body and soul<br />
How can it be you're asking me<br />
To feel the things you never show?<br />
<br />
Tell me why can't I be there where you are<br />
Show me the meaning of being lonely<br />
Is this the feeling I need to walk with?<br />
Tell me why I can't be there where you are<br />
There's something missing in my heart<br />
Show me the meaning of being lonely<br />
Is this the feeling I need to walk with?<br />
Tell me why I can't be there where you are<br />
There's something missing in my heart<br /></p>
				</div>
      </div>
    </div>
        
        </div>
    </div>
    </div>
  );
  }
};
export default Believer;
