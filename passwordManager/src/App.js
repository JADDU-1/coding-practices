import {Component} from 'react'
import {v4} from 'uuid'
import {RiLockPasswordFill} from 'react-icons/ri'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {BsGlobe} from 'react-icons/bs'
import PasswordManager from './Components/passwordManager'
import './App.css'

class App extends Component {
  render() {
    return <PasswordManager />
  }
}

export default App
