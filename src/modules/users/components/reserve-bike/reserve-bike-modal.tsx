import { Dialog, Transition } from '@headlessui/react';
import { CreateReservePayload } from '@interfaces';
import { addReserve, RootState } from '@store';
import { AddReserveForm } from '@user-components';
import { isDateWithInRange, isFromHigherThanToDate } from '@utils';
import { ChangeEventHandler, FormEventHandler, Fragment, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

interface ReserveBikeModalInterface {
  open: boolean;
  userId: string;
  bikeToReserveId: string;
  closeModal: () => void;
}

export function ReserveBikeModal({
  closeModal,
  open,
  userId,
  bikeToReserveId,
}: ReserveBikeModalInterface) {
  const [newReserve, SetNewReserve] = useState<CreateReservePayload>({
    bikeId: bikeToReserveId,
    userId: userId,
    fromPeriod: '',
    toPeriod: '',
    rating: 5,
  });

  const dispatch = useDispatch();
  const cancelButtonRef = useRef(null);
  const reserves = useSelector((state: RootState) => state.reserves.data);
  const bike = useSelector((state: RootState) => state.bikes.data).find(
    (bike) => bike.id === bikeToReserveId,
  );

  const handleFormChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    SetNewReserve({ ...newReserve, [event.target.name]: event.target.value });
  };

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const isDateRangeInvalid = isFromHigherThanToDate(
      newReserve.fromPeriod,
      newReserve.toPeriod,
    );

    if (isDateRangeInvalid) {
      alert('From-Date cannnot be later than To-Date');
      return;
    }

    const isBikeTakenOnThisFromDate = reserves.some(
      (reserve) =>
        reserve.bikeId === newReserve.bikeId &&
        isDateWithInRange(reserve.fromPeriod, reserve.toPeriod, newReserve.fromPeriod),
    );

    const isBikeTakenOnThistoDate = reserves.some(
      (reserve) =>
        reserve.bikeId === newReserve.bikeId &&
        isDateWithInRange(reserve.fromPeriod, reserve.toPeriod, newReserve.toPeriod),
    );

    if (isBikeTakenOnThisFromDate) {
      alert('Bike is not available on this from date');
      return;
    }

    if (isBikeTakenOnThistoDate) {
      alert('Bike is not available on this to date');
      return;
    }
    dispatch(addReserve({ ...newReserve, id: uuidv4() }));
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
                      Reserve {bike?.model} Bike
                    </Dialog.Title>
                    <div className="mt-2">
                      {AddReserveForm({
                        closeModal,
                        newReserve,
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
