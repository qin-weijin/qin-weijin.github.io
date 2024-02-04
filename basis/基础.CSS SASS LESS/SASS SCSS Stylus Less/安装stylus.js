$ npm i stylus stylus-loader style-loader css-loader --save-dev

	 module: {
	  rules: [
	    {
	      test: /\.styl$/,
	      loader: ['style-loader', 'css-loader', 'stylus-loader']
	    }
	  ]
	} 








