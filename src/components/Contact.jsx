import React from 'react'
import '../styles/contact.css'

function Contact() {
  return (
    <div className="content" id="contact">
        <div class="main-contact">
                <div class="contact-content">
                    <li><a href="#">facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                </div>
                <div class="contact-content">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Featured</a></li>
                    <li><a href="#">New</a></li>
                    <li><a href="#">Contact</a></li>
                </div>
                <div class="contact-content">
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Register</a></li>
                    <li><a href="#">Instructor</a></li>
                    <li><a href="#">Dashboard</a></li>
                </div>
                <div class="contact-content">
                    <li><a href="#">San Francisco, <br /> California, CA 94154</a></li>
                    <li><a href="#">dreamslms@example.com</a></li>
                    <li><a href="#">061829855899</a></li>
                </div>
            </div>
    </div>
  )
}

export default Contact