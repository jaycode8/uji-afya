/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./dist/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: '#121212',
                secondary: {
                    100: '#E2E2D5',
                    200: '#888883',
                },
                whitish: '#808080',
            },
            backgroundImage: {
                bgImg: `
                    linear-gradient(
                    359deg,
                    rgb(16.863% 17.647% 25.882%) 0%,
                    rgb(15.809% 16.544% 24.265% / 0.9375) 6.25%,
                    rgb(14.755% 15.441% 22.647% / 0.875) 12.5%,
                    rgb(13.701% 14.338% 21.029% / 0.8125) 18.75%,
                    rgb(12.647% 13.235% 19.412% / 0.75) 25%,
                    rgb(11.593% 12.132% 17.794% / 0.6875) 31.25%,
                    rgb(10.539% 11.029% 16.176% / 0.625) 37.5%,
                    rgb(9.485% 9.926% 14.559% / 0.5625) 43.75%,
                    rgb(8.431% 8.824% 12.941% / 0.5) 50%,
                    rgb(7.377% 7.721% 11.324% / 0.4375) 56.25%,
                    rgb(6.324% 6.618% 9.706% / 0.375) 62.5%,
                    rgb(5.27% 5.515% 8.088% / 0.3125) 68.75%,
                    rgb(4.216% 4.412% 6.471% / 0.25) 75%,
                    rgb(3.162% 3.309% 4.853% / 0.1875) 81.25%,
                    rgb(2.108% 2.206% 3.235% / 0.125) 87.5%,
                    rgb(1.054% 1.103% 1.618% / 0.0625) 93.75%,
                    rgb(0% 0% 0% / 0) 100%
                );
                `
            },
            width: {
                90: '90%',
                95: '95%',
                140: '140%',
                // 30.5: '30rem'
            },
            height: {
                90: '90%',
                95: '95%',
                140: '140%',
                130: '35rem',
                170:'85%'
            }
        },
    },
    plugins: [],
}

