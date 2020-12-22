import React, { useState } from 'react'
import Rate from './Rate'
import { Button} from 'reactstrap';

const Filter = ({inputSearch, setInputSearch, inputSearchRate, setInputSearchRate}) => {

    const resetSearch = () => {
        setInputSearchRate(0);
        setInputSearch('');
    }

    return (
        <div className="search-input">
            <label style={{padding:"0 15px"}} id="search-label">Search </label>
            <input  className="form-control form-control-lg" type="text" placeholder="Movie name" onChange={(e)=>setInputSearch(e.target.value)} value={inputSearch}/>
            <Rate rate={inputSearchRate} setInputSearchRate={setInputSearchRate}/>
            <Button color="info" onClick={()=>resetSearch()}>Reset</Button>
        </div>
    )
}

export default Filter
