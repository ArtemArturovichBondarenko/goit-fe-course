const ADMIN_PASSWORD = 'q123';

let message = prompt('Введите пароль');
if (message === null) {
  console.log('Отменено пользователем!');
} else if (message === ADMIN_PASSWORD) {
  console.log('Добро пожаловать!');
} else if (message !== null || message !== ADMIN_PASSWORD) {
  console.log('Доступ запрещен, неверный пароль!');
}
alert(message);
