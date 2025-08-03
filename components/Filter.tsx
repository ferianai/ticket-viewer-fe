// components/Filter.tsx
"use client"

import { Button } from "@/components/ui/button"

interface FilterProps {
    current: string
    onChange: (value: string) => void
}

export default function Filter({ current, onChange }: FilterProps) {
    return (
        <div className="flex gap-2 mb-4">
        {["All", "Used", "Unused"].map((type) => (
            <Button
            key={type}
            variant={current === type ? "default" : "outline"}
            onClick={() => onChange(type)}
            >
            {type}
            </Button>
        ))}
        </div>
    )
}
