$(function() {
	$('.b-button').on('click', function() {
		$.post('/login', {
			login: $('.b-input[name="login"]').val(),
			password: $('.b-input[name="password"]').val()
		}, function() {
			alert('Авторизация прошла успешно!');
		});
	});
});