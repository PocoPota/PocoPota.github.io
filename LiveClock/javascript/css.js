// 文字色
var FontColor;
var defaultColor = "#000000";

window.addEventListener("load", startup, false);
function startup() {
  FontColor = document.querySelector("#FontColor");
  FontColor.value = defaultColor;
  FontColor.addEventListener("input", updateFirst, false);
  FontColor.addEventListener("change", updateAll, false);
  FontColor.select();
}
function updateFirst(events) {
  var font = document.querySelector("#time-display");

  if (font) {
    font.style.color = events.target.value;
  }
}
function updateAll(events) {
  document.querySelectorAll("font").forEach(function (font) {
    font.style.color = events.target.value;
  });
}

// 背景色
var BackgroundColor;
var defaultColorB = "#ffffff";

window.addEventListener("load", startupF, false);
function startupF() {
  BackgroundColor = document.querySelector("#BackgroundColor");
  BackgroundColor.value = defaultColorB;
  BackgroundColor.addEventListener("input", updateFirstF, false);
  BackgroundColor.addEventListener("change", updateAllF, false);
  BackgroundColor.select();
}
function updateFirstF(eventF) {
  var back = document.querySelector("#display");

  if (back) {
    back.style.backgroundColor = eventF.target.value;
  }
}
function updateAllF(eventF) {
  document.querySelectorAll("back").forEach(function (back) {
    back.style.color = eventF.target.value;
  });
}

// フォント変更（jQuery使用）
$(function () {
  $('select').change(function () {
    var val = $(this).val();
    document.getElementById('time-display').style.fontFamily = val;
  });
});

// 文字サイズ(jQueryも使用)
$('#fontSize').on('input', function () {
  let val = $(this).val();
  $('#font-size-dis1').html(val);
  document.getElementById('time-display').style.fontSize = val + 'vw';
});

// 太字
window.addEventListener('DOMContentLoaded', function () {

  // チェックボックスのHTML要素を取得
  var input_agree = document.getElementById('fontBold');

  input_agree.addEventListener('change', function () {
    if (this.checked === true) {
      document.getElementById('time-display').style.fontWeight = 'bold';
    } else if (this.checked === false) {
      document.getElementById('time-display').style.fontWeight = 'normal';
    }
  });
});

// 斜体
window.addEventListener('DOMContentLoaded', function () {

  // チェックボックスのHTML要素を取得
  var input_agree = document.getElementById('fontItalic');

  input_agree.addEventListener('change', function () {
    if (this.checked === true) {
      document.getElementById('time-display').style.fontStyle = 'italic';
    } else if (this.checked === false) {
      document.getElementById('time-display').style.fontStyle = 'normal';
    }
  });
});

// 秒数非表示
window.addEventListener('DOMContentLoaded', function () {

  // チェックボックスのHTML要素を取得
  var input_agree = document.getElementById('noneSe');

  input_agree.addEventListener('change', function () {
    if (this.checked === true) {
      document.getElementById('Se').style.display = 'none';
    } else if (this.checked === false) {
      document.getElementById('Se').style.display = 'block';
    }
  });
});





// CSSコピー
document.getElementById('CssCopy').onclick = function () {
  var Copy = document.querySelector('#css-display-p').innerText;
  navigator.clipboard.writeText(Copy);
  window.alert('CSSをコピーしました');
}

// CSS表示
var CssDisplayBu = document.getElementById('CssDisplayBu');
CssDisplayBu.addEventListener("click", CssClick);

