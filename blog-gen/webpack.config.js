const path = require('path')
const postLocations = require('./post-locations.js')

const config = (name, env) => {
  return {
    mode: env,
    name: name,
    entry: Object.assign({
      index: [`./index.js`],      
    }, postLocations),
    output: {
      path: path.resolve('../public/js/blog'),
      filename: '[name].js',
    },
    resolve: {
      modules: [
        'node_modules',
      ],
      extensions: ['.js', '.json'],
    },

    module: {
      rules: [
        {
          test: /\.mdx?$/,
          use: [
            'babel-loader',
            '@mdx-js/loader'
          ]
        },
        {
          test: /\.js$/,
          use: 'babel-loader'
        },
      ],
    },
  }
}


module.exports = config('blog', 'development')
