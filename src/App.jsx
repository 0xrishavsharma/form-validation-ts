import { useRef, useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.scss"
import FormInput from "./components/FormInput"

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    fullname: "",
    password: "",
    confirmPassword: "",
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    // const data = new FormData(e.target)
    // console.log(Object.fromEntries(data.entries()))
  }
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errormessage: "Username is should be 3-16 characters and should not contain special characters",
      label: "Username",
      pattern: "^[a-zA-Z0-9]{3,16}$",
      required: true

    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errormessage: "Email is not valid",
      label: "Email",
      pattern: "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$",
      required: true
    },
    {
      id: 3,
      name: "fullname",
      type: "text",
      placeholder: "Full name",
      errormessage: "Full name is required",
      label: "Full Name",
      pattern: "^[a-zA-Z ]{3,30}$",
      required: true
    },
    {
      id: 4,
      name: "dateOfBirth",
      type: "date",
      placeholder: "Date of birth",
      label: "Date of birth",
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      errormessage: "Password should be 8-16 characters and should contain at least one uppercase, one lowercase, one number and one special character",
      label: "Password",
      pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,16})",
      required: true
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errormessage: "Password does not match",
      label: "Confirm Password",
      pattern: values.password,
      required: true
    },
  ]

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 justify-center items-center p-[2rem] px-[4rem] border-[1px]"
      >
        <h1 className="text-[2rem] font-extrabold">Register</h1>

        {inputs.map((input) => {
          return (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          )
        })}
        <button className="py-[1rem] mt-[0.375rem] w-full font-bold text-white bg-[var(--primary-color)] rounded-[0.25rem]">Submit</button>
      </form>
    </div>
  )
}

export default App
