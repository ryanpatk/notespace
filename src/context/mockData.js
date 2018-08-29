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

// Hardcoding 4 spaces for now.
const MOCK_NOTESPACES = [
  {
    name: 'Default',
    id: uuid(),
    isEmpty: false,
    iconName: 'ios-home',
    colorName: 'colorBlue',
    noteIds: MOCK_NOTES.map(({ id }) => id),
  },
  {
    id: uuid(),
    isEmpty: true,
  },
  {
    id: uuid(),
    isEmpty: true,
  },
  {
    id: uuid(),
    isEmpty: true,
  },
]

export {
  MOCK_NOTES,
  MOCK_NOTESPACES,
}