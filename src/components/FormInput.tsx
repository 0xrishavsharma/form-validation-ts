import React, { useState } from "react"
import "./formInput.scss"

const FormInput = (props: any) => {
  const { label, onChange, id, ...inputProps } = props
  const [value, setValue] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  const handleFocusOut = (e: object) => {
    setIsFocused(true)
  }

  return (
    <div className="flex flex-col">
      <label htmlFor="" className="text-[0.875rem] mb-[0.25rem]">
        {label}
      </label>
      <input
        onChange={(e) => {
          setValue(e.target.value)
          onChange(e)
        }}
        onBlur={handleFocusOut}
        focused={isFocused.toString()}
        onFocus={() => props.name === "confirmPassword" && setIsFocused(true)}
        className={`inputField text-[var(--primary-color)] border-[1.5px] w-[17.5rem] transition-all duration-[0.4s]
        ${
          value
            ? "border-[var(--primary-color)]"
            : "border-[var(--primary-color-lightest)]"
        }
        p-[14px] focus:outline-none placeholder:text-[var(--primary-color-lightest)] rounded-[4px]`}
        {...inputProps}
      />
      <p
        className={`errorMessage hidden text-[0.875rem] text-red-700 w-[17.5rem] `}
      >
        {props.errormessage}
      </p>
    </div>
  )
}

export default FormInput
