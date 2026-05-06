'use client'

import { deleteStudentAction } from "@/actions/estudiantes"

export function DeleteButton({ id }: { id: number }) {
    function handleSubmit(e: React.FormEvent) {
        if (!confirm('¿Eliminar este estudiante?')) {
            e.preventDefault()
        }
    }

    return (
        <form action={deleteStudentAction.bind(null, id)} onSubmit={handleSubmit}>
            <button
                type="submit"
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
                Eliminar
            </button>
        </form>
    )
}
