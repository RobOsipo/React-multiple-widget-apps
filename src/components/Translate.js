import React from 'react';
import Dropdown from './Dropdown.js'


const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
]

const Translate = () => {

const [language, setLanguage] = React.useState(options[0])
const [text, setText] = React.useState('')

    return (
        <div>
         <div className="ui form">
            <div className="field">
            <label>Enter Text</label>
                 <input value={text} onChange={(e) => setText(e.target.value) } />
            </div>
         </div>
            <Dropdown label="Select a Language" selected={language} onSelectedChange={setLanguage} options={options} />
        </div>
    )
}


export default Translate;