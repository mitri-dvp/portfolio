import { useContext } from 'react'
import ClientOnlyPortal from './ClientOnlyPortal'
import LetsTalkModal from './LetsTalkModal'

import ModalContext from '../context/ModalContext'

export default function Modal() {
  const { open, setOpen, hidden, setHidden } = useContext(ModalContext)

  return (
    <ClientOnlyPortal selector="#modal">
      <LetsTalkModal
        open={open}
        setOpen={setOpen}
        hidden={hidden}
        />
    </ClientOnlyPortal>
  )
}