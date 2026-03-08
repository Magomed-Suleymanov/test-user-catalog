# Каталог пользователей

Страница-каталог пользователей на React + TypeScript с использованием публичного API [dummyjson.com](https://dummyjson.com).

## Возможности

- Список пользователей с пагинацией (12 карточек на странице)
- Поиск по имени с debounce-задержкой
- Адаптивная сетка карточек
- Skeleton-заглушки во время загрузки
- Светлая / тёмная тема (по системным настройкам)
- Доступная разметка (ARIA-атрибуты, семантический HTML)

## Технологии

- **React 19** + **TypeScript** — UI
- **Vite** — сборщик и dev-сервер
- **TanStack Query (React Query)** — запросы, кэширование, фоновое обновление
- **Axios** — HTTP-клиент
- **CSS Modules** — изолированные стили компонентов
- **Prettier** — форматирование кода
- **ESLint** — линтинг
- **Husky + lint-staged** — pre-commit хуки: форматирование и линтинг staged-файлов

## Запуск

### Требования

- Node.js ≥ 18

### Установка и запуск в режиме разработки

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

### Сборка для продакшна

```bash
npm run build
npm run preview
```

## Скрипты

| Команда            | Описание                            |
| ------------------ | ----------------------------------- |
| `npm run dev`      | Запуск dev-сервера                  |
| `npm run build`    | Сборка для продакшна                |
| `npm run preview`  | Предпросмотр сборки                 |
| `npm run lint`     | Проверка линтером                   |
| `npm run lint:fix` | Автоисправление ошибок линтера      |
| `npm run prettify` | Форматирование всех файлов Prettier |

## Структура проекта

```
src/
├── api/                    # Axios-запросы к API
├── app/                    # Корневой компонент и его стили
├── components/             # Фичевые компоненты
│   ├── Pagination/
│   ├── SearchBar/
│   ├── SkeletonCard/
│   └── UserCard/
├── constants/              # Общие константы (PAGE_LIMIT)
├── hooks/                  # Кастомные хуки (useUsers, useDebounce)
├── models/                 # TypeScript-интерфейсы
├── shared/
│   └── components/         # Переиспользуемые UI-примитивы
│       ├── Button/
│       ├── EmptyState/
│       ├── ErrorMessage/
│       └── Input/
└── utils/                  # Утилиты (cn)
```

## Алиасы путей

| Алиас         | Путь              |
| ------------- | ----------------- |
| `@`           | `src/`            |
| `@api`        | `src/api/`        |
| `@app`        | `src/app/`        |
| `@components` | `src/components/` |
| `@constants`  | `src/constants/`  |
| `@hooks`      | `src/hooks/`      |
| `@models`     | `src/models/`     |
| `@shared`     | `src/shared/`     |
| `@utils`      | `src/utils/`      |
