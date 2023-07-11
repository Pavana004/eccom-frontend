import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Select from 'react-select';



const RegisterForm = () => {


  const schema = yup.object({
    name: yup.string().required('Name is required'),
    mobile: yup.string().matches(
      '^[0-9+/-]+$',
      'Mobile is required'
    ),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string()
      .matches(
        '^(?=.*[@#$])(?=.*[0-9]{4})(?=.*[A-Z]{2})(?=.*[a-z]{2}).{9,}$',
        'Invalid password'
      )
      .required('Password is required'),
    confirmPassword: yup.string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('ConfirmPassword required'),
    checkboxField: yup.boolean().oneOf([true], 'Checkbox required'),
    radioField: yup.string().required('Please select'),

  }).required();


  const { register, handleSubmit, formState: { errors }, control } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
  };


  const genderType = [
    { value: "male", label: "Male" },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <div className='container'>
      <h3 className='mx-auto text-center p-4 bg-danger my-3'style={{ width: "40%",color:"white" }} >FORM</h3>
      <div className='d-flex justify-content-center mx-auto '>
        <form onSubmit={handleSubmit(onSubmit)} className='row g-3 shadow p-3 mb-5 bg-body rounded' style={{ width: "40%" }}  >
          <div className='mb-3 col-md-5' style={{ width: "50%" }}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" {...register("name")} className='form-control ' />
            {errors.name && <span>{errors.name.message}</span>}
          </div>

          <div className='mb-3 col-md-5' style={{ width: "50%" }}>
            <label htmlFor="mobile">Mobile</label>
            <input type="text" id="mobile" {...register("mobile")} className='form-control ' />
            {errors.mobile && <span>{errors.mobile.message}</span>}
          </div>

          <div className='mb-3 col-md-5' style={{ width: "50%" }}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" {...register("email")} className='form-control ' />
            {errors.email && <span>{errors.email.message}</span>}
          </div>

          <div className='mb-3 col-md-5' style={{ width: "50%" }}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" {...register("password")} className='form-control ' />
            {errors.password && <span>{errors.password.message}</span>}
          </div>

          <div className='mb-3 col-md-5' style={{ width: "50%" }}>
            <label htmlFor="confirmPassword">Re-enter Password</label>
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword")}
              className='form-control'
            />
            {errors.confirmPassword && (
              <span>{errors.confirmPassword.message}</span>
            )}
          </div>

          <div className='mb-3 col-md-5' style={{ width: "50%" }}>
            <label>Select Gender</label>
            <Controller
              control={control}
              name='gender'
              rules={{ required: "please enter gender" }}
              render={({ field: { name, onChange, ref, value } }) => (
                <Select
                  name={name}
                  ref={ref}
                  value={value}
                  onChange={(e) => {
                    onChange(e)
                  }}
                  options={genderType}
                  placeholder="Select-Gender"
                  closeMenuOnSelect={true}
                />

              )}
            />
            {errors.gender && <span>{errors.gender.message}</span>}
          </div>


          <div className='form-check m-2'>
            <input
              type="checkbox"
              id="checkboxField"
              {...register("checkboxField")}
              className="form-check-input"

            />
            <label htmlFor="checkboxField">I must accept the terms and conditions</label>
            {errors.checkboxField && <span>{errors.checkboxField.message}</span>}
          </div>

          <div className='form-check m-2  gap-5'>
            <label>Are you older than 18 plus ? </label>
            <div>
              <input
                type="radio"
                id="radioField1"
                value="yes"
                {...register("radioField")}
                className="form-check-input"
              />
              <label htmlFor="radioField1">Yes</label>
            </div>
            <div>
              <input
                type="radio"
                id="radioField2"
                value="no"
                {...register("radioField")}
                className="form-check-input"
              />
              <label htmlFor="radioField2">No</label>
            </div>

            {errors.radioField && <span>{errors.radioField.message}</span>}
          </div>

          <div className='d-flex justify-content-end' style={{width:"100%"}}>
            <input type="submit" className='btn btn-danger ' />
          </div>
        </form>

      </div>

    </div>
  );
};

export default RegisterForm