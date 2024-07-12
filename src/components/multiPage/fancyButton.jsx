import React, {useState, memo, useEffect} from 'react';

function FancyButton({children, onClick, short}) {

    //random ids for the line divs (don't want these being the same 2 times)
    function returnRand() {
        let res = 1;
        for (let i = 0; i < 100; i++) {
            res = res * Math.random();
        };

        return String(res);
    };
    const [buttonIds] = useState([returnRand(), returnRand()]);
    const [divs, setDivs] = useState([]);

    useEffect(() => {

        //make list of divs which could be shown
        let tempDivs = [];
        buttonIds.forEach((id) => {
            tempDivs.push(document.getElementById(id));
        });
        setDivs(tempDivs);

    }, [buttonIds]);

    let showDivs = null;
    let hideDivs = null;

    function buttonHovered() {
        if (hideDivs) {
            clearTimeout(hideDivs);
        };

        divs[0].classList.add('shown');

        showDivs = setTimeout(() => {
            divs[1].classList.add('shown');
        }, 50);
    };

    function buttonUnhovered() {
        if (showDivs) {
            clearTimeout(showDivs);
        };

        divs[1].classList.remove('shown');
        hideDivs = setTimeout(() => {
            divs[0].classList.remove('shown');
        }, 50);
    };

    return(
        <React.Fragment>
            <button type="button" onClick={() => {onClick()}} onMouseEnter={buttonHovered} onMouseLeave={buttonUnhovered} className="fancyButton" style={short ? {marginTop: '10px', marginBottom: '20px'} : {}} >
                <div className="fancyButtonLine top" id={buttonIds[0]} style={short ? {marginTop: '10px', marginBottom: '10px'} : {}} ></div>
                {children}
                <div className="fancyButtonLine bottom" id={buttonIds[1]} style={short ? {marginTop: '10px', marginBottom: '10px'} : {}} ></div>
            </button>
        </React.Fragment>
    );
};

export default memo(FancyButton);