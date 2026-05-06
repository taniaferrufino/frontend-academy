'use client'

import { createDocenteAction } from "@/actions/docentes"

export function CreateForm() {
    return (
        <div className="mb-6 p-4 border border-gray-300 rounded">
            <h2 className="text-lg font-semibold mb-4">Agregar Docente</h2>
            <form action={createDocenteAction} className="space-y-4 max-w-md">
                <div>
                    <label className="block text-sm font-medium">Nombres</label>
                    <input name="nombres" required className="border border-gray-300 px-3 py-2 rounded w-full" />
                </div>
                <div>
                    <label className="block text-sm font-medium">Apellidos</label>
                    <input name="apellidos" required className="border border-gray-300 px-3 py-2 rounded w-full" />
                </div>
                <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input name="email" type="email" required className="border border-gray-300 px-3 py-2 rounded w-full" />
                </div>
                <div>
                    <label className="block text-sm font-medium">Dirección</label>
                    <input name="direccion" required className="border border-gray-300 px-3 py-2 rounded w-full" />
                </div>
                <div>
                    <label className="block text-sm font-medium">Cédula</label>
                    <input name="cedula" required className="border border-gray-300 px-3 py-2 rounded w-full" />
                </div>
                <div>
                    <label className="block text-sm font-medium">Teléfono</label>
                    <input name="telefono" required className="border border-gray-300 px-3 py-2 rounded w-full" />
                </div>
                <div>
                    <label className="block text-sm font-medium">Sexo ID</label>
                    <input name="sexo_id" type="number" required className="border border-gray-300 px-3 py-2 rounded w-full" />
                </div>
                <div>
                    <label className="block text-sm font-medium">Etnia ID</label>
                    <input name="etnia_id" type="number" required className="border border-gray-300 px-3 py-2 rounded w-full" />
                </div>
                <div>
                    <label className="block text-sm font-medium">Cargo ID</label>
                    <input name="cargo_id" type="number" required className="border border-gray-300 px-3 py-2 rounded w-full" />
                </div>
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                    Guardar
                </button>
            </form>
        </div>
    )
}
