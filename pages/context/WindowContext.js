import { createContext, useState, useEffect } from 'react'

const WindowContext = createContext()

export const WindowProvider = (props) => {
  const [scrollY, setScrollY] = useState(0)

  const saveHeight = () => {
    console.log(window.scrollY)
    setScrollY(window.scrollY)
  }
  
  const throttled = (delay, fn) => {
    let lastCall = 0;
    return function (...args) {
      const now = (new Date).getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      return fn(...args);
    }
  }

  const scroll = throttled(100, saveHeight);

  useEffect(() => {

    window.addEventListener('scroll', scroll)

  }, []);

  return (
    <WindowContext.Provider value={{ scrollY }}>
      {props.children}
    </WindowContext.Provider>
  )
}

export default WindowContext