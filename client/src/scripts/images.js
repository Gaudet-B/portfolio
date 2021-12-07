import draft1 from '../assets/draft/login-1.PNG'
import draft2 from '../assets/draft/user-dashboard-1.PNG'
import draft3 from '../assets/draft/user-dashboard-2.PNG'
import draft4 from '../assets/draft/advanced-options-1.PNG'
import draft5 from '../assets/draft/advanced-options-2.PNG'
import draft6 from '../assets/draft/recommendations-1.PNG'
import draft7 from '../assets/draft/recommendations-2.PNG'

// import draftImages from '../assets/draft'

import pizza1 from '../assets/pizza/shop_1.PNG'
import pizza2 from '../assets/pizza/pizza_modal_1.PNG'
import pizza3 from '../assets/pizza/pizza_modal_2.PNG'
import pizza4 from '../assets/pizza/pizza_modal_3.PNG'
import pizza5 from '../assets/pizza/shopping_cart_1.PNG'
import pizza6 from '../assets/pizza/checkout_1.PNG'
import pizza7 from '../assets/pizza/payment_1.PNG'

// import pizzaImages from '../assets/pizza'


// export const getImages = () => {
//     let object = {}
//     console.log(draftImages)
//     console.log(pizzaImages)
// }

const draftImages = [draft1, draft2, draft3, draft4, draft5, draft6, draft7]
const pizzaImages = [pizza1, pizza2, pizza3, pizza4, pizza5, pizza6, pizza7]

const getImages = () => {
    let object = {
        draft: [],
        pizza: []
    }

    for (let i = 0; i < draftImages.length; i++) {
        object.draft.push(draftImages[i])
    }
    for (let i = 0; i < pizzaImages.length; i++) {
        object.pizza.push(pizzaImages[i])
    }
    console.log(object)
    return object
}

// console.log(getImages)

export default getImages