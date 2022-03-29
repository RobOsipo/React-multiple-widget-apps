import React from 'react';
// import Accordion from './components/Accordion.js'
// import Search from './components/Search.js'
import Dropdown from './components/Dropdown.js'
// ! Dummy Data //
const items = [
    {
        title: 'What is React?',
        content: 'A front-end JavaScript framework'
    },
    {
        title: 'How is the weather today',
        content: 'Dont ask, it sucks'
    },
    {
        title: 'Making Moscow Mules for assholes?',
        content: 'Welcome back to work'
    }
]

const options = [
    {
        label: 'The color red',
        value: 'red'
    },
    {
        label: 'The color green',
        value: 'green'
    },
    {
        label: 'The color blue',
        value: 'blue'
    }
]

const App = () => {
    return (
        <div>
       
            <Dropdown options={options}/>
        </div>
        
    )
}


export default App;