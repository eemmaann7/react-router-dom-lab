import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMailboxById } from "../services/mailboxService";


const MailboxDetails = () => {
  const { mailboxId } = useParams()

  const [mailbox, setMailbox] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchMailbox = async () => {
      try {
        const data = await getMailboxById(mailboxId)
        setMailbox(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchMailbox()
  }, [mailboxId])

  if (loading) return <h2>Loading...</h2>

  if (error) return <h2>{error}</h2>

  return (
    <main>
      <h1>Mailbox Details</h1>

      <h2>Box Number: {mailbox._id}</h2>
      <h2>Owner: {mailbox.boxOwner}</h2>
      <h2>
        Size:{' '}
        {mailbox.boxSize === 1
        ? 'Small'
        : mailbox.boxSize === 2
        ? 'Medium'
        : 'Large'}
        </h2>
        </main>
)
}

export default MailboxDetails