import { Link } from "react-router-dom"; import AuthForm from "../../components/forms/AuthForm";
export default function Login()
{
return <section className="container-page flex min-h-[70vh] items-center justify-center py-12">
    <div className="card w-full max-w-md p-7 sm:p-9"><
        p className="text-sm font-bold text-brand">Welcome back</p>
        <h1 className="mt-2 text-3xl font-black">Log in to JobVibe</h1>
        <p className="mt-2 text-sm text-slate-500">Access your applications, saved jobs and profile.</p>
        <div className="mt-7"><AuthForm/></div>
        <p className="mt-6 text-center text-sm text-slate-500">New to JobVibe? <Link className="font-bold text-brand" to="/register">Create an account</Link></p>
    </div>
</section>}