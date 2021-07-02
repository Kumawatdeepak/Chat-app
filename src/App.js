import {ChatEngine} from 'react-chat-engine';
import './App.css';
import { ChatFeed } from './comonents/ChatFeed';
import { LoginForm } from './comonents/LoginForm'
 
const App = () =>{

    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine
            height="100vh"
            projectID="3e863971-ca68-4be8-8c07-bcbb26200fd0"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=> <ChatFeed  {...chatAppProps }/>}
        />
    )
}

export default App;