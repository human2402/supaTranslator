import React, { useState, useEffect } from 'react'

import InputElement from './input/InputElement'

function SimpleTranslator (props) {

    const [origLang, setOrigLang] = useState (null)

    const [logoProps, setLogoProps] = useState ([])
    const [navLinksFont, setNavLinksFont] = useState ()
    
    
    useEffect (() => {
        calcSize ()
    }, [])

    // CORONA MOD
    const coronaApi = (version) => {
        
    }

    // CALCULATION SIZE
    function calcSize () {
        // calc logo
        const logoHolderHeight = document.querySelector ('.logoHolder').clientHeight
        const logoFont = logoHolderHeight * 0.65
        const logoLineHeight = `${logoHolderHeight}px` 
        setLogoProps ([logoFont, logoLineHeight])
        // calc navLinks
        const calcNavLinksFont = logoHolderHeight * 0.45
        setNavLinksFont (calcNavLinksFont)
    }

    // HANDLERS
    const handleOrigLang = (value) => {
        setOrigLang (value.target.attributes[2].value)
    }

    // STYLES
    const topDivStyle = {
        height: '50vh',
        background: 'linear-gradient(138.38deg, #FFB1B1 3.73%, rgba(230, 87, 87, 0.89) 66.24%, rgba(255, 45, 45, 0.62) 102.78%)',
        borderRadius: '0 0 100px 0',
        boxShadow: '1px 1px 1px rgba (230, 87, 87, 0.80)'
    }
    const headerStyle = {
        height: '20.57vh',
        width: '90.93%',
        backgroundColor: '#FDFDFD',
        borderRadius: '0 0 100px 0'
    }
    const logoStyle = {
        fontSize: logoProps[0],
        lineHeight: logoProps[1],
        fontWeight: 'bold'
    }
    const navLinks = {
        fontWeight: 'regular',
        fontSize: navLinksFont,
        cursor: 'pointer'
    }
    


    return (
        // HEADER
        <div
            style = {{
                height: '90.38vh',
            }}
        >
            <div style = {topDivStyle}>
                <div style = {headerStyle}>
                    <div style = {{height: "50%"}}>
                            <div className = 'logoHolder' style = {{position: 'relative' ,top: '51.20%', left: '9.09%', backgroundColor: '#f59090', height: '49.40%', width: '74.19%', borderRadius: '10px', display: 'flex', justifyContent: 'space-around'}}>
                                <h1 style = {logoStyle}>School Translator</h1>
                            </div>
                    </div>
                    <div style = {{position: 'relative' ,top: '10%', left: '11.5%', height: '16%', width: '69.19%', display: 'flex', justifyContent: 'space-between'}}>
                        <h4 style = {navLinks}>Про Проект</h4>
                        <div style = {{height: '100%', width: '2px', backgroundColor: '#696969'}} />
                        <h4 style = {navLinks}>Контакт</h4>
                    </div>
                </div>
                <InputElement origLang = {origLang} handleOrigLang = {handleOrigLang} />
            </div>
        </div>
    )
}

export default SimpleTranslator;