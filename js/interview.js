const DATA = {
	defaultQusetion: {
		question: 'Какие у вас правоустанавливающие документы?',
		prompt: '<span class="prompt__color_red">Правоустанавливающие документы</span> – это документы, на основании которых возникло право собственности на объект недвижимости, например, договор купли-продажи, мены, дарения, договор долевого участия, свидетельство о праве на наследство и другие.',
		answers: [
			{
				id: '0',
				value: 'Договор купли-продажи',
				prompt: '<span class="prompt__color_red">Договор купли-продажи.</span> <br> ГК РФ ст 549. По договору купли-продажи недвижимого имущества (договору продажи недвижимости) продавец обязуется передать в собственность покупателя земельный участок, здание, сооружение, квартиру или другое недвижимое имущество'
			},
			{
				id: '1',
				value: 'Договор дарения',
				prompt: '<span class="prompt__color_red">Договор дарения.</span> <br>	Договор дарения квартиры – это документ, подтверждающий безвозмездное дарения жилья одним человеком другому. Он требуется для регистрации перехода права собственности и заключается только на добровольной основе.'
			},
			{
				id: '2',
				value: 'Договор приватизации',
				prompt: '<span class="prompt__color_red">Договор приватизации.</span> <br> Договор приватизации квартиры  – это документ, на основании которого муниципальная жилплощадь передаётся в собственность нанимателю. Он является двусторонним документом, заключаемым между наймодателем (органами местного самоуправления) и нанимателем (гражданином, проживающим в квартире по договору социального найма).'
			},
			{
				id: '3',
				value: 'Справка ЖСК',
				prompt: '<span class="prompt__color_red">Справка ЖСК.</span> <br>	Право собственности на квартиру ЖСК подтверждается справкой, полученной в ЖСК о внесении пайщиком всех средств, предусмотренных договором, и считается правоустанавливающим документом.'
			},
			{
				id: '4',
				value: 'Свидетельство о праве на наследство',
				prompt: '<span class="prompt__color_red">Свидетельство о праве на наследство.</span> <br>	Свидетельство о праве на наследство - официальный документ, подтверждающий наследственные права лица на имущество умершего гражданина. Существует два варианта: Свидетельство о праве на наследство по закону и Свидетельство о праве на наследство по завещанию.'
			},
			{
				id: '5',
				value: 'Договор долевого участия',
				prompt: '<span class="prompt__color_red">Договор долевого участия (ДДУ)</span> — <br>	это документ, по которому покупатель передает свои деньги на этапе строительства недвижимости застройщику, чтобы тот мог использовать эти средства для возведения жилья. После завершения строительства и ввода МКД (много-квартирного дома) в эксплуатацию, происходит регистрация права собственности дольщика как правоустанавливающего документа.'
			}
		]
	},
	scenario: [{
			question: [{
					question: 'Семейное положение',
					prompt: '<span class="prompt__color_red">Семейное положение</span> – это пункт, который интересует работодателей и окружающих вас людей.',
					answers: [{
							id: '0',
							value: 'Квартира приобреталась в браке',
							prompt: 'По закону, всё имущество, которое супруги нажили во время брака, считается их совместной собственностью. То есть оно принадлежит им обоим и распоряжаться им можно только вместе. Это называется законный режим. По нему квартира, купленная супругами во время брака, при разводе делится поровну — это самый распространённый и простой вариант.',
						},
						{
							id: '1',
							value: 'Квартира приобреталась и выплачивалась не в бракев',
							prompt: '',
						},
						{
							id: '2',
							value: 'Ипотека выплачивалась в браке',
							prompt: '',
						},
					]
				},
				{
					question: 'Несовершенолетние',
					prompt: '',
					answers: [{
							id: '3',
							value: 'В квартире есть собственники-несовершеннолетние',
							prompt: '',
						},
						{
							id: '4',
							value: 'В квартире зарегистрированы несовершенолетние',
							prompt: '',
						},
					]
				},
				{
					question: 'Квартира приобреталась с использованием кредитных средств, ипотека?',
					prompt: '',
					answers: [{
							id: '5',
							value: 'Да',
							prompt: '',
						},
						{
							id: '6',
							value: 'Нет',
							prompt: '',
						},
					]
				},
				{
					question: 'При покупке использовался материнский капитал?',
					prompt: '',
					answers: [{
							id: '7',
							value: 'Да',
							prompt: '',
						},
						{
							id: '8',
							value: 'Нет',
							prompt: '',
						},
					]
				},
				{
					question: 'Квартира находится в доме-памятнике?',
					prompt: '',
					answers: [{
							id: '9',
							value: 'Вновь выявленный объект культурного наследия',
							prompt: '',
						},
						{
							id: '10',
							value: 'Памятник архитектуры',
							prompt: '',
						},
						{
							id: '11',
							value: 'Памятник архитектуры со списком непередаваемых элементов',
							prompt: '',
						},
					]
				},
				{
					question: 'В квартире есть сохранившие право пользования?',
					prompt: '',
					answers: [{
							id: '12',
							value: 'Да',
							prompt: '',
						},
						{
							id: '13',
							value: 'Нет',
							prompt: '',
						},
						{
							id: '14',
							value: 'Не знаю',
							prompt: '',
						},
					]
				},
				{
					question: 'Планируете ли при продаже покупать альтернативную квартиру?',
					prompt: '',
					answers: [{
							id: '15',
							value: 'Да',
							prompt: '',
						},
						{
							id: '16',
							value: 'Нет',
							prompt: '',
						},
					]
				},
			]
		},
		{
			question: [{
					question: 'В квартире есть сохранившие право пользования?',
					prompt: '',
					answers: [{
							id: '17',
							value: 'Да',
							prompt: '',
						},
						{
							id: '18',
							value: 'Нет',
							prompt: '',
						},
						{
							id: '19',
							value: 'Не знаю',
							prompt: '',
						},
					]
				},
				{
					question: 'Несовершенолетние',
					prompt: '',
					answers: [{
							id: '20',
							value: 'В квартире есть собственники-несовершеннолетние',
							prompt: '',
						},
						{
							id: '21',
							value: 'В квартире зарегистрированы несовершенолетние',
							prompt: '',
						},
					]
				},
				{
					question: 'Квартира находится в доме-памятнике?',
					prompt: '',
					answers: [{
							id: '22',
							value: 'Вновь выявленный объект культурного наследия',
							prompt: '',
						},
						{
							id: '23',
							value: 'Памятник архитектуры',
							prompt: '',
						},
						{
							id: '24',
							value: 'Памятник архитектуры со списком непередаваемых элементов',
							prompt: '',
						},
					]
				},
				{
					question: 'Планируете ли при продаже покупать альтернативную квартиру?',
					prompt: '',
					answers: [{
							id: '25',
							value: 'Да',
							prompt: '',
						},
						{
							id: '26',
							value: 'Нет',
							prompt: '',
						},
					]
				},
			]
		},
		{
			question: [{
					question: 'Несовершенолетние',
					prompt: '',
					answers: [{
							id: '27',
							value: 'В квартире есть собственники-несовершеннолетние',
							prompt: '',
						},
						{
							id: '28',
							value: 'В квартире зарегистрированы несовершенолетние',
							prompt: '',
						},
					]
				},
				{
					question: 'Квартира находится в доме-памятнике?',
					prompt: '',
					answers: [{
							id: '29',
							value: 'Вновь выявленный объект культурного наследия',
							prompt: '',
						},
						{
							id: '30',
							value: 'Памятник архитектуры',
							prompt: '',
						},
						{
							id: '31',
							value: 'Памятник архитектуры со списком непередаваемых элементов',
							prompt: '',
						},
					]
				},
				{
					question: 'В квартире есть сохранившие право пользования?',
					prompt: '',
					answers: [{
							id: '32',
							value: 'Да',
							prompt: '',
						},
						{
							id: '33',
							value: 'Нет',
							prompt: '',
						},
						{
							id: '34',
							value: 'Не знаю',
							prompt: '',
						},
					]
				},
				{
					question: 'Планируете ли при продаже покупать альтернативную квартиру?',
					prompt: '',
					answers: [{
							id: '35',
							value: 'Да',
							prompt: '',
						},
						{
							id: '36',
							value: 'Нет',
							prompt: '',
						},
					]
				},
			]
		},
		{
			question: [{
					question: 'Несовершенолетние',
					prompt: '',
					answers: [{
							id: '37',
							value: 'В квартире есть собственники-несовершеннолетние',
							prompt: '',
						},
						{
							id: '38',
							value: 'В квартире зарегистрированы несовершенолетние',
							prompt: '',
						},
					]
				},
				{
					question: 'Квартира находится в доме-памятнике?',
					prompt: '',
					answers: [{
							id: '39',
							value: 'Вновь выявленный объект культурного наследия',
							prompt: '',
						},
						{
							id: '40',
							value: 'Памятник архитектуры',
							prompt: '',
						},
						{
							id: '41',
							value: 'Памятник архитектуры со списком непередаваемых элементов',
							prompt: '',
						},
					]
				},
				{
					question: 'В квартире есть сохранившие право пользования?',
					prompt: '',
					answers: [{
							id: '42',
							value: 'Да',
							prompt: '',
						},
						{
							id: '43',
							value: 'Нет',
							prompt: '',
						},
						{
							id: '44',
							value: 'Не знаю',
							prompt: '',
						},
					]
				},
				{
					question: 'Планируете ли при продаже покупать альтернативную квартиру?',
					prompt: '',
					answers: [{
							id: '45',
							value: 'Да',
							prompt: '',
						},
						{
							id: '46',
							value: 'Нет',
							prompt: '',
						},
					]
				},
			]
		},
		{
			question: [{
					question: 'Семейное положение',
					prompt: '',
					answers: [{
							id: '47',
							value: 'Квартира приобреталась в браке',
							prompt: '',
						},
						{
							id: '48',
							value: 'Квартира приобреталась и выплачивалась не в бракев',
							prompt: '',
						},
						{
							id: '49',
							value: 'Ипотека выплачивалась в браке',
							prompt: '',
						},
					]
				},
				{
					question: 'Планируете ли при продаже покупать альтернативную квартиру?',
					prompt: '',
					answers: [{
							id: '50',
							value: 'Да',
							prompt: '',
						},
						{
							id: '51',
							value: 'Нет',
							prompt: '',
						},
					]
				},
			]
		},
		{
			question: [{
					question: 'Семейное положение',
					prompt: '',
					answers: [{
							id: '52',
							value: 'Квартира приобреталась в браке',
							prompt: '',
						},
						{
							id: '53',
							value: 'Квартира приобреталась и выплачивалась не в бракев',
							prompt: '',
						},
						{
							id: '54',
							value: 'Ипотека выплачивалась в браке',
							prompt: '',
						},
					]
				},
				{
					question: 'Несовершенолетние',
					prompt: '',
					answers: [{
							id: '55',
							value: 'В квартире есть собственники-несовершеннолетние',
							prompt: '',
						},
						{
							id: '56',
							value: 'В квартире зарегистрированы несовершенолетние',
							prompt: '',
						},
					]
				},
				{
					question: 'При покупке использовался материнский капитал?',
					prompt: '',
					answers: [{
							id: '57',
							value: 'Да',
							prompt: '',
						},
						{
							id: '58',
							value: 'Нет',
							prompt: '',
						},
					]
				},
				{
					question: 'Квартира приобреталась с использованием кредитных средств, ипотека?',
					prompt: '',
					answers: [{
							id: '59',
							value: 'Да',
							prompt: '',
						},
						{
							id: '60',
							value: 'Нет',
							prompt: '',
						},
					]
				},
				{
					question: 'Планируете ли при продаже покупать альтернативную квартиру?',
					prompt: '',
					answers: [{
							id: '61',
							value: 'Да',
							prompt: '',
						},
						{
							id: '62',
							value: 'Нет',
							prompt: '',
						},
					]
				},
			]
		}
	]
}

