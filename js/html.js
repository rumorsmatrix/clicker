class HTML {

	static Create(uuid, class_string, parent_id) {
		var new_node = document.createElement('div');
		new_node.setAttribute('id', uuid);
		new_node.className = class_string;

		var parent_node = document.getElementById(parent_id);
		parent_node.appendChild(new_node);

		return new_node;
	}


	static Update(uuid, value) {
		var node = document.getElementById(uuid);
		node.innerHTML = value;
	}


}
