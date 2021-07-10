import React, { useState, useEffect } from 'react';
import {  Collapse } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function CollapsibleText(props) {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 600);
  const [open, setOpen] = useState(false);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 600);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <>
      <Collapse in={open}>
        {props.children}
      </Collapse>
      {!isDesktop ?
        !open ?
        <div className="collapse-button-container" onClick={() => setOpen(!open)}>
          <FontAwesomeIcon style={{ color: "white" }} icon={faChevronDown}  />
        </div> : 
        <div className="collapse-button-container" onClick={() => setOpen(!open)}>
          <FontAwesomeIcon style={{ color: "white" }} icon={faChevronUp} onClick={() => setOpen(!open)} />
        </div> :
        props.children
      }
    </>
    
  );
}

export default CollapsibleText;