
import { Product } from './product'
export interface OrderItem {
    product: Product
    quantity: number
}
export interface Order {
    id: string
    items: OrderItem[]
    totalAmount: number
    status: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled'
    createdAt: string
    updatedAt?: string
}
