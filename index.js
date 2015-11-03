var bumblebee = require('bumblebee'),
		serverOptions = {
			port: 3223
		},
		environment = bumblebee.environment;

environment.name = 'Movies demo';

bumblebee.bb.setSchemaPath( 'movie_schema.yaml' );

bumblebee.server.init( serverOptions, environment, function(err){
	console.log(environment);
	console.log( err || 'movie demo server running' );
} );
