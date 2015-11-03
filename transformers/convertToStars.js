module.exports.transform = function( context, data, argument, cb ) {
	return Math.round( parseInt( data[0], 10 ) / 2 ) + ' stars';
};
