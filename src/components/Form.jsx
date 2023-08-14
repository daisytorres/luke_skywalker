import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form() {
    const [formData, setFormData] = useState({
        type: 'person',
        idNum: 1
    })

    const changeHandler = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const navigate = useNavigate ()

    const submitHandler = (e) => {
        e.preventDefault()
        // console.log(formData) used to test on console to make sure the search button is working and grabbing correct info. Then you want to import Navigate and create a variable for it (const) to use below

        //navigate(`/people/${formData.idNum}`) right now like this, selecting the search button will just update the navbar (url) to whatever value you put in. To update the page, back on the people page, add your second parameter to your axios to indicate on ID change -> do this. HOWEVER, this is hardcoded to "people" so even in the drop down selects planets, it will still show the id for people. Here's the not hard coded version: 

        navigate(`/${formData.type}/${formData.idNum}`)
    }

    return (
        <form className='flex gap-3 justify-center' onSubmit={submitHandler}>
            <div>
                <label htmlFor="type">Search For: </label>
                <select className='input' name ="type" onChange={changeHandler}>
                    <option value ="people">People</option>
                    <option value ="planets">Planets</option>
                    <option value ="starships">Starships</option>
                </select>
            </div>
            <div>
                <label htmlFor="idNum"> ID: </label>
                <input type = "number" name="idNum" id="idNum" value={formData.idNum} onChange={changeHandler} />
            </div>
            <button>Search </button>
        </form>
    )
}

