import React, { useState, useEffect } from 'react'
import { getAllSystems, getAllGames } from '../services/api-helper'


function Main() {
    const [systems, setSystems] = useState([])
    const [games, setGames] = useState([])

    useEffect(() => {
        const makeAPICall = async () => {
            const resp = await getAllSystems()
            console.log(resp)
            setSystems(resp)

        }
        makeAPICall()
    }, [])

    useEffect(() => {
        const makeAPICall = async () => {
            const resp = await getAllGames()
            console.log(resp)
            setGames(resp)
        }
        makeAPICall()
    }, [])

    const renderSystems = systems.map((system, index) => {
        return (
            <div className="smallcontainer" key={index}><h4>{system.name} </h4>
                <h5>{system.company}</h5>
                <p>{system.price}</p></div>
        )
    })

    const renderGames = games.map((game, index) => {
        return (
            <div className='smallcontainer' key={index}>
                <h4>{game.title}</h4>
                <h5>{game.price}</h5>
                <h6>{game.year}</h6>
                <h6>{game.system}</h6>
            </div>
        )
    })


    return (
        <>
            <h2>Main area for api calls</h2>
            <h3>Game Systems!</h3>
            <div className='container'>
                {renderSystems}
            </div>
            <br /><br />
            <div className='container'>
                {renderGames}
            </div>
        </>
    )
}

export default Main