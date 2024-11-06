const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '5208aadc822f73cca86b28cf7c29f831',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`, 
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`, 
}

export default apiConfig;