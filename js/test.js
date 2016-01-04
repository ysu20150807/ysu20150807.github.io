function test() {
	var vname = $('#inputname').val();

	$.post("function.php", {
		name: vname
	}, function(result) {
		$('#testresult').html(result);
	});
}