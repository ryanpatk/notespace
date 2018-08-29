import { v4 as uuid } from 'uuid'
import theme from '../utils/theme'

const MOCK_NOTES = [
  {
    text: "Here's not some text!",
    id: 'sdsdfsdf',
  },
  {
    text: "Here's some text!",
    id: 'qweqweqwe',
  },
  {
    text: "Here's not some text!",
    id: 'asassssss',
  },
  {
    text: "Here's not some text!",
    id: 'asasdqdwww',
  },
  {
    text: "Here's not some text!",
    id: 'asdasdcvv',
  },
  {
    text: "Here's not some text!",
    id: 'qweqwee',
  },
  {
    text: "Here's some text!",
    id: uuid(),
  },
  {
    text: "Here's not some text!",
    id: uuid(),
  },
  {
    text: "Here's not some text!",
    id: uuid(),
  },
  {
    text: "Here's not some text!",
    id: uuid(),
  },
]

const MOCK_NOTESPACES = [
  {
    name: 'Default',
    id: uuid(),
    icon: 'ios-home',
    color: theme.colorBlue,
    noteIds: MOCK_NOTES.map(({ id }) => id),
  },
  {},
  {},
  {},
]

export {
  MOCK_NOTES,
  MOCK_NOTESPACES,
}