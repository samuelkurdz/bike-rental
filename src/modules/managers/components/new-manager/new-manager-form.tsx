import { ChangeEventHandler, FormEventHandler, LegacyRef } from "react";
import { CreateManagerPayload } from "../../../../interfaces";

interface NewManagerFormInterface {
  handleFormSubmit: FormEventHandler<HTMLFormElement>;
  newManager: CreateManagerPayload;
  handleFormChange: ChangeEventHandler<HTMLInputElement>;
  closeModal: () => void;
  cancelButtonRef: LegacyRef<HTMLButtonElement> | undefined;
}

export function NewManagerForm({
  handleFormSubmit,
  newManager,
  handleFormChange,
  closeModal,
  cancelButtonRef,
}: NewManagerFormInterface) {
  return (
    <form className="mt-8 space-y-6" onSubmit={handleFormSubmit}>
      <div className="space-y-5">
        <div>
          <label htmlFor="username">User Name</label>
          <input
            required
            name="username"
            type="text"
            id="username"
            autoComplete="username"
            placeholder="username"
            value={newManager.username}
            onChange={handleFormChange}
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
            value={newManager.email}
            onChange={handleFormChange}
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
            value={newManager.password}
            onChange={handleFormChange}
            className="appearance-none rounded-sm relative block w-full mt-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
        </div>
      </div>
      <div className="bg-gray-50 py-3 sm:flex sm:flex-row-reverse">
        <button
          type="submit"
          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Add Manager
        </button>
        <button
          type="button"
          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={closeModal}
          ref={cancelButtonRef}
        >
          Close
        </button>
      </div>
    </form>
  );
}
