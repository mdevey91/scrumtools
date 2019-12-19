const { Session } = require('../sequelize')

class SessionStore {
    static async getSession(sessionId) {
        const session = await Session.findByPk(sessionId);
        if (!session) {
            throw new Error("Session could not be found");
        }
        return session.toJSON();
    }

    static async validateSession(sessionId) {
        await this.getSession(sessionId);
    }

    static async createSession(req) {
        const session = await Session.create({...req.body, UserId: req.user.id});
        return session.toJSON();
    }

    static async joinSession(req) {
        const session = await Session.findOne({ where: { id: req.params.boardId }});
        return session.toJSON();
    }

    static async deleteSession(req) {
        return Session.destroy({ where: { id: req.sessionId }});
    }
}

module.exports = SessionStore