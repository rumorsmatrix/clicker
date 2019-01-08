class Clicker {

	constructor(params) {
		this.uuid = UUID.Generate();

		for (var property in params) {
			if (params.hasOwnProperty(property)) {
				this[property] = params[property];
			}
		}


		// create HTML node and add click event to it
		if (params.clickable === true) {
			var node = HTML.Create(this.uuid, 'clicker ' + this.class_name, this.parent_id);
			node.addEventListener('click', this);
		}
	}


	handleEvent(event) {
		// currently only handles click events, but could be called on to do more...
		if (event instanceof MouseEvent === true && event.type === 'click') this.Click(true);
	}


	Click(human_click) {
		game.ModifyResource(this.resource, this.resources_per_click);
		return true;
	}


	Tick(seconds_since_last_tick) {
		// console.log(this.display_name + " {" + this.uuid + "} " + " ticked with " + seconds_since_last_tick + " seconds to process...");

		// return early, return often
		if (seconds_since_last_tick === 0) return false;	// nothing to do
		if (this.auto_clicks_per_second === 0) return false; 	// also nothing to do

		// how many clicks should we have done?
		var auto_clicks = (this.auto_clicks_per_second * seconds_since_last_tick);

		// do the clicks -- this allows for the Click() method to be non-deterministic
		for (var i = 0; i < auto_clicks; i++) {
			this.Click(false);
		}

		return true;
	}


	Upgrade() { }

}
