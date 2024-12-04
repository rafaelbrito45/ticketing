import {
  Subjects,
  Publisher,
  OrderCancelledEvent,
} from "@rafaeltickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
