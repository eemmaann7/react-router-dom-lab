const BASE_URL = import.meta.env.VITE_API_URL

export const getMailboxes = async () => {
  const res = await fetch(`${BASE_URL}/mailboxes`)

  if (!res.ok) {
    throw new Error('Failed to fetch mailboxes')
  }

  return res.json()
}

export const getMailboxById = async (mailboxId) => {
  const res = await fetch(`${BASE_URL}/mailboxes/${mailboxId}`)

  if (!res.ok) {
    throw new Error('Failed to fetch mailbox')
  }

  return res.json()
}

export const createMailbox = async (formData) => {
  const res = await fetch(`${BASE_URL}/mailboxes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })

  if (!res.ok) {
    throw new Error('Failed to create mailbox')
  }

  return res.json()
}