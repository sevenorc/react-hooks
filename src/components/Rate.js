import React from 'react'

const Rate = ({rate, setInputSearchRate}) => {

    const starsFunction = (x) => {
        let starsArray = [];
        for (let i = 1; i <= 5; i++) {
            if (i<=x) {
                starsArray.push(<span onClick={()=>setInputSearchRate(i)}>★</span>)
            }
            else {
                starsArray.push(<span onClick={()=>setInputSearchRate(i)}>☆</span>)
            }
        };
        return starsArray;
    }
    return (
        <div className="stars">
            {starsFunction(rate)}
        </div>
    )
}

Rate.defaultProps={
    setInputSearchRate : ()=> {},

}

export default Rate
