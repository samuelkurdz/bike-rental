import {
  ChangeEventHandler,
  Dispatch,
  Fragment,
  SetStateAction,
  useState,
} from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { TypeInterface } from "@interfaces";

const filterOptions = [
  {
    name: "model",
  },
  {
    name: "color",
  },
  {
    name: "location",
  },
  {
    name: "rating",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
interface FilterInterface {
  getFilterByValue: (value: string) => void;
  getFilterByAvailableDate: (value: string) => void;
  getFilterByType: (value: TypeInterface) => void;
}

export function BikeTableFilter({
  getFilterByType,
  getFilterByValue,
  getFilterByAvailableDate,
}: FilterInterface) {
  const [selected, setSelected] = useState(filterOptions[3]);
  const [filterByValue, SetFilterByValue] = useState("");
  const [filterByAvailableDate, SetFilterByAvailableDate] = useState("");

  const handleFilterInputChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {

    if (event.target.value.trim()) {
      SetFilterByAvailableDate("");
      getFilterByAvailableDate("");
    }
    SetFilterByValue(event.currentTarget.value);
    getFilterByValue(event.currentTarget.value);
  };

  const handleFilterAvailableDate: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.target.value.trim()) {
      SetFilterByValue("");
      getFilterByValue("");
    }
    SetFilterByAvailableDate(event.currentTarget.value);
    getFilterByAvailableDate(event.currentTarget.value);
  };

  return (
    <div className="flex flex-wrap items-center gap-4 p-3">
      <FilterOptionsMenu
        selected={selected}
        setSelected={setSelected}
        getFilterByType={getFilterByType}
      />
      <input
        type="text"
        name="filterInput"
        id="filterInput"
        value={filterByValue}
        onChange={handleFilterInputChange}
        className="focus:ring-indigo-500 focus:border-indigo-500 w-full md:w-64 block px-4 sm:text-sm border-gray-300 rounded-md"
        placeholder="filter by"
      />
      <div className="ml-auto flex items-center gap-3">
        <p className="text-sm font-medium text-gray-700">Date Available</p>
        <input
          type="date"
          value={filterByAvailableDate}
          onChange={handleFilterAvailableDate}
          className="focus:ring-indigo-500 focus:border-indigo-500 w-full md:w-64 block px-4 sm:text-sm border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
}

interface FilterOptionsMenuInterface {
  selected: {
    name: string;
  };
  setSelected: Dispatch<
    SetStateAction<{
      name: string;
    }>
  >;
  getFilterByType: (value: TypeInterface) => void;
}

function FilterOptionsMenu({
  selected,
  setSelected,
  getFilterByType,
}: FilterOptionsMenuInterface) {
  const handleFilterTypeChange = (value: any) => {
    setSelected(value);
    getFilterByType(value);
  };

  return (
    <Listbox
      as={"div"}
      className="flex items-center gap-4 w-full md:w-max"
      value={selected}
      onChange={(value) => handleFilterTypeChange(value)}
    >
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-gray-700">
            Filter Options
          </Listbox.Label>
          <div className="mt-1 relative w-full md:max-w-[130px]">
            <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <span className="flex items-center">
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {filterOptions.map((filterOption) => (
                  <Listbox.Option
                    key={filterOption.name}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-indigo-600" : "text-gray-900",
                        "cursor-default select-none relative py-2 pl-3 pr-9"
                      )
                    }
                    value={filterOption}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {filterOption.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
