import { useSearchParams } from "react-router-dom";
import { jobs } from "../data/jobs";
import JobCard from "../components/ui/JobCard";
export default function SearchResults(){
const [p]=useSearchParams(); 
const q=(p.get("q")||"").toLowerCase(); 
const loc=(p.get("location")||"").toLowerCase(); 
const list=jobs.filter(j=>`${j.title} ${j.company} ${j.category}`.toLowerCase().includes(q)&&(!loc||j.location.toLowerCase().includes(loc))); 
return <section className="container-page py-14">
    <h1 className="text-4xl font-black">Search results</h1>
    <p className="mt-2 text-slate-500">{list.length} opportunities match your search.</p>
    <div className="mt-8 grid gap-5 lg:grid-cols-2">{list.map(j=><JobCard key={j.id} job={j}/>)}</div>
</section>
}