'use client'

import { updateDocenteAction } from "@/actions/docentes"
import { useState } from "react"

export function EditForm({ docente }: { docente: Record<string, unknown> }) {
    const [show, setShow] = useState(false)

    const fields = [
        { key: 'nombres', label: 'Nombres', type: 'text' },
        { key: 'apellidos', label: 'Apellidos', type: 'text' },
        { key: 'email', label: 'Email', type: 'email' },
        { key: 'direccion', label: 'Dirección', type: 'text' },
        { key: 'cedula', label: 'Cédula', type: 'text' },
        { key: 'telefono', label: 'Teléfono', type: 'text' },
        { key: 'sexo_id', label: 'Sexo ID', type: 'number' },
        { key: 'etnia_id', label: 'Etnia ID', type: 'number' },
        { key: 'cargo_id', label: 'Cargo ID', type: 'number' },
    ]

    return (
        <div className="mb-2">
            <button
                onClick={() => setShow(!show)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 text-sm"
            >
                {show ? 'Ocultar' : 'Editar'}
            </button>

            {show && (
                <form action={updateDocenteAction} className="mt-2 space-y-2 p-3 border border-gray-300 rounded max-w-md">
                    <input type="hidden" name="id" value={String(docente.id || '')} />
                    {fields.map(({ key, label, type }) => (
                        <div key={key}>
                            <label className="block text-sm font-medium">{label}</label>
                            <input
                                name={key}
                                type={type}
                                defaultValue={String(docente[key] || '')}
                                className="border border-gray-300 px-2 py-1 rounded w-full"
                            />
                        </div>
                    ))}
                    <div className="flex gap-2">
                        <button type="submit" className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm">
                            Actualizar
                        </button>
                        <button type="button" onClick={() => setShow(false)} className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 text-sm">
                            Cancelar
                        </button>
                    </div>
                </form>
            )}
        </div>
    )
}
