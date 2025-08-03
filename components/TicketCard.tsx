// components/TicketCard.tsx
"use client"

import { format } from "date-fns"
import { Button } from "@/components/ui/button"

interface TicketProps {
    ticket: {
        id: number
        eventName: string
        location: string
        time: string
        isUsed: boolean
    }
    onToggleUsed: (id: number) => void
    onDelete: (id: number) => void
}

export default function TicketCard({ ticket, onToggleUsed, onDelete }: TicketProps) {
    return (
        <div className="p-4 border rounded-lg shadow-sm bg-white space-y-2">
        <h2 className="text-lg font-semibold">{ticket.eventName}</h2>
        <p className="text-sm text-gray-500">{ticket.location}</p>
        <p className="text-sm text-gray-500">
            {format(new Date(ticket.time), "PPPpp")}
        </p>
        <p className={`text-sm ${ticket.isUsed ? "text-red-500" : "text-green-500"}`}>
            {ticket.isUsed ? "Used" : "Unused"}
        </p>
        <div className="flex gap-2">
            <Button onClick={() => onToggleUsed(ticket.id)} variant="outline" size="sm">
            Mark as {ticket.isUsed ? "Unused" : "Used"}
            </Button>
            <Button
            onClick={() => onDelete(ticket.id)}
            variant="destructive"   // Use your design system's destructive style or red button
            className="bg-red-500 text-white hover:bg-red-800"
            size="sm"
            >
            Delete
            </Button>
        </div>
        </div>
    )
}
