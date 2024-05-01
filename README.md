# vue-users-search

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Задание
Необходимо реализовать страницу поиска сотрудников, с предпросмотром профиля.

Приложение состоит из двух страниц, в sidebar осуществляется поиск и отображение результатов.

На главной отображается карточка пользователя с личными данными.

Готовый проект выложите на github.
Учесть при выполнении ТЗ:
- Можно искать, как одного пользователя, так и нескольких (допустим Bret, 	Antonette).
- Поиск должен работать по полю id и полю username либо name, на ваше усмотрение.
- При выборе способа получения пользователя(пользователей) и фильтрации учитывать, что их может быть больше 2000 человек.
- При изменении состояния в sidebar, страница с профилем пользователя должна менять свое состояние, т.е если открыт профиль пользователя и потом решили удалить все из строки поиска, очищается список найденных пользователей, и страница отображения профиля возвращается в исходное состояние.
Sidebar                                                                                                                                                            
- В строке поиска пользователя необходимо реализовать запрос к API для получения необходимых юзеров.
- В случае если результат вернул ошибку (параметры запроса неверные, либо ошибка сервера), необходимо отобразить эту ошибку пользователю.
- После успешно выполненного запроса, необходимо отобразить полученного пользователя или пользователей в интерфейсе.

Шрифт
В проекте используется шрифт Montserrat https://fonts.google.com/specimen/Montserrat

Обязательно:

1.SPA должно быть реализовано с использованием Vue,Vuex.

2.Необходимо создать основные компоненты.

3.Использовать actions, mutations.

3.Стили должны быть написаны с помощью препроцессора Scss

4.Во время всех запросов нужно сигнализировать пользователю через прелоадер, что происходит запрос.

5.Использовать изоляцию стилей.

Документация API
https://jsonplaceholder.typicode.com

Пример запроса для одного пользователя по id:
https://jsonplaceholder.typicode.com/users?id=1
method: GET

Пример запроса для нескольких пользователей по id:
https://jsonplaceholder.typicode.com/users?id=1&id=2
method: GET
