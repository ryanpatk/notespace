export const createActions = (store) => ({
  deleteNote: (noteId, callback) => {
    const { notes, noteSpaces } = store.state
    const updatedNotes = notes.filter(note => note.id !== noteId)

    const updatedNoteSpaces = noteSpaces.map(noteSpace => {
      if (!Object.keys(noteSpace).length) {
        return {}
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
  }
})