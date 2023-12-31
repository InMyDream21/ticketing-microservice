import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from "@epoxia-ticketing/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
