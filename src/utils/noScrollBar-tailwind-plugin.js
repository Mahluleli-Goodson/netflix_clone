const plugin = require('tailwindcss/plugin')

module.exports = plugin(({addUtilities}) => {
    const newUtilities = {
        '.scrollbar-hidden': {
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none', /* Firefox */
            '&::-webkit-scrollbar': {
                display: 'none' /*Chromium browsers*/
            }
        }
    }

    addUtilities(newUtilities)
});
