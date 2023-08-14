import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function People(props) {
    const [data, setData] = useState()
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(resp => {
                console.log(resp)
                setData(resp.data)
            })
            .catch(err => setData ())
    }, [id])


    return (
        <div>
            <h1>People</h1>
            <p>{JSON.stringify(data)}</p>
            <p>****************************************************************************************************************</p>
            <div>
                {
                    data ?
                        <div>
                            <p>Height: {data.height}</p>
                            <p>Mass: {data.mass}</p>
                            <p>Hair Color: {data.hair_color}</p>
                            <p> Skin Color: {data.skin_color}</p>
                        </div> :
                        // <p>Loading</p>
                        <div>
                        <p>Error: These aren't the droids you're looking for</p>
                        <img style ={{height: 200, width: 250}} src="https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_3286c63c.jpeg?region=0%2C0%2C853%2C853"  alt="man"></img>
                    </div>
        }
            </div>

        </div>
    )
}
