import React, { useState } from 'react';
import img from '../../assets/Contact/460.png'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted!");
  }

  return (
    <div className='md:flex md:gap-10 container mx-auto space-y-10 items-center my-10 justify-around'>
      <div className='flex-1'>
        <div className='mb-5'>
          <p className="text-gray-500">Contact form</p>
          <p className="text-2xl font-bold">Drop Us a Line</p>
          <p className="text-gray-400 text-sm">Your email address will not be published. Required fields are marked *</p>
        </div>

        <form onSubmit={handleSubmit} className="gap-5 grid grid-cols-1 md:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 outline-none p-2 w-full rounded"
          />
          
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 outline-none p-2 w-full rounded"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 outline-none p-2 w-full rounded"
          />

          <textarea
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="border border-gray-300 outline-none p-2 w-full rounded"
          />
          
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 outline-none p-5 w-full rounded md:col-span-2"
          />

          <button 
            type="submit" 
            className="bg-black text-white px-4 py-2 rounded hover:bg-black/50"
          >
            Send your message
          </button>
        </form>
      </div>

      <div>
        <img src={img} alt="Contact" />
      </div>
    </div>
  );
};

export default ContactForm;
