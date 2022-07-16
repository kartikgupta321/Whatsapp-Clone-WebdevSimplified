import React,{useContext} from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const ConversationsContexts = React.createContext()

export function useConversations(){
  return useContext(ConversationsContexts)
} 

export function ConversationsProvider({children}) {
  const [conversations,setConversations] = useLocalStorage('conversations',[])

  function createConversation(recepients){
    setConversations(prevConversations =>{
      return [...prevConversations,{recepients,messages:[]}]
    })
  }
 
  return (
    <ConversationsContexts.Provider value={{conversations,createConversation}}>
      {children}
    </ConversationsContexts.Provider>
  )
}
