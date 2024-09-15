import React from 'react'
import "./style/main.scss"
import { GrRotateLeft, GrRotateRight } from "react-icons/gr";
import { CgMergeHorizontal, CgMergeVertical } from "react-icons/cg";
import { IoMdUndo, IoMdRedo } from "react-icons/io";

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
    <div className="image_editor">
      <div className="card">
        <div className="card_header">
            <h2>Image Editor</h2>
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
                    <div className="filter_slider">
                        <div className="label_bar">
                            <label htmlFor="range">Rotate</label>
                            <span>100%</span>
                        </div>
                        <input type="range" />
                    </div>
                    <div className="rotate">
                        <label htmlFor="">Rotate and Flip</label>
                        <div className="icon">
                            <div> <GrRotateLeft/> </div>
                            <div> <GrRotateRight/> </div>
                            <div> <CgMergeVertical/> </div>
                            <div> <CgMergeHorizontal/> </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="image_section">
                <div className="image"></div>
                <div className="image_select">
                    <button> <IoMdUndo/> </button>
                    <button> <IoMdRedo/> </button>
                    <button> Crop Image </button>
                    <label htmlFor="choose">Choose Image</label>
                    <input type="file" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main
