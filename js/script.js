let keys = document.querySelectorAll('li'),
    chord = document.querySelectorAll('.chord'),
	isOver = false;
// Функция stop для Audio
HTMLAudioElement.prototype.stop = function(){
	this.pause();
	this.currentTime = 0.0;
}
// Программирование клавиш
for (let i = 0; i<keys.length; i++){
	keys[i].ondragstart = () => {
		return false;
	}
	document.onmousedown = () => {
		isOver = true;
		chordStop();
	}
	document.onmouseup = () => {
		isOver = false;
	}
	let sound = keys[i].childNodes[1];
	// Нажатие мышью
	keys[i].onmouseover = () => {
		keys[i].onmousedown = () => {
			isOver = true;
			keys[i].classList.add('active');
			sound.play();
		}
		keys[i].onmouseup = () => {
			isOver = false;
			keys[i].classList.remove('active');
			sound.stop();
		}
		if(isOver == true){
			keys[i].classList.add('active');
			sound.play();
		}
		else{
			keys[i].classList.remove('active');
			sound.stop();
		}
	}
	keys[i].onmouseout = () => {
		keys[i].classList.remove('active');
		sound.stop();
	}
}
// Нажатие клавиатурой
let key = 0,
	keyVal = '';
document.onkeypress = (e) => {
	// Предотварщение повторного нажатия при удержании
	if (keyVal === e.key) {
		return;
	}
	keyVal = e.key;
	// Срабатывание клавиш
	sound = keys[key].childNodes[1];

	if (e.code == 'KeyQ'){
		key = 0;
		keySound();
	}
	if (e.code == 'Digit2'){
		key = 1;
		keySound();
	}
	if (e.code == 'KeyW'){
		key = 2;
		keySound();
	}
	if (e.code == 'Digit3'){
		key = 3;
		keySound();
	}
	if (e.code == 'KeyE'){
		key = 4;
		keySound();
	}
	if (e.code == 'Digit4'){
		key = 5;
		keySound();
	}
	if (e.code == 'KeyR'){
		key = 6;
		keySound();
	}
	if (e.code == 'Digit5'){
		key = 7;
		keySound();
	}
	if (e.code == 'KeyT'){
		key = 8;
		keySound();
	}
	if (e.code == 'Digit6'){
		key = 9;
		keySound();
	}
	if (e.code == 'KeyY'){
		key = 10;
		keySound();
	}
	if (e.code == 'Digit7'){
		key = 11;
		keySound();
	}
	if (e.code == 'KeyU'){
		key = 12;
		keySound();
	}
	if (e.code == 'Digit8'){
		key = 13;
		keySound();
	}
	if (e.code == 'KeyI'){
		key = 14;
		keySound();
	}
	if (e.code == 'Digit9'){
		key = 15;
		keySound();
	}
	if (e.code == 'KeyO'){
		key = 16;
		keySound();
	}
	if (e.code == 'Digit0'){
		key = 17;
		keySound();
	}
	if (e.code == 'KeyP'){
		key = 18;
		keySound();
	}
	if (e.code == 'Minus'){
		key = 19;
		keySound();
	}
	if (e.code == 'BracketLeft'){
		key = 20;
		keySound();
	}
	if (e.code == 'Equal'){
		key = 21;
		keySound();
	}
	if (e.code == 'BracketRight'){
		key = 22;
		keySound();
	}
	if (e.code == 'KeyA'){
		key = 23;
		keySound();
	}
	if (e.code == 'KeyZ'){
		key = 24;
		keySound();
	}
	if (e.code == 'KeyS'){
		key = 25;
		keySound();
	}
	if (e.code == 'KeyX'){
		key = 26;
		keySound();
	}
	if (e.code == 'KeyD'){
		key = 27;
		keySound();
	}
	if (e.code == 'KeyC'){
		key = 28;
		keySound();
	}
	if (e.code == 'KeyF'){
		key = 29;
		keySound();
	}
	if (e.code == 'KeyV'){
		key = 30;
		keySound();
	}
	if (e.code == 'KeyG'){
		key = 31;
		keySound();
	}
	if (e.code == 'KeyB'){
		key = 32;
		keySound();
	}
	if (e.code == 'KeyH'){
		key = 33;
		keySound();
	}
	if (e.code == 'KeyN'){
		key = 34;
		keySound();
	}
	if (e.code == 'KeyJ'){
		key = 35;
		keySound();
	}
	if (e.code == 'KeyM'){
		key = 36;
		keySound();
	}
	if (e.code == 'KeyK'){
		key = 37;
		keySound();
	}
	if (e.code == 'Comma'){
		key = 38;
		keySound();
	}
	if (e.code == 'KeyL'){
		key = 39;
		keySound();
	}
	if (e.code == 'Period'){
		key = 40;
		keySound();
	}
	if (e.code == 'Semicolon'){
		key = 41;
		keySound();
	}
	if (e.code == 'Slash'){
		key = 42;
		keySound();
	}
	if (e.code == 'Quote'){
		key = 43;
		keySound();
	}
	if (e.code == 'Backslash'){
		key = 44;
		keySound();
	}
	if (e.code == 'Backquote'){
		key = 45;
		keySound();
	}
	function keySound(){
		keys[key].classList.add('active');
		sound = keys[key].childNodes[1];
		sound.play();
	}
}
// Отпускание клавиш
document.onkeyup = (e) => {
	if (e.code == 'KeyQ'){
		key = 0;
	}
	if (e.code == 'Digit2'){
		key = 1;
	}
	if (e.code == 'KeyW'){
		key = 2;
	}
	if (e.code == 'Digit3'){
		key = 3;
	}
	if (e.code == 'KeyE'){
		key = 4;
	}
	if (e.code == 'Digit4'){
		key = 5;
	}
	if (e.code == 'KeyR'){
		key = 6;
	}
	if (e.code == 'Digit5'){
		key = 7;
	}
	if (e.code == 'KeyT'){
		key = 8;
	}
	if (e.code == 'Digit6'){
		key = 9;
	}
	if (e.code == 'KeyY'){
		key = 10;
	}
	if (e.code == 'Digit7'){
		key = 11;
	}
	if (e.code == 'KeyU'){
		key = 12;
	}
	if (e.code == 'Digit8'){
		key = 13;
	}
	if (e.code == 'KeyI'){
		key = 14;
	}
	if (e.code == 'Digit9'){
		key = 15;
	}
	if (e.code == 'KeyO'){
		key = 16;
	}
	if (e.code == 'Digit0'){
		key = 17;
	}
	if (e.code == 'KeyP'){
		key = 18;
	}
	if (e.code == 'Minus'){
		key = 19;
	}
	if (e.code == 'BracketLeft'){
		key = 20;
	}
	if (e.code == 'Equal'){
		key = 21;
	}
	if (e.code == 'BracketRight'){
		key = 22;
	}
	if (e.code == 'KeyA'){
		key = 23;
	}
	if (e.code == 'KeyZ'){
		key = 24;
	}
	if (e.code == 'KeyS'){
		key = 25;
	}
	if (e.code == 'KeyX'){
		key = 26;
	}
	if (e.code == 'KeyD'){
		key = 27;
	}
	if (e.code == 'KeyC'){
		key = 28;
	}
	if (e.code == 'KeyF'){
		key = 29;
	}
	if (e.code == 'KeyV'){
		key = 30;
	}
	if (e.code == 'KeyG'){
		key = 31;
	}
	if (e.code == 'KeyB'){
		key = 32;
	}
	if (e.code == 'KeyH'){
		key = 33;
	}
	if (e.code == 'KeyN'){
		key = 34;
	}
	if (e.code == 'KeyJ'){
		key = 35;
	}
	if (e.code == 'KeyM'){
		key = 36;
	}
	if (e.code == 'KeyK'){
		key = 37;
	}
	if (e.code == 'Comma'){
		key = 38;
	}
	if (e.code == 'KeyL'){
		key = 39;
	}
	if (e.code == 'Period'){
		key = 40;
	}
	if (e.code == 'Semicolon'){
		key = 41;
	}
	if (e.code == 'Slash'){
		key = 42;
	}
	if (e.code == 'Quote'){
		key = 43;
	}
	if (e.code == 'Backslash'){
		key = 44;
	}
	if (e.code == 'Backquote'){
		key = 45;
	}
	keys[key].classList.remove('active');
	sound = keys[key].childNodes[1];
	sound.stop();
	keyVal = '';
}

