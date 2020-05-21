import React, { useEffect, useState} from 'react'
import { useResource } from 'react-request-hook'
 

const ThemeItem = ({ theme, active, onClick}) => {
    return (
        <span onClick={onClick} style={{cursor: 'pointer', paddingLeft: 8, fontWeight: active ? 'bold' : 'normal'} }>
            <span style={{ color: theme.primaryColor}}>Primary</span> / <span style={{ color: theme.secondaryColor}}>Secondary</span> 
        </span>
    )
}


const ChangeTheme = ({theme, setTheme}) => {
    
    const [themes, getThemes] = useResource(() => ({
        url: '/themes',
        method: 'get'
    }))

    const {data, isLoading} = themes
    
    useEffect(getThemes, [])
    
    const isActive = (t) => {
        return t.primaryColor === theme.primaryColor && t.secondaryColor === theme.secondaryColor
    }

    const themeItems = data && data.map((t, i) => <ThemeItem key={'theme-item-' + i} active={isActive(t)} onClick={() => setTheme(t)} theme={t} />)
    return (
        <div>
            {isLoading && 'Looding themes'}
            {themeItems}            
            </div>
        
    )    
}

export default ChangeTheme