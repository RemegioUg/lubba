import React, { Component } from 'react'
import ReactPlayer from "react-player/youtube"
import logo from './style/lira.jpg'
import logo1 from './image/culture.jpg'
import logo2 from './image/lubba-me.jpg'
import logo3 from './image/lubbami.jpg'
import support from './image/images.png'

export class Body extends Component {
    render() {
        return (
          <React.Fragment>            <div className="body container container-fluid">
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <ol class="carousel-indicators">
    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></li>
    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={logo1} style={img} className="logo1" class="d-block w-100" alt="logo1"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Cultural competition</h5>
        <p>Lubba in their traditional culture and dance.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={logo2} className="logo2" style={img} class="d-block w-100" alt="logo2"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Some of Lubba Members</h5>
        <p>Lubba members in their happy mood</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={logo3} className="logo3" style={img} class="d-block w-100" alt="logo3" />
      <div class="carousel-caption d-none d-md-block">
        <h5>Miss Lubba</h5>
        <p>The most beautiful lubba lady.</p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
</div>
                <div className="row">
                    <div className="col-md-6 ">
                        <div className="row">
                            <div className="col-md-12">
                                 <h4 style={h4}>Who Are We</h4>
                                 <hr style={hr} />
                                 <p style={p}>
                                 LUBBA is Lira University Banyankole
                                  Bakiiga Association that was  formed
                                 to unite people from western region
                                  who speak almost the same language
                                 </p>
                                <p style={p}>
                                Any student who is Omunyankole and Omukiiga comes to Lira University by default are entitled to this
                                associationtes however is supposed to pay
                                subscription fee that is mandeted by Lubba costitution  
                                 <a href="#">Lubba constitution</a> 
                                <p>
                                    Lubba was formed the back in 2017 by Mackline and was approved
                                    by the University in 2018 to be one of the cultural association in the University 

                                </p>
                                </p>
                            </div>
                           
                            </div>
                        
                    </div>
                    <div className="col-md-6 ">
                     <div className="row">
                         <div className="col-md-12">
                              <h4 style={h4}>Who Are We</h4>
                                <hr style={hr}/>
                               
                            </div>
                           
                            </div>
                            
                            </div>
                        
                   
                </div>
              
                    <div class="row">
                        <div class="col-md-12">
                            <h3 style={align}>OUR CAMPUS</h3>
                        </div>
                        
                    </div>
                  
                    <hr className="ourcampus"/>
                     <h6>Lira University The Beacon</h6>
                    <div class="row lira">
                           
                              <img src={logo} className="logo" alt="logo" />
                              <p style={lira} >Lira University is one of the Public Universities in Uganda.
                                   It started as a Constituent College of Gulu University in 2009 
                                   and attained autonomy as a fully-fledged Public University
                                    through an Act Parliament under Statutory Instrument 2015 No.
                                     35 on the 16th July, 2015. It was established on a niche of training 
                                     students in Health Sciences. It has the first University 
                                     Teaching Hospital in Uganda. The university has
                                     a fully-constituted Council, Senate, Appointments 
                                     Board and other committees to run its affairs.
                                        Lira University is located in Ayere village,
                                         Barapwo parish, Lira sub-county, 
                                        Erute County in Lira district. It covers a total
                                         area of 621 acres (251.3 hectares).
                                         for more go.<a href="http://www.lirauni.ac.ug">Lira University website</a> </p>
                       
                       
                    </div>

                   {/* will be deleted code below */}
                 
                   
                    <hr style={{marginBottom:'60px',marginTop:'60px'}} />

                   <div class="row" >
                    <div class="col-md-6" style={supports} >
                      <img src={support}  alt="support" className='img1'/>
                  
                    </div> 
                    
                    <div class="col-md-6" >
                      <h4>SUPPORT US TODAY</h4>
                      <p>Just send us your questions or
                         concerns by starting a new case and we 
                         will give you the help you need.
                         </p>
                         <div class="col-md-6">
                           <i class="fas fa-phone"></i>
                           <span>Call Us on </span>
                         </div>
                         <div class="col-md-6">
                           
                         </div>
                    </div>
                   </div>
                   <div class="row">
                     <p className='btn btn-success btn-md' style={{borderRadius:'50px',width:'60%', margin: '20px auto'}}><a href='/about-us'style={{textDecoration:'none',color:'white'}}><h6>more about lubba</h6></a></p>
                   </div>

                </div>
                <div class="container-fluid">
                <div class="row"> 
                    <h6 style={{textAlign:'center',
                  marginTop:'40px',fontWeight:'bolder'
                  }}>Our Anthems</h6>
                    <hr style={{marginBottom:'60px',marginTop:'20px'}} />
                   
                    
                    
                    <div class="col-md-3" style={{marginTop:'30px',marginBottom:'30px'}}>
                        <div style={anthem}>
                          <h3 style={h1}>Ensi Nkore for Ankore Kingdom</h3>
                          <p style={{color:'grey',fontWeight:'bold',marginTop:'10px',marginBottom:'10px'}}>Ensi Nkore is the official 
                         of the Nkore Kingdom. Translated as
                          "Our Land Nkore", the song is being sung 
                          whenever the Kingdom functions are about to begin.<br />
                        
                          <a style={{textDecoration:'none', fontSize:'20px',fontWeight:'bolder'

                        }} href="https://en.wikipedia.org/wiki/Ensi_Nkore"
                         className='text-primary unstyled'>Read more...</a>
                       
                             </p>             
                        </div>
                    </div>
                    <div class="col-md-5">
                      <div style={video}>
                      <ReactPlayer 
                      width='50%'
                      height='100px'
                      controls='play'
                 
        url="https://www.youtube.com/watch?v=ug50zmP9I7"
                     />

                      </div>
                      </div>
                      <div class="col-md-4">
                        <div style={fixed}>
                            <p style={{textAlign:'center'
                          ,color:'white',border:'solid white 2px',
                          backgroundColor:'#870830',margin:'0 auto',marginBottom:'30px',
                          width:'40%'
                          
                          }}>
                              Free Banking Charges</p>
                        </div>
                      </div>
                      
                    </div>
                    </div>
                    

                     
                
            </React.Fragment>

        )
    }
}
const anthem ={
  width:'80%',
  margin:'15px auto',
 
}
const h1 ={
  
  padding:'0 15px',
  fontWeight:'bold'
}
const p ={
    color:'grey',
    fontSize:'18',
    padding:'8px',
    fontStrenth:'30px',
    fontFamily:'Arial, Helvetica, sans-serif'

}
const align={
    textAlign:"center",
    padding:"10px",
    color:'black',
    fontStretch:'100px',
    fontWeight: 'bolder',
    fontSize:'30px'
    
}
const lira={
    width:'60%',
    padding:'6px',
    margin: '10px auto',
    fontFamily:'Arial, Helvetica, sans-serif'
}
const supports ={
  width:'60%',
  margin:'15px auto',
  borderRight:'4px solid grey'
}
const h4={
  textAlign:'center',
  color:'black',
  fontStretch:'100px',
  fontWeight: 'bolder',
  fontSize:'30px'
 
}
const hr ={
  
  height:'2px',
  backgroundColor:'blue' ,
  margin:'0 auto'
  
}
const img={
maxHeight:'100vh'
}
const video ={
  width:'70%',
  margin:'0px auto'

}
const fixed ={
  background:'#880932',
  height:'350px',
  width:'100%'
}
  

export default Body
