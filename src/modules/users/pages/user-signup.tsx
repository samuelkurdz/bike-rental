import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { users } from "../../../data";
import { CreateUserPayload } from "../../../interfaces";

function SignupForm() {
  const [newUser, SetNewUser] = useState<CreateUserPayload>({
    username: "",
    email: "",
    password: "",
  });
  let navigate = useNavigate();

  useEffect(() => {}, []);

  const handleSignUpFormChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    SetNewUser({ ...newUser, [event.target.name]: event.target.value });
  };

  const handleSignupFormSubmit: FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    console.log(newUser);

    const isUsernameExisting = users.some(
      (user) => user.username === newUser.username
    );
    const isEmailExisting = users.some((user) => user.email === newUser.email);
    console.log(isUsernameExisting, isEmailExisting);

    if (isUsernameExisting) {
      alert("username is taken");
      return;
    }
    if (isEmailExisting) {
      alert("email is taken");
      return;
    }

    users.push({ ...newUser, bikes: [], id: uuidv4() });
    console.log(users);
    navigate("login");
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSignupFormSubmit}>
      <div className="space-y-5">
        <div>
          <label htmlFor="username">Username</label>
          <input
            required
            name="username"
            type="text"
            id="username"
            autoComplete="username"
            placeholder="Username"
            value={newUser.username}
            onChange={handleSignUpFormChange}
            className="appearance-none rounded-sm relative block w-full mt-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="email-address">Email address</label>
          <input
            required
            name="email"
            type="email"
            id="email-address"
            autoComplete="email"
            placeholder="Email address"
            value={newUser.email}
            onChange={handleSignUpFormChange}
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
            value={newUser.password}
            onChange={handleSignUpFormChange}
            className="appearance-none rounded-sm relative block w-full mt-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center"></div>

        <div className="text-sm">
          <Link
            className="font-medium text-indigo-600 hover:text-indigo-500"
            to="/login"
          >
            Already have an account?
          </Link>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
          Sign Up
        </button>
      </div>
    </form>
  );
}

function SignUp() {
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
              Create a new account
            </h2>
          </div>
          <SignupForm />
        </div>
      </div>
    </>
  );
}

export default SignUp;
