import ordersData from "@/services/mockData/orders.json"

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

let orders = [...ordersData]

export const orderService = {
  async create(orderData) {
    await delay(500)
    
    const newId = Math.max(...orders.map(o => o.Id)) + 1
    const newOrder = {
      Id: newId,
      ...orderData,
      status: "confirmed",
      createdAt: new Date().toISOString(),
      estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
    }
    
    orders.push(newOrder)
    return { ...newOrder }
  },

  async getById(id) {
    await delay(200)
    const order = orders.find(o => o.Id === parseInt(id))
    if (!order) {
      throw new Error("Order not found")
    }
    return { ...order }
  },

  async getAll() {
    await delay(300)
    return orders.map(order => ({ ...order }))
  },

  async update(id, updateData) {
    await delay(300)
    const index = orders.findIndex(o => o.Id === parseInt(id))
    if (index === -1) {
      throw new Error("Order not found")
    }
    
    orders[index] = { ...orders[index], ...updateData }
    return { ...orders[index] }
  }
}