
import React, {useState} from 'react'
import axios from 'axios'
const Index = () => {
const laptops = {
    title: "apple mac pro hhhhhhh",
    brand: "apple pro"

}


const createLaptop = async () => {
    try {
      const res = await axios.post('http://localhost:3000/api/laptops', laptops)
        
        // router.push("/");
        console.log(res);
    } catch (error) {
        console.log(error.response);
    }
}
    return (
        <div>
           <button onClick={createLaptop}>createLaptop</button>
        </div>
    )
}



export default Index
