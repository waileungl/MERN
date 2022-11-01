import React, { useState } from "react";

const Tabs = props => {
    const { tabs, setTabs } = props
    const [selected, setSelected] = useState(0)
    return(
        <>
            { tabs.map( (item, i) => 
            <button key={ i }
            onClick={ e => setSelected(i) }> 
                {item.label}
            </button>
            ) }
            <h3>{ tabs[selected].content }</h3>
        </>
    )
}


export default Tabs;