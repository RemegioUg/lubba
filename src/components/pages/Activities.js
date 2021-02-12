import React, { Component } from 'react'
import Recaptcha from 'react-recaptcha'
export class Activities extends Component {
    constructor(props){
      super(props)
      this.state={
           isVerified:true
      }
    this. onSubmit=this.onSubmit.bind(this)
     this. verifyCallback=this.verifyCallback.bind(this)
     this.callBack =this.callBack.bind(this)
    }
  
   
    onSubmit(){
        if(this.state.isVerified){
          console.log('you are human')
        }
        else{
            alert('Please verify that you are not Robot')
        }
    }
     callBack = (response) => {
        console.log('response')
    }
    verifyCallback = (response) =>{
        if(response){
          this.setState ={
              isVerified:false
          }
        }
    }
    render() {
        return (
            <React.Fragment>
           <div class="container container-fluid">
               <div class="row">
                   <div class="col-md-8">
                        <div style={dis}>
                            <h1 className='h' style={{fontStretch:'80px',
                            fontWeight:'bolder',
                            fontFamily: 'sans serif',
                            fontSize:'45px'}}>Discover more about Lubba that didn't exist with others</h1>
                        </div>

                   </div>
                  
                   <div class="row">
                       <div class="col-md-6">
                          <div style={pesa}>
                              <h style={{fontSize:'35px',fontWeight:'bold',color:'#6986B0'}}>Lubba pesa our Bank</h>
                              <p>Lubba pesa started in 2019 as saving group that
                                   would benefit members to get more money at the end of a semister
                                   
                                   </p>
                                   <p>The ideal was brought by Rossette that was supported by everyone
                                       as one way of supporting lubba activies
                                   </p>
                          </div>
                       </div>
                       <div class="col-md-6">
                          <div>
                              
                          </div>
                       </div>
                       <hr style={{marginTop:'40px',
                    marginBottom:'50px'}} />
                   </div>
                   <div class="row">
                       <div class="col-md-3">
                       <span style={meb}>who is Elible To Be Member</span> 
                          
                          <p style={p}>Any member of Lubba
                           qualifies to be a member but after 
                           after paying subscription fee of every semisiter</p>
                       </div>
                       <div class="col-md-4">
                           <div style={rate}>
                           <h3 style={{marginTop:'38px',
                           marginBottom:'38px',
                           marginLeft:'15px',
                           fontWeight:'bolder',
                           fontFamily:'cabriola',
                           color:'white',float:'left'}}>Obtain your desired loan up
                           <span>
                            
                               </span></h3>

                               <img style={{marginTop:'15px',marginBottom:'15px',marginLeft:'0'}} height='280px' width='100%'
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ojCEDh23ncqC8zat_Npa0iyRCZZBk9iPoQ&usqp=CAU' />  
                           </div>
                       </div>
                       <div class="col-md-4">
                       <span style={meb}>We Offer Affordable Loans to Members and Non Members</span> 
                          
                          <p style={p}>With reference to lending
                           security or collateral, is an asset
                            that is pledged by the borrower 
                            as protection in case he or she defaults 
                            on the repayment.

                            Under the loan agreement, 
                            the lender presents the collateral security
                            to the lubba committe and the next of keans. </p>
                       </div>
                   </div>

                   </div>

                 <div class="row">
                     
                
                         <div style={each}>
                             
                            <p style={se}>Each semister Lubba Pesa Supports</p>
                            <div style={{marginLeft:'50px',width:'100%'}}>
                                <div style={{float:'left'}}>
                                     <h1 style={{
                                  marginLeft:'30px',
                                  fontWeight:'bolder',
                                  color:'#5F89A8'
                              }}>40.000+</h1>
                              <p style={{marginLeft:'30px'}}>Students</p> 
                                </div>
                                <div style={{float:'left',marginBottom:'30px'}}>
                                     <h1 style={{
                                  marginLeft:'30px',
                                  fontWeight:'bolder',
                                  color:'#5F89A8'
                              }}>2.000+</h1>
                              <p style={{marginLeft:'30px'}}>Projects</p> 
                                </div>

                                <div style={{float:'left',marginBottom:'30px'}}>
                                     <h1 style={{
                                  marginLeft:'30px',
                                  fontWeight:'bolder',
                                  color:'#5F89A8'
                              }}>10.000+</h1>
                              <p style={{marginLeft:'30px'}}>Meetings</p> 
                                </div>
                                <div style={{float:'left',marginBottom:'30px'}}>
                                     <h1 style={{
                                  marginLeft:'30px',
                                  fontWeight:'bolder',
                                  color:'#5F89A8'
                              }}>5.000+</h1>
                              <p style={{marginLeft:'30px'}}>Associations</p> 
                                </div>
                                <div style={{float:'left',marginBottom:'30px'}}>
                                     <h1 style={{
                                  marginLeft:'30px',
                                  fontWeight:'bolder',
                                  color:'#5F89A8'
                              }}>10.000+</h1>
                              <p style={{marginLeft:'30px'}}>Business People</p> 
                                </div>
                                </div>
                       </div>
                       
                      
                   </div>

               </div>
               <hr style={{marginBottom:'60px',marginTop:'60px'}} />
               <div class="row">
                    <div class="col-md-12">
                        <div style={{margin:'20px auto',width:'40%'}}>
                        <span style={meb}>For Details and Information about Lubba Pesa</span> 
                        <p style={p1}>Contact Director Lubba pesa on, Treasurer, Loans Office 
                        and the President or you can reacch on
                          <i class='fa fa-phone' style={{marginRight:'10px',color:'Green',fontWeight:'bolder',marginLeft:'10px'}}></i>
                           0778299052
                           or on our offices  at Lira Campus near the Libray
                           or you can fill the form below and we shall get in touch with 
                           in minutes
                        </p>
                        
                          
                       
                        </div>
                    </div>
                    <hr style={{marginBottom:'60px',marginTop:'60px'}} />
               </div>
                    <div class="container-fluid" style={cont}>
                       <h2 style={lets}>Lets Connect together</h2>
                       <p style={lett}>Tell us more about youself and we shall get in touch with you shortly</p>

                       <div style={form}>
                            <div class="form-group">
                             <label for="">First Name</label>
                             <input type="text" style={input}
                               class="form-control" name="" id="" aria-describedby="helpId" placeholder="mugizi" />
                           
                           </div>
                           <div class="form-group">
                             <label for="">Last Name</label>
                             <input type="text" style={input}
                               class="form-control" name="" id="" aria-describedby="helpId" placeholder="remegio" />
                           
                           </div>

                           <div class="form-group">
                             <label for="">Email</label>
                             <input type="text" style={input}
                               class="form-control" name="" id="" aria-describedby="helpId" placeholder="info@gmail" />
                           
                           </div>
                           <div class="form-group">
                             <label for="">Address</label>
                             <input type="text" style={input}
                               class="form-control" name="" id="" aria-describedby="helpId" placeholder="lira university, lira, uganda" />
                           
                           </div>
                           <div class="form-group">
                             <label for="">Additional info (<span style={{color:'grey'}}>Optional</span>)</label>
                             <textarea  type="textarea"
                               class="form-control" name="" placeholder=""  rows='5'> </textarea>
                           
                           </div>
                           <Recaptcha 
                         sitekey="6LeoU0UaAAAAANgNY5wkf7XPdw3ljIFMKOSCrSSH"
                         render="explicit"
                         verifyCallback={this.verifyCallback()}
                         onloadCallback={this.callBack()}
                         />
                           <button onClick={this.onSubmit()} class="btn btn-primary" style={{width:'200px',marginTop:'20px', height:'45px'}}>
                                   Submit <span class="badge badge-primary"></span>
                           </button>
                           </div>
                           
                    
                    </div>

                    
             
               </React.Fragment>
        )
    }
}

