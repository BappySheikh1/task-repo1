import React from 'react';

const Login = () => {
    const handleSubmit=(e)=>{
        e.preventDefault()
        const form=e.target
        const email=form.email.value
        const password=form.password.value
        console.log(email,password);
   
       }

    return (
        <div>
            <div className="hero ">
  <div className="hero-content flex-col ">
    
    <div className="card flex-shrink-0 w-full  shadow-2xl ">
           <h1 className="text-4xl text-center my-3 font-bold">Login now!</h1>
      <form onSubmit={handleSubmit} className="card-body">


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
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;