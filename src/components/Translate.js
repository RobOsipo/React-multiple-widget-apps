import React from 'react';
import Dropdown from './Dropdown.js'
import Convert from './Convert.js'


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
    },
    {
        label: 'Spanish',
        value: 'es'
    },
    {
        label: 'Russian',
        value: 'ru'
    },
    {
        label: 'Norwegian',
        value: 'no'
    },
    {
        label: 'Japanese',
        value: 'ja'
    },
    {
        label: 'Dutch',
        value: 'nl'
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
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert language={language} text={text} />
        </div>
    )
}


export default Translate;