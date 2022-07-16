import React,{useContext} from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const ContactsContexts = React.createContext()

export function useContacts(){
  return useContext(ContactsContexts)
}

export function ContactsProvider({children}) {
  const [contacts,setContacts] = useLocalStorage('contacts',[])

  function createContacts(id,name){
    setContacts(prevContacts =>{
      return [...prevContacts,{id,name}]
    })
  }
 
  return (
    <ContactsContexts.Provider value={{contacts,createContacts}}>
      {children}
    </ContactsContexts.Provider>
  )
}
