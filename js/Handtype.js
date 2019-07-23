/**
 * 勝負の判定を行うクラス
 */
class Handtype {

    constructor(myhand, tekihand) {
        this.myhand = myhand;
        this.tekihand = tekihand;
    }

    /**
     * プレイヤーから見ての勝利の判定を行う
     * return 0; あいこ
     * return 1; 勝ち
     * return 2; 負け
     */
    Winer() {
        var HandTypeConfirmationP = document.createElement("p");

        if (this.myhand === this.tekihand) {
            var text = document.createTextNode("あなたの出した手は「${this.myhand}」でした。 コンピュータの出した手は「${this.tekihand}」でした。\nつまり愛子様");
            return 0;
        }
    }


}