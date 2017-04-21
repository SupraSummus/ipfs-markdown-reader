(function () {

	var load = function (path, success, fail) {

		if (fail === undefined) {
			fail = console.error;
		}

		var xmlhttp = new XMLHttpRequest();

		xmlhttp.onreadystatechange = function () {
			if (xmlhttp.readyState == XMLHttpRequest.DONE) {
				if (xmlhttp.status == 200) {
					var val;
					try {
						val = eval(xmlhttp.responseText);
					} catch (err) {
						fail(err);
					}
					success(val);
				} else {
					fail('couldn\'t download');
				}
			}
		};

		xmlhttp.open('GET', path, true);
		xmlhttp.send();

	};

	window.load = load;

})();
