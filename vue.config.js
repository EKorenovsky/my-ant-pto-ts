module.exports = {
  css: {
          loaderOptions: {
            less: {
              modifyVars: {
                // less vars，customize ant design theme
                // 'primary-color': '#F5222D',
                // 'link-color': '#F5222D',
                'border-radius-base': '2px'
              },
              // DO NOT REMOVE THIS LINE
              javascriptEnabled: true
            }
          },
        },
};
