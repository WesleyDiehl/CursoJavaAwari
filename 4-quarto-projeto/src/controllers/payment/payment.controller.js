import PaymentService from "../../services/payment/payment.service.js";

class PaymentController {
  async payment(req, res) {
    const response = await PaymentService.processPayment();
    if (!response) {
      return res.status(400).json({ message: 'Error in payment'});
    }
    return res.status(201).json(response);
  }
}

export default new PaymentController();
