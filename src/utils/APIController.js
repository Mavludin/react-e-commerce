import axios from 'axios';
import { productDataUrl } from './APIUrls';

export const fetchProducts = async () => {
    const finalData = await axios.get(productDataUrl)
        .then(response => {
            return response;
        })
        .catch(err => {
            return Promise.reject({
                data: err.response
            })
        });

    return Promise.resolve(finalData.data)
}

export const fetchProductDetails = async (productId) => {
    const finalDetails = await axios.get(`${productDataUrl}/${productId}`)
        .then(response => {
            return response;
        })
        .catch(err => {
            return Promise.reject({
                data: err.response
            })
        });

    return Promise.resolve(finalDetails.data);
}