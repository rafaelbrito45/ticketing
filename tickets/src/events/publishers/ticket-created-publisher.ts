import { Publisher, Subjects, TicketCreatedEvent } from "@rafaeltickets/common";
import { TicketUpdatedPublisher } from "./ticket-updated-publisher";
import { natsWrapper } from "../../nats-wrapper";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
