<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<link rel="stylesheet" href="">
</head>
<body>
	<div id="app">
		{{ message }}
	</div>
	<script src="https://cdn.jsdelivr.net/npm/vue"></script>
	<script>
		var app = new Vue({
			el: '#app',
			data: {
				message: 'Hello Vue!'
			}
		})
	</script>
</body>
</html>