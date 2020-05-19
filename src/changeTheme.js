import React, { useEffect, useState} from 'react'



const ThemeItem = ({ theme, active, onClick}) => {
    return (
        <span onClick={onClick} style={{cursor: 'pointer', paddingLeft: 8, fontWeight: active ? 'bold' : 'normal'} }>
            <span style={{ color: theme.primaryColor}}>Primary</span> / <span style={{ color: theme.secondaryColor}}>Secondary</span> 
        </span>
    )
}


const ChangeTheme = ({theme, setTheme}) => {
    
    const [themes, setThemes] = useState([])
    
    useEffect(() => {
        fetch('api/themes')
        .then(result => result.json())
        .then(themes => setThemes(themes))
    }, [])
    
    const isActive = (t) => {
        return t.primaryColor === theme.primaryColor && t.secondaryColor === theme.secondaryColor
    }

    const themeItems = themes.map((t, i) => <ThemeItem key={'theme-item-' + i} active={isActive(t)} onClick={() => setTheme(t)} theme={t} />)
    return (
        <div>{themeItems}</div>
        
    )    
}

export default ChangeTheme