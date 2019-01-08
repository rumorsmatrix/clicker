class Game {

	constructor() {
		this.current_tick_timestamp = Timestamp.Get();
		this.last_tick_timestamp = Timestamp.Get();
		this.resources = game_data.resource_types;
		this.clickers = {};
	}


	// load/save to browser storage
	Load() { }
	Save() { }


	AddClicker(clicker_params) {
		var new_clicker = new Clicker(clicker_params);
		this.clickers[new_clicker.uuid] = new_clicker;
		return new_clicker.uuid;
	}


	ModifyResource(resource, offset) {
		if (typeof this.resources[resource] === 'undefined') {
			this.resources[resource] = new Resource(resource, offset);
		} else {
			this.resources[resource].UpdateValue(offset);
		}
		return true;
	}


	Tick() {
		// this method gets called on a timer and auto-clicks all clickers based
		// on the time difference between updates -- this allows for idle play
		this.current_tick_timestamp = Timestamp.Get();
		var time_diff = this.current_tick_timestamp - this.last_tick_timestamp;

		// ask each of our clickers to "Tick" and do their thing
		for (var uuid in this.clickers) {
			if (this.clickers.hasOwnProperty(uuid)) {
				this.clickers[uuid].Tick(time_diff);
			}
		}

		// conceivably this might have taken longer than a second (or ticked over into a new one)
		this.last_tick_timestamp = this.current_tick_timestamp;
	}

}
