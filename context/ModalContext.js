import { createContext, useState, useEffect } from 'react'


const ModalContext = createContext()

export const ModalProvider = (props) => {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    if(open) {
      setHidden(false)
      return
    }
    setTimeout(() => {
      setHidden(true)
    }, 250);
  }, [open])

  return (
    <ModalContext.Provider value={{open, setOpen, hidden, setHidden}}>
      {props.children}
    </ModalContext.Provider>
  )
}

export default ModalContext