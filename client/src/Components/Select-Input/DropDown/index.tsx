import React, { useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
export interface DropDownProps {
  //array of options
  options?: Array<Text>
  //disable select
  // disabled?: boolean
}

export const DropDown: React.FC<DropDownProps> = ({
  options = ['1', '2', '3']
  // disabled = false
}) => {
  const [selectedOption, setSelectedOption] = useState(options[0])
  return (
    <Listbox as='div' value={selectedOption} onChange={setSelectedOption}>
      {({ open }) => (
        <>
          <Listbox.Label className='flex'>Select an Option: </Listbox.Label>

          <div className='inline-block'>
            <Listbox.Button className='px-4 py-2 w-full rounded bg-orange text-white'>
              <span className='block'>{selectedOption}</span>
            </Listbox.Button>
          </div>

          <Transition
            show={open}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            className='absolute rounded-md bg-white'
          >
            <Listbox.Options className='border outline-none' static>
              {(options as any[]).map((option: string) => (
                <Listbox.Option key={option} value={option}>
                  {({ selected, active }) => (
                    <div
                      className={`${
                        active
                          ? 'text-white text-center bg-orange border'
                          : 'text-black text-center bg-white border'
                      } cursor-default select-none relative`}
                    >
                      <span
                        className={`${
                          selected ? 'font-semibold' : 'font-normal'
                        } block truncate`}
                      >
                        {option}
                      </span>
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </>
      )}
    </Listbox>
  )
}
