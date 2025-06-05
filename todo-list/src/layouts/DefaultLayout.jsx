import { Outlet } from "react-router-dom";
import TodoNavigation from "../components/TodoNavigation";

export default function DefaultLayout(){
    return(
        <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-indigo-600">TODO APP</h1>
                    <TodoNavigation/>
                </div>
            </header>
            <main className="flex-1 container mx-auto px-4 py-6">
                <Outlet />
            </main>
        </div>

    )
}