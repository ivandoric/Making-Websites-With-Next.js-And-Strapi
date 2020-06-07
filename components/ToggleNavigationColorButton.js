import HeaderContext from '../contexts/HeaderContext'
import { useContext } from 'react'

function ToggleNavigationColorButton() {
    const {color, toggleColor} = useContext(HeaderContext)

    return(
        <button onClick={() => toggleColor(!color)}>
            Toggle Navigation Color
        </button>
    )
}

export default ToggleNavigationColorButton
