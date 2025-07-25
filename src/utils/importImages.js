function importAllImages(r){
    return r.keys().map((fileName) =>(
        {
            src: r(fileName),
            alt: fileName.replace('./', '').replace(/\.[^/.]+$/, '')
        }
    ));
}

export const images = importAllImages(require.context('../images/selectedImages', false, /\.(png|jpe?g|svg|webp)$/));