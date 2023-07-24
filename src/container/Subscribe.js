import React from 'react'
import mail from "../assets/Vector.png"
import circleElement from "../assets/circleElement.png"

const Subscribe = () => {


    return (
        <div className='' style={{  backgroundColor: "#3187ED",height:"200px" }}>
            <div className='container d-flex justify-content-between my-auto'>
                <div className="m-2 p-2  mx-auto" style={{width:"20%"}}>
                    <img className='mx-5 my-5 ' src={mail} alt='....' style={{width:"40%"}} />
                </div>
                <div className="m-2 p-2  my-auto " style={{width:"40%",position:"relative"}}>
                    <img src={circleElement} alt='...' style={{width:"35px",position:"absolute",left:"48%",top:"0%"}}/>
                    <h3 style={{fontWeight:"bold",fontSize:"20px"}}>Sign Up for Newsletter</h3>
                    <br/>
                    <p style={{fontSize:"13px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='m-2 p-2 ' style={{ width: "40%",position:"relative" }}>
                    <input type="text" className="form-control my-5" placeholder="Enter your email here..." style={{ height: "55px", width: "100%",position:"relative" }} />
                    <button className='btn btn-dark ' style={{ color: "white", fontWeight: "bold",fontSize:"small", height: "40px",position:"absolute",left:"75%",top:"34%" }}>SUBSCRIBE</button>
                    <img src={circleElement} alt='...' style={{width:"35px",position:"absolute",left:"95%",top:"57%"}}/>

                </div>

            </div>


        </div>
    )
}

export default Subscribe