import { ChangeEventHandler, Dispatch, SetStateAction } from "react";
import { CreateUserPayload } from "../../../../interfaces";

interface FormProps {
  newUser: CreateUserPayload;
  SetNewUser: Dispatch<SetStateAction<CreateUserPayload>>;
}

function NewUserForm({ newUser, SetNewUser }: FormProps) {
  const handleSignUpFormChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    SetNewUser({ ...newUser, [event.target.name]: event.target.value });
  };

  return (
    <form className="mt-8 space-y-6">
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
    </form>
  );
}

export default NewUserForm;
