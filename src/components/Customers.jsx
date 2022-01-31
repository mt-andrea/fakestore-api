import React, {useState, useEffect} from "react";

function Customers() {

const [customers, setCustomers] = useState([]);
useEffect(() => {
    fetch("https://fakestoreapi.com/users")
    .then((res)=>res.json())
    .then((json)=>setCustomers(json))
}, []);

    return(
        <div>
            <h1>Customers</h1>
            <ul>
                {customers.map((c)=>(
                    <li key={c.id}>
                        {c.name.firstname+" "+c.name.lastname}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Customers