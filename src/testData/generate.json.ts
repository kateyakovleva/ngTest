import {IFormItem} from "../types/form";

export const formFields: IFormItem[] = [
  {
    type: 'text',
    name: 'name',
    label: 'Имя',
    required: true,
  },
  {
    type: 'number',
    name: 'age',
    label: 'Возраст',
    placeholder: '18',
    required: true,
  },
  {
    type: 'select',
    name: 'family',
    label: 'Семейное положение',
    required: true,
    value: 2,
    choices: [
      {
        label: 'Не женат / не замужем',
        value: 1
      },
      {
        label: 'Женат / замужем',
        value: 2
      }
    ]
  },
  {
    type: 'text',
    name: 'university',
    label: 'ВУЗ',
    description: 'Укажите заведения, в которых вы учились.',
    placeholder: 'Например, ВолгГУ',
    isMulti: true,
  },
  {
    type: 'select',
    name: 'city',
    label: 'Место рождения',
    value: 2,
    choices: [
      {
        label: 'Не важно',
        value: 1
      },
      {
        label: 'Красноярск',
        value: 2
      },
      {
        label: 'Москва',
        value: 2
      }
    ]
  },
  {
    type: 'checkbox',
    name: 'skills',
    label: 'Навыки',
    choices: [
      {
        label: 'Общение',
        value: 1,
      },
      {
        label: 'Вождение',
        value: 2,
      },
      {
        label: 'Иностранные языки',
        value: 3,
      }
    ]
  },
]
