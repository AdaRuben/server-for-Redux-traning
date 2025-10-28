'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Иван',
        email: 'ivan@mail.ru',
        hashpass: '123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Константин',
        email: 'konst@mail.ru',
        hashpass: '123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Виталий',
        email: 'vitaliy@mail.ru',
        hashpass: '123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Роман',
        email: 'roman@mail.ru',
        hashpass: '123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert('Items', [
      {
        title: 'Какое то название',
        data: 'Какой то текст',
        user1Id: 1,
        user2Id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Причина тряски',
        data: 'Эпилепсия',
        user1Id: 1,
        user2Id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Хороший совет',
        data: 'Ложиться спать раньше',
        user1Id: 2,
        user2Id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Ассоциации',
        data: 'Ассоцитятся',
        user1Id: 3,
        user2Id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Работа',
        data: 'Работается',
        user1Id: 4,
        user2Id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Деп',
        data: 'Депается',
        user1Id: 3,
        user2Id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Дадеп',
        data: 'Дадепается',
        user1Id: 3,
        user2Id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Никотин',
        data: 'Никотинится',
        user1Id: 1,
        user2Id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Мдаааа',
        data: 'Мда-Мда',
        user1Id: 2,
        user2Id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Лор 21п',
        data: 'Когда нибудь будет рассказан',
        user1Id: 2,
        user2Id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Items', null, {});
  }
};