export default Activities
 const dis ={
     width:'85%',
     margin:'35px'
 }
 const img ={
     borderRadius:'20px',
     margin:'25px auto',
     width:'100%',
     height:'250px',
 }
 const about ={
     background:'#1A1A1A',
     height:'500px',
     borderRadius:'35px',
     margin:'20px'
    
 }
 const rate ={
    background:'#6986B0',
    height:'400px',
    margin:'20px'
}
 const pesa ={
     width:'60%',
     margin:'35px auto',
     fontSize:'20px',
     fontWeight:'regular'
 } 
 const meb ={
     fontSize:'35px',
     fontWeight:'bolder',
     fontStretch:'400px',
     fontStrength:'200px',
     marginTop :'15px',
     marginBottom:'15px'

 }
 const p ={
     fontSize:'15px',
     fontWeight:'bold',
     color:'gray',
 }
 const p1 ={
   
    color:'#81BAEB',
    marginTop:'20px',
    fontSize:'20px'
}
 const each ={
     background :'#EEF0F0',
     marginTop:'65px',
     width:'100%',
     marginBottom:'30px'
 }
 const se ={
     textAlign:'center',
    padding:'80px',
    color:'gray',
    fontSize:'30px',
    fontWeight:'regular',
    fontStretch:'0px'
  

 }
 const cont ={
    width:'100%',
     background: "linear-gradient(#F1C833, #F1C833)",
    
     marginBottom:'30px',
     marginTop:'30px'

 }

 const lets ={
     fontWeight:'bold',
     textAlign:'center',
     padding:'30px'
 }
 const lett ={
 
    textAlign:'center',
    padding:'0px'
}

 const form ={
     margin:'30px auto',
     width:'40%',
    height:'730px'

    
 }
 const input ={
     height:'45px'
 }