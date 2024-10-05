import { useState } from "react";
import React, { useEffect } from "react";


function FetchData() {
    const [records,setRecords] = useState([])

    useEffect(() => {
        fetch('http://localhost:8081/grades/all')
        .then(
            response => 
                response.json())
        .then(data => setRecords(data))
        .catch(err => console.log(err))
    },[])

    return (
        <div>
            <ul>
                { records.map((list,index) => (
                    <li key={index}>{list.name}</li>
                ))}   
            </ul>
        </div>
    )
}

export default FetchData