'use strict';
/**
 * Internal dependencies
 */
const { ValidationError } = require( '@wordpress/env/lib/config' );
const commands = require( '@wordpress/env/lib/commands' );
const start = require( './commands/start' );

commands.start = start;

module.exports = {
    ...commands,
    ValidationError,
};
