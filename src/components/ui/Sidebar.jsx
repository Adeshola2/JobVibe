import { NavLink } from "react-router-dom";
export default function Sidebar({ items }) {
 return <aside className="card h-fit p-3">
    <nav className="space-y-1">{items.map(([label,to]) => <NavLink key={to} to={to} className={({isActive}) => `block rounded-xl px-4 py-3 text-sm font-semibold ${isActive ? "bg-brand text-white" : "hover:bg-slate-100 dark:hover:bg-white/10"}`}>{label}</NavLink>)}</nav>
  </aside>; 
}