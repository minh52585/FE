// services/productService.ts
import axios from 'axios'

const BASE = '/api/products'

export const getAllProducts = () => axios.get(BASE)
export const getProductById = (id: string) => axios.get(`${BASE}/${id}`)
export const createProduct = (data: any) => axios.post(BASE, data)
export const updateProduct = (id: string, data: any) => axios.put(`${BASE}/${id}`, data)
export const deleteProduct = (id: string) => axios.delete(`${BASE}/${id}`)
