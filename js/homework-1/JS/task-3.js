const ADMIN_PASSWORD = 'q123';

let message = prompt('Введите пароль');
if (message === null) {
  console.log('Отменено пользователем!');
} else if (message === 'q123') {
  console.log('Добро пожаловать!');
} else if (message !== null || message !== 'q123') {
  console.log('Доступ запрещен, неверный пароль!');
}
alert(message);
