$(function() {
	var format = function(state) {
			if (!state.id)  {
				return state.text;
			}
			return '<i class="b-info">link</i>' + state.text;
		}

	$('.b-select').select2({
		formatResult: format,
		formatSelection: format,
		escapeMarkup: function(markup) {
			return markup;
		}
	});
});