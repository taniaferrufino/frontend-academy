'use client'

import { updateStudentAction } from "@/actions/estudiantes"
import { useState } from "react"

export function EditForm({ estudiante }: { estudiante: { id: number, nombres: string, paterno: string, materno?: string, direccion: string, sexo_id: number, etnia_id: number } }) {
    const [show, setShow] = useState(false)

    return (
        <div className="mb-2">
            <button
                onClick={() => setShow(!show)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 text-sm"
            >
                {show ? 'Ocultar' : 'Editar'}
            </button>

            {show && (
                <form action={updateStudentAction} className="mt-2 space-y-2 p-3 border border-gray-300 rounded max-w-md">
                    <input type="hidden" name="id" value={estudiante.id} />
                    <div>
                        <label className="block text-sm font-medium">Nombres</label>
                        <input name="nombres" defaultValue={estudiante.nombres} required className="border border-gray-300 px-2 py-1 rounded w-full" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Paterno</label>
                        <input name="paterno" defaultValue={estudiante.paterno} required className="border border-gray-300 px-2 py-1 rounded w-full" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Materno</label>
                        <input name="materno" defaultValue={estudiante.materno || ''} className="border border-gray-300 px-2 py-1 rounded w-full" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Dirección</label>
                        <input name="direccion" defaultValue={estudiante.direccion} required className="border border-gray-300 px-2 py-1 rounded w-full" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Sexo ID</label>
                        <input name="sexo_id" type="number" defaultValue={estudiante.sexo_id} required className="border border-gray-300 px-2 py-1 rounded w-full" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Etnia ID</label>
                        <input name="etnia_id" type="number" defaultValue={estudiante.etnia_id} required className="border border-gray-300 px-2 py-1 rounded w-full" />
                    </div>
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
