class Resource {

	constructor(params) {
		this.uuid = UUID.Generate();

		for (var property in params) {
			if (params.hasOwnProperty(property)) {
				this[property] = params[property];
			}
		}

		if (this.initial_value === 'undefined')  this.initial_value = 0;
		this.value = this.initial_value;

		console.log(this);

		HTML.Create(this.uuid, 'resource-counter ' + this.class_name, this.parent_id);
		HTML.Update(this.uuid, this.value);
	}


	UpdateValue(offset) {
		this.value = this.value + offset;

		// clamp the values
		if (this.value < 0) this.value = 0;
		if (this.value > 2000000000) this.value = 2000000000;

		HTML.Update(this.uuid, this.FormatNumber(this.value));
	}


	FormatNumber(x) {
		x = (Math.floor(x * 100) / 100 );
		var parts = x.toString().split(".");
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

		return parts.join(".");
	}


}
