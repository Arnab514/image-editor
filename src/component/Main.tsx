import React from 'react'
import "./style/main.scss"

function Main() {

    const filterElement = [
        {
            name: "Brightness"
        },
        {
            name: "Grayscale"
        },
        {
            name: "Sepia"
        },
        {
            name: "Saturation"
        },
        {
            name: "Contrast"
        },
        {
            name: "Rotate"
        },
    ]

  return (
    <div className='image_editor'>
      <div className="card">
        <div className="card_header">
            <h2>--- Image Editor ---</h2>
        </div>
        <div className="card_body">
            <div className="sidebar">
                <div className="side_body">
                    <div className="filter_section">
                        <span>Filters</span>
                        <div className="filter_key">
                            {filterElement.map((elem , i) => 
                                <button key={i}>{elem.name}</button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main
