import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from '../redux/cartSlice';
import { AiOutlineStar } from "react-icons/ai";
import {TfiLocationPin} from "react-icons/tfi"
import img1 from "../assets/c1.png";
import img2 from "../assets/c2.png";
import img3 from "../assets/c3.png";
import img4 from "../assets/c4.png";

const Deal = () => {

  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);




  const handleAddToCart = (itemId) => {
    dispatch(addToCart(itemId));
  };



  const otherData = [
    {
      id: 1,
      name: "Holy Stone HS470 Foldable GPS RC Drone",
      img: img1,
      price: "$300.98",
      location: "cape Headstone"
    },
    {
      id: 2,
      name: "Marshall Stockwell II Portable Speaker",
      img: img2,
      price: "$300.98",
      location: "cape Headstone"
    },
    {
      id: 3,
      name: "2020 Ford Mustang GT Fastback",
      img: img3,
      price: "$22,822",
      location: "cape Headstone"
    },
    {
      id: 4,
      name: "Iphone 11 pro max",
      img: img4,
      price: "$76.87",
      location: "cape Headstone"
    },
    {
      id: 5,
      name: "Holy Stone HS470 Foldable GPS RC Drone",
      img: img1,
      price: "$300.98",
      location: "cape Headstone"
    },
    {
      id: 5,
      name: "Holy Stone HS470 Foldable GPS RC Drone",
      img: img1,
      price: "$300.98",
      location: "cape Headstone"
    },
    {
      id: 5,
      name: "Holy Stone HS470 Foldable GPS RC Drone",
      img: img1,
      price: "$300.98",
      location: "cape Headstone"
    },

  ]

  return (
    <>
      <div className='container ' style={{ color: "black" }}>
        <div className="d-flex justify-content-between">
          <h5 style={{ fontWeight: "bolder" }}>Best Deals</h5>
          <p className='m-1' style={{ fontSize: "small", fontWeight: "bolder", color: "#3187ED", cursor: "pointer" }}>view all</p>
        </div>
        <br />
        <div className="row d-flex flex-row  p-2 justify-content-center">
          {items.map((item) => (
            <div key={item.id} className="col-2 d-flex gap-2 m-2" style={{ width: "18%" }}>
              <div className="">
                <img src={item.img} alt="..." style={{ width: "90px", cursor: "pointer" }} onClick={() => handleAddToCart(item.id)} />
          
              </div>
              <div>
                <p className='m-1' style={{ fontSize: "x-small", fontWeight: "bolder" }}>{item.name}</p>
                <p style={{ color: "#3187ED", fontWeight: "bolder" }}>{item.price}</p>
                <div className='d-flex' style={{ cursor: "pointer" }}>
                  <AiOutlineStar size={14} color='#3187ED' />
                  <AiOutlineStar size={14} color='#3187ED' />
                  <AiOutlineStar size={14} color='#3187ED' />
                  <AiOutlineStar size={14} color='#3187ED' />
                  <p style={{ fontSize: "x-small", fontWeight: "bolder" }}>&#40;{item.count}&#41;</p>
                </div>

              </div>

            </div>
          ))}
        </div>
      </div>

      <div style={{ backgroundColor: "#F8F8F8", color: "black", height: "400px" }}>
        <div className='container'>
          <div className='sliders p-3'>
            <div className=" detailsPages m-2 text-center " style={{ width: "20%", height: "300px", }}>
              <h5>Classified Products on the week</h5>
              <br />
              <div className="d-flex gap-3 justify-content-center">
                <div className='shadow-lg' style={{ width: "30px", height: "30px", borderRadius: "20px", backgroundColor: "white", fontSize: "large", fontWeight: "bold", cursor: "pointer" }}>&#60;</div>
                <div className='shadow-lg' style={{ width: "30px", height: "30px", borderRadius: "20px", backgroundColor: "white", fontSize: "large", fontWeight: "bold", cursor: "pointer" }}>&#62;</div>
              </div>
              <br />
              <button className='btn shadow-lg' style={{ backgroundColor: "#00C6D7", color: "white", fontWeight: "bold", height: "40px",width:"100%",fontSize: "small" }}>Explore &#62;</button>
            </div>
            <br/>
            <div className='d-flex '>
            {
              otherData.map(({ img, id,name,price,location }) => {
                return (
                  <div className="classifi shadow-lg" key={id} style={{ width: "20%", height: "300px" }}>
                    <img  src={img} alt='...' style={{ width: "200px" }} />
                    <p className='p-2' style={{ fontSize:"small",fontWeight: "bold" }}>{name}</p>
                    <div className="d-flex justify-content-between p-2">
                    <p style={{ color: "#00C6D7", fontWeight: "bold",fontSize:"small" }}>{price}</p>
                      <p style={{ fontSize:"x-small", fontWeight: "lighter" }}><TfiLocationPin size={10}/>{location}</p>
                    </div>
                  </div>
                )
              })
            }
            </div>


          </div>

        </div>

      </div>

    </>
  )
}

export default Deal