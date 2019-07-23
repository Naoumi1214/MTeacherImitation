document.addEventListener("DOMContentLoaded", function () {
	var Handtyper;//クラスHandtype用の変数
	/**
     * 敵の手を取得
     */
	var getTekiHand = function () {
		var tekihand = null;//敵の手

		var RandomInteger = Math.floor(Math.random() * 3);
		console.log("RandomInteger:" +RandomInteger);
		//敵の手を決める
		switch (RandomInteger) {
			case 0:
				tekihand = "パー";
				break;

			case 1:
				tekihand = "チョキ";
				break;

			case 2:
				tekihand = "グー";
				break;
                
			default:
				break;
		}

		console.log("tekihand:" + tekihand);
		return tekihand;
	};

	/**
     * 自分の手を取得
     */
	var getMyhandValue = function () {
		var myhand = null;//自分の手

		var Radios = document.getElementsByClassName("hand");
		console.log("Radios.length" + Radios.length);
		//プレイヤーの手を取得
		for (var i = 0; i < Radios.length; i++) {
			var Radio = Radios.item(i);
			if (Radio.checked) {

				var myhand = Radio.value;
				break;
			}
		}

		console.log("myhand:" + myhand);
		return myhand;

	};
    
	/**
     * 
     */

	/**
     * 'ポン'のボタンを押したら、実行するもの
     */
	document.getElementById("btn").addEventListener("click", function () {
		var Myhand = getMyhandValue();
		var Tekihand = getTekiHand();
		Handtyper = new Handtype(Myhand,Tekihand);
        
	});
}, false);