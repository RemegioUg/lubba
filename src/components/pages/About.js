import React, { Component } from 'react'
import Background from '../image/backround.jpg'

export class About extends Component {
    render() {
        return (
            <React.Fragment>
             
            <div className="container container-fluid" >
                <div class="row" >
                <div class="col-md-4" >
                    <div class="row"className='ab'>
                        <a href='#'  className='btn btn-md btn-info'><h5>stay informed about lubba</h5></a>
                    </div>
                </div>
                <div class="col-md-4"  >
                    <div class="row"className='ab'>
                    <a href='#' className='btn btn-md btn-info'><h5>stay informed about lubba</h5></a>
                    </div>
                    </div>
                    <div class="col-md-4" >
                    <div class="row"className='ab'>
                    <a href='#'  className='btn btn-md btn-info'><h5>stay informed about lubba</h5></a>
                    </div>
                    </div>

                </div>
                <div class="row" style={{backgroundColor:'black', padding:'10px',  }}>
                    <div class="col-md-4">
                    <figure style={div1}>
                        
                        <img src={Background} alt='Background' width='100%' />
                        <h style={h}>Origin</h>
                      <p style={{width:'100%', margin:'10px auto'}}>
                          We are Lira Banyankole Bakiiga Associatio, 
                        Our strategies will help you grow culturally and compete in the 
                        <i class="fa fa-university" aria-hidden="true"></i>
                        inter university cultural competition and develop our
                        inter-personal relationship with other cultural groups
                         at campus and in the whole country

                      </p>
                 
                        </figure>
                    </div>
                    <div class="col-md-4">
                    <figure style={div1}>
                        
                        <img src={Background} alt='Background' width='100%' />
                        <h style={h}>Founders</h>
                      <p style={{width:'100%', margin:'10px auto'}}>
                          We are Lira Banyankole Bakiiga Associatio, 
                        Our strategies will help you grow culturally and compete in the 
                        <i class="fa fa-university" aria-hidden="true"></i>
                        inter university cultural competition and develop our
                        inter-personal relationship with other cultural groups
                         at campus and in the whole country

                      </p>
                 
                        </figure>
                    </div>
                    <div class="col-md-4">
                    <figure style={div1}>
                        
                        <img src={Background} alt='Background' width='100%' />
                        <h style={h}>Membership</h>
                      <p style={{width:'100%', margin:'10px auto'}}>
                          We are Lira Banyankole Bakiiga Associatio, 
                        Our strategies will help you grow culturally and compete in the 
                        <i class="fa fa-university" aria-hidden="true"></i>
                        inter university cultural competition and develop our
                        inter-personal relationship with other cultural groups
                         at campus and in the whole country

                      </p>
                 
                        </figure>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <h4 style={{color: 'black',fontStretch:'60px',fontSize:'40px',padding:'15px'}}>Solution To Our Association</h4>
                    </div>
                    <hr style={{backgroundColor: 'grey'}} />
                </div>
                <div class="row">
                   <div class="col-md-12">
                      <p style={{width:'60%', margin:'10px auto'}}>
                          We are Lira Banyankole Bakiiga Associatio, 
                        Our strategies will help you grow culturally and compete in the 
                        <i class="fa fa-university" aria-hidden="true"></i>
                        inter university cultural competition and develop our
                        inter-personal relationship with other cultural groups
                         at campus and in the whole country

                      </p>
                   </div>
                </div>
                <div class="row">
                    <div class="col-md-4" >
                    <div  style={div}>
                    We are Lira Banyankole Bakiiga Associatio, 
                        Our strategies will help you grow culturally and compete in the 
                        <i class="fa fa-university" aria-hidden="true"></i>
                        inter university cultural competition and develop our
                        inter-personal relationship with other cultural groups
                         at campus and in the whole country
                    </div>
                    </div>
                    <div class="col-md-4" >
                        <div  style={div}>
                        We are Lira Banyankole Bakiiga Associatio, 
                        Our strategies will help you grow culturally and compete in the 
                        <i class="fa fa-university" aria-hidden="true"></i>
                        inter university cultural competition and develop our
                        inter-personal relationship with other cultural groups
                         at campus and in the whole country
                        </div>
                    </div>
                    <div class="col-md-4"  >
                    <div  style={div}>
                       <h3 style={{borderBottom:'solid grey 1px',height:'100p%',padding:'0px'}}>Our culture</h3>
                       <p> We are Lira Banyankole Bakiiga Associatio, 
                        Our strategies will help you grow culturally and compete in the 
                        <i class="fa fa-university" aria-hidden="true"></i>
                        inter university cultural competition and develop our
                        inter-personal relationship with other cultural groups
                         at campus and in the whole country</p>
                    </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}
const background = { 
   width:"100%",
    height: "80vh",
 
}
const div1 =
    {
     width:'70%',
    margin:'30px auto',
    borderRadius:'5px',
    borderColor:'grey',border:'solid grey 2px',
    padding:'5px',
    color:'white',
    fontStretch:'50px',
    fontStyle:'bold'
    
}

const div =
    {
     width:'70%',
    margin:'30px auto',
    borderRadius:'5px',
    borderColor:'grey',border:'solid grey 2px',
    padding:'5px',
    height:'300px'
}
const h ={
    color:'orange',
    fontSize:'30px',
    width:'100%',
    paddingTop:'8px',
    
}

export default About
