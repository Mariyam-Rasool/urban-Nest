// Logo
import logo from '../assets/logo230by90.png'
// Icons
// import { GoPerson } from "react-icons/go";
// import { IoMdHeartEmpty } from "react-icons/io";
// import { PiShoppingBag } from "react-icons/pi";

export const navBarItems =[
    { label:"Home",link:"/"},
    // { label: 'New!', link: '/products' },
    {
        label: "New!",
        dropdown: true, // Indicate this item has a dropdown
        subItems: [
            { label: "All Products", link: "/products/all" },
            { label: "Decor", link: "/products/decor" },
            { label: "Bedroom", link: "/products/bedroom" },
            { label: "Living Room", link: "/products/living-room" }
        ]
    },
    { label: 'Projects', link: '/projects' },
    // { label: 'Ideas', link: '/ideas' },
    { label: 'About us', link: '/about' },
    { label: 'Consultation', link: '/consultation' }
]

// export const navBarIcons = [
//     {icon:<GoPerson/>, link:"/profile"},
//     {icon:<IoMdHeartEmpty/>, link:"/wishlist"},
//     {icon:<PiShoppingBag />, link:"/cart"}

// ]

export const logoImg =[
    {img:logo, link:"/"}
]
