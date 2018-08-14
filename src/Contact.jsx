import React, { Component } from 'react';
import contactJsonData from "./content/json/contact.json";
import Validator from "./Validator";

import $ from 'jquery';
window.jQuery = $;
const jQuery = window.jQuery;

class Contact extends Component {
  ValidateForm() {
    var frmvalidator  = new Validator("ContactForm");
    frmvalidator.addValidation("name","req","Please provide your name"); 
    frmvalidator.addValidation("email","req","Please provide your email");
    frmvalidator.addValidation("number","req","Please provide your contact number");
    frmvalidator.addValidation("address","req","Please provide your address");
    frmvalidator.addValidation("message","req","Please provide your message"); 

    frmvalidator.addValidation("email","email","Please enter a valid email address");
  }

  onSubmit=()=>{
    $.ajax({
      type: "POST",
      url: 'form-to-email.php',
      data: {email: ""},
      dataType: "json",
      error: function(data){
          // Add error class to form
         
          // Determine the status of response and display the message
          if(data.status == 404) {
            console.log("error");
          } else {
            console.log("error");
          }
      }   
  }).done(function(data){
    console.log("send"); 
      if(data.status == "success") {
        console.log("Ok send");  
      } else {
         
        console.log("Ok");  
      }
      
  });


  }

  render() {
    return (
      <div id="nyd-contact" class="animate-box">
        <div class="container">
          <form method="post" action="form-to-email.php" name="ContactForm">
            <div class="row">
              <div class="col-md-6">
                <h3 class="section-title">{contactJsonData.title}</h3>
                <p>{contactJsonData.description}</p>
                <ul class="contact-info">
                  <li><i class="icon-location-pin"></i>{contactJsonData.address}</li>
                  <li><i class="icon-phone2"></i>{contactJsonData.contact_number}</li>
                  <li><i class="icon-mail"></i><a>{contactJsonData.email}</a></li>
                  <li><i class="icon-globe2"></i><a>{contactJsonData.website}</a></li>
                </ul>
              </div>
              <div class="col-md-6">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Name" name="name"/>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Email" name="email"/>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Contact Number" name="number"/>
                    </div>
                  </div>

                  <div class="col-md-12">
                    <div class="form-group">
                      <textarea class="form-control" id="" cols="30" rows="7" placeholder="Address" name="address"></textarea>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <textarea class="form-control" id="" cols="30" rows="7" placeholder="Message / Case Details" name="message"></textarea>
                    </div>
                  </div>

                  <div class="col-md-12 margin-auto">
                    <div class="form-group">
                      <input type="submit" value="Send" class="btn btn-primary" onSubmit={this.onSubmit}/>
                      &nbsp;
                      <input type="reset" value="Reset" class="btn btn-primary"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
