import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@epoxia-ticketing/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
