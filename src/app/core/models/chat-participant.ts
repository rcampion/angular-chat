import { ChatParticipantStatus } from 'ng-chat';
import { ChatParticipantType } from 'ng-chat';

export class ChatParticipant {
    participantType: ChatParticipantType;
    id: any;
    status: ChatParticipantStatus;
    avatar: string | null;
    displayName: string;
}

/*
export class ChatParticipant {
    participantType: number;
    id: string;
    status: number;
    avatar: string | null;
    displayName: string;
}
*/
