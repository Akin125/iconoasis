import React from "react";

export default  function SearchFilter (){
    const [dropDown, setDropdown] = React.useState(false)

    function handleDropdown(){
        if(!dropDown){
        setDropdown(true)
        }else {
            setDropdown(false)
        }
    }

    return(
        <div className='filterBody'>
            <div className="selectFormat" onClick={handleDropdown}>
                <div className="format">PNG
                    <span className='dropdown' >
                        <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1684572720/alx/Down_arrow_x9x9ni.svg" alt=""/>
                    </span>
                </div>

                {dropDown &&  <div className="formatDropdown">
                    <ul>
                        <li>PNG</li>
                        <li className='line'>JPEG</li>
                        <li className='line'>AI</li>
                        <li className='line'>SVG</li>
                    </ul>
                </div>}
                
            </div>
            
            <div className="searchInput">
                <input type="text" placeholder='Search you Icons.....'/>
            </div>

        </div>
    )
}