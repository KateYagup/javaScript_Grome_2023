export const addImageV2 = url => {
    const p = new Promise((resolveCb, rejectCb) => {
        const img = document.createElement('img');
        img.setAttribute('alt', 'User avatar');
        img.src = url;

        const pageElem = document.querySelector('.page');
        pageElem.append(img);

        const onImageLoaded = () => {
            const { width, height } = img;
            resolveCb({ width, height });
        };

        // const onImageLoadError = () => callback('Image load failed');

        img.addEventListener('load', onImageLoaded);

        img.addEventListener('error', () => rejectCb(new Error('Image load failed')));
    });
    return p;
};

// examples
// const imgSrc = 'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';
// addImageV2(imgSrc)
//     .then(data => console.log(data)) // ==> { width: 200, height: 100 }
//     .catch(error => console.log(error)); // ==> 'Image load failed'

// addImageV2('https://server.com/image.png')
//     .then(data => console.log(data)) // ==> { width: 200, height: 100 }
//     .catch(error => console.log(error)); // ==> 'Image load failed'
