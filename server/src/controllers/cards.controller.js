const CardService = require('../services/cards.service');

class CardsController {
  static async getCards(req, res) {
    try {
      const cards = await CardService.getCards();
      res.status(200).json(cards);
    } catch (error) {
      console.log('Ошибка при получении карточек:', error);
      res.status(500).json({ message: error.message });
    }
  }

  static async createCard(req, res) {
    try {
      const { title, data, recipientName } = req.body;
      const senderId = res.locals.user.id;

      if (!title || !data || !recipientName) {
        return res.status(400).json({ message: 'не все поля заполнены' });
      }
      const card = await CardService.createCard(senderId, {
        title,
        data,
        recipientName,
      });
      return res.status(201).json(card);
    } catch (err) {
      console.log('Ошибка при создании карточки', err);
      return res.status(500).json({ message: err.message });
    }
  }

  static async editCard(req, res) {
    try {
      const userId = res.locals.user.id;
      const { title, data } = req.body;
      const cardId = req.params.id;

      if (!title || !data) {
        return res.status(400).json({ message: 'не все поля заполнены' });
      }
      const card = await CardService.editCard(cardId, userId, {
        title,
        data,
      });
      return res.status(200).json(card);
    } catch (err) {
      console.log('Ошибка при редактировании карточки', err);
      return res.status(500).json({ message: err.message });
    }
  }

  static async deliteCard(req, res) {
    try {
      const userId = res.locals.user.id;
      const cardId = req.params.id;
      await CardService.deliteCard(cardId, userId);
      return res.status(200).json({ message: 'карточка удалена' });
    } catch (error) {
      console.log('Ошибка при удалении', error);
      return res.status(500).json({ message: error.message });
    }
  }
}
module.exports = CardsController;
