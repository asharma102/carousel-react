/*
The code is for sending request for get all the carousel information
*/

import request from 'axios';

const getPicture = {
    withPictute: () => {
        const baseUrl = 'https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=beautiful+landscape&image_type=photo';
        return request.get(`${baseUrl}`)
    }
};

export default getPicture;