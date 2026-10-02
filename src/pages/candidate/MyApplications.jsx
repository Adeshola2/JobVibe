import Sidebar from "../../components/ui/Sidebar"; 
const items=[
    ["My Applications","/candidate/applications"],
    ["Saved Jobs","/candidate/saved-jobs"],
    ["Profile","/candidate/profile"],
    ["Resume","/candidate/resume"]
]; 
const data=[
    ["Frontend React Developer","Nova Labs","Under review"],
    ["Product Designer","KoraPay","Interview"],
    ["Backend Node.js Engineer","FinStack","Applied"]
]; 
export default function MyApplications()
{
    return <section className="container-page py-10">
        <div className="grid gap-7 lg:grid-cols-[240px_1fr]">
            <Sidebar items={items}/>
            <div>
                <h1 className="text-3xl font-black">My applications</h1>
                <div className="card mt-7 overflow-hidden">
                    <div className="divide-y divide-slate-200 dark:divide-white/10">
                        {data.map(([a,b,c])=><div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between" key={a}>
                            <div>
                                <h2 className="font-bold">{a}</h2>
                                <p className="text-sm text-slate-500">{b}</p>
                            </div>
                            <span className="rounded-full bg-gold/20 px-3 py-1 text-xs font-bold text-ink dark:text-white">{c}</span>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    </section>}