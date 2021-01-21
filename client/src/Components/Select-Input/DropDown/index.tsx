import React, { useState } from 'react'
import { Listbox } from '@headlessui/react'
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
    <Listbox value={selectedOption} onChange={setSelectedOption}>
      <Listbox.Label className='flex'>Select an Option: </Listbox.Label>
      <Listbox.Button className='px-4 py-2 rounded bg-orange text-white'>
        {
          'select an option' //should be changed to something else later
        }
      </Listbox.Button>
      <Listbox.Options className='items-center flex-col justify-content'>
        {(options as any[]).map((option: string) => (
          <Listbox.Option
            key={option}
            value={option}
            className='text-center bg-white text-black my-0 -ml-8 border'
          >
            {option}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}
