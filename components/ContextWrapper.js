import HeaderContext from '../contexts/HeaderContext'
import { useState } from 'react'

function ContextWrapper({children, navigation}) {
    const [menuItems] = useState(navigation)
    const [color, toggleColor] = useState(true)

    return (
        <HeaderContext.Provider value={{menuItems, color, toggleColor}}>
            {children}
        </HeaderContext.Provider>
    )
}

export default ContextWrapper