let results = {}

const intstartContent = document.querySelector('.intstart__content')
const indicator = document.querySelector('.intstart__indicator')
const question = document.querySelector('.intstart__question')
const answers = document.querySelector('.intstart__answers')
const result = document.querySelector('.intstart__result')
const btnsWrapper = document.querySelector('.intstart__btns')
const btnNext = document.querySelector('.btn-next')
const btnRestart = document.querySelector('.btn-restart')

const renderDefaultQuestion = () => {
	question.dataset.currentStep = '-1'
	indicator.innerHTML = 'Вопрос 1'
	question.innerHTML = `
		<p>${DATA.defaultQusetion.question}</p>
		${DATA.defaultQusetion.prompt !== '' ? renderPrompt('question-icon', DATA.defaultQusetion.prompt) : ''}
		<div class="intstart__answers">
			${DATA.defaultQusetion.answers.map((answer, i) => {
				return (`
					<div class="intstart__answer">
						<label>
							<span>
								<input type="radio" name="scenario" class="intstart__answer" value="${i}">
							</span>
							${answer.value}
						</label>
						${answer.prompt !== '' ? renderPrompt('answer-icon answer-icon-small', answer.prompt) : ''}
					</div>
				`)
			})
			.join('')
		}
		</div>
	`
}

const renderPrompt = (className, content) => {
	return (
		`<svg class="${className}" width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12.5" cy="15.5" r="12" fill="none"/><path d="M9.729 10.255C9.915 10.081 10.119 9.916 10.341 9.76C10.569 9.604 10.815 9.466 11.079 9.346C11.349 9.226 11.637 9.133 11.943 9.067C12.255 8.995 12.591 8.959 12.951 8.959C13.425 8.959 13.863 9.028 14.265 9.166C14.673 9.304 15.024 9.499 15.318 9.751C15.612 10.003 15.843 10.309 16.011 10.669C16.179 11.029 16.263 11.434 16.263 11.884C16.263 12.34 16.194 12.733 16.056 13.063C15.924 13.393 15.753 13.684 15.543 13.936C15.339 14.182 15.114 14.398 14.868 14.584C14.628 14.764 14.4 14.935 14.184 15.097C13.968 15.259 13.782 15.421 13.626 15.583C13.476 15.745 13.389 15.925 13.365 16.123L13.203 17.5H12.105L11.997 16.006C11.973 15.736 12.024 15.502 12.15 15.304C12.276 15.1 12.441 14.911 12.645 14.737C12.849 14.557 13.074 14.383 13.32 14.215C13.566 14.041 13.794 13.849 14.004 13.639C14.22 13.429 14.4 13.192 14.544 12.928C14.688 12.658 14.76 12.337 14.76 11.965C14.76 11.707 14.709 11.473 14.607 11.263C14.505 11.053 14.367 10.876 14.193 10.732C14.019 10.582 13.812 10.468 13.572 10.39C13.338 10.312 13.086 10.273 12.816 10.273C12.45 10.273 12.135 10.318 11.871 10.408C11.613 10.498 11.394 10.597 11.214 10.705C11.034 10.813 10.887 10.912 10.773 11.002C10.665 11.092 10.575 11.137 10.503 11.137C10.353 11.137 10.236 11.068 10.152 10.93L9.729 10.255ZM11.484 21.01C11.484 20.854 11.511 20.707 11.565 20.569C11.625 20.431 11.703 20.311 11.799 20.209C11.901 20.107 12.021 20.026 12.159 19.966C12.297 19.906 12.444 19.876 12.6 19.876C12.756 19.876 12.903 19.906 13.041 19.966C13.179 20.026 13.299 20.107 13.401 20.209C13.503 20.311 13.584 20.431 13.644 20.569C13.704 20.707 13.734 20.854 13.734 21.01C13.734 21.172 13.704 21.322 13.644 21.46C13.584 21.592 13.503 21.709 13.401 21.811C13.299 21.913 13.179 21.991 13.041 22.045C12.903 22.105 12.756 22.135 12.6 22.135C12.444 22.135 12.297 22.105 12.159 22.045C12.021 21.991 11.901 21.913 11.799 21.811C11.703 21.709 11.625 21.592 11.565 21.46C11.511 21.322 11.484 21.172 11.484 21.01Z" fill="none"/><div class="prompt">${content}</div>`
		)
}

