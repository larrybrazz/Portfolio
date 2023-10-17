import React from 'react'
import { useState } from 'react';
import { send } from 'emailjs-com';

const SendMessage = () => {
    const [messageData, setMessageData] = useState(
        {
           senderName:'',
           email:"",
           mobileNumber:"",
           message:""
        }
    );

    const handleChange =(e)=>{
        const {name, value, type, chceked} = e.target ;
        setMessageData((prevMessage)=>{
            return {
                ...prevMessage,
                [name]:value
            }
        })
    }

    const handleSubmit=(e)=>{
       e.preventDefault();
       send(
        'service_4qnl5sg',
        'template_hdx7fn5',
         messageData,
        'MXqeprMpFKfXs5DEK',
        'u1vk1r3gWcx7w2xpGJQFW'
       ).then((response)=>{
           console.log('success!', response.status, response.text)
           //    Clear form fileds after successful submission
            setMessageData(
        {
            senderName:'',
            email:"",
            mobileNumber:"",
            message:""
       })
       }).catch((err)=>{
        console.log('failed...', err)
       })
      
       console.log(messageData)
    }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="space-y-3 pb-14 text-black"
        action=""
      >
        <input
          className="w-full px-2  py-4 rounded-lg outline-none"
          type="text"
          placeholder="Your Name"
          name="senderName"
          value={messageData.senderName}
          onChange={handleChange}
        />
        <br />
        <input
          className="w-full px-2 py-4 rounded-lg outline-none"
          type="email"
          placeholder="Your Email"
          name="email"
          value={messageData.email}
          onChange={handleChange}
        />
        <br />
        <input
          className="text-black w-full px-2 py-4 rounded-lg outline-none"
          type="number"
          placeholder="Your Phone"
          name="mobileNumber"
          value={messageData.mobileNumber}
          onChange={handleChange}
        />
        <br />
        <textarea
          className="p-2 text-black w-full rounded-lg outline-none"
          placeholder=" Your message here"
          cols="30"
          rows="10"
          name="message"
          value={messageData.message}
          onChange={handleChange}
        ></textarea>
        <button className="rounded p-3 text-xl bg-red-500 hover:bg-transparent border">
          Send Message <i className="fa-regular fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
}

export default SendMessage
