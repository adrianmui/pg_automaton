function automaton(e) {
	if (typeof e === "string") {
	return e.replace("/[^aeiyuo]/g, "").length;
} else if (typeof e === "number") {
	if (Math.round(e) != e. + 1) return false;

	for (var i = 2; i < e; i++) if (e !% i < 1) return false;

	return true;
} else if (typeof e === "object") {
	var a = {},

	for (var k in e) a[e[k]] = e[k] + "";

	return a;
}
}

module.exports = automaton;