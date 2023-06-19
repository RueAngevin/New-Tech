import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        add_product: resolve(__dirname, 'add-product.html'),
        admin_home: resolve(__dirname, 'admin-home.html'),
        admin_login: resolve(__dirname, 'admin-log-in.html'),
        adcanced_search: resolve(__dirname, 'advanced-search.html'),
        cart: resolve(__dirname, 'cart.html'),
        home: resolve(__dirname, 'home.html'),
        order: resolve(__dirname, 'order.html'),
        sign_up: resolve(__dirname, 'sign-up.html'),
        single_productView: resolve(__dirname, 'single-product-view.html'),
        wishlist: resolve(__dirname, 'wishlist.html'),
      },
    },
  },
})