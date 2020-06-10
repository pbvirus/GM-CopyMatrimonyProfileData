// ==UserScript==
// @name        Copy Matrimony Profile Details
// @namespace   https://github.com/pbvirus
// @description User script to copy details from Bharat Matrimony profiles
// @author      Prince Biswaranjan
// @homepage    https://github.com/pbvirus/GM-CopyMatrimonyProfileData
// @version     1.0.1
// @grant       none
// @include     https://matches.oriyamatrimony.com/*
// @run-at      document-end
// ==/UserScript==

"use strict";

function addButton(text, onclick, cssObj) {
    cssObj = cssObj || {position: 'absolute', top: '7%', left:'4%', 'z-index': 3};
    let button = document.createElement('button'), btnStyle = button.style;
    document.body.appendChild(button);
    
    button.innerHTML = text;
    button.onclick = onclick;
    btnStyle.position = 'absolute';
    
    Object.keys(cssObj).forEach(key => {
        btnStyle[key] = cssObj[key];
    });
    
    return button;
}

window.addEventListener('load', () => {
    let cssProp = {
        position: 'fixed', 
        top: '1%', 
        right:'1%', 
        'z-index': 100,
        'background-color': 'red'
    };
    addButton('Copy Profile Details', copyProfileDetails, cssProp);
});

const selectors = {
    MatrimonyIdSelector: "#VP_LAB_Martiid",
    NameSelector: "#VP_LAB_Name",
    AgeAndHeightSelector: "#VP_PI_LAB_Age"
  };
  
function copyProfileDetails(){
    try{
        let matrimonyId = document.querySelector(selectors.MatrimonyIdSelector).innerText;
        let name = document.querySelector(selectors.NameSelector).innerText;
        let ageAndHeight = document.querySelector(selectors.AgeAndHeightSelector).innerText.split(",");

        let age = ageAndHeight[0];
        let height = ageAndHeight[1];
        
        let textToCopy = `${matrimonyId}	${name}	${age}		https://matches.oriyamatrimony.com/preview/${matrimonyId}	${height}`;

        navigator.clipboard.writeText(textToCopy);

    }catch(e){
        console.log(e);
        throw e;
    }
}
