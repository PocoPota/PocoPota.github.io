function gacha(){
    var random = Math.floor( Math.random() * 17 ) ;

    switch(random){
        case 0:
            var bgm = 'q-tTJlz79_c'; //しゅわしゅわ
            break;
        case 1:
            var bgm = '9wsByyGJI14&t'; //さみしいおばけ
            break;
        case 2:
            var bgm = 'HT6q8GqDHPA&t'; //週末京都現実逃避
            break;
        case 3:
            var bgm = 'JAC2KCbbvmc&t'; //サンタは中央線で
            break;
        case 4:
            var bgm = 'djl6znXfyMk'; //SUMMER TRIANGLE
            break;
        case 5:
            var bgm = 'rWduBA8LWgo&t'; //極東のひつじ
            break;
        case 6:
            var bgm = 'Yb-rLsCpBvI&t'; //2:23AM
            break;
        case 7:
            var bgm = 'waz0YopWY28&t'; //人狼の為の
            break;
        case 8:
            var bgm = 'h6VdSjyUbbo&t'; //10℃
            break;
        case 9:
            var bgm = '_T-JMKRjQSY'; //ヒダマリトロニカ
            break;
        case 10:
            var bgm = 'W0aqipKBcVY'; //神隠し
            break;
        case 11:
            var bgm = 'MhqE4FqF0aM&t'; //おどれグロッケンシュピール
            break;
        case 12:
            var bgm = 'CPpMnyvBWdM'; //野良猫
            break;
        case 13:
            var bgm = 'u1inSXny700&t'; //Morning
            break;
        case 14:
            var bgm = 'C_6SLgOZ3HY&t'; //Cassette Tape Dream
            break;
        case 15:
            var bgm = 'FbZoJpRm0H4&t'; //アトリエと電脳世界
            break;
        case 16:
            var bgm = 'gkvz6l1W0g8&t'; //You and Me
            break;
        case 17:
            var bgm = 'oW8cdNm9b8k&t'; //Parade
            break;
    }
    console.log(bgm);
    var iframe = '<iframe src="https://www.youtube.com/embed/' + bgm + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

    document.getElementById('gacha').style.display = 'none';
    document.getElementById('bgm-display').style.display = 'flex';

    document.getElementById('bgm-display').innerHTML = iframe;
}
