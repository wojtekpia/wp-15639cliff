Number.prototype.toPercent = function (decimals) {
    var n = this,
                c = isNaN(decimals) ? 0 : Math.abs(decimals); //if decimal is zero we must take it, it means user does not want to show any decimal
	return (n * 100).toFixed(c) + "%";
}