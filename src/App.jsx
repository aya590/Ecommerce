
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './component/Layout/Layout'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import toast, { Toaster } from 'react-hot-toast'
import GustRout from "./component/GustRout/GustRout"
import ProtectRout from './component/protectedRout/protectedRout'
import UserProvider from './context/User.context'
import CartProvider from "./context/cart.context"
import Cart from './pages/cart/cart'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import CheckOut from './pages/checkOut/CheckOut'
import Order from './pages/Order/Order'
import Products from './pages/products/Products'
import WishList from './pages/wishList/WishList'
import WishlistProvider from "./context/wishlist.context"
import Categories from './pages/categories/Categories'
import Brands from './pages/brands/Brands'
import Forgetpassword from './pages/forgetpassword/Forgetpassword'
import Resetpassword from './pages/resetpassword/Resetpassword'
import Online from './component/Online/Online'
import Offline from './component/Offline/Offline'

function App() {
 const router =createHashRouter([

  {path:"/",
    element: (
      <ProtectRout>
 <Layout/>
      </ProtectRout>
    ),
   children: [
    {index: true,element :<Home/>},
    { path: "home", element: <Home /> },
    { path: "Cart", element: <Cart /> },
    { path: "Product/:id", element: <ProductDetails/> },
    { path: "CheckOut", element: <CheckOut/> },
    { path: "allorders", element: <Order/> },
    { path: "Products", element: <Products/> },
    { path: "WishList", element: <WishList/> },
    { path: "Categories", element: <Categories/> },
    { path: "brands", element: <Brands/> },

  ],},
{ path :"/",
  element:(
    <GustRout>
<Layout/>
    </GustRout>
  ),
  children :
  [{path: "signup",element :<Signup/>},
    {path: "Login",element :<Login/>},
    { path: "/forgetpassward", element: <Forgetpassword/> },
    { path: "/resetpassword", element: <Resetpassword/> },
  ]
}
 ])
  return (
    <>
    <Online>
    <UserProvider>
      <CartProvider>
      <WishlistProvider>
      <RouterProvider router={router}/>
      </WishlistProvider>
      </CartProvider>
    </UserProvider>
    <Toaster  position='top-right'/>
    </Online>

<Offline>
<div className="bg-gray-200 border-l-4 text-center text-red-700 p-4 rounded-lg shadow-lg py-10 text-4xl">
        <p className="text-lg font-semibold">
        <i className="  text-red-700 fa-solid fa-wifi"></i> Please check your internet connection.
        </p>
    </div>

</Offline>
    </>
  )
}

export default App
