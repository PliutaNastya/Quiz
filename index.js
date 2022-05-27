const age = confirm('Есть ли вам 18 лет?');
let waking;

if (!age) {
    alert ('Вам запрещено проходить опрос');
} else {
    waking = Number(prompt('Во сколько вы встаете?', ''));

    if (isNaN(waking)) {
        alert('Некорректный ввод');
    } else if (waking <= 0 || waking > 24) {
        alert('Научись пользоваться часами!');
    } else if(waking > 0 && waking <= 5) {
        alert('Очень рано');
    } else if (waking > 5 && waking <= 8) {
        alert('Всё равно рано');
    } else if (waking > 8 && waking <=11) {
        alert('Нормально');
    } else if (waking > 11 && waking <= 14) {
        alert('Слишком поздно');
    } else if (waking > 14) {
        alert('Очень-очень поздно');
    } 
};
