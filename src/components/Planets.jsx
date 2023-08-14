import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Planets(props) {
    const [data, setData] = useState()
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(resp => {
                console.log(resp)
                setData(resp.data)
            })
            .catch(err => setData ())
    }, [id])


    return (
        <div>
            <h1>Planets</h1>
            <p>{JSON.stringify(data)}</p>
            <p>****************************************************************************************************************</p>
            <div>
                {
                    data ?
                        <div>
                            <p>Climate: {data.climate}</p>
                            <p>Terrain: {data.terrain}</p>
                            <p>Surface Water: {data.surface_water}</p>
                            <p>Population: {data.population}</p>
                            {/* <p>Image: {JSON.stringify(data.image)} (video around 28 minutes) </p> */}
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