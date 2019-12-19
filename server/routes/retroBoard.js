const express = require('express');
const RetroBoardCtrl = require('../controllers/retroBoard');
const router = express.Router();

router
    .post('/board/create', RetroBoardCtrl.createBoard)
    .get('/board/join/:sessionId', RetroBoardCtrl.joinBoard)
    .get('/note/getAll/:sessionId', RetroBoardCtrl.getNotes)
    .post('/note/create/', RetroBoardCtrl.createNote)
    .put('/note/edit/:noteId', RetroBoardCtrl.editNote)
    .delete('/note/delete/:noteId', RetroBoardCtrl.deleteNote)

module.exports = router;