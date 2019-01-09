// ---- game-specific data
//
// In theory, anything specific to the game (rather than generic clicker game
// mechanics) should be defined in this file.

game_data = {

	'resource_types': {
		'gold': new Resource({
			'display_name': 'Gold',
			'initial_value': 0,
			'class_name': 'resource-gold',
			'parent_id': 'resource-counter-container',
		}),

	},


	'clicker_types': {

		'basic': {
			'display_name': 'Gold mine',
			'class_name': 'clicker-gold-mine',
			'parent_id': 'clicker-container',

			'clickable': true,	// user can manually click this
			'resource': 'gold',	// index in resource_types
			'resources_per_click': 1,
			'auto_clicks_per_second': 1,

			'purchase_resource': 'gold',
			'initial_purchase_price': 10,
			'purchase_price_multiplier': 1.8,

			'upgrade_resource': 'gold',
			'initial_upgrade_price': 14,
			'upgrade_price_multiplier': 1.7,
		},

	}, // end of clicker types

}; // end of game_data object
