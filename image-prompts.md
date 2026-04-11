# Промпты для генерации изображений — Линни

Лендинг обходится без растровых картинок: hero использует CSS phone mockup,
feature-блоки — CSS-скрины приложения. Два изображения всё же нужны.

---

## 1. Логотип приложения

**Файл:** `landing/logo.png`  
**Статус:** ❌ отсутствует — скопируйте иконку из чата в эту папку.  
**Требования:** PNG, прозрачный фон, минимум 180×180 px, квадрат (border-radius применяется через CSS).

---

## 2. OG-изображение для соцсетей

**Файл:** `landing/og-image.png`  
**Размер:** 1200×630 px  
**Используется:** `<meta property="og:image">` — превью при шеринге в Telegram, ВК, соцсетях.

После генерации прописать в index.html:
```html
<meta property="og:image" content="og-image.png">
```

### Промпт для Nano Banana / Midjourney / DALL-E:

**Вариант A (с телефоном):**
> Dark green gradient background, from deep forest green #145238 at top-left to medium green #2d9e6b at bottom-right. On the left: a white rounded-square app icon showing a stylized car silhouette with a small document/notepad overlay, white text "Линни" below it. On the right: white bold Russian text headline "Цифровая сервисная книжка" (large), below it smaller text "Прямо в мессенджере MAX · Бесплатно". In the center-right: a semi-transparent iPhone mockup showing a car list app screen. Clean, minimal, professional. 1200x630px. No English text.

**Вариант B (типографика):**
> Horizontal banner 1200x630px. Dark rich green gradient background (#145238 → #2d9e6b). Left side: large white Линни logo (rounded square icon + wordmark). Center: white bold headline in Russian "Вся история вашего автомобиля — прямо в MAX", subtitle "Сервисная книжка · Без регистрации · Бесплатно". Right side: three stacked white cards showing car service records with category badges (blue ТО, orange Ремонт, green Расходники). Minimal, clean, modern design.

---

## 3. Опционально: скриншоты для feature-блоков

Сейчас feature-блоки используют CSS-скрины (чисто вёрстка). Если захотите
заменить на реальные скриншоты после разработки приложения — размер 680×480 px,
соотношение примерно 3:2.

**Файлы (когда будут готовы):**
- `landing/screen-garage.png` — экран «Мой гараж»
- `landing/screen-records.png` — экран «История автомобиля»
- `landing/screen-stats.png` — экран «Статистика»
- `landing/screen-share.png` — экран «Передать историю»
