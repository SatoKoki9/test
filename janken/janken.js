let namae = location.search;
const getParam = new URLSearchParams(namae);


function Click(guest){
    let janken = ["グー","チョキ","パー"];
    
    let janken2 = ["グー","チョキ","パー"];
    let aite = Math.floor(Math.random() * 3);
   
    if(guest === aite){
        result = "あいこです。";
    }else if(guest === 0 && aite === 1) {
        result = getParam.get("input") + "さんの勝ちです。";
    }else if(guest === 1 && aite === 2) {
        result = getParam.get("input") + "さんの勝ちです。";
    }else if(guest === 2 && aite === 0) {
        result = getParam.get("input") + "さんの勝ちです。";
    }else {
        result = getParam.get("input") + "さんの負けです。";
    }
    
    document.getElementById("photo1").src = "janken" + guest + ".png";
    document.getElementById("photo2").src = "janken" + aite + ".png";
    document.getElementById("display1").innerHTML = getParam.get("input") + "さんは" + janken[guest] + "を選択しました。結果は・・・";
    document.getElementById("display2").innerHTML = "相手は" + janken2[aite] + "を選択しました。" + result;
}

