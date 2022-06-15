# Тестовое проект новостей без авторизации

## Установка

Обязательна [Node.js](https://nodejs.org/) v16 не выше (на 17 и 18 есть баги и зависимости не стартуют).

Устанавливаем бэк
```sh
cd backend
composer install
php artisan key:generate
```
Настраиваем .env для подключения к БД
Делаем миграцию Laravel
```sh
php artisan migrate
```

Дальше на выбор, обычная vue.js
```sh
cd "frontend only vue 3"
npm i
npm run serve
```
или nuxt.js, он же SSR для SEO
```sh
cd "frontend ssr (vue2 + start)"
npm i
npm run serve
```

##### Незабываем про API - нужно настроить URL, если он будет не на локалке.
В папке **frontend ssr (vue2 + start)** файл ``nuxt.config.js`` строка 26
В папке **frontend only vue 3** файл ``src\main.js`` строка 11

