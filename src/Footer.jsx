import React, { Component } from 'react';
class Footer extends Component
{
  render()
  {
    return (
      <footer>
          <div id="footer">
                  <div className="row">
                      <div className="col-md-6 col-md-offset-3 text-center">
                            <p className="nyd-social-icons">
                                <a href="#"><i className="icon-twitter2"></i></a>
                                <a href="#"><i className="icon-facebook2"></i></a>
                                <a href="#"><i className="icon-instagram"></i></a>
                                <a href="#"><i className="icon-dribbble2"></i></a>
                                <a href="#"><i className="icon-youtube"></i></a>
                            </p>
                            <p>
                                Copyright 2018 NyayDarshan. All Rights Reserved. 
                                <br/>
                                Made with <i className="icon-heart3"></i> by <a href="https://www.linkedin.com/in/vishwanath-iyer-57aa7889/" target="_blank">Vishwanath Iyer</a>
                            </p>
                      </div>
                  </div>
              </div>
      </footer>
    );
  }
}
export default Footer;