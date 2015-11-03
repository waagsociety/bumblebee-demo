module.exports.transform = function( context, data, argument, cb ) {
	return Math.round( parseInt( data[0] ) / 5 ) + ' stars';
};
