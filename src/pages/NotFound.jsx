import { Link } from "react-router-dom"; 

export default function NotFound()
{return <section className="container-page py-24 text-center">
    <p className="text-6xl font-black text-brand">404</p>
    <h1 className="mt-4 text-3xl font-black">Page not found</h1>
    <p className="mt-2 text-slate-500">The page you requested does not exist.</p>
    <Link className="btn-primary mt-6" to="/">Back home</Link>
    </section>
}