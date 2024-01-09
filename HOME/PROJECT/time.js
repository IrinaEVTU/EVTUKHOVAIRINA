
Li();
setInterval(Li, 100);

function Li() {
    d = new Date();
    var month = new Array("января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря");
    var week = new Array("воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота");
    document.getElementById('d').getElementsByTagName('li')[0].innerHTML = 'Дата: ' + d.getDate() + ' ' + month[d.getMonth()] + ' ' + d.getFullYear() + ' года, ' + week[d.getDay()];
    document.getElementById('d').getElementsByTagName('li')[1].innerHTML = 'Время: ' + ((d.getHours() < 10) ? "0" : "") + d.getHours() + ':' + ((d.getMinutes() < 10) ? "0" : "") + d.getMinutes() + ':' + ((d.getSeconds() < 10) ? "0" : "") + d.getSeconds();
}

