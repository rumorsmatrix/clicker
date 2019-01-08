// ---- game-specific data
//
// In theory, anything specific to the game (rather than generic clicker game
// mechanics) should be defined in this file.

game_data = {

	'resource_types': {
		'gold_pressed_latinum': new Resource({
			'display_name': 'Gold-pressed Latinum',
			'initial_value': 0,
			'class_name': 'latinum',
			'parent_id': 'resource-counter-container',
		}),

	},


	'clicker_types': {

		'basic': {
			'display_name': 'Gold-pressed Latinum',
			'class_name': 'clicker-latinum',
			'parent_id': 'clicker-container',

			'clickable': true,	// user can manually click this
			'resource': 'gold_pressed_latinum',
			'resources_per_click': 1,
			'auto_clicks_per_second': 1,

			'purchase_resource': 'gold_pressed_latinum',
			'initial_purchase_price': 10,
			'purchase_price_multiplier': 1.8,

			'upgrade_resource': 'gold_pressed_latinum',
			'initial_upgrade_price': 14,
			'upgrade_price_multiplier': 1.7,
		},

	}, // end of clicker types

}; // end of game_data object
