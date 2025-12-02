import './Contact.css'
import Navbar from '../component/Navbar.jsx'

function Contact() {
  return (
    <div className='contact-info'>
      <Navbar />
      <h1 className='contact-heading'>Contact Us</h1>

      <div>
        <p>
          Whether you have question, feetback, or just want to say hello.
          We are here to help. 
        </p>

        <h3>Contact Methods</h3>
        <ul>
          <li>Email: routing@example.com</li>
          <li>Phone: +91 435646473476</li>
          <li>Address: 123 Example St, Your City</li>
        </ul>
      </div>   
    </div>
  )
}

export default Contact
