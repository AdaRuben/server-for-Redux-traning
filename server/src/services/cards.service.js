const { Item, User } = require('../../db/models');

class CardService {
  static async getCards() {
    const cards = await Item.findAll({
      include: [
        { model: User, as: 'user1', attributes: ['id', 'name'] },
        { model: User, as: 'user2', attributes: ['id', 'name'] },
      ],
    });
    return cards;
  }

  static async createCard(senderId, { title, data, recipientName }) {
    const recipient = await User.findOne({
      where: { name: recipientName },
    });

    if (!recipient) {
      throw new Error('такого юзера в бд нет');
    }
    const card = await Item.create({
      title,
      data,
      user1Id: senderId,
      user2Id: recipient.id,
    });
    const result = await Item.findByPk(card.id, {
      include: [
        { model: User, as: 'user1', attributes: ['id', 'name'] },
        { model: User, as: 'user2', attributes: ['id', 'name'] },
      ],
    });
    return result;
  }

  static async editCard(cardId, userId, { title, data }) {
    const card = await Item.findByPk(cardId);
    if (!card) {
      throw new Error('такой карточки в бд нет');
    }
    if (card.user1Id !== userId) {
      throw new Error('Нет прав для редактирования');
    }
    return card.update({ title, data });
  }

  static async deliteCard(cardId, userId) {
    const card = await Item.findByPk(cardId);
    if (!card) {
      throw new Error('такой карточки в бд нет');
    }
    if (card.user1Id !== userId) {
      throw new Error('Нет прав для редактирования');
    }
    await Item.destroy({ where: { id: cardId } });
    return true;
  }
}

module.exports = CardService;
