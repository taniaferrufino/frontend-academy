import { getAllDocentes } from "@/actions/docentes"
import { DeleteButton } from "./DeleteButton"
import { CreateForm } from "./CreateForm"
import { EditForm } from "./EditForm"

export default async function DocentesPage() {
    const docentes = await getAllDocentes()

    const columns = ['id', 'nombres', 'apellidos', 'email', 'direccion', 'cedula', 'telefono', 'sexo_id', 'etnia_id', 'cargo_id']

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">Docentes</h1>
            <CreateForm />
            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            {columns.map(col => (
                                <th key={col} className="border border-gray-300 px-4 py-2 text-left capitalize">
                                    {col.replace('_', ' ')}
                                </th>
                            ))}
                            <th className="border border-gray-300 px-4 py-2 text-left">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {docentes.length === 0 ? (
                            <tr>
                                <td colSpan={columns.length + 1} className="border border-gray-300 px-4 py-2 text-center text-gray-500">
                                    No hay docentes registrados
                                </td>
                            </tr>
                        ) : (
                            docentes.map((docente) => (
                                <tr key={docente.id} className="hover:bg-gray-50">
                                    {columns.map(col => (
                                        <td key={col} className="border border-gray-300 px-4 py-2">
                                            {String(docente[col] ?? '-')}
                                        </td>
                                    ))}
                                    <td className="border border-gray-300 px-4 py-2">
                                        <EditForm docente={docente} />
                                        <DeleteButton id={docente.id} />
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
