import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'
const Editor = (props) => {
    const [open, setOpen] = useState(true)
    const { language, displayName, onChange, value } = props
    function handleChange(editor, data, value) {
        onChange(value)
    }
    return (
        <div className={`editor-container ${open ? '' : 'collpased'}`}>
            <div className='editor-title'>
                {displayName}
                <button onClick={() => setOpen(prevState => !prevState)}>O/C</button>
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                className='code-mirror-wrapper'
                value={value}
                theme
                options={
                    {
                        lineWrapping: true,
                        lint: true,
                        mode: language,
                        theme: 'material',
                        lineNumbers: true
                    }
                }
            />
        </div>
    )
}

export default Editor
