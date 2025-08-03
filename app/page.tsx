"use client"

import { useState } from "react"
import TicketCard from "@/components/TicketCard"
import Filter from "@/components/Filter"
import { tickets as initialTickets } from "@/data/tickets"

export default function HomePage() {
  const [tickets, setTickets] = useState(initialTickets)
  const [filter, setFilter] = useState("All")

  const handleToggleUsed = (id: number) => {
    setTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === id ? { ...ticket, isUsed: !ticket.isUsed } : ticket
      )
    )
  }

  // New delete handler
  const handleDelete = (id: number) => {
    setTickets((prev) => prev.filter((ticket) => ticket.id !== id))
  }

  const filteredTickets = tickets.filter((ticket) => {
    if (filter === "All") return true
    if (filter === "Used") return ticket.isUsed
    if (filter === "Unused") return !ticket.isUsed
    return true
  })

  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">🎟️ Ticket Viewer</h1>
      <Filter current={filter} onChange={setFilter} />
      <div className="grid gap-4">
        {filteredTickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
            onToggleUsed={handleToggleUsed}
            onDelete={handleDelete}  // Pass down delete handler
          />
        ))}
      </div>
    </main>
  )
}
