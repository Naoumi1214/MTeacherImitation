/**
 * 勝負の判定を行うクラス
 */
class Handtype {

    constructor(myhand, tekihand) {
        this.myhand = myhand;//自分の手
        this.tekihand = tekihand;//相手の手
    }

    /**
     * プレイヤーから見ての勝利の判定を行う
     */
    Winer() {
        var kekka = document.getElementById("kekka");//<div></div>   
        var junkenkekkap = document.getElementById("junkenkekka");//<p></p>
        var hoimessagep = document.getElementById("hoimessage");//<P></P>

        //すでにじゃんけんが行わているか？
        if (!junkenkekkap || !hoimessagep) {
            var textnode;

            //じゃんけんの結果のメッセージを表示1
            var HandTypeConfirmationP = document.createElement("p");
            HandTypeConfirmationP.id = "junkenkekka";
            kekka.appendChild(HandTypeConfirmationP);
            var text = `あなたの出した手は「${this.myhand}」でした。 コンピュータの出した手は「${this.tekihand}」でした。`;
            //#junkenkekkaのノードテキスト生成
            textnode = document.createTextNode(text);
            HandTypeConfirmationP.appendChild(textnode);

            //あっちむいてほいのメッセージを生成
            var hoimessage = document.createElement("p");
            kekka.appendChild(hoimessage)
            //#hoimessageのノードテキスト生成
            hoimessage.id = "hoimessage";
            var hoimessagetext = "a";
            //結果があいこだった場合
            if (this.myhand === this.tekihand) {
                hoimessagetext = "つまりあいこ";
            }

            //自分の手を判定
            switch (this.myhand) {
                case "パー":
                    //相手の手を判定
                    switch (this.tekihand) {
                        case "チョキ":
                            hoimessagetext = "負けです。相手の指に顔（マウス）を向けないようにあっちむいてほい"
                            break;

                        case "グー":
                            hoimessagetext = "勝ちです。自分の指（マウス）の方向を相手に向けましょう"
                            break;

                        default:
                            break;
                    }
                    break;

                case "チョキ":
                    //相手の手を判定ｆ
                    switch (this.tekihand) {
                        case "グー":
                            hoimessagetext = "負けです。相手の指に顔（マウス）を向けないようにあっちむいてほい"
                            break;

                        case "パー":
                            hoimessagetext = "勝ちです。自分の指（マウス）の方向を相手に向けましょう"
                            break;

                        default:
                            break;
                    }
                    break;

                case "グー":
                    //相手の手を判定ｆ
                    switch (this.tekihand) {
                        case "パー":
                            hoimessagetext = "負けです。相手の指に顔（マウス）を向けないようにあっちむいてほい"
                            break;

                        case "チョキ":
                            hoimessagetext = "勝ちです。自分の指（マウス）の方向を相手に向けましょう"
                            break;

                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }
            textnode = null;
            textnode = document.createTextNode(hoimessagetext);
            hoimessage.appendChild(textnode);


        } else {
            while (kekka.lastChild) {
                kekka.removeChild(kekka.lastChild);
            }
        }
    }


}