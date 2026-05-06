'use client'

import { deleteDocenteAction } from "@/actions/docentes"

export function DeleteButton({ id }: { id: number }) {
    function handleSubmit(e: React.FormEvent) {
        if (!confirm('¿Eliminar este docente?')) {
            e.preventDefault()
        }
    }

    return (
        <form action={deleteDocenteAction.bind(null, id)} onSubmit={handleSubmit}>
            <button
                type="submit"
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
            >
                Eliminar
            </button>
        </form>
    )
}
