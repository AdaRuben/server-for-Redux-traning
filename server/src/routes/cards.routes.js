const CardsController = require('../controllers/cards.controller');
const { verifyAccessToken } = require('../middlewares/verifyTokens');

const cardsRouter = require('express').Router();

cardsRouter.get('/', CardsController.getCards);
cardsRouter.post('/', verifyAccessToken, CardsController.createCard);
cardsRouter.put('/:id', verifyAccessToken, CardsController.editCard);
cardsRouter.delete('/:id', verifyAccessToken, CardsController.deliteCard);

module.exports = cardsRouter;