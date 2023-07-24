import React from 'react';
import logo from "../assets/logo.png"
import { BsTelephone } from "react-icons/bs"
import { GoMail } from "react-icons/go"
import { TfiLocationPin } from "react-icons/tfi"
import { RxDividerVertical } from "react-icons/rx"
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai"
import { RiAccountCircleLine } from "react-icons/ri"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";

const Navbar = () => {

    const cart = useSelector((state) => state.items.cart);
    console.log(cart.length)





    return (
        <>
            <nav className="navbar d-flex justify-content-between" style={{ backgroundColor: "#3187ED", height: "45px", fontSize: "small" }}>
                <div className='d-flex justify-content-evenly' style={{ width: "50%", height: "100%" }}>
                    <div className="me-2">
                        <BsTelephone /> +221 33 66 22
                    </div>
                    <div className="">
                        <GoMail /> support@elextra.io
                    </div>
                </div>
                <div className=' d-flex justify-content-center gap-5' style={{ width: "40%", height: "100%" }}>
                    <div className="">
                        <TfiLocationPin /> Locations
                    </div>
                    <RxDividerVertical size={25} />
                    <div className="">
                        <p className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                $ Dollar &#40; US &#41;
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Rupees ind</a></li>
                                <li><a className="dropdown-item" href="#">Euro uk</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </p>
                    </div>
                    <div className="">
                        <p className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                En
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Tam</a></li>
                                <li><a className="dropdown-item" href="#">Arb</a></li>
                                <li><a className="dropdown-item" href="#">Mal</a></li>
                            </ul>
                        </p>
                    </div>
                </div>

            </nav>
            <nav className='navbar d-flex ' style={{ height: "130px" }}>
                <div style={{ width: "30%" }} className="d-flex  justify-content-center">
                    <img src={logo} alt='logo' style={{ width: "200px", height: "100px" }} />
                </div>
                <div className="d-flex " style={{ width: "40%", height: "90px", }}>
                    <div className="dropdown m-2 p-2">
                        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: "#F8F8F8", height: "45px", color: "black" }}>
                            Classifieds
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div className='m-2 p-2' style={{ width: "400px" }}>
                        <input type="text" className="form-control" placeholder="search here..." style={{ backgroundColor: "#F8F8F8", height: "45px", width: "320px" }} />
                        <span><AiOutlineSearch size={25} color='blue' style={{ position: "absolute", top: "35%", left: "63%", cursor: "pointer" }} /></span>
                    </div>
                </div>
                <div className="d-flex " style={{ width: "30%", height: "60px" }}>
                    <div className=' d-flex  gap-4' style={{ width: "40%" }}>
                        <Link to="">
                            <AiOutlineHeart size={25} color='black' className='m-2' style={{ cursor: "pointer" }} />
                        </Link>
                        <Link to='/cart' style={{ color: "white" }}>
                            <AiOutlineShoppingCart size={25} color='black' className='m-2 ' style={{ cursor: "pointer" }} />
                            <div className='text-center' style={{ position: "absolute", top: "24%", left: "77%", width: "20px", height: "23px", backgroundColor: "#3187ED", borderRadius: "20px" }}>{cart.length}</div>
                        </Link>
                        <Link to="">
                            <RiAccountCircleLine size={25} color='black' className='m-2' style={{ cursor: "pointer" }} />
                        </Link>
                    </div>
                    <div className=' d-flex  justify-content-center ' style={{ width: "60%", height: "60px" }} >
                        <button className='btn shadow-lg' style={{ backgroundColor: "#00C6D7", color: "white", fontWeight: "bold", height: "50px" }}>Classifieds</button>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar