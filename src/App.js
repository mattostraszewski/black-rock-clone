import React from 'react';
import './App.css';



export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isMobileMenuOpen: false,
    }
  }

  toggleMobileMenu = () => {
    this.setState({
      isMobileMenuOpen: !this.state.isMobileMenuOpen,
    })
  }


  render() {


    return (
      <div className="App">
        {/* <style>
          a:hover {
            color: yellow;
            }
        </style> */}

        <div className='nav-bar'>

          <div className="start-logo"></div>
          {/* <div className='start-logo'>Start Bootstrap</div> */}

          <ul className='nav-bar-tasks'>

            <li className='nav-task'>
              <a className='nav-link'>Services</a>
            </li>

            <li className='nav-task'>
              <a className='nav-link'>Portfolio</a>
            </li>

            <li className='nav-task'>
              <a className='nav-link'>About</a>
            </li>

            <li className='nav-task'>
              <a className='nav-link'>Team</a>
            </li>

            <li className='nav-task'>
              <a className='nav-link'>Contact</a>
            </li>

          </ul>

          <nav className="mobile-nav">

            <button className="hamburger"
              onClick={this.toggleMobileMenu}>MENU</button>

            {this.state.isMobileMenuOpen && <ul
              className={`mobile-nav-bar-tasks ${
                this.state.isMobileMenuOpen ? 'mobile-nav-list-open' : null
                }`}>

              <li className='mobile-nav-task'>
                <a href='link' className='mobile-nav-link'>Services</a>
              </li>

              <li className='mobile-nav-task'>
                <a href='link' className='mobile-nav-link'>Portfolio</a>
              </li>

              <li className='mobile-nav-task'>
                <a href='link' className='mobile-nav-link'>About</a>
              </li>

              <li className='mobile-nav-task'>
                <a href='link' className='mobile-nav-link'>Team</a>
              </li>

              <li className='mobile-nav-task'>
                <a href='link' className='mobile-nav-link'>Contact</a>

              </li>

            </ul>}

          </nav>

        </div>

        <div className="heroheader">

          <div className='welcome-mess'>

            <h1 className='welcome'>Welcome To Our Studio!</h1>

          </div>

          <div className='greeting'>

            <h1 className='nice'>IT IS NICE TO MEET YOU</h1>

          </div>

          <div>

            <button className='tell'>TELL ME MORE</button>

          </div>

        </div>

        <div className='body1'>

          <div></div>

        </div>

      </div>
    )
  }
}
