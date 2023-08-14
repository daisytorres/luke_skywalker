import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Starships(props) {
    const [data, setData] = useState()
    const { id } = useParams()
    const [err, setErr] = useState(false) //to be used when we get a 404/error


    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${id}`)
            .then(resp => {
                console.log(resp)
                setData(resp.data)
            })
            // .catch(err => console.log(err))
            //.catch(err => setData ())
            .catch(err => setErr(true))
    }, [id])


    return (
        <div>
            <h1>Starships</h1>
            <p>{JSON.stringify(data)}</p>
            <p>****************************************************************************************************************</p>
            <div>
                {
                    data ?
                        <div>
                            <p>Manufacturer: {data.manufacturer}</p>
                            <p>Passengers: {data.passengers}</p>
                            <p>Consumables: {data.consumables}</p>
                            <p> Starship Class: {data.starship_class}</p>
                        </div> :
                        <p>Loading..</p>
                }

                {err ?
                    <div>
                    <p>Error: These aren't the droids you're looking for</p>
                    <img style={{ height: 200, width: 250 }} src="https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_3286c63c.jpeg?region=0%2C0%2C853%2C853" alt="man"></img>
                </div>
                : <p></p>
                }
            </div>

        </div>
    )
}
