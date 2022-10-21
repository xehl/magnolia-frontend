import axios from "axios"
import { useRef } from "react"
import { useNavigate as navigate } from "react-router-dom";

export default function NewEntryForm() {

  // store form info in plain JS object (no need for state change until submit)
  let form = useRef({
    author_fname: null,
    author_lastname: null,
    text: null,
    // location: null,
  })

  function submitForm(e) {
    e.preventDefault();
    const newEntry = { ...form.current };
    console.log(newEntry)
    axios.post("http://localhost:4999/entries/", newEntry)
      .then(
        (res) => {
          console.log(res)
          navigate("/")
        }
      )
      .catch(err => console.error(err))
  }

  return (
    <>
      <div>
      <h3>Create New Record</h3>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="firstname">first name</label>
          <input
            type="text"
            id="firstname"
            onChange={(e) => {
              form.current.author_fname = e.target.value
            }}
          />
        </div>
        <div>
          <label htmlFor="lastname">last name</label>
          <input
            type="text"
            id="lastname"
            onChange={(e) => {
              form.current.author_lastname = e.target.value
            }}
          />
        </div>
        <div>
          <textarea
            id="text"
            onChange={(e) => {
              form.current.text = e.target.value
            }}
          />
        </div>
        {/* <div>
          <label htmlFor="location">location</label>
          <input
            type="text"
            id="location"
            onChange={(e) => {
              form.location = e.target.value
              console.log("location changed" + form.location)
            }}
          />
        </div> */}
        <button onClick={submitForm}>submit</button>
      </form>
    </div>
    </>
  )
}