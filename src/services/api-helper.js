import axios from 'axios'

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/'
})

export const getAllSystems = async () => {
    const resp = await api.get('/api/systemlist/')
    return resp.data
}

export const getAllGames = async () => {
    const resp = await api.get('/api/gamelist/')
    return resp.data
}

