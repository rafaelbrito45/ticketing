import {
  Subjects,
  Publisher,
  PaymentCreatedEvent,
} from "@rafaeltickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
