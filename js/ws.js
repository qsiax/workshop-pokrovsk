const numWS = document.getElementById('ws-num');

  $("#web").hover(
	function () {
		$(".web-title").addClass('active');
		$(".ws-web").addClass("active");
		numWS.innerHTML = '01';

		$(".game-title").removeClass("active");
		$(".rmp-title").removeClass("active");
		$(".vr-title").removeClass("active");
		$(".cyber-title").removeClass("active");

		$(".ws-game").removeClass("active");
		$(".ws-rmp").removeClass("active");
		$(".ws-vr").removeClass("active");
		$(".ws-cyber").removeClass("active");
	},
  );

  $("#game").hover(
	function () {
		$(".game-title").addClass('active');
		$(".ws-game").addClass("active");
		numWS.innerHTML = '02';

		$(".web-title").removeClass("active");
		$(".rmp-title").removeClass("active");
		$(".vr-title").removeClass("active");
		$(".cyber-title").removeClass("active");

		$(".ws-web").removeClass("active");
		$(".ws-rmp").removeClass("active");
		$(".ws-vr").removeClass("active");
		$(".ws-cyber").removeClass("active");
	},
  );

  $("#vr").hover(
	function () {
		$(".vr-title").addClass('active');
		$(".ws-vr").addClass("active");
		numWS.innerHTML = '03';

		$(".web-title").removeClass("active");
		$(".rmp-title").removeClass("active");
		$(".game-title").removeClass("active");
		$(".cyber-title").removeClass("active");

		$(".ws-web").removeClass("active");
		$(".ws-rmp").removeClass("active");
		$(".ws-game").removeClass("active");
		$(".ws-cyber").removeClass("active");
	},
  );

  $("#rmp").hover(
	function () {
		$(".rmp-title").addClass('active');
		$(".ws-rmp").addClass("active");
		numWS.innerHTML = '04';

		$(".web-title").removeClass("active");
		$(".vr-title").removeClass("active");
		$(".game-title").removeClass("active");
		$(".cyber-title").removeClass("active");

		$(".ws-web").removeClass("active");
		$(".ws-vr").removeClass("active");
		$(".ws-game").removeClass("active");
		$(".ws-cyber").removeClass("active");
	},
  );

  $("#cyber").hover(
	function () {
		$(".cyber-title").addClass('active');
		$(".ws-cyber").addClass("active");
		numWS.innerHTML = '05';

		$(".web-title").removeClass("active");
		$(".vr-title").removeClass("active");
		$(".game-title").removeClass("active");
		$(".rmp-title").removeClass("active");

		$(".ws-web").removeClass("active");
		$(".ws-vr").removeClass("active");
		$(".ws-game").removeClass("active");
		$(".ws-rmp").removeClass("active");
	},
  );