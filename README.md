### Hexlet tests and linter status:
[![Actions Status](https://github.com/StrangerAlien/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/StrangerAlien/frontend-project-44/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/e48f580518343eb49395/maintainability)](https://codeclimate.com/github/StrangerAlien/frontend-project-44/maintainability)

«Игры разума» — набор из пяти консольных игр, построенных по принципу популярных мобильных приложений для прокачки мозга. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново. Игры:


    brain-calc - Калькулятор. Арифметические выражения, которые необходимо вычислить.

    brain-progression - Прогрессия. Поиск пропущенных чисел в последовательности чисел.

    brain-even - Определение четного числа.

    brain-gcd - Определение наибольшего общего делителя.

    brain-prime - Определение простого числа.

### Пример игры:
```
brain-progression
Welcome to the Brain Game!
What number is missing in the progression?
May I have your name? Aleksei
Hello, Aleksei!
Question: 14 .. 18 20 22 24 26 28
Your answer: 16 # Пользователь вводит ответ
Correct!
Question: 5 6 7 8 9 .. 11 12
Your answer: 10 # Пользователь вводит ответ
Correct!
Question: 12 15 18 21 .. 27 30 33
Your answer: 24 # Пользователь вводит ответ
Correct!
Congratulations, Aleksei!
```
## Dependencies

- node.js: ^22.8.0
- readline-sync: ^1.4.10
- lodash: ^4.17.21

## Install

```bash
git clone https://github.com/StrangerAlien/frontend-project-44

cd frontend-project-44/

make install
```