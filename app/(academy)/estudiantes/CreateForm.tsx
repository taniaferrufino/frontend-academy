'use client'

import { createStudentAction } from "@/actions/estudiantes"

export function CreateForm() {
    return (
        <div className="mb-6 p-4 border border-gray-300 rounded">
            <h2 className="text-lg font-semibold mb-4">Agregar Estudiante</h2>
            <form action={createStudentAction} className="space-y-4 max-w-md">
                <div>
                    <label className="block text-sm font-medium">Nombres</label>
                    <input name="nombres" required className="border border-gray-300 px-3 py-2 rounded w-full" />
                </div>
                <div>
                    <label className="block text-sm font-medium">Paterno</label>
                    <input name="paterno" required className="border border-gray-300 px-3 py-2 rounded w-full" />
                </div>
                <div>
                    <label className="block text-sm font-medium">Materno</label>
                    <input name="materno" className="border border-gray-300 px-3 py-2 rounded w-full" />
                </div>
                <div>
                    <label className="block text-sm font-medium">Dirección</label>
                    <input name="direccion" required className="border border-gray-300 px-3 py-2 rounded w-full" />
                </div>
                <div>
                    <label className="block text-sm font-medium">Sexo ID</label>
                    <input name="sexo_id" type="number" required className="border border-gray-300 px-3 py-2 rounded w-full" />
                </div>
                <div>
                    <label className="block text-sm font-medium">Etnia ID</label>
                    <input name="etnia_id" type="number" required className="border border-gray-300 px-3 py-2 rounded w-full" />
                </div>
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                    Guardar
                </button>
            </form>
        </div>
    )
}
