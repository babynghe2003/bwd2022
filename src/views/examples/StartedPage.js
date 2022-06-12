import React from 'react'

const StartedPage = () => {
  return (
    <div className='startedPage'>
        <div className='header bg-gradient-info pb-8 pt-5 pt-md-8'>

        </div>
        <div className='vh-100 w-100 d-flex justify-content-center font_0 bg-white'>

        <div style={{width: '90%', height: '90%'}} className='mainTextElement .text-center mt-7'>
          <div style={{paddingLeft: '10%'}}>
          <div style={{width: '100%'}}>
            <h1 style={{color: 'black',fontSize: '100px', paddingTop: '50px'}}>I’m many</h1>
          </div>
          <div>
            <h1 style={{color: 'black',fontSize: '100px', float: 'left'}}>things.</h1>
            <div style={{marginRight: '5%'}} className='w-50 float-right pt-6'>
              <div style={{color: 'black'}} className='tagsClass row'>
                <span className="col">#human</span>
                <span className="col">#daughter</span>
                <span className="col">#traveler</span>
                <div class="w-100"></div>
                <span className="col">#foodie</span>
                <span className="col">#babylover</span>
                <span className="col">#proudcitizen</span>
                <div class="w-100"></div>
                <span className="col">#babylover</span>
                <span className="col">#babylover</span>
                <span className="col">#babylover</span>
                <div class="w-100"></div>
                <span className="col">#babylover</span>
                <span className="col">#babylover</span>
                <span className="col">#babylover</span>
                <div class="w-100"></div>
                <span className="col">#babylover</span>
                <span className="col">#babylover</span>
                <span className="col">#babylover</span>
                
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        {/* Second part */}
        <div className="vh-100 w-100 d-flex">
        <div style={{backgroundImage: `url("https://static.wixstatic.com/media/f8eba5_460d0bdab99f487188a17916c22a9abe~mv2.jpg/v1/fill/w_845,h_890,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f8eba5_460d0bdab99f487188a17916c22a9abe~mv2.jpg")` , display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%'}} className='leftContainer w-50 h-100'>
          <img style={{marginTop: '100px'}} src='https://i.pinimg.com/736x/ee/d2/74/eed27497c23578161034e26b99a45dbc.jpg' className='w-50 h-50 mx-auto d-block m-auto' />
        </div>
        <div style={{backgroundColor: 'yellow'}} className='rightContainer w-50 d-flex align-items-center justify-content-center'>
          <div className='h-75 w-75'>
            <h1 style={{fontSize: '50px'}}>Let's Chat!</h1>
            <br/>
            <p>Originally from Mumbai, Bhroovi Gupta is a Graphic, UI UX and Motion designer with a passion for technology and interactive experiences. Along with completing her BFA at KU, her past experiences range from UI/UX design at WiX.com,  Art Direction at VMLY&R, Motion Graphics at Native Digital, Brand Identity and packaging at Whiskey Design and finally, Campaign Design at MarComm at KU.</p>
          </div>
        </div>
        </div>

        {/* Third part */}

        <div className="vh-100 w-100 d-flex align-items-center justify-content-center">
          <div style={{height: '90%', width: '90%'}} className="">
            <h1 style={{color: 'black',fontSize: '100px'}}>Fooooood</h1>
            <p style={{color: 'black', fontSize: '18px', width: '80%'}}>I am extremely inspired by food and the colors different cuisines display. Here are some of the dishes that have worked as inspiration for projects displayed on my portfolio.</p>
            <br/>
            <div class="container">
              <div class="row">
                <div class="col-md">
                  <img style={{height: '300px', width: '250px'}} src="https://data.whicdn.com/images/289848784/original.jpg"/>
                </div>
                <div class="col-md">
                  <img style={{height: '300px', width: '250px'}} src="https://data.whicdn.com/images/289848784/original.jpg"/>
                </div>
                <div class="col-md">
                  <img style={{height: '300px', width: '250px'}} src="https://data.whicdn.com/images/289848784/original.jpg"/>
                </div>
              </div>
            </div>
          </div>

        </div>
        

    </div>
  )
}

export default StartedPage