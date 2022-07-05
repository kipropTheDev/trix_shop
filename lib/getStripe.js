import { loadStripe} from '@stripe/stripe-js'


let stripePromise


const getStripe = ()=>{
    if(!stripePromise){
        stripePromise = loadStripe('pk_test_51LH20uBddjFxKwiVTQ6yhaUXF1XIbHYf2kuMfDVjsdlDe1CJKP8yMa6kKgXV876wTIN4hf8XihbsSn9Y9G78tLi800AozsNfsJ')
    }

    return stripePromise
}

export default getStripe
