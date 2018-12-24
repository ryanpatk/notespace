import { v4 as uuid } from 'uuid'

// TODO - create promise wrapper to remove need for callbacks as input parameters
export const createActions = (store) => ({
  deleteNote: (noteId, callback) => {
    const { notes, noteSpaces } = store.state

    const updatedNotes = notes.filter(note => note.id !== noteId)

    const updatedNoteSpaces = noteSpaces.map(noteSpace => {
      if (noteSpace.isEmpty) {
        return noteSpace
      }

      return {
        ...noteSpace,
        noteIds: noteSpace.noteIds.filter(id => id !== noteId),
      }
    })

    store.setState(() => ({
      ...store.state,
      noteSpaces: updatedNoteSpaces,
      notes: updatedNotes,
    }), callback)
  },
  editNote: (noteId, text) => {
    const { notes } = store.state

    const notesPosition = notes.findIndex(note => note.id === noteId)
    const updatedNote = {
      text,
      id: noteId,
    }

    notes.splice(notesPosition, 1, updatedNote) // TODO - make immutable

    store.setState(() => ({
      ...store.state,
      notes,
    }))
  },
  addNote: (noteSpaceId, callback) => {
    const { notes, noteSpaces } = store.state

    const activeNoteSpaceIndex = noteSpaces.findIndex(({ id }) => id === noteSpaceId)
    const activeNoteSpace = noteSpaces[activeNoteSpaceIndex]
    const { noteIds } = activeNoteSpace

    const newNote = {
      id: uuid(),
      text: '',
    }

    const updatedNoteIds = [ newNote.id, ...noteIds ]
    const updatedNoteSpace = {
      ...activeNoteSpace,
      noteIds: updatedNoteIds,
    }
    noteSpaces.splice(activeNoteSpaceIndex, 1, updatedNoteSpace) // TODO - make immutable

    store.setState(() => ({
      ...store.state,
      noteSpaces,
      notes: [
        newNote,
        ...store.state.notes,
      ],
    }), () => callback(newNote.id))
  },
  editSpace: (noteSpaceId, iconName, colorName, callback) => {
    const { noteSpaces } = store.state

    const activeNoteSpaceIndex = noteSpaces.findIndex(({ id }) => id === noteSpaceId)
    const activeNoteSpace = noteSpaces[activeNoteSpaceIndex]

    const updatedNoteSpace = {
      ...activeNoteSpace,
      isEmpty: false,
      colorName,
      iconName,
      noteIds: [],
    }

    noteSpaces.splice(activeNoteSpaceIndex, 1, updatedNoteSpace) // TODO - make immutable

    store.setState(() => ({
      ...store.state,
      noteSpaces,
    }), callback)
  }
})