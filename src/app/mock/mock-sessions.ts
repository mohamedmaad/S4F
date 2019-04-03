
import { Session } from '@app/_models/session.ts'

export const SESSIONS: Session[] = [
    {
        id: 1,
        company: "Renault",
        coach: "Nourdine",
        date: "2019-05-01",
        hour: "10:00",
        duration: "2h",
        maxParticipants: 20,
        minParticipants: 5
    },
    {
        id: 2,
        company: "Microsoft",
        coach: "Nourdine",
        date: "2019-05-15",
        hour: "11:00",
        duration: "1h",
        maxParticipants: 15,
        minParticipants: 3
    },
    {
        id: 3,
        company: "Google",
        coach: "Nourdine",
        date: "2019-06-08",
        hour: "17:00",
        duration: "2h",
        maxParticipants: 30,
        minParticipants: 5
    }
];