import React, {useState, memo, useEffect} from 'react';

function FancyButton({children, onClick}) {

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

    return(
        <React.Fragment>
            <button type="button" onClick={() => {onClick()}} onMouseEnter={buttonHovered} onMouseLeave={buttonUnhovered} className="fancyButton">
                <div className="fancyButtonLine top" id={buttonIds[0]}></div>
                {children}
                <div className="fancyButtonLine bottom" id={buttonIds[1]}></div>
            </button>
        </React.Fragment>
    );

    function buttonHovered() {
        divs[0].classList.add('shown');
        setTimeout(() => {
            divs[1].classList.add('shown');
        }, 50);
    };

    function buttonUnhovered() {
        divs[1].classList.remove('shown');
        setTimeout(() => {
            divs[0].classList.remove('shown');
        }, 50);
    };
};

export default memo(FancyButton);