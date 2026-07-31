# Використання базового образу Ubuntu
FROM cypress/included:15.18.0

WORKDIR cypress-project

# Копіювання файлів проекту
COPY . .

# Видалення старих результатів тестування
RUN rm -rf allure-results
RUN rm -rf cypress/reports
RUN rm -rf cypress/screenshots
RUN rm -rf cypress/videos
RUN rm -rf runner-results

# Встановлення необхідних пакетів in package.json
RUN npm i

# Виконання Node.js скрипта
ENTRYPOINT ["npm"]
CMD [ "run", "cypress:run:firefox:node-prod:headless" ]