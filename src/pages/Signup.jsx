import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import { Button } from "../components/ui/button";
import { useFirebase } from "../firebase/firebaseContext";

function Signup() {
  const { register, handleSubmit } = useForm();
  const firebase = useFirebase();
  const navigate = useNavigate();

  useEffect(() => {
    if (firebase.isLoggedIn) {
      navigate("/");
    }
  }, [firebase, navigate]);

  const create = async (data) => {
    const { email, password, name } = data;
    try {
      const result = await firebase.signupUser(email, password, name);
      console.log("Successful", result);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-[90vh] flex justify-center items-center">
      <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign up to create account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>

        <form
          onSubmit={handleSubmit(create)}
          className="w-full flex items-center justify-center my-5"
        >
          <div className="grid w-full max-w-sm items-center gap-4">
            <Input
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
              {...register("name", {
                required: true,
              })}
            />
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />
            <Button type="submit" variant="primary" className="w-full">
              Create Account
            </Button>
            <Button
              onClick={firebase.signinWithGoogle}
              type="submit"
              variant="destructive"
              className="w-full"
            >
              Sign up with Google
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
