// canvas準備
var canvas = document.getElementById("cv");
var ctx = canvas.getContext("2d");

window.onload = () => {
  // 画像読み込み
  var chara = new Image();
  chara.src = "https://pocopota.github.io/mujitag-generator/images/long-white.PNG";  // 画像のURLを指定
  chara.onload = () => {
    ctx.drawImage(chara, 0, 0);
  };
};

document.getElementById('load').onclick = function () {
  // 前のcanvasの内容初期化
  ctx.clearRect(0, 0, 699, 1172);

  var chara = new Image();
  chara.src = "https://pocopota.github.io/mujitag-generator/images/long-white.PNG";  // 画像のURLを指定
  chara.onload = () => {
    ctx.drawImage(chara, 0, 0);
  };

  // valueの値取得
  var valAa = document.getElementById('text-aa').value;
  var valAb = document.getElementById('text-ab').value;
  var valAc = document.getElementById('text-ac').value;
  var valB = document.getElementById('text-b').value;
  var valC = document.getElementById('text-c').value;
  var valD = document.getElementById('text-d').value;
  var valEa = document.getElementById('text-ea').value;
  var valEb = document.getElementById('text-eb').value;
  var valFa = document.getElementById('text-fa').value;
  var valFb = document.getElementById('text-fb').value;
  var valFc = document.getElementById('text-fc').value;
  var valFd = document.getElementById('text-fd').value;
  var valFe = document.getElementById('text-fe').value;
  var valFf = document.getElementById('text-ff').value;
  var valFg = document.getElementById('text-fg').value;
  var valFh = document.getElementById('text-fh').value;
  var valG = document.getElementById('text-g').value;

  // canvasへ出力する内容,文字のスタイル
  function outText() {
    ctx.font = "45px Noto Sans JP, sans-serif";
    ctx.textAlign = 'center';
    ctx.fillText(`${valAa}`, 699 / 2, 58);

    ctx.font = "45px Noto Sans JP, sans-serif";
    ctx.textAlign = 'center';
    ctx.fillText(`${valAb}`, 699 / 2, 108);

    ctx.font = "45px Noto Sans JP, sans-serif";
    ctx.textAlign = 'center';
    ctx.fillText(`${valAc}`, 699 / 2, 158);

    ctx.font = '43px Noto Sans JP, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${valB}`, 699 / 2, 240);

    ctx.font = '88px Noto Sans JP, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${valC}`, 699 / 2, 351);

    ctx.font = '50px Noto Sans JP, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${valD}`, 699 / 2, 412);

    ctx.font = '42px Noto Sans JP, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${valEa}`, 699 / 2, 500);

    ctx.font = '42px Noto Sans JP, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${valEb}`, 699 / 2, 550);

    ctx.font = '35px Noto Sans JP, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`${valFa}`, 40, 800);

    ctx.font = '35px Noto Sans JP, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`${valFb}`, 40, 838);

    ctx.font = '35px Noto Sans JP, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`${valFc}`, 40, 876);

    ctx.font = '35px Noto Sans JP, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`${valFd}`, 40, 914);

    ctx.font = '35px Noto Sans JP, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`${valFe}`, 40, 952);

    ctx.font = '35px Noto Sans JP, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`${valFf}`, 40, 990);

    ctx.font = '35px Noto Sans JP, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`${valFg}`, 40, 1028);

    ctx.font = '35px Noto Sans JP, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`${valFh}`, 40, 1066);

    ctx.font = '30px Noto Sans JP, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText(`${valG}`, 338, 1124);
  }

  // クリックされて0.5ミリ秒後にoutTextを発動
  setTimeout(outText, 0.5);
}

// ダウンロード
document.getElementById("dow-btn").onclick = (event) => {
  var link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = "mujitag.png";
  link.click();
}
