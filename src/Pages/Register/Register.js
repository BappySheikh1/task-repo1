import React from 'react';
import { useProvider } from '../../contents/AuthProvider';

const Register = () => {
const {createUser,userProfileName}=useProvider()
    const handleSubmit=(e)=>{
     e.preventDefault()
     const form=e.target
     const name=form.name.value
     const email=form.email.value
     const password=form.password.value
     console.log(name,email,password);
     createUser(email,password)
     .then(result =>{
        const user =result.user
        console.log(user);
        handleUpdateName(name)

     }).catch(err =>{
        console.log(err);
     })
    }

    const handleUpdateName=(name)=>{
        const provider ={
            displayName: name
        }
        userProfileName(provider)
        .then(()=>{

        }).catch(err=>{
         console.log(err);
        })
    }

    return (
        <div>
            <div className="hero ">
  <div className="hero-content flex-col ">
    
    <div className="card flex-shrink-0 w-full  shadow-2xl ">
           <h1 className="text-4xl text-center my-3 font-bold">Register now!</h1>
      <form onSubmit={handleSubmit} className="card-body">

        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="********" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;