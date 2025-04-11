import '../css/ContactForm.css'
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mnnpowbv");
  if (state.succeeded) {
      return <p>Thanks for stopping by!</p>;
  }
  return (
    <form className='mt-12' onSubmit={handleSubmit}>
        <p className="mt-4 mb-4">Want to work together? Let's get in touch!</p>
        <input
            id="name"
            type="name" 
            name="name"
            placeholder='Your Name'
            className='mt-2 mb-2 w-full bg-zinc-700 rounded form-field'
        />
        <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
        />
        <input
            id="email"
            type="email" 
            name="email"
            placeholder='Email Address'
            className='mt-2 mb-2 w-full bg-zinc-700 rounded form-field'
        />
        <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
        />
        <textarea
            id="message"
            name="message"
            placeholder='Your Message'
            className='mt-2 mb-2 w-full bg-zinc-700 rounded form-field'
        />
        <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
        />
      <button type="submit" disabled={state.submitting}>Submit</button>
    </form>
  );
}

export default ContactForm;