import {
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from '../constants/productConstant'
const initiState = {
  products: [
    {
      _id: '1',
      name: 'Coffa',
      image: '/image/coffa.jpg',
      description: 'Coffa guebsia 100% s3af tounsi',
      Category: 'decoration',
      price: '30',
      rating: '3',
      CountInStock: '3',
      adressProduct: 'Tunis',
      numberReviews: '8',
    },
    {
      _id: '2',
      name: 'Serum',
      image: '/image/serum.jpg',
      description: 'serum cheveux 100% naturel',
      Category: 'Produit bio',
      price: '20',
      rating: '4.5',
      CountInStock: '2',
      adressProduct: 'Mestir',
      numberReviews: '5',
    },
  ],
  loading: true,
  product: null,
  error: {},
}
export const productListReducer = (state = initiState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_SUCCESS:
      return { ...state, products: action.payload, loading: false }
    case PRODUCT_LIST_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
