import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from "axios";
import Swal from 'sweetalert2';
import { useHistory } from "react-router-dom"
import { Link } from 'react-router-dom/cjs/react-router-dom';

const Login = () => {

  const history = useHistory();
  const schema = yup.object({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),

  }).required();


  const { register, reset, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {

    try {

      const url = "https://eccom-backend.vercel.app/api/login";
      await axios.post(url, data);
      Swal.fire('Login Successfully');
      reset();
      history.push("/");

    } catch (error) {
      Swal.fire("Please Check Email and Password")
    }
  };


  return (
    <div className='container'>
      <h3 className='mx-auto text-center p-4  my-3' style={{ width: "40%", color: "white", backgroundColor: "#00C6D7" }} >LoginForm</h3>
      <div className='d-flex justify-content-center mx-auto my-auto'>
        <form onSubmit={handleSubmit(onSubmit)} className='g-3 shadow p-3 mb-5 bg-body rounded' style={{ width: "40%", color: "black", fontWeight: "bold" }}  >
          <div className='mb-3 col-md-5' style={{ width: "90%", height: "90px" }}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" {...register("email")} className='form-control ' />
            {errors.email && <span style={{ color: "red", fontSize: "small" }}>{errors.email.message}</span>}
          </div>

          <div className='mb-3 col-md-5' style={{ width: "90%", height: "90px" }}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" {...register("password")} className='form-control ' />
            {errors.password && <span style={{ color: "red", fontSize: "small" }}>{errors.password.message}</span>}
          </div>

          <div className='d-flex justify-content-between' style={{ width: "100%" }}>
            <Link to="/registerForm">
              <p>Create Account Now </p>
            </Link>
            <input type="submit" className='btn ' style={{ backgroundColor: "#00C6D7", color: "white" }} />
          </div>
        </form>

      </div>

    </div>
  )
}

export default Login