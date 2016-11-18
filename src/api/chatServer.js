/**
 * Mocking client-server
 */
const _products = [
  {"id": 1, "title": "鸡蛋", "price": 1.01, "inventory": 10},
  {"id": 2, "title": "玉米", "price": 3.99, "inventory": 10},
  {"id": 3, "title": "花生", "price": 1.99, "inventory": 5}
]

const TIMEOUT = 100

export default {
  getProducts(cb, timeout) {
    return setTimeout(() => cb(_products), timeout || TIMEOUT)
  },
  buyProducts(payload, cb, timeout) {
    return setTimeout(() => cb(), timeout || TIMEOUT)
  }
}