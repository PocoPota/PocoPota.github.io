// canvas準備
var canvas = document.getElementById("cv");
var ctx = canvas.getContext("2d");

window.onload = () => {
  // 画像読み込み
  var chara = new Image();
  chara.src = "https://pocopota.github.io/mujitag-generator/images/square.PNG";  // 画像のURLを指定
  chara.onload = () => {
    ctx.drawImage(chara, 0, 0);
  };
};

document.getElementById('load').onclick = function () {
  // 前のcanvasの内容初期化
  ctx.clearRect(0, 0, 680, 680);

  var chara = new Image();
  chara.src = "https://pocopota.github.io/mujitag-generator/images/square.PNG";  // 画像のURLを指定
  chara.onload = () => {
    ctx.drawImage(chara, 0, 0);
  };

  // valueの値取得
  var valAa = document.getElementById('text-a').value;
  var valC = document.getElementById('text-b').value;
  var valD = document.getElementById('text-c').value;
  var valFa = document.getElementById('text-da').value;
  var valFb = document.getElementById('text-db').value;
  var valFc = document.getElementById('text-dc').value;
  var valFd = document.getElementById('text-dd').value;
  var valFe = document.getElementById('text-de').value;
  var valG = document.getElementById('text-e').value;

  // canvasへ出力する内容,文字のスタイル
  function outText() {
    ctx.font = "45px Noto Sans JP, sans-serif";
    ctx.textAlign = 'center';
    ctx.fillText(`${valAa}`, 680 / 2, 58);

    ctx.font = '88px Noto Sans JP, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${valC}`, 680 / 2, 179);

    ctx.font = '54px Noto Sans JP, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${valD}`, 680 / 2, 245);

    ctx.font = '35px Noto Sans JP, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`${valFa}`, 40, 328);

    ctx.font = '35px Noto Sans JP, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`${valFb}`, 40, 368);

    ctx.font = '35px Noto Sans JP, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`${valFc}`, 40, 408);

    ctx.font = '35px Noto Sans JP, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`${valFd}`, 40, 448);

    ctx.font = '35px Noto Sans JP, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`${valFe}`, 40, 488);

    ctx.font = '38px Noto Sans JP, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText(`${valG}`, 647, 647);
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
