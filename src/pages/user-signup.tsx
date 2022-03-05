import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from "react";
import { Link } from "react-router-dom";
import { CreateUserPayload } from "../interfaces/user";
import { supabase } from "../supabaseClient";

function SignupForm() {
  const [newUser, SetNewUser] = useState<CreateUserPayload>({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    doesUsernameExists();
   console.log( supabase.auth.session());
   console.log( supabase.auth);
  }, []);

  const doesUsernameExists = async () => {
    const num = await supabase.from("profiles");
    console.log(num)

  };

  const handleLoginFormChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    SetNewUser({ ...newUser, [event.target.name]: event.target.value });
  };

  const handleLoginFormSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const res = await supabase.auth.signUp({
      email: newUser.email,
      password: newUser.password,
    });
    console.log(res);
    const updates = {
      username: newUser.username,
      role: "manager",
      email: newUser.email,
      updated_at: new Date(),
    };
    const { data, error } = await supabase
      .from("profiles")
      .update(updates)
      .eq("id", res?.user?.id);
    console.log(data, error);
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleLoginFormSubmit}>
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
            onChange={handleLoginFormChange}
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
            value={newUser.password}
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
            to="/"
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
