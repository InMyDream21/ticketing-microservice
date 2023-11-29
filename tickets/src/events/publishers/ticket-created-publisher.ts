import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from "@epoxia-ticketing/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
