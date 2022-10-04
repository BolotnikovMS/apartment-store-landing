const scenario_1 = {
  question_2: {
    questionText: 'Семейное положение',
    answers: ['Квартира приобреталась в браке', 'Ипотека выплачивалась в браке', 'Квартира приобреталась и выплачивалась не в бракев']
  },
  question_3: {
    questionText: 'Несовершенолетние',
    answers: ['В квартире есть собственники-несовершеннолетние', 'В квартире зарегистрированы несовершенолетние']
  },
  question_4: {
    questionText: 'Квартира приобреталась с использованием кредитных средств, ипотека?',
    answers: ['Да', 'Нет']
  },
  question_5: {
    questionText: 'При покупке использовался материнский капитал?',
    answers: ['Да', 'Нет']
  },
  question_6: {
    questionText: 'Квартира находится в доме-памятнике?',
    answers: ['Вновь выявленный объект культурного наследия', 'Памятник архитектуры со списком непередаваемых элементов', 'Памятник архитектуры']
  },
  question_7: {
    questionText: 'В квартире есть сохранившие право пользования?',
    answers: ['Да', 'Не знаю', 'Нет']
  },
  question_8: {
    questionText: 'Планируете ли при продаже покупать альтернативную квартиру?',
    answers: ['Да', 'Нет']
  },
}

const interview = document.forms['interview']
const btnNext = document.querySelector('.intstart__btn')

interview.addEventListener('submit', (e) => {
  e.preventDefault()

  let answer = interview.selection.value
  console.log(answer);
})
