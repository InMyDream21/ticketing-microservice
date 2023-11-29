import {
  Publisher,
  OrderCancelledEvent,
  Subjects,
} from "@epoxia-ticketing/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
