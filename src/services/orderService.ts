import axios from 'axios'

const BASE = '/api/orders'

export const getAllOrders = () => axios.get(BASE)
export const getOrderById = (id: string) => axios.get(`${BASE}/${id}`)
export const createOrder = (data: any) => axios.post(BASE, data)
export const updateOrder = (id: string, data: any) => axios.put(`${BASE}/${id}`, data)
export const deleteOrder = (id: string) => axios.delete(`${BASE}/${id}`)
