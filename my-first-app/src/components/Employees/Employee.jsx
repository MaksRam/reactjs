import React from "react";
import './Employee.css'



const SingleEmployee = (props) => {

    return (
        <div className="col-lg-4">
        <div className="border bg-light p-4">
          <div className="col-lg-3">
            <img src="https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png"
              className="img-thumbnail" alt=""/>
          </div>
          <div className="col-lg-9 flex-parent">
            <div className="flex-child">
              <div className="name">{props.name}</div>
              <div className="occupation">{props.occupation}</div>
              <div className="tribe">{props.tribe}</div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default SingleEmployee;