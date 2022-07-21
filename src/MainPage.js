import React, { Component } from 'react'
// import Navbar from './Navbar'
export default class MainPage extends Component {
  render() {
    return (
      <div>
          <div className='upper_main_container'>
            {/* <Navbar/> */}
            <div className='form_container'>
              <div className='internal_form_container'>
                <form>
                  <h3>Apply Now</h3>
                  <p style={{fontSize:"0.8rem"}}>Enter your info then download the Lyft App to create your driver profile</p>
                  <input className="text" classtype="text" placeholder='First Name'></input><br/>
                  <input className="text" type="text" placeholder='Last Name'></input><br/>
                  <input className="text" type="text" placeholder='Email Address'></input><br/>
                  <input className="text" type="text" placeholder='City'></input><br/>
                  <input className="text" type="text" placeholder='Phone number'></input><br/>
                  <input className="text" type="text" placeholder='Promo Code (optional)'></input><br/>
                  <input type="checkbox"></input><label style={{fontSize:"1vw",fontWeight:""}}>I agree to the Lyft terms</label>
                  <button className='formButton'>BECOME A DRIVER</button>
                  <p style={{fontSize:"0.8rem"}}>Already applied Check the status of your application here</p>
                </form>
              </div>
            </div>
          </div>

          <div className='lower_main_container'>
                <div className='footer_content'>
                    <p style={{fontSize:"2.2vw",fontWeight:"bold"}}>SEE HOW MUCH YOU CAN MAKE</p>
                    <p style={{fontSize:"1vw",fontWeight:"lighter"}}>How many hours do you want to drive this week?</p>
                    <input className="hours_input" type="text" placeholder='hours'></input>
                    <input className="city_input" type="text" placeholder='City'></input>
                    <button className='calculate_button'>CALCULATE</button>
                </div>
          </div>
      </div>
    )
  }
}
