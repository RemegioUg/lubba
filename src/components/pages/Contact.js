import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <div style={container}>
                <div class="row">
                  <div class="col-md-8">
                      <div style={cont}>
                          <h style={{color:'red', fontSize:'18px'}}>Get in touch</h> 

                          <div class="form-group" style={formGroup}>
                            <label for="" style={label}>your name (Required<span style={{color:'red', fontSize:'20px',fontWeight:'bolder'}}>*</span>)</label>
                            <input type="text" name="" id="" class="form-control"  required='required' placeholder="" aria-describedby="helpId" />
                            
                          </div>
                          <div class="form-group" style={formGroup}>
                            <label for="" style={label}>your Email (Required<span style={{color:'red', fontSize:'20px',fontWeight:'bolder'}}>*</span>)</label>
                            <input type="text" name="" id="" class="form-control" placeholder="" required='true' aria-describedby="helpId" />
                            
                          </div>
                          <div class="form-group" style={formGroup}>
                            <label for="" style={label}>your subject</label>
                            <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId" required='required' />
                            
                          </div>
                          <div class="form-group" style={formGroup}>
                            <label for="" style={label}>your message </label>
                            <textarea type="textarea" name="" id="" class="form-control" placeholder="message" aria-describedby="helpId" rows='8' />
                            
                          </div>
                          <div class="form-group" >
                           
                            <button   class="btn btn-primary" style={btn}> send</button>
                            
                          </div>
                      </div>
                       
                  </div> 
                  <div class="col-md-4">
                      <div style={cont}>
                      <h style={{color:'red', fontSize:'18px'}}>Get in touch</h> 
                      <div>
                        <p style={p}>Lubba</p>
                        <p style={p}>Lira University<br/>Lira City Nothern Uganda</p>
                        <p style={p}>Support Line: 0778299052</p>
                        <p style={p}>Info Line: 0774010890</p>
                        <p style={p}>administration: 0751172567</p>
                        <p style={p}>email: info@Lubba.com</p>
                        <p style={p}>Website: www.lubba.org</p>
                      </div>
                      <h style={{color:'red', fontSize:'18px'}}>Follow Us On</h> 
                      
                      </div>
                  </div> 
                </div>
                <div class="row">
                  <div class="col-md-12">
                      <div style={admin}>
                        <div class="row">
                          <div class="col-md-8">
                              <h style={{color:'yellow', fontSize:'25px',fontWeight:'bold'}}>Administrator</h> 
                      <hr style={hr}/>
                      <p style={p } style={{color:'black',fontSize:'20px'}}><i class='fa fa-phone' ></i> 0751172567</p>
                      <p style={p } style={{color:'black',fontSize:'20px'}}><i class="fa fa-sms"></i> 0395246520</p>
                      <p style={p } style={{color:'black',fontSize:'20px'}}><i class="fa fa-book"></i> admin@lubba.com</p>
                          </div>
                          <div class="col-md-1" >
                            
                          </div>
                        </div>
                    
                      </div>
                  </div>
                </div>
              
            </div>
        )
    }
}

export default Contact
const container ={
    background:'black'
    
    
}

const cont ={
    width:'80%',
    margin: '15px auto'
  
}
const formGroup ={
    width:'70%',
    padding:'0px 15px'
  
}

const label ={
    color:'white',
    padding:'0 10px'
  
}
const btn ={
  width:'100px',
  background:'grey',
  margin:'10px'
}
const p ={
  paddingTop:'10px',
  color:'white'
  
}
const admin ={
  width:'40%',
  margin:'25px auto ',
  background:'grey',
  color:'yelow',
  border:'solid grey 5px',
  borderRadius:'15px',

}
const hr ={
  background: 'blue'
}