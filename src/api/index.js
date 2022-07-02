const API_PATH = 'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json';

export const getProducts = () => {
    return fetch(API_PATH).then(res => res.json());
}