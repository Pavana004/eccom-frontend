import React from 'react';
import { useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from "axios";
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';




const RegisterForm = () => {

  const history = useHistory();
  const schema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
    confirmPassword: yup.string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('ConfirmPassword required'),
  }).required();


  const { register,reset, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
   
    try {
         
      const url= "https://eccom-backend.vercel.app/api/register";
      await axios.post(url,data);
      Swal.fire('Register Successfully');
      reset();
      history.push("/loginForm");

      
    } catch (error) {
      Swal.fire("Please Check Email and Password")
    }
  };


  return (
    <div className='container'>
      <h3 className='mx-auto text-center p-4  my-3'style={{ width: "40%",color:"white",backgroundColor: "#00C6D7" }} >RegisterForm</h3>
      <div className='d-flex justify-content-center mx-auto '>
        <form onSubmit={handleSubmit(onSubmit)} className='g-3 shadow p-3 mb-5 bg-body rounded' style={{ width: "40%",color:"black",fontWeight:"bold" }}  >
          <div className='mb-3 col-md-5' style={{ width: "90%",height:"90px" }}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" {...register("name")} className='form-control ' />
            {errors.name && <span style={{color:"red",fontSize:"small"}} >{errors.name.message}</span>}
          </div>

          <div className='mb-3 col-md-5' style={{ width: "90%",height:"90px" }}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" {...register("email")} className='form-control ' />
            {errors.email && <span style={{color:"red",fontSize:"small"}}>{errors.email.message}</span>}
          </div>

          <div className='mb-3 col-md-5' style={{ width: "90%",height:"90px" }}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" {...register("password")} className='form-control ' />
            {errors.password && <span style={{color:"red",fontSize:"small"}}>{errors.password.message}</span>}
          </div>

          <div className='mb-3 col-md-5' style={{ width: "90%",height:"90px" }}>
            <label htmlFor="confirmPassword">Re-enter Password</label>
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword")}
              className='form-control'
            />
            {errors.confirmPassword && (
              <span style={{color:"red",fontSize:"small"}}>{errors.confirmPassword.message}</span>
            )}
          </div>

          <div className='d-flex justify-content-end' style={{width:"100%"}}>
            <input type="submit" className='btn ' style={{backgroundColor: "#00C6D7",color:"white"}} />
          </div>
        </form>

      </div>

    </div>
  );
};

export default RegisterForm