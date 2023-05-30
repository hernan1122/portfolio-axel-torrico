import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import '../styles/Form.css'

export function Form() {
  const [alert, setAlert] = useState(false)
  const form = useRef();
  const { register, formState: { errors }, handleSubmit, reset } = useForm()

  const sendEmail = () => {
    emailjs.sendForm('service_hi4mvqe', 'template_n1bh8so', form.current, 'pvT5sYNTsZVPOqsxD')
      .then((result) => {
        console.log(result.text);
        reset()
        setAlert(true)
        showAlert()
      }, (error) => {
        console.log(error.text);
      });
  }

  const onSubmit = () => {
    if (Object.keys(errors).length === 0) {
      sendEmail();
    }
  };

  const MySwal = withReactContent(Swal)

  const showAlert = () => {
    MySwal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your message was sent',
      showConfirmButton: false,
      timer: 1500,
      customClass: {
        title: 'my-swal-title',
      }
    });
  };

  return (
    <>
      <form className='Form' ref={form} onSubmit={handleSubmit(onSubmit)}>
        <div className='Form-content'>
          <label className={`${errors.user_name?.type === 'required' ? 'error-label' : ''}`}>
            Name <span className='required'>*</span>
          </label>
          <input
            className={`input ${errors.user_name?.type === 'required' ? 'error-input' : ''}`}
            type="text"
            name="user_name"
            {...register('user_name', { required: true })}
          />
          {errors.user_name?.type === 'required' && <p>Write your name</p>}
        </div>
        <div className='Form-content'>
          <label className={`${errors.user_email?.type === 'required' ? 'error-label' : ''}`}>
            Email <span className='required'>*</span>
          </label>
          <input
            className={`input ${errors.user_email?.type === 'required' ? 'error-input' : ''}`}
            type="email"
            name="user_email"
            {...register('user_email', { required: true })}
          />
          {errors.user_email?.type === 'required' && <p>Write your email</p>}
        </div>
        <div className='Form-content'>
          <label className={`${errors.message?.type === 'required' ? 'error-label' : ''}`}>
            Message <span className='required'>*</span>
          </label>
          <textarea
            className={`input-text ${errors.message?.type === 'required' ? 'error-input' : ''}`}
            name="message"
            {...register('message', { required: true })}
          />
          {errors.message?.type === 'required' && <p>You must write a message</p>}
        </div>
        <input className='Form-button' type="submit" value="Send" />
      </form>
      {alert && showAlert}
    </>
  );
}