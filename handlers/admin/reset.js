const User = require('../../database/models/User');
const config = require('../../config.js').bot;

module.exports = () => async (ctx) => {

    try {

        if (ctx.chat.id != config.admin) return;

        await User.deleteOne({ id: ctx.chat.id });
        ctx.session.userData = undefined;

        ctx.reply('/start', { reply_markup: { remove_keyboard: true } });

    } catch (error) {

        // If error occured
        console.error(error);

    };

};