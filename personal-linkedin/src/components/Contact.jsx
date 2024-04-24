import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { Button, Input, Textarea, Typography } from "@material-tailwind/react";

const contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_89q6mop', 'template_5vmqwb5', form.current, {
        publicKey: '4lG60kOfGzhY0HQHB',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }
  return (
    <form ref={form} onSubmit={sendEmail}>
    <label>Name</label>
    <input type="text" name="user_name" />
    <label>Email</label>
    <input type="email" name="user_email" />
    <label>Message</label>
    <textarea name="message" />
    <input type="submit" value="Send" />
  </form>
  )
}



export function Contact() {
  return (
    
    <section className="px-8 py-8 lg:py-16 bg-white">
       <hr className='bg-black rounded-full mb-5'/>
      
      <div className="container mx-auto text-center">
        
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-4 !text-base lg:!text-2xl animate-bounce text-black"
        >
          Connect with me :)
        </Typography>
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 text-black !text-3xl lg:!text-5xl"
        >
          Feel free to reach me
        </Typography>
       
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 ">
          <img
            src="https://github.com/Abhiolics/LinkedIn/blob/main/abhi.jpg?raw=true"
            alt="Abhay Pratap Singh"
            className="w-96 ml-16 rounded-full p-9 h-full   items-center lg:max-h-[510px]"
          />
          <form
            action="#"
            className="flex flex-col gap-4 lg:max-w-sm"
          >
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900 bg-white"
                >
                  First Name
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="First Name"
                  name="first-name"
                  className="focus:border-t-gray-900 bg-gray-200"
                  containerProps={{
                    className: "min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  Last Name
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="Last Name"
                  name="last-name"
                  className="focus:border-t-gray-900 bg-gray-200"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900"
              >
                Your Email
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="name@email.com"
                name="email"
                className="focus:border-t-gray-900 bg-gray-200"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div>
              <Typography
                variant="small"
                className=" mb-2 text-left font-medium !text-gray-900"
              >
                Your Message
              </Typography>
              <Textarea
                rows={6}
                color="gray"
                placeholder=" Your Message"
                name="message"
                className=" text-center p-3 bg-gray-200 rounded-md focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <Button className="w-full btn" color="gray" >
              Send message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
