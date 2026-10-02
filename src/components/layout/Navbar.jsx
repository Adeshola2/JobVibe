import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const links = [["Jobs", "/jobs"], ["Companies", "/companies"], ["For Employers", "/employer"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { dark, toggle } = useTheme();
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-[#120d16]/90">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="text-2xl font-black tracking-tight"><span className="text-brand">Job</span><span>Vibe</span></Link>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map(([label, to]) => <NavLink key={to} to={to} className={({isActive}) => `text-sm font-semibold ${isActive ? "text-brand" : "text-slate-600 dark:text-slate-300"}`}>{label}</NavLink>)}
          <button onClick={toggle} aria-label="Toggle dark mode" className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-white/10">{dark ? <Sun size={18}/> : <Moon size={18}/>}</button>
          <Link to="/login" className="btn-secondary !px-4 !py-2">Log in</Link>
          <Link to="/register" className="btn-primary !px-4 !py-2">Get started</Link>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Open menu">{open ? <X/> : <Menu/>}</button>
      </div>
      {open && <div className="border-t border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-[#120d16] md:hidden">
        <div className="flex flex-col gap-3">{links.map(([label,to]) => <Link key={to} onClick={()=>setOpen(false)} className="rounded-lg px-3 py-2 font-semibold" to={to}>{label}</Link>)}<Link className="rounded-lg px-3 py-2 font-semibold" to="/login">Log in</Link><Link className="btn-primary" to="/register">Get started</Link></div>
      </div>}
    </header>
  );
}