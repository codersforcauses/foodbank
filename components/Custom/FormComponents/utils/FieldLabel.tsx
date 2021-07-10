/* eslint-disable react/display-name */
import { useContext, forwardRef, PropsWithChildren } from 'react'
import { FieldControlContext } from './FieldControl'

interface LabelProps {}

const FieldLabel = forwardRef<HTMLLabelElement, PropsWithChildren<LabelProps>>(
  (props, ref) => {
    const { disabled, name, required } = useContext(FieldControlContext)
    const disabledClass = disabled ? 'opacity-50' : undefined
    return (
      <label
        htmlFor={name}
        id={`${name}-label`}
        ref={ref}
        className={['font-bold', disabledClass].join(' ').trim()}
      >
        {props.children}
        {required && (
          <>
            <span aria-hidden className='opacity-50'>
              *
            </span>
            <i className='sr-only'>required</i>
          </>
        )}
      </label>
    )
  }
)

export default FieldLabel
