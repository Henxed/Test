# Тестовое проект новостей без авторизации

## Установка

Обязательна [Node.js](https://nodejs.org/) v18+

Устанавливаем бэк
```sh
cd backend
composer install
copy('.env.example', '.env')
php artisan key:generate
php artisan migrate
```
Настраиваем .env для подключения к БД
Делаем миграцию Laravel
```sh
php artisan migrate
php artisan serve
```

Дальше на выбор, обычная vue.js
```sh
cd "frontend only vue 3"
npm i
npm update
npm run serve #для локалки\разработки
npm run build #для продакшена
```
или nuxt.js, он же SSR для SEO (он должен быть супервизоре или pm2)
```sh
cd "frontend ssr (vue2 + start)"
npm i
npm update
npm run serve
```

##### Незабываем про API - нужно настроить URL, если он будет не на локалке.
- В папке **frontend ssr (vue2 + start)** файл ``nuxt.config.js`` строка 26
- В папке **frontend only vue 3** файл ``src\main.js`` строка 11