// Программирование аккордов
let chordNotes = [],
	chordPlayed = false;

chord.forEach((chordItem) => {
	chordItem.addEventListener('click', chordPlay);
	for(let i = 0; i<keys.length; i++){
		keys[i].classList.remove('active');
		keys[i].childNodes[1].stop();
	}
});

function chordPlay(e){
	chordPlayed = true;
	for(let i = 0; i<chord.length; i++){
		if(e.target.innerHTML == 'C'){
			chordNotes = [7, 11, 14, 19];
		}
		if(e.target.innerHTML == 'C7'){
			chordNotes = [7, 11, 14, 17];
		}
		if(e.target.innerHTML == 'Cm'){
			chordNotes = [7, 10, 14, 19];
		}
		if(e.target.innerHTML == 'Cm7'){
			chordNotes = [7, 10, 14, 17];
		}

		if(e.target.innerHTML == 'Db'){
			chordNotes = [8, 12, 15, 20];
		}
		if(e.target.innerHTML == 'Db7'){
			chordNotes = [8, 12, 15, 18];
		}
		if(e.target.innerHTML == 'Dbm'){
			chordNotes = [8, 11, 15, 20];
		}
		if(e.target.innerHTML == 'Dbm7'){
			chordNotes = [8, 11, 15, 18];
		}

		if(e.target.innerHTML == 'D'){
			chordNotes = [9, 13, 16, 21];
		}
		if(e.target.innerHTML == 'D7'){
			chordNotes = [9, 13, 16, 19];
		}
		if(e.target.innerHTML == 'Dm'){
			chordNotes = [9, 12, 16, 21];
		}
		if(e.target.innerHTML == 'Dm7'){
			chordNotes = [9, 12, 16, 19];
		}

		if(e.target.innerHTML == 'Eb'){
			chordNotes = [10, 14, 17, 22];
		}
		if(e.target.innerHTML == 'Eb7'){
			chordNotes = [10, 14, 17, 20];
		}
		if(e.target.innerHTML == 'Ebm'){
			chordNotes = [10, 13, 17, 22];
		}
		if(e.target.innerHTML == 'Ebm7'){
			chordNotes = [10, 13, 17, 20];
		}

		if(e.target.innerHTML == 'E'){
			chordNotes = [11, 15, 18, 23];
		}
		if(e.target.innerHTML == 'E7'){
			chordNotes = [11, 15, 18, 21];
		}
		if(e.target.innerHTML == 'Em'){
			chordNotes = [11, 14, 18, 23];
		}
		if(e.target.innerHTML == 'Em7'){
			chordNotes = [11, 14, 18, 21];
		}

		if(e.target.innerHTML == 'F'){
			chordNotes = [12, 16, 19, 24];
		}
		if(e.target.innerHTML == 'F7'){
			chordNotes = [12, 16, 19, 22];
		}
		if(e.target.innerHTML == 'Fm'){
			chordNotes = [12, 15, 19, 24];
		}
		if(e.target.innerHTML == 'Fm7'){
			chordNotes = [12, 15, 19, 22];
		}

		if(e.target.innerHTML == 'Gb'){
			chordNotes = [13, 17, 20, 25];
		}
		if(e.target.innerHTML == 'Gb7'){
			chordNotes = [13, 17, 20, 23];
		}
		if(e.target.innerHTML == 'Gbm'){
			chordNotes = [13, 16, 20, 25];
		}
		if(e.target.innerHTML == 'Gbm7'){
			chordNotes = [13, 16, 20, 23];
		}

		if(e.target.innerHTML == 'G'){
			chordNotes = [14, 18, 21, 26];
		}
		if(e.target.innerHTML == 'G7'){
			chordNotes = [14, 18, 21, 24];
		}
		if(e.target.innerHTML == 'Gm'){
			chordNotes = [14, 17, 21, 26];
		}
		if(e.target.innerHTML == 'Gm7'){
			chordNotes = [14, 17, 21, 24];
		}

		if(e.target.innerHTML == 'Ab'){
			chordNotes = [15, 19, 22, 27];
		}
		if(e.target.innerHTML == 'Ab7'){
			chordNotes = [15, 19, 22, 25];
		}
		if(e.target.innerHTML == 'Abm'){
			chordNotes = [15, 18, 22, 27];
		}
		if(e.target.innerHTML == 'Abm7'){
			chordNotes = [15, 18, 22, 25];
		}

		if(e.target.innerHTML == 'A'){
			chordNotes = [16, 20, 23, 28];
		}
		if(e.target.innerHTML == 'A7'){
			chordNotes = [16, 20, 23, 26];
		}
		if(e.target.innerHTML == 'Am'){
			chordNotes = [16, 19, 23, 28];
		}
		if(e.target.innerHTML == 'Am7'){
			chordNotes = [16, 19, 23, 26];
		}

		if(e.target.innerHTML == 'Bb'){
			chordNotes = [17, 21, 24, 29];
		}
		if(e.target.innerHTML == 'Bb7'){
			chordNotes = [17, 21, 24, 27];
		}
		if(e.target.innerHTML == 'Bbm'){
			chordNotes = [17, 20, 24, 29];
		}
		if(e.target.innerHTML == 'Bbm7'){
			chordNotes = [17, 20, 24, 27];
		}

		if(e.target.innerHTML == 'B'){
			chordNotes = [18, 22, 25, 30];
		}
		if(e.target.innerHTML == 'B7'){
			chordNotes = [18, 22, 25, 28];
		}
		if(e.target.innerHTML == 'Bm'){
			chordNotes = [18, 21, 25, 30];
		}
		if(e.target.innerHTML == 'Bm7'){
			chordNotes = [18, 21, 25, 28];
		}
	}
	for (let k = 0; k<chordNotes.length; k++){
		keys[chordNotes[k]].classList.add('active');
		sound = keys[chordNotes[k]].childNodes[1];
		sound.play();
	}
}

function chordStop(){
	for(let k = 0; k<chord.length; k++){
		if(chordPlayed == true){
			chordPlayed = false;
			for(let i = 0; i<keys.length; i++){
				keys[i].classList.remove('active');
				keys[i].childNodes[1].stop();
			}
		}
		else{
			return;
		}
	}
}
