import { addImage } from './addImage.js';

const addImageV2 = url => {

    const p = new Promise((resolve, reject) => {
        const onSucess = (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        }
        addImage(url, onSucess);
    });
    return p;
};

// examples

addImageV2('https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg')
    .then(data => console.log(data)) // ==> { width: 200, height: 100 }
    .catch(error => console.log(error)); // ==> 'Image load failed'
