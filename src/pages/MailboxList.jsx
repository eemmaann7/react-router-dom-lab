import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getMailboxes } from "../services/mailboxService";


const MailboxList = () => {
  const [mailboxes, setMailboxes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchMailboxes = async () => {
      try {
        const data = await getMailboxes()
        setMailboxes(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchMailboxes()
  }, [])

  if (loading) return <h2>Loading...</h2>

  if (error) return <h2>{error}</h2>

  return (
    <main>
      <h1>Mailboxes</h1>

      {mailboxes.map((mailbox) => (
        <div key={mailbox._id} className="mail-box">
          <Link to={`/mailboxes/${mailbox._id}`}>
            Mailbox #{mailbox._id}
          </Link>
        </div>
      ))}
    </main>
  )
}

export default MailboxList