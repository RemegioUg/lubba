import React, { Component } from 'react'
import './style/footer.css'
export class Footer extends Component {
    render() {
        return (
            <div className=" container-fluid">
               <div class="row footer">
                   
                   <div class="col-md-3">
                       <h5>Activities</h5>
                      <hr />
                      <ul>
                     <li> <a href="#">Cultural Gala</a></li>
                     <li><a href="#">Lubba Events</a></li>
                     <li> <a href="#">Lubba Pesa</a></li>
                     </ul>
                   </div>
                   <div class="col-md-3">
                       <h5>About Us</h5>
                        <hr />
                        Lubba is banyankole Bakiiga Association
                        based at Lira university.
                        It unites all the Banyankole and Bakiiga to participate in the University
                        activities as a cultural group
                   </div>
                   <div class="col-md-3">
                       <h5>Contact Us</h5>
                       <hr />
                       <div class="row">
                           Phone: 0772899052
                       </div>
                       <div class="row">
                           Email: info@lubba.com
                       </div>
                       <div class="row">
                           Location: Lira University
                       </div>
                       <div class="row">
                           Barapwo Parish
                       </div>
                        
                   </div>
                   <div class="col-md-3">
                       <h5>Connect with Us</h5>
                        <hr />
                       
                   </div>
               </div> 
            </div>
        )
    }

}

export default Footer
