var nick = prompt('Adınızı bağışlar mısınız ?');

document.querySelector('#name').innerHTML = nick;
const zaman = document.querySelector('#saat');

function Second() {
	var tarih = new Date();

	var saat = tarih.getHours();
	var dakika = tarih.getMinutes();
	var saniye = tarih.getSeconds();
	var gun = tarih.getDay();

	if (gun == 0) {
		gun = 'Pazar';
	} else if (gun == 1) {
		gun = 'Pazartesi';
	} else if (gun == 2) {
		gun = 'Salı';
	} else if (gun == 3) {
		gun = 'Çarşamba';
	} else if (gun == 4) {
		gun = 'Perşembe';
	} else if (gun == 5) {
		gun = 'Cuma';
	} else if (gun == 6) {
		gun = 'Cumartesi';
	}

	if (dakika < 10) dakika = '0' + dakika;
	if (saat < 10) saat = '0' + saat;
	if (saniye < 10) saniye = '0' + saniye;

	zaman.innerHTML = `🕑${saat}:${dakika}:${saniye}  ${gun}`;

	if (zaman.classList.contains('nonvisible'))
		document.querySelector('.btn').addEventListener('click', function () {
			zaman.classList.remove('nonvisible');
		});

	setTimeout(Second, 1000);
}

Second();
