import { PlusIcon } from '@heroicons/react/solid';
import { NewManagerModal } from '@manager-components';
import { useState } from 'react';

export function NewManager() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeManagerModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex justify-end items-center gap-4 p-3">
        <button
          className="w-full inline-flex  items-center justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto sm:text-sm"
          type="button"
          onClick={() => setIsModalOpen(true)}
        >
          <PlusIcon className="h-6 w-6 text-white" aria-hidden="true" />
          Add Manager
        </button>
      </div>
      <NewManagerModal open={isModalOpen} closeModal={closeManagerModal} />
    </>
  );
}