const renderQuestion = nextQuestion => {
	renderIndicator(nextQuestion + 2, results.scenario)

	question.dataset.currentStep = nextQuestion

	const renderAnswers = () => DATA.scenario[results.scenario].question[nextQuestion].answers.map(answer => `
    <div class="intstart__answer">
      <label>
        <span>
          <input type="radio" name="${nextQuestion}" class="intstart__answer" value="${answer.id}">
        </span>
        ${answer.value}
      </label>
			${answer.prompt !== '' ? renderPrompt('answer-icon answer-icon-small', answer.prompt) : ''}
    </div>
    `)
		.join('')

	question.innerHTML = `
    <p>
      ${DATA.scenario[results.scenario].question[nextQuestion].question}
    </p>
		${DATA.scenario[results.scenario].question[nextQuestion].prompt !== '' ? renderPrompt('question-icon', DATA.scenario[results.scenario].question[nextQuestion].prompt) : ''}
    <div class="intstart__answers">
      ${renderAnswers()}
    </div>
  `
}

const renderIndicator = (currentSteps, scenario) => {
	indicator.innerHTML = `Вопрос ${currentSteps} из  ${DATA.scenario[scenario].question.length + 1}`
}

const renderResult = () => {
	let content = ''

	indicator.innerHTML = 'Результаты опроса.'

	const getAnswers = (answers) => {
		return answers.map(answer => {
				for (let key in results) {
					if (answer.id == results[key]) {
						return `<p class="result__answer">- ${answer.value}</p>`
					}
				}
			})
			.join('')
	}

	content +=
		`
			<ol class="result">
				<li class="result__question">
					${DATA.defaultQusetion.question}
					<p class="result__answer">- ${DATA.defaultQusetion.answers[results.scenario].value}</p>
				</li>
				${DATA.scenario[results.scenario].question.map(question => {
					return (
						`
						<li class="result__question">
							${question.question}
							${getAnswers(question.answers)}
						</li>
					`
					)
				})
				.join('')
			}
			</ol>
		`

	result.innerHTML = content
}

intstartContent.addEventListener('change', (e) => {
	const target = e.target

	if (target.classList.contains('intstart__answer')) {
		results[target.name] = +target.value

		btnNext.disabled = false
	}
})

btnsWrapper.addEventListener('click', (e) => {
	const target = e.target

	if (target.classList.contains('btn-next')) {
		const nextQuestion = +question.dataset.currentStep + 1

		if (DATA.scenario[results.scenario].question.length === nextQuestion) {
			indicator.classList.add('intstart__indicator-result')
			question.classList.add('none')
			result.classList.remove('none')
			btnsWrapper.classList.add('intstart__btns-btns_center')
			btnNext.classList.add('none')
			btnRestart.classList.remove('none')

			renderResult()
		} else {
			renderQuestion(nextQuestion)
		}

		btnNext.disabled = true
	}

	if (target.classList.contains('btn-restart')) {
		result.innerHTML = ''
		results = {}

		indicator.classList.remove('intstart__indicator-result')
		question.classList.remove('none')
		result.classList.add('none')
		btnsWrapper.classList.remove('intstart__btns-btns_center')
		btnNext.classList.remove('none')
		btnRestart.classList.add('none')

		renderDefaultQuestion()
	}
})

renderDefaultQuestion()
