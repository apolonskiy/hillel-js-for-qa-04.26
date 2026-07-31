# Використання базового образу Ubuntu
FROM node:24.18-slim

WORKDIR playwright-project

# Копіювання файлів проекту
COPY . .

# Видалення старих результатів тестування
RUN rm -rf playwright-report
RUN rm -rf test-results

# Встановлення необхідних пакетів in package.json
RUN npm i
RUN npx -y playwright@1.62.0 install --with-deps
RUN npx playwright install

# Виконання Node.js скрипта
ENTRYPOINT ["npm"]
CMD [ "run", "playwright:test:headless:chromium:qa1" ]