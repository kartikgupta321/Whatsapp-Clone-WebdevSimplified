import React, { useState } from 'react'
import { Tab,Nav, Button, Modal } from 'react-bootstrap'
import Contacts from './Contacts'
import Conversations from './Conversations'
import NewConversationModal from './NewConversationModal'
import NewContactModal from './NewContactModal'

const  CONTACTS_KEY = 'contacts'
const  CONVERSATIONS_KEY = 'conversations'

export default function Sidebar({id}) {
    const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)
    const conversationsOpen = activeKey === CONVERSATIONS_KEY
    
    const [modalOpen, setModalOpen] = useState(false)
    function closeModal(){
        setModalOpen(false)
    }
  return (
    <div className='d-flex flex-column' style={{width:'300px'}} >
        <Tab.Container activeKey={activeKey} onSelect={setActiveKey}   >
            <Nav variant='tabs' style={{cursor:'pointer'}}>
                <Nav.Item>
                    <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey={CONTACTS_KEY} >Contacts</Nav.Link>
                </Nav.Item>
            </Nav>
            <Tab.Content className=" border-end  overflow-auto flex-grow-1"  >
                <Tab.Pane eventKey={CONVERSATIONS_KEY} >
                    <Conversations/>
                </Tab.Pane>
                <Tab.Pane eventKey={CONTACTS_KEY} >
                    <Contacts/>
                </Tab.Pane>
            </Tab.Content>
            <div className='p-2 border-top border-end small'>
                Your Id : <span>{id}</span>
            </div>
            <Button onClick={()=>setModalOpen(true)} className='rounded-0' >
                New {conversationsOpen ? 'conversation' : 'contact'}
            </Button>
        </Tab.Container>
        <Modal show={modalOpen} onHide={closeModal} > 
            {conversationsOpen ? 
            <NewConversationModal closeModal = {closeModal}/> :
            <NewContactModal closeModal = {closeModal}/>
            }
        </Modal>
    </div>
  )
}