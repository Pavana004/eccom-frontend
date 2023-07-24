import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { AiFillYoutube, AiFillLinkedin, AiOutlineTwitter, AiOutlineInstagram, AiFillApple } from 'react-icons/ai'
import { BiLogoFacebook, BiLogoPlayStore } from 'react-icons/bi'
import footLogo from '../assets/logo.png'
import phone from '../assets/phone.png'




const Footer = () => {
    return (
        <div className='' style={{ color: "black" }}>
            <div className='container d-flex  gap-1'>
                <div className='my-auto' style={{width:"30%"}}>
                    <div  style={{height:"60px"}}>
                        <img src={footLogo} alt='....'  style={{ width: "150px" }} />
                    </div>
                    <div className=' p-3'>
                        <p style={{fontSize:"small"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                    </div>
                    <div className='d-flex text-center gap-3 p-3'>
                        <div style={{ width: "30px", height: "30px", backgroundColor:"#F8F8F8",borderRadius:"10px",cursor:"pointer" }}><AiFillYoutube /></div>
                        <div style={{ width: "30px", height: "30px", backgroundColor:"#F8F8F8",borderRadius:"10px",cursor:"pointer" }}><AiFillLinkedin /></div>
                        <div style={{ width: "30px", height: "30px", backgroundColor:"#F8F8F8",borderRadius:"10px",cursor:"pointer" }}><AiOutlineTwitter /></div>
                        <div style={{ width: "30px", height: "30px", backgroundColor:"#F8F8F8",borderRadius:"10px",cursor:"pointer" }}><BiLogoFacebook /></div>
                        <div style={{ width: "30px", height: "30px", backgroundColor:"#F8F8F8",borderRadius:"10px",cursor:"pointer" }}><AiOutlineInstagram /></div>
                    </div>
                </div>
                <div className=' my-auto' style={{width:"16%"}}>
                    <h6 style={{fontSize:"medium",fontWeight:"bold"}}>QUICK LINKS</h6>
                    <br/>
                    <div>
                        <Link to="/" className='LinkStyle'>
                            <p style={{fontSize:"small"}}>Products</p>
                        </Link>
                        <Link to="/" className='LinkStyle'>
                            <p style={{fontSize:"small"}}>Classifieds</p>
                        </Link>
                        <Link to="/" className='LinkStyle'>
                            <p style={{fontSize:"small"}}>Contact us</p>
                        </Link>
                        <Link to="/loginForm" className='LinkStyle'>
                            <p style={{fontSize:"small"}}>Login</p>
                        </Link>
                        <Link to="/registerForm" className='LinkStyle'>
                            <p style={{fontSize:"small"}}>Sign Up</p>
                        </Link>

                    </div>
                </div>
                <div className=' my-auto' style={{width:"16%",height:"400px",marginTop:"30px"}}>
                    <h6  style={{marginTop:"85px",fontSize:"medium",fontWeight:"bold"}}>CUSTOMER AREA</h6>
                    <br/>
                    <div>
                        <Link to="/" className='LinkStyle'>
                            <p style={{fontSize:"small"}} >My Account</p>
                        </Link>
                        <Link to="/" className='LinkStyle'>
                            <p style={{fontSize:"small"}}>Orders</p>
                        </Link>
                        <Link to="/" className='LinkStyle'>
                            <p style={{fontSize:"small"}}>Tracking List</p>
                        </Link>
                        <Link to="/" className='LinkStyle'>
                            <p style={{fontSize:"small"}}>Terms</p>
                        </Link>
                        <Link to="/" className='LinkStyle'>
                            <p style={{fontSize:"small"}}>Privacy Policy</p>
                        </Link>
                        <Link to="/" className='LinkStyle'>
                            <p style={{fontSize:"small"}}>Return Policy</p>
                        </Link>
                        <Link to="/cart" className='LinkStyle'>
                            <p style={{fontSize:"small"}}>My Cart</p>
                        </Link>

                    </div>
                </div>
                <div className=' my-auto' style={{width:"16%"}}>
                    <h6 style={{fontSize:"medium",fontWeight:"bold"}}>VENDOR AREA</h6>
                    <br/>
                    <div>
                        <Link to="/" className='LinkStyle'>
                            <p style={{fontSize:"small"}}>Partner with us </p>
                        </Link>
                        <Link to="/" className='LinkStyle'>
                            <p style={{fontSize:"small"}}>Training</p>
                        </Link>
                        <Link to="/" className='LinkStyle'>
                            <p style={{fontSize:"small"}}>Procedures</p>
                        </Link>
                        <Link to="/" className='LinkStyle'>
                            <p style={{fontSize:"small"}}>Terms</p>
                        </Link>
                        <Link to="/" className='LinkStyle'>
                            <p style={{fontSize:"small"}}>Privacy Policy</p>
                        </Link>

                    </div>
                </div>
                <div className=' my-auto' style={{width:"30%",height:"230px"}}>
                    <h6 style={{fontSize:"medium",fontWeight:"bold"}} >CONTACT</h6>
                    <div>
                        <p style={{fontSize:"small"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                    </div>
                    <div className='d-flex justify-content-between' style={{ height: "60px" }}>
                        <div  style={{ width: "20%" }}>
                            <img src={phone} alt='....' style={{ width: "40px" }} />
                        </div>
                        <div  style={{ width: "50%",position:"relative" }}>
                            <p style={{fontSize:"small"}}>Have any question</p>
                            <Link to="/" className='phone'>
                                <p>+ 123 456 789</p>
                            </Link>
                        </div>
                        <div style={{ width: "30%" }}>
                            <button className='btn btn-outline-primary'>CHAT</button>
                        </div>
                    </div>
                    <br/>
                    <div className='d-flex justify-content-evenly' style={{color:'white'}}>
                        <div className='btn  btn-dark d-flex justify-content-evenly' style={{ width: "150px", height: "50px" }}>
                            <AiFillApple size={25}/>
                            <div style={{position:"relative"}}>
                                <p style={{fontSize:"xx-small"}}>Download on the</p>
                                <p style={{fontSize:"small",position:"absolute",top:"15px"}}> App Store</p>
                            </div>
                        </div>
                        <div className='btn  btn-dark d-flex justify-content-between' style={{ width: "150px", height: "50px" }}>
                            <BiLogoPlayStore size={25} />
                            <div  style={{position:"relative",width:"80%"}}>
                                <p style={{fontSize:"xx-small"}}>GET IT ON</p>
                                <p style={{fontSize:"small",position:"absolute",top:"15px",left:"30px"}}>Google Play</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer