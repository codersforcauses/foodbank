import React from 'react'
import { useField } from 'formik'
import { Listbox, Transition } from '@headlessui/react'
import { FieldControl, FieldLabel, FieldMessage } from '../Utils'
export interface DropDownProps {
  /**
   * Options that appear in dropdown menu
   */
  options: Array<string>

  /**
   * If field is required for form
   */
  required?: boolean

  /**
   * If input is disabled
   */
  disabled?: boolean

  /**
   * Add description or helper text to input
   */
  description?: string

  /**
   * Placeholder text for input
   */
  placeholder?: string

  /**
   * Label for input
   */
  label: string

  /**
   * Name of input (required for Formik to work)
   */
  name: string
}

export const DropDown: React.FC<DropDownProps> = ({
  options,
  disabled = false,
  required = false,
  label,
  placeholder = 'select an option',
  description,
  ...props
}) => {
  //useField hook from formik acquires if there is error and if touched
  const [{ name, value }, { error, touched }, { setValue }] = useField(
    props.name
  )
  const val = value ?? placeholder

  //borderColor red if there is an error
  const borderColor = error && touched ? 'border-red' : 'border-dark-grey'

  return (
    <FieldControl
      name={name}
      error={error}
      touched={touched}
      required={required}
      disabled={disabled}
    >
      <div className='flex w-full items-center justify-center'>
        <div className='w-full max-w-xs mx-auto'>
          <Listbox value={val} onChange={setValue}>
            {({ open }) => (
              <>
                <Listbox.Label as={FieldLabel}>{label}</Listbox.Label>
                <div className='relative'>
                  <span className='inline-block w-full rounded-md shadow-sm'>
                    <Listbox.Button
                      className={`cursor-default relative w-full rounded-md border bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition ease-in-out duration-150 sm:text-sm sm:leading-5 ${borderColor}`}
                    >
                      <span className='block truncate'>{val}</span>

                      {/* DOUBLE ARROW SYMBOL ON BUTTON */}
                      <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                        <svg
                          className='h-5 w-5 text-gray-400'
                          viewBox='0 0 20 20'
                          fill='none'
                          stroke='currentColor'
                        >
                          <path
                            d='M7 7l3-3 3 3m0 6l-3 3-3-3'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </span>
                    </Listbox.Button>
                  </span>

                  {/* RESPONSIBLE FOR THE 'DROPPING DOWN' OF THE MENU */}
                  <Transition
                    show={open}
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                    className='absolute mt-1 w-full rounded-md bg-white shadow-lg'
                  >
                    <Listbox.Options
                      static
                      className='max-h-60 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5'
                    >
                      {/* MAPS OPTIONS IN DROPDOWN MENU */}
                      {options.map(option => (
                        <Listbox.Option
                          key={option}
                          value={option}
                          disabled={disabled}
                        >
                          {({ selected, active }) => (
                            <div
                              className={`${
                                active ? 'text-white bg-orange' : 'text-black'
                              } cursor-default select-none relative py-2 pl-8 pr-4`}
                            >
                              <span
                                className={`${
                                  selected ? 'font-semibold' : 'font-normal'
                                } block truncate`}
                              >
                                {option}
                              </span>
                              {selected && (
                                <span
                                  className={`${
                                    active ? 'text-white' : 'text-primary'
                                  } absolute inset-y-0 left-0 flex items-center pl-1.5`}
                                >
                                  {/* TICK SYMBOL ON EACH OPTION */}
                                  <svg
                                    className='h-5 w-5'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 20 20'
                                    fill='currentColor'
                                  >
                                    <path
                                      fillRule='evenodd'
                                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                      clipRule='evenodd'
                                    />
                                  </svg>
                                </span>
                              )}
                            </div>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
          {/* Show error message or decription*/}
          {touched && error ? (
            <FieldMessage>{error}</FieldMessage>
          ) : (
            description && (
              <FieldMessage description>{description}</FieldMessage>
            )
          )}
        </div>
      </div>
    </FieldControl>
  )
}
