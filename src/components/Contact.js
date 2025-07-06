import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import './Contact.css'

export default function Contact() {
  const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID")
  if (state.succeeded) return <p>Thank you! I’ll be in touch soon.</p>

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label>Your Email</label>
        <input type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors}/>
        <label>Message</label>
        <textarea name="message" required/>
        <ValidationError prefix="Message" field="message" errors={state.errors}/>
        <button type="submit" disabled={state.submitting}>Send</button>
      </form>
    </section>
  )
}
