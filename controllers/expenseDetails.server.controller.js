const ExpenseDetail = require('../models/ExpenseDetail');

class ExpenseDetailsController {

    static async list(req, res) {
        try {
            const expenses = await ExpenseDetail.find();
            res.send({ expenses });
          } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve expenses' });
          }
    }
}

module.exports = ExpenseDetailsController;

