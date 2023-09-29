import { Link, Outlet } from "react-router-dom"

const MainLayout = () => {
    return (
        <div>

            <section className="max-w-screen-xl mx-auto px-8 md:px-16 border-2 border-red-500">

                <div className="shadow-lg py-4 rounded-md my-10">
                    <nav>
                        <ul className="flex justify-center gap-10 text-xl">
                        
                             <Link to="/" >Home</Link>
                            
                            
                             <Link to="/about" >About</Link>
                           
                            
                             <Link to="/login" >Login</Link>
                            
                        </ul>
                    </nav>
                </div>

                <Outlet />

            </section>

        </div>
    )
}
export default MainLayout