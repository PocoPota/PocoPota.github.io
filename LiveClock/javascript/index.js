function showClock() {
  var nowTime = new Date();

  var Year = nowTime.getFullYear();
  var Month = nowTime.getMonth();
  var day = nowTime.getDay();
  var dayOfWeeks = ["日", "月", "火", "水", "木", "金", "土",][day];
  var Hour = nowTime.getHours();
  var Min = nowTime.getMinutes();
  var Sec = nowTime.getSeconds();

  document.getElementById('HM').innerHTML = (("0"+Hour).slice(-2)) + ":" + (("0"+Min).slice(-2));
  document.getElementById('Se').innerHTML = ":" + (("0"+Sec).slice(-2));

  // var ymdd = Year + "年" + Month + "月" + day + "日" + dayOfWeeks + "曜日";
  // document.getElementById("date-display").innerHTML = ymdd;
}
setInterval('showClock()', 1000);