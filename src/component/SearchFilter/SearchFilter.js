import React from "react";
import IconComponent from "../IconComponent/IconComponent";
import {Icons} from "./searchicondata";//dummy api call


export default  function SearchFilter () {

    const [query, setQuery] = React.useState('')
    const [dropDown, setDropdown] = React.useState(false)
    const [selectItem, setSelectItem] = React.useState('PNG');
    // const icons = Object.values(jsonData.icon);


    function handleDropdown(){
        if(!dropDown){
        setDropdown(true)
        }else {
            setDropdown(false)
        }
    }

    function handleSelection(x){
        setSelectItem(x);
        setDropdown(false)
    }

    return(
            <div className="center">


            <div className='filterBody'>
                <div className="selectFormat" >

                    <div className="format" onClick={handleDropdown}>{selectItem}
                        <span className='dropdown' >
                            <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1684572720/alx/Down_arrow_x9x9ni.svg" alt=""/>
                        </span>
                    </div>

                    {dropDown &&  <div className="formatDropdown">
                        <ul>
                            <li onClick={() => handleSelection('PNG')}>PNG</li>
                            <li className='line' onClick={() => handleSelection('JPEG')}>JPEG</li>
                            <li className='line' onClick={() => handleSelection('AI')}>AI</li>
                            <li className='line' onClick={() => handleSelection('SVG')}>SVG</li>
                        </ul>
                    </div>}

                </div>

                <div className="searchInput">
                    <input type="text"
                      placeholder='Search you Icons.....'
                      onChange={(event) => setQuery(event.target.value)}
                    />
                    {/*<ul className="searchlist">*/}
                    {/*    {Icons.filter((icon) => icon.name.toLowerCase().includes(query)*/}
                    {/*    ).map((icon) => (*/}
                    {/*        <li key={icon.id}>{icon.name}</li>*/}
                    {/*    ))}*/}
                    {/*</ul>*/}

                </div>


                {/*<p>{searchicondata.icon[0].format}</p>*/}
            </div>

                <table>
                    <tbody>
                    {Icons.filter(icon => icon.searchFilter.some(filter => filter.toLowerCase().includes(query.toLowerCase()))
                        && icon.format.toLowerCase() === selectItem.toLowerCase()
                    ).map((icon) => ( <td key={icon.id}>
                            <IconComponent
                                img={icon.link}
                                name={icon.name}
                            />
                    </td>
                    ))}
                    </tbody>
                </table>
            </div>
    )}

