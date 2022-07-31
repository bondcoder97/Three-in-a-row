// подсчет очков в функции clear_row
function check_score(i,j){
	if (biom[i][j] == 1) score += 90;
	if (biom[i][j] == 2) score += 75;
	if (biom[i][j] == 3) score += 60;
	if (biom[i][j] == 4) score += 60;
	if (biom[i][j] == 5) score += 75;
	if (biom[i][j] == 6) score += 90;
	// console.log('score = ',score);

	if (score_str < 7){
		if (score < 100) {
			score_str = 2;
			score_bg.innerHTML = '0000  ';
			score_info.innerHTML = '    ' + score;
		}
		if (score > 99 && score < 1000) {
			score_str = 3;
			score_bg.innerHTML = '000   ';
			score_info.innerHTML = '   ' + score;
		}
		if (score > 999 && score < 10000) {
			score_str = 4;
			score_bg.innerHTML = '00    ';
			score_info.innerHTML = '  ' + score;
		}
		if (score > 9999 && score < 100000) {
			score_str = 5;
			score_bg.innerHTML = '0     ';
			score_info.innerHTML = ' ' + score;
		}
		if (score > 99999 && score < 1000000) {
			score_str = 6;
			score_bg.innerHTML = '      ';
			score_info.innerHTML = '' + score;
		}
		if (score > 999999) {
			score_str = 7;
			score_bg.innerHTML = '      ';
			score_info.innerHTML = 888888;
		}
	}
}

// export {check_score};
