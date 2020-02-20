$("turbolinks:load", function()
{
	$("#Top").click(function()
	{
		$("html,body").animate(
		{
			scrollTop : $(".body").offset().top
		},
		{
			queue : false
		})
	});

	$("#AboutMe").click(function()
	{
		$("html,body").animate(
		{
			scrollTop : $("ul.AboutMe").offset().top
		},
		{
			queue : false
		})
	});

	$("#Skills").click(function()
	{
		$("html,body").animate(
		{
			scrollTop : $("ul.Skills").offset().top
		},
		{
			queue : false
		})
	});

	$("#Works").click(function()
	{
		$("html,body").animate(
		{
			scrollTop : $("ul.Works").offset().top
		},
		{
			queue : false
		})
	});

	$("#Bottom").click(function()
	{
		$("html,body").animate(
		{
			scrollTop : $(".footer").offset().top
		},
		{
			queue : false
		})
	});
  });
