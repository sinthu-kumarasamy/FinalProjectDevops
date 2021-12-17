import React from "react";
import "github-markdown-css";
import { Component } from "react";

class Trampoline extends Component {
  constructor(props) {
    super(props);
    this.state = {
        songData: '',
    };
};


  getLyrics() {
    fetch('http://localhost:5000/Song/Trampoline',{
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
      </div>
        <div
          id="collapseOne"
          class="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <br/>
          <br/>
          <br/>
          <br/>
          <div class="card-body" class="lyrics">
          <b>"Trampoline"</b><br/>
          <br/>
          <img src ="data:image/jpeg;base64,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" alt="loading..."/>

<div>
I've been having dreams<br/>
Jumping on a trampoline<br/>
Flipping in the air<br/>
I never land just float there<br/>
As I'm looking up<br/>
Suddenly the sky erupts<br/>
Flames alight the trees<br/>
Spread to falling leaves<br/>
Now they're right upon me<br/>
<br/>
Wait if I'm on fire<br/>
How am I so deep in love?<br/>
When I dream of dying<br/>
I never feel so loved<br/>
<br/>
I've been having dreams<br/>
Splashing in a summer stream<br/>
Trip and I fall in<br/>
I wanted it to happen<br/>
My body turns to ice<br/>
Crushing weight of paradise<br/>
Solid block of gold<br/>
Lying in the cold<br/>
I feel right at home<br/>
<br/>
Wait if I'm on fire<br/>
How am I so deep in love?<br/>
When I dream of dying<br/>
I never feel so loved<br/>
<br/>
Wait if I'm on fire<br/>
How am I so deep in love?<br/>
When I dream of dying<br/>
I never feel so loved<br/>
<br/>
I never feel so loved<br/>
<br/>
La la la la la<br/>
La la la la la la la<br/>
La la la la la<br/>
La la la la la la<br/>
<br/>
Wait if I'm on fire<br/>
How am I so deep in love?<br/>
When I dream of dying<br/>
I never feel so loved<br/>
<br/>
Wait if I'm on fire<br/>
How am I so deep in love?<br/>
When I dream of dying<br/>
I never feel so loved
</div>
</div>
</div>
</div>
</div>
</div>
);
}
};
export default Trampoline;
