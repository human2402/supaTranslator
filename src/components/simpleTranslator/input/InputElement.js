import React, {useState, useEffect} from 'react'

import { ReactComponent as TriangleIcon } from '../../icons/triangle.svg'

const InputElement = (props) => {

    const [formTopFont, setFormTopFont] = useState ([])
    const [dropButtonProps, setDropButtonProps] = useState ([])
    const [isDropDown, setDropDown] = useState (false)

    useEffect (() => {
        handleSize ()
    }, [])

    const handleSize = () => {
        const fieldWidth = document.querySelector('#root').clientWidth
        // calc form top font size 1
        const formTopHeight = document.querySelector('.formTopDiv').clientHeight
        const calcFormTopFontS = formTopHeight * 0.27
        setFormTopFont ([`${formTopHeight}px` ,calcFormTopFontS])
        // calc drop button props
        const dropButtonHeight = (formTopHeight/100) * 40
        const dropButtonWidth = fieldWidth * 0.31
        const dropButtonPadding = (formTopHeight/2) - (dropButtonHeight/2)
            // calc dropIcon
            const dropIconSize = (dropButtonHeight/5)*4
            const dropIconPad = (dropButtonHeight/2)-(dropIconSize/2)
            // calc drop menu
            const dropLiPadding = dropButtonHeight * 0.7
        setDropButtonProps ([dropButtonHeight+'px', dropButtonWidth+'px', dropButtonPadding, dropIconSize+'px', dropIconPad+'px', dropLiPadding+'px'])
        
    }

    // HANDLERS
    const handleDrop = () => {
        setDropDown (prevDropDown => !prevDropDown)
    }

    const handleSettingLang = (event) => {
        setDropDown (false)
        props.handleOrigLang (event)
    }

    //STYLE VARS
    let dropContentDisplay = 'none'
    if (isDropDown) {dropContentDisplay = 'block'}

    // STYLES
    const formStyle = {
        height: '29.43vh',
        width: '65.13%',
        position: 'relative',
        left: '9.09%',
    }
    const dropButtonStyle = {
        height: dropButtonProps[0],
        width: dropButtonProps[1],
        borderRadius: '15px',
        backgroundColor: '#fdfdfd',
        marginTop: dropButtonProps[2],
        display: 'flex',
        justifyContent: 'space-around',
        cursor: 'pointer'
    } 
    const dropContentStyle = {
        display: dropContentDisplay,
        position: 'absolute',
        backgroundColor: '#fdfdfd',
        borderRadius: '15px',
        border: '2px rgb(245, 144, 144) solid'

    }
    const dropLiStyle = {
        padding: dropButtonProps[5],
        borderRadius: '10px',
        cursor: 'pointer',
    }

    // ELEMENTS
    let selectedLang = 'Выбор'
    if (props.origLang === 'en') {selectedLang = 'Англ.'} else
    if (props.origLang === 'sp') {selectedLang = 'Испн.'} else
    if (props.origLang === 'ru') {selectedLang = 'Русс.'} else
    if (props.origLang === 'fr') {selectedLang = 'Фран.'}



    return (
        <form style = {formStyle}>
            <div className = 'formTopDiv' style = {{height: '29.72%', display: 'flex', justifyContent: 'space-between'}} >
                <p style = {{fontSize: formTopFont[1], lineHeight: formTopFont[0], fontWeight: 'medium'}}>C</p>
                <div style = {{position: 'relative'}} >
                    <div style = {dropButtonStyle} onClick = {handleDrop} className = 'dropButton'>
                        <p style = {{fontSize: formTopFont[1], lineHeight: dropButtonProps[0]}}>{selectedLang}</p>
                        <TriangleIcon style = {{transform: 'rotate(90deg)', height: dropButtonProps[3], width: dropButtonProps[3], marginTop: dropButtonProps[4]}} />
                    </div>
                    <div style = {dropContentStyle} className = 'dropMenu'>
                        <ul style = {{listStyle: 'none',}}>
                            {props.origLang !== 'en' && <li style = {dropLiStyle} className = 'dropETLi' onClick = {handleSettingLang} prop = 'en'>Английский</li>}
                            {props.origLang !== 'sp' && <li style = {dropLiStyle} className = 'dropETLi' onClick = {handleSettingLang} prop = 'sp'>Испанский</li>}
                            {props.origLang !== 'ru' && <li style = {dropLiStyle} className = 'dropETLi' onClick = {handleSettingLang} prop = 'ru'>Русский</li>}
                            {props.origLang !== 'fr' && <li style = {dropLiStyle} className = 'dropETLi' onClick = {handleSettingLang} prop = 'fr'>Французский</li>}
                        </ul>
                    </div>
                </div>

            </div>
        </form> 
    )
}

export default InputElement