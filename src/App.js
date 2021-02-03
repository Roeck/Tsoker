import { ChatEngine } from 'react-chat-engine'

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
            height="100vh"
            projectID="5320b691-dc8c-490c-87e0-10e0446090f4"
            userName="RonB"
            userSecret="123"
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} />}
        />
    )
}

export default App;