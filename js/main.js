// import {game} from './modules/keys.js';
// import {game} from './modules/biom_push.js';
// import {game} from './modules/move_ball.js';
// import {game} from './modules/find_and_del_row.js';
// import {game} from './modules/setBalls.js';
// import {game} from './modules/start_game.js';

// Эмуляция импорта xD
document.write('<script src="./js/modules/keys.js"></script>');
document.write('<script src="./js/modules/biom_push.js"></script>');
document.write('<script src="./js/modules/move_ball.js"></script>');
document.write('<script src="./js/modules/find_and_del_row.js"></script>');
document.write('<script src="./js/modules/setBalls.js"></script>');
document.write('<script src="./js/modules/start_game.js"></script>');

const game = {
	interval:{
		interval:0,         // основной интервал движения шаров
		showMenuInfo:0,     // интервал закрытия меню информации
		showMenuOption:0,   // интервал закрытия меню опций
		interval_del:0,     // интервал удаления шаров - для анимации

		timeByStep:420,     // время прохождения шаром одной клетки ms
		timeClearStep:450,  // время на удаления элементов ms
		showMenu:5000,      // время на отображение меню информации в showInfo(),showOption()
		showMenuS:7000,     // время на отображение меню опций при настройке скролла в setBalls()
	},
	status:{
		find_row: false,    // статус обнаружения 3-х в ряд
		start_game: false,  // статус игры - для паузы
		game: false,        // статуc запуска новой игры
		ball: false,        // нужно ли выпускать новый шар
		clear: 0,           // статус очистки от 3-х в ряд: 0 - не требуется
		add: false,         // статус для добалвения шара вниз биома
		ask:-1,             // вопрос о прерывании игры: 1 - при запуске новой игры, 0 - при GG
		dabl_N_key:0,       // при повторном нажатии (после вопроса) кнопки новой игры - новая игра
		dabl_G_key:0,       // при повторном нажатии (после вопроса) кнопки конца игры - конец игры
	},
	fild:{
		biom:[],       // основное поле данных
		biom_boom:[],  // биом для удаления 3-х в ряд из основного биома
		x: 11,          // ширина поля
		y: 18,          // высота поля
		h:7,           // количество заполненных линий на старте
		score_1:90,    // очки за шар при совпадении 3-х в ряд
		score_2:75,    // очки за шар при совпадении 3-х в ряд
		score_3:60,    // очки за шар при совпадении 3-х в ряд
	},

	m:{               // методы
		start_game:0,  // подготовка к началу игры - отображение в HTML
		biom_push:0,   // обновление элементов в биоме
		keys:0,        // прослушивание клавиш
		game_start:0,  // начало игры
		pause:0,       // пауза
		game_over:0,   // конец игры
		ask:0,         // подтверждение новой игры или GG
		showOption:0,  // показать/скрыть меню опций
		showInfo:0,    // показать/скрыть меню инфо
		to_left:0,
		to_down:0,
		to_right:0,
		boom:0,        // заполнение массвива при поиске 3-х в ряд
		clear_row:0,   // удаление 3-х в ряд
		move_ball:0,   // отображение анимации падения шара
		check_score:0, // подсчет отчков
		addBall:0,     // добавляет шар в нижнюю доступную точку
		setBalls:0,    // выбор количества заполненных начальных строк
	},

	selectors:{       // селекторы
		game_menu: document.querySelector('.game_menu'),
		btn_start: document.querySelector('.btn_start'),
		option_btn_start: document.querySelector('.option_btn_start'),

		fild_box: document.querySelector('.fild_box'),  // фоновое поле
		biom_box: document.querySelector('.biom_box'),  // основное поле

		option: document.querySelector('.option'), // иконка меню информации (кнопка открытия меню)
		info: document.querySelector('.info'),     // иконка меню информации (кнопка открытия меню)
		option_box: document.querySelector('.option_box'), // меню опций
		info_box: document.querySelector('.info_box'),     // меню информации

		score_bg: document.querySelector('.score_bg'),
		score_info: document.querySelector('.score_info'),
		filling: document.querySelector('.filling'),

		message: document.querySelector('.message'),
		ask: document.querySelector('.ask'),
		btn_ask: document.querySelectorAll('.btn_ask'),
	},

	score:0,          // счетчик набранных очков
	score_str:0,      // для отображения набранных очков
	ball_x:0,         // текущая коорданата падающего шара по Х
	ball_y:0,         // текущая коорданата падающего шара по Y
}

// game.start_game();

// export {game};
