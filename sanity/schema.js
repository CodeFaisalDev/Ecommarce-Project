import product from "./schemas/product"
import cart from "./schemas/cart"
import category from "./schemas/category"
import order from "./schemas/order"
import user from "./schemas/user"

export const schema = {
  types: [product, cart, category, order, user],
}
