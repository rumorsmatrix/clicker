class Timestamp {

	constructor() { }

	static Get() {
		return Math.round((new Date()).getTime() / 1000);
	}

}
