// import {game} from '../main.js';
// выбор количества заполненных начальных строк

game.m.setBalls = function(){
	clearInterval(showMenuOption);
	game.fild.h = filling.value;

	let date2 = Date.now();
	showMenuOption = setInterval( ()=> {
		if((Date.now() - date2) > game.interval.showMenuS) {
			clearInterval(showMenuOption);
			if (!game.selectors.option_box.classList.contains('ani')) {
				game.selectors.option_box.classList.toggle('ani');
			}
			if (game.selectors.option.classList.contains('ani')) {
				game.selectors.option.classList.toggle('ani');
			}
		}
	}, 900);
}


// export {game};
