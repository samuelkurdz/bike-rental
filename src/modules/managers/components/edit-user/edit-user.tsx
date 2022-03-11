import { Transition, Dialog } from "@headlessui/react";
import {
  ChangeEventHandler,
  FormEventHandler,
  Fragment,
  useRef,
  useState,
} from "react";
import { EditUserForm } from '@manager-components';
import { useSelector, useDispatch } from "react-redux";
import { User } from "@interfaces";
import { RootState, updateUser } from "@store";

interface EditUserDetailsModalInterface {
  open: boolean;
  user: any;
  closeModal: () => void;
}

export function EditUser({ closeModal, user, open }: EditUserDetailsModalInterface) {
  const [updatedUser, SetUpdatedUser] = useState<User>(user);

  const users = useSelector((state: RootState) => state.users.data);
  const dispatch = useDispatch();
  const cancelButtonRef = useRef(null);

  const handleFormChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    SetUpdatedUser({ ...updatedUser, [event.target.name]: event.target.value });
  };

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const isUsernameExisting = users.some(
      (user) =>
        user.username === updatedUser.username && user.id !== updatedUser.id
    );
    const isEmailExisting = users.some(
      (user) => user.email === updatedUser.email && user.id !== updatedUser.id
    );

    if (isUsernameExisting) {
      alert("username is taken");
      return;
    }
    if (isEmailExisting) {
      alert("email is taken");
      return;
    }

    dispatch(updateUser(updatedUser));
    closeModal();
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={closeModal}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900 capitalize flex flex-col justify-center sm:flex-row gap-3 items-center"
                    >
                      Edit {user?.username} Details
                    </Dialog.Title>
                    <div className="mt-2">
                      {EditUserForm({
                        closeModal,
                        updatedUser,
                        cancelButtonRef,
                        handleFormSubmit,
                        handleFormChange,
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
