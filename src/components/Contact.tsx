'use client'

import { useContext, useState } from "react"
import emailjs from '@emailjs/browser'
import { ModalContext } from "@/contexts/ModalContext"
import { useRouter } from "next/navigation"

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [content, setContent] = useState('')

  const { turn } = useContext(ModalContext)
  const router = useRouter()

  function sendEmail(e: { preventDefault: () => void }) {
    e.preventDefault()

    if (name === '' || email === '' || content === '') {
      alert("Preencha todos os campos")
      return;
    }

    const templateParams = {
      from_name: name,
      message: content,
      email: email
    }

    // turn()
    // router.push('#modal-sucess')

    emailjs.send('service_1wl6ij4', 'template_hxsv93o', templateParams, '-s-najHsddLOzTlC3')
    .then((response) => {
      console.log(response.status, response.text)
      turn()
      router.push('#modal-sucess')
      setName('')
      setEmail('')
      setContent('')
    }, (err) => {
      console.error(err)
    })
  }



   return (
      <form onSubmit={sendEmail} className="w-full flex flex-col justify-center items-center gap-4">
      <div className="flex w-full flex-col justify-center items-start gap-4">
        <label htmlFor="name" className="font-bold text-pink-50 text-3xl">
          Nome Completo
        </label>
        <input
          className="focus:border-purple-200 focus:outline-none focus:ring-0 w-full px-4 py-2 rounded-t-lg border-b-2 border-pink-50 placeholder: bg-transparent text-pink-50 font-bold text-sm bg-clip"
          type="text"
          name="name"
          id="name"
          placeholder="Seu Nome Completo"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
    
      <div className="flex w-full flex-col justify-center items-start gap-4">
        <label htmlFor="email" className="font-bold text-pink-50 text-3xl">
          Email
        </label>
        <input
          className="focus:border-pink-50 focus:outline-none focus:ring-0 w-full px-4 py-2 rounded-t-lg border-b-2 border-pink-50  placeholder: bg-transparent text-pink-50 font-bold text-sm bg-clip"
          type="email"
          name="email"
          id="email"
          placeholder="Seu Email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
    
      <div className="flex w-full flex-col justify-center items-start gap-4">
        <label htmlFor="content" className="font-bold text-pink-50 text-3xl">
          Me conte brevemente sua ideia
        </label>
        <textarea
          className="focus:border-pink-50 focus:outline-none focus:ring-0 w-full px-4 py-2 rounded-b-lg border-b-2 border-pink-50 placeholder: bg-transparent text-pink-50 font-bold text-sm bg-clip"
          name="content"
          id="content"
          placeholder="Sua ideia..."
          rows={10}
          required
          onChange={(e) => setContent(e.target.value)}
          value={content}
        ></textarea>
      </div>
    
      <button
        className="uppercase flex justify-center items-center self-stretch px-8 py-2 rounded-lg bg-pink-50 text-purple-600 font-semibold text-sm hover:bg-purple-300"
        type="submit"
      >
        Entrar em contato
      </button>
    </form>

   )
}