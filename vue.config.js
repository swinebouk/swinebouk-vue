module.exports = {
  configureWebpack: {
		module: {
			rules: [
        {
          test: require.resolve('snapsvg/dist/snap.svg.js'),
          use: 'imports-loader?this=>window,fix=>module.exports=0'
        }
			]
		}
  }
}
