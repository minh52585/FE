import axios from 'axios'

const BASE = '/api/users'

export const getAllUsers = () => axios.get(BASE)
export const getUserById = (id: string) => axios.get(`${BASE}/${id}`)
export const createUser = (data: any) => axios.post(BASE, data)
export const updateUser = (id: string, data: any) => axios.put(`${BASE}/${id}`, data)
export const deleteUser = (id: string) => axios.delete(`${BASE}/${id}`)
