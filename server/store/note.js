const { Note } = require('../sequelize');
const sessionStore = require('./session');

class NoteStore {
    
    static async validateNoteAccess(noteId, userId) {
        const { id: noteUserId } = await Note.findByPk(noteId);
        if (noteUserId !== userId) {
            throw new Error('You are unauthorized to modify this note!');
        }
    }
    
    static async getNotes(req) {
        const { sessionId } = req.params;
        await sessionStore.validateSession(sessionId);
        const notes = await Note.findAll({ where: { sessionId }});
        return notes.map(n => n.toJSON());
    }

    static async createNote(req) {
        await sessionStore.validateSession(req.body.sessionId);
        const note = await Note.create({...req.body, userId: req.user.id });
        return note.toJSON();
    }

    static async deleteNote(req) {
        await sessionStore.validateSession(req.body.sessionId);
        await this.validateNoteAccess(req.params.noteId, req.user.id);
        return Note.destroy({ where: { id: req.params.noteId }});
    }

    static async editNote(req) {
        await sessionStore.validateSession(req.body.sessionId);
        const note = await Notes.update(
            { ...req.body },
            { where: { id: req.params.noteId }},
        );
        return note.toJSON();
    }
}

module.exports = NoteStore;