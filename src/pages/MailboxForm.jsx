import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createMailbox } from "../services/mailboxService";


const MailboxForm = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    boxOwner: '',
    boxSize: '1',
  })

  const [error, setError] = useState('')

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

 const handleSubmit = async (event) => {
  event.preventDefault()

  try {
    const newMailbox = await createMailbox(formData)

    navigate(`/mailboxes/${newMailbox._id}`)
  } catch (err) {
    console.log(err)

    setError(err.message)
  }
}
  

  return (
    <main>
      <h1>New Mailbox</h1>

      {error && <h2>{error}</h2>}

      <form onSubmit={handleSubmit}>
        <label>Owner Name</label>

        <input
          type="text"
          name="boxOwner"
          value={formData.boxOwner}
          onChange={handleChange}
          required
        />

        <label>Box Size</label>

        <select
          name="boxSize"
          value={formData.boxSize}
          onChange={handleChange}
        >
          <option value="1">Small</option>
          <option value="2">Medium</option>
          <option value="3">Large</option>
        </select>

        <button type="submit">Create Mailbox</button>
      </form>
    </main>
    
  )
}

export default MailboxForm