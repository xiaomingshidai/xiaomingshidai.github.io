$(function() {
	$('.seach').click(function() {

		alert('OK');
		$.ajax({
			cache: true,
      url: '/AdminLTE-2.3.11/my/myDate.json',
      error: function(request) {
        alert("Connection error");
      },
      success: function(data) {
      	alert('ajaxOK');
      	console.log(data);
      }
		}).done(function(data) {
			alert('done OK');
			$('#example2').DataTable({
			"paging": true,
			"lengthChange": false,
			"searching": false,
			"ordering": false,
			"info": true,
			"autoWidth": false,
			"ajax": {
				url: '/AdminLTE-2.3.11/my/myDate.json',
				dataSrc: 'data'
			},
			/*     "columns": [
			{data: 'Rendering engine'},
			{data: 'Browser'},
			{data: 'Platform(s)'},
			{data: 'Engine version'},
			{data: 'CSS grade'}
			],*/
			"columns": [
				{data: 'Tender'},
				{data: 'Sub Name'},
				{data: 'Deadline'},
				{data: 'Open Time'},
				{data: 'Form'},
				{data: 'Sub Prog'},
				{data: 'del'}
			]
			});
		})
	});
});