function CssClick() {
  // font-color-css
  var FontColorCSS = document.getElementById('font-color-css');
  FontColorCSS.innerHTML = FontColor.value

  // background-color-css
  var BackgroundColorCss = document.getElementById('background-color-css');
  BackgroundColorCss.innerHTML = BackgroundColor.value

  // 背景透過
  var backNone = document.getElementById('backTrans');
  if (backNone.checked === true) {
    document.getElementById('for-none').style.display = 'none';
  } else if (backNone.checked === false) {
    document.getElementById('for-none').style.display = 'block';
  }

  // font-family-css
  var fontFamilyCss = document.getElementById('font-css');
  fontFamilyCss.innerHTML = fontSelect.value

  // font-size-css
  var fontSizeCss = document.getElementById('font-size-css');
  fontSizeCss.innerHTML = fontSize.value

  // font-weight-css
  var FonWei = document.getElementById('fontBold');
  if (FonWei.checked === true) {
    var fontWeightCss = document.getElementById('font-weight-css');
    fontWeightCss.innerHTML = '&nbsp;&nbsp;' + fontBold.value + '<br>';
  } else if (FonWei.checked === false) {
    var fontWeightCss = document.getElementById('font-weight-css');
    fontWeightCss.innerHTML = '';
  }

  // font-style-css
  var FonSty = document.getElementById('fontItalic');
  if (FonSty.checked === true) {
    var fontStyleCss = document.getElementById('font-style-css');
    fontStyleCss.innerHTML = '&nbsp;&nbsp;' + fontItalic.value + '<br>';
  } else if (FonSty.checked === false) {
    var fontStyleCss = document.getElementById('font-style-css');
    fontStyleCss.innerHTML = '';
  }


  // 秒数非表示
  var backNone = document.getElementById('noneSe');
  if (backNone.checked === true) {
    document.getElementById('second-none').innerHTML = '#Se{<br>&nbsp;&nbsp;display: none;<br>}';
  } else if (backNone.checked === false) {
    document.getElementById('second-none').innerHTML = ''
  }

  // font-link
  var link = fontSelect.selectedIndex;
  var outSp = document.getElementById('font-link');

  switch (link) {
    case 1:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap");';
      break;
    case 2:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");';
      break;
    case 3:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap");';
      break;
    case 4:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Averia+Serif+Libre&display=swap");';
      break;
    case 5:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap");';
      break;
    case 6:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap");';
      break;
    case 7:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Chango&display=swap");';
      break;
    case 8:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Comfortaa&display=swap");';
      break;
    case 9:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap");';
      break;
    case 10:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Dosis&display=swap");';
      break;
    case 11:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=DotGothic16&display=swap");';
      break;
    case 12:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap");';
      break;
    case 13:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Inconsolata&display=swap");';
      break;
    case 14:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Karla&display=swap");';
      break;
    case 15:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Kenia&display=swap");';
      break;
    case 16:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Kiwi+Maru&display=swap");';
      break;
    case 17:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");';
      break;
    case 18:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Lexend&display=swap");';
      break;
    case 19:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");';
      break;
    case 20:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Lora&display=swap");';
      break;
    case 21:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Merriweather&display=swap");';
      break;
    case 22:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Monofett&display=swap");';
      break;
    case 23:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");';
      break;
    case 24:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=New+Tegomin&display=swap");';
      break;
    case 25:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap");';
      break;
    case 26:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");';
      break;
    case 27:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap");';
      break;
    case 28:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap");';
      break;
    case 29:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");';
      break;
    case 30:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap");';
      break;
    case 31:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");';
      break;
    case 32:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Orbitron&display=swap");';
      break;
    case 33:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");';
      break;
    case 34:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");';
      break;
    case 45:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Pangolin&display=swap");';
      break;
    case 36:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Parisienne&display=swap");';
      break;
    case 37:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Play&display=swap");';
      break;
    case 38:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap");';
      break;
    case 39:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");';
      break;
    case 40:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=PT+Sans&display=swap");';
      break;
    case 41:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=PT+Serif&display=swap");';
      break;
    case 42:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");';
      break;
    case 43:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap");';
      break;
    case 44:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap");';
      break;
    case 45:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap");';
      break;
    case 46:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");';
      break;
    case 47:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");';
      break;
    case 48:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Russo+One&display=swap");';
      break;
    case 49:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Sirin+Stencil&display=swap");';
      break;
    case 50:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");';
      break;
    case 51:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Teko&display=swap");';
      break;
    case 52:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Train+One&display=swap");';
      break;
    case 53:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Ubuntu&display=swap");';
      break;
    case 54:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Work+Sans&display=swap");';
      break;
    case 55:
      outSp.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=ZCOOL+QingKe+HuangYou&display=swap");';
      break;
  }
}


