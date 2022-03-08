import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { users } from "../../../databases";
import { LoginUserPayload } from "../../../interfaces";

function LoginForm() {
  const [loginPayload, SetLoginPayload] = useState<LoginUserPayload>({
    email: "",
    password: "",
  });
  let navigate = useNavigate();

  const handleLoginFormChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    SetLoginPayload({
      ...loginPayload,
      [event.target.name]: event.target.value,
    });
  };

  const handleLoginFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const userInDatabase = users.find(
      (user) => user.email === loginPayload.email
    );
    if (userInDatabase && userInDatabase.password === loginPayload.password) {
      localStorage.setItem('user', JSON.stringify(userInDatabase));
      navigate(`/app`);
    } else {
      alert("wrong login details");
    }
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleLoginFormSubmit}>
      <div className="space-y-5">
        <div>
          <label htmlFor="email-address">Email address</label>
          <input
            required
            name="email"
            type="email"
            id="email-address"
            autoComplete="email"
            placeholder="Email address"
            value={loginPayload.email}
            onChange={handleLoginFormChange}
            className="appearance-none rounded-sm relative block w-full mt-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            required
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            value={loginPayload.password}
            onChange={handleLoginFormChange}
            className="appearance-none rounded-sm relative block w-full mt-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center"></div>

        <div className="text-sm">
          <Link
            className="font-medium text-indigo-600 hover:text-indigo-500"
            to="/signup"
          >
            Don't have an account?
          </Link>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
          Sign in
        </button>
      </div>
    </form>
  );
}

function Login() {
  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <LoginForm />
        </div>
      </div>
    </>
  );
}

export default Login;
