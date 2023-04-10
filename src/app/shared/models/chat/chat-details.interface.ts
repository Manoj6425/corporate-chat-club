import { ChatUpdateLog } from "./chat-update-log.model";
import { Message } from "./message.model";

export interface ChatDetails {
    messages : Array<Message>;
    chatUpdateLogs : Array<ChatUpdateLog>;
}