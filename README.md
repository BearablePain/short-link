start: npm i =>  npm run server

Основная задача:

Реализовать сервис "укорачивания" ссылок (aka goo.gl, bitly.com). Другими словами, реализовать серверную часть, UI пользователя и спроектировать структуру БД (если БД нужна).

Детали задачи:

Если 2 пользователя вводят ссылку "https://www.google.com/" в форме ввода, то оба получают один и тот же вариант короткой ссылки
По определённому адресу (например, "http://my-server/stats") должна быть доступна статистика:
id короткой ссылки

оригинальный адрес

кол-во переходов по короткой ссылке

jADJip

https://google.com

10

vzGMrl

https://ya.ru

1


Для улучшения отображения пользовательского UI можно взять любой CSS Framework.
 

Будет плюсом:

если код покрыт unit-тестами (jest/jasmine и другие)
реализовать SPA вместо статических html страниц (API + SPA)
реализовать консольную утилиту, которая будет работать с API (предыдущий пункт) и выполнять функции UI (детали задачи, пункт 2)
