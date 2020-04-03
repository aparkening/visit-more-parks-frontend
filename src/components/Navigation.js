import React, { Component } from 'react';
import { Navbar, Nav } from "react-bootstrap";

class Navigation extends Component {
  // renderLogo = () => {
  //   return (
  //     <svg className="logo" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 512 640" xmlSpace="preserve"><g><g><g><path className="logo-path" d="M405.793,149.062C405.793,66.096,338.365,0,255.356,0c-81.726,0-149.149,66.096-149.149,149.062     c0,79.864,62.517,143.906,140.083,148.606v122.312h-33.746c-6.474,0-10.364,3.882-10.364,10.365c0,1.284,0,3.896,1.296,5.17     l44.099,71.297c2.595,5.199,9.081,6.479,12.96,3.894c1.299-1.313,2.595-2.59,3.893-3.894l22.069-36.295l22.028-36.275     c2.597-3.896,1.296-10.38-3.888-12.987c-1.302-1.274-3.883-1.274-5.18-1.274h-33.733v-122.37     C343.889,292.358,405.793,228.533,405.793,149.062z M256,280.505c-73.206,0-132.548-59.345-132.548-132.548     S182.794,15.408,256,15.408s132.548,59.345,132.548,132.548S329.206,280.505,256,280.505z"/></g><g><path className="logo-path" d="M246.776,231.171c0,4.774,3.746,8.911,8.501,9.369c4.743,0.458,9.204-2.843,10.145-7.517     c0.184-0.929,0.18-1.857,0.18-2.797c0-1.207,0-2.411,0-3.617c0-3.293,0-6.587,0-9.881c0-1.142,0-2.285,0-3.43     c0-0.138,0.081-0.578,0-0.699c-0.038-0.066-0.104-0.042-0.216-0.042c-2.429,0-4.857,0-7.284,0c-3.114,0-6.229,0-9.343,0     c-0.448,0-0.9,0-1.349,0c-0.103,0-0.531-0.069-0.614,0c-0.048,0.038-0.02,0.212-0.02,0.285c0,0.366,0,0.734,0,1.1     c0,2.998,0,5.99,0,8.983c0,2.604,0,5.209,0,7.81C246.776,230.88,246.776,231.027,246.776,231.171z"/><path className="logo-path" d="M215.804,159.211c0.935,0.134,1.851,0.638,2.728,0.972c1.055,0.403,2.117,0.789,3.186,1.163     c2.146,0.751,4.316,1.441,6.505,2.065c4.214,1.201,8.497,2.157,12.823,2.838c8.444,1.33,17.045,1.591,25.55,0.707     c8.582-0.891,17.028-2.945,25.101-5.975c1.047-0.392,2.086-0.803,3.114-1.224c0.521-0.213,1.027-0.481,1.588-0.546     c0.383-0.048,0.769-0.073,1.159-0.11c1.839-0.171,3.679-0.345,5.518-0.518c3.651-0.342,7.299-0.683,10.95-1.026     c0.067-0.007,0.14-0.014,0.209-0.021c-1.607-1.376-3.211-2.752-4.818-4.127c-3.644-3.126-7.291-6.251-10.936-9.375     c-3.933-3.369-7.862-6.736-11.79-10.105c-2.458-2.108-4.913-4.213-7.371-6.317c-0.137-0.119-0.357-0.402-0.535-0.458     c-0.01-0.004-0.017-0.026-0.03-0.026c-0.061-0.009-0.269,0.11-0.319,0.13c-0.313,0.13-0.63,0.262-0.942,0.388     c-1.107,0.453-2.226,0.876-3.354,1.272c-4.655,1.635-9.464,2.727-14.387,3.08c-4.894,0.35-9.848-0.176-14.617-1.275     c-2.32-0.534-4.609-1.193-6.866-1.948c-1.212-0.408-2.417-0.84-3.611-1.293c-0.269-0.102-0.778-0.436-1.043-0.342     c-0.191,0.068-0.419,0.359-0.568,0.49c-0.399,0.34-0.794,0.679-1.189,1.018c-1.262,1.078-2.521,2.16-3.779,3.24     c-3.736,3.201-7.473,6.405-11.211,9.607c-3.874,3.32-7.749,6.64-11.621,9.962c-2.26,1.935-4.521,3.872-6.777,5.808     c-0.107,0.092-0.216,0.182-0.324,0.275c1.996,0.188,3.987,0.378,5.983,0.566c3.18,0.302,6.365,0.603,9.546,0.902     C214.38,159.076,215.091,159.157,215.804,159.211z"/><path className="logo-path" d="M239.037,94.042c0.796,0.015,1.604,0.484,2.344,0.742c0.891,0.313,1.783,0.598,2.691,0.856     c1.725,0.493,3.481,0.884,5.257,1.167c3.545,0.564,7.154,0.686,10.729,0.358c3.667-0.336,7.288-1.143,10.771-2.333     c0.917-0.312,1.815-0.794,2.801-0.794c0.693,0,1.396,0,2.091,0c1.584,0,3.168,0,4.752,0c-0.81-0.972-1.618-1.941-2.426-2.912     c-1.933-2.32-3.864-4.637-5.796-6.955c-2.336-2.804-4.672-5.606-7.01-8.412c-2.017-2.422-4.037-4.847-6.059-7.271     c-0.666-0.8-1.335-1.602-2.003-2.404c-0.207-0.248-0.412-0.494-0.62-0.74c-0.072-0.087-0.217-0.353-0.329-0.395     c-0.014-0.008-0.03-0.04-0.04-0.052c-0.81,0.971-1.619,1.94-2.425,2.91c-1.932,2.32-3.864,4.639-5.796,6.957     c-2.338,2.802-4.676,5.605-7.011,8.409c-2.02,2.425-4.04,4.849-6.061,7.271c-0.665,0.803-1.333,1.604-2.004,2.406     c-0.205,0.246-0.411,0.494-0.616,0.74c-0.069,0.086-0.31,0.286-0.33,0.397c0,0.014-0.031,0.039-0.043,0.051     c2.081,0,4.163,0,6.246,0C238.446,94.039,238.743,94.037,239.037,94.042z"/><path className="logo-path" d="M233.239,122.691c0.438,0.024,0.794,0.151,1.2,0.314c0.721,0.287,1.441,0.566,2.162,0.835     c1.381,0.516,2.771,1.001,4.179,1.441c2.581,0.813,5.214,1.489,7.882,1.956c4.892,0.855,9.882,0.956,14.795,0.195     c2.52-0.39,5.004-0.995,7.437-1.756c1.294-0.407,2.577-0.858,3.843-1.346c0.66-0.25,1.315-0.514,1.969-0.786     c0.593-0.246,1.182-0.567,1.801-0.755c0.631-0.194,1.406-0.099,2.055-0.099c1.347,0,2.701,0,4.052,0c1.515,0,3.029,0,4.548,0     c0.579,0,1.159,0,1.742,0c0.319,0,0.688,0.052,1.005,0c0.045-0.007,0.093,0,0.138,0c-0.891-1.119-1.787-2.237-2.684-3.355     c-2.02-2.528-4.044-5.055-6.066-7.584c-2.156-2.697-4.313-5.392-6.471-8.088c-1.298-1.623-2.599-3.246-3.895-4.87     c-0.044-0.057-0.152-0.25-0.22-0.277c-0.114-0.041-0.487,0.165-0.598,0.203c-0.433,0.146-0.863,0.291-1.3,0.427     c-0.78,0.243-1.563,0.468-2.348,0.675c-3.236,0.857-6.563,1.383-9.909,1.563c-3.257,0.173-6.526-0.006-9.748-0.513     c-1.666-0.262-3.321-0.607-4.952-1.044c-0.734-0.196-1.464-0.409-2.192-0.635c-0.41-0.126-0.813-0.264-1.22-0.402     c-0.15-0.051-0.633-0.321-0.778-0.267c-0.071,0.027-0.176,0.219-0.218,0.277c-0.189,0.236-0.379,0.471-0.568,0.707     c-0.673,0.84-1.341,1.678-2.013,2.519c-2.043,2.549-4.083,5.103-6.125,7.652c-2.143,2.68-4.287,5.357-6.428,8.036     c-1.265,1.582-2.532,3.165-3.798,4.748c-0.058,0.076-0.122,0.152-0.182,0.227c3.788,0,7.575,0,11.363,0     C232.214,122.691,232.724,122.701,233.239,122.691z"/><path className="logo-path" d="M296.015,163.688c-7.71,3.136-15.751,5.393-23.976,6.696c-8.323,1.321-16.785,1.477-25.174,0.731     c-8.33-0.741-16.592-2.604-24.522-5.237c-1.014-0.336-2.024-0.684-3.031-1.046c-0.51-0.182-1.016-0.368-1.522-0.559     c-0.451-0.169-0.978-0.475-1.454-0.547c-0.201-0.031-0.142-0.051-0.284,0.107c-0.387,0.417-0.774,0.838-1.163,1.259     c-1.712,1.859-3.428,3.72-5.143,5.58c-2.555,2.769-5.11,5.54-7.666,8.31c-2.914,3.165-5.831,6.325-8.748,9.488     c-2.802,3.04-5.606,6.08-8.408,9.121c-2.19,2.374-4.378,4.749-6.568,7.122c-1.105,1.195-2.207,2.393-3.308,3.586     c-0.048,0.055-0.101,0.106-0.149,0.162c0.841,0,1.68,0,2.521,0c2.229,0,4.463,0,6.692,0c3.215,0,6.43,0,9.645,0     c3.788,0,7.579,0,11.368,0c3.948,0,7.897,0,11.847,0c3.713,0,7.424,0,11.14,0c3.029,0,6.063,0,9.092,0c1.979,0,3.956,0,5.935,0     c0.644,0,1.287,0,1.929,0c2.789,0,5.577,0,8.367,0c3.673,0,7.353,0,11.027,0c1.157,0,2.313,0,3.468,0c1.333,0,2.668,0,4.003,0     c2.583,0,5.162,0,7.747,0c3.457,0,6.909,0,10.363,0c3.872,0,7.743,0,11.615,0c3.93,0,7.859,0,11.795,0c3.537,0,7.078,0,10.619,0     c2.756,0,5.511,0,8.264,0c1.559,0,3.118,0,4.681,0c0.201,0,0.406,0,0.61,0c-0.374-0.402-0.745-0.8-1.116-1.201     c-1.005-1.083-2.01-2.166-3.02-3.247c-1.493-1.609-2.989-3.217-4.48-4.824c-1.823-1.963-3.647-3.926-5.472-5.888     c-1.989-2.139-3.976-4.28-5.966-6.417c-2.015-2.172-4.031-4.341-6.051-6.512c-1.88-2.022-3.76-4.044-5.642-6.068     c-1.576-1.701-3.158-3.404-4.74-5.106c-1.146-1.232-2.288-2.461-3.432-3.691c-0.541-0.58-1.082-1.164-1.619-1.744     C296.065,163.74,296.04,163.714,296.015,163.688z"/></g></g></g>
  //     <text x="0" y="527" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by Flatart</text>
  //     <text x="0" y="532" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text>
  //   </svg>
  //   );
  // }

  render() {
    return (
      <Navbar className="justify-content-center" bg="secondary" variant="dark" expand role="navigation">
        <Navbar.Brand href="/"><img className="logo" src="logo-park.svg" alt="Park logo" caption="Park by Flatart from the Noun Project"/> Visit More Parks</Navbar.Brand>
        {document.cookie.split(';').some((cookieItem) =>cookieItem.includes('logged_in=false')) ? 
          <Nav>
            <Nav.Item><Nav.Link href="http://localhost:3000/auth/google/redirect">Login with Google</Nav.Link></Nav.Item>
          </Nav> :
          <Nav>
            <Nav.Item>
              <Nav.Link href="/parks" activeclassname="active">All Parks</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => this.props.removeAuth(this.props.token)} >Logout</Nav.Link>
            </Nav.Item>
          </Nav>
        }
      </Navbar>
    )
  }
}
export default Navigation;