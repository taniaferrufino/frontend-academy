import { getAllStudents } from "@/actions/estudiantes"
import { DeleteButton } from "./DeleteButton"
import { CreateForm } from "./CreateForm"

export default async function EstudiantesPage() {
    const estudiantes = await getAllStudents()

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">Estudiantes</h1>
            <CreateForm />
            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Nombres</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Paterno</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Materno</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Dirección</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Sexo ID</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Etnia ID</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {estudiantes.length === 0 ? (
                            <tr>
                                <td colSpan={8} className="border border-gray-300 px-4 py-2 text-center text-gray-500">
                                    No hay estudiantes registrados
                                </td>
                            </tr>
                        ) : (
                            estudiantes.map((estudiante) => (
                                <tr key={estudiante.id} className="hover:bg-gray-50">
                                    <td className="border border-gray-300 px-4 py-2">{estudiante.id}</td>
                                    <td className="border border-gray-300 px-4 py-2">{estudiante.nombres}</td>
                                    <td className="border border-gray-300 px-4 py-2">{estudiante.paterno}</td>
                                    <td className="border border-gray-300 px-4 py-2">{estudiante.materno || '-'}</td>
                                    <td className="border border-gray-300 px-4 py-2">{estudiante.direccion}</td>
                                    <td className="border border-gray-300 px-4 py-2">{estudiante.sexo_id}</td>
                                    <td className="border border-gray-300 px-4 py-2">{estudiante.etnia_id}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <DeleteButton id={estudiante.id} />
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
