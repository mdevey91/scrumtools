const sessionStore = require('../store/session');
const noteStore = require('../store/note');

class RetroBoardController {
    static async createBoard(req, res) {
        try {
            const session = await sessionStore.createSession(req);
            res.json({ success: true,  session });
        } catch (error) {
            res.status(500).send({ success: false, msg: error.message });
        }
    }

    static async joinBoard(req, res) {
        try {
            const session = await sessionStore.joinSession(req);
            res.json({ success: true,  session });
        } catch (error) {
            res.status(500).send({ success: false, msg: error.message });
        }
    }

    static async getNotes(req, res) {
        try {
            const notes = await noteStore.getNotes(req);
            res.json({ success: true,  notes });
        } catch (error) {
            res.status(500).send({ success: false, msg: error.message });
        }
    }

    static async createNote(req, res) {
        try {
            const note = await noteStore.createNote(req);
            res.json({ success: true,  note });
        } catch (error) {
            res.status(500).send({ success: false, msg: error.message });
        }
    }

    static async editNote(req, res) {
        try {
            const note = await noteStore.editNote(req);
            res.json({ success: true,  note });
        } catch (error) {
            res.status(500).send({ success: false, msg: error.message });
        }
    }

    static async deleteNote(req, res) {
        try {
            await noteStore.deleteNote(req);
            res.json({ success: true, noteId: req.noteId });
        } catch (error) {
            res.status(500).send({ success: false, msg: error.message });
        }
    }
}

module.exports = RetroBoardController;