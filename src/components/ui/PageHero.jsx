export default function PageHero({ eyebrow, title, text }) {
     return <section className="border-b border-slate-200 bg-slate-50 py-14 dark:border-white/10 dark:bg-white/[.03]">
        <div className="container-page">
            <p className="text-sm font-bold uppercase tracking-widest text-brand">{eyebrow}
             </p>
             <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">{title}
                    </h1>{text && 
                    <p className="mt-4 max-w-2xl text-slate-500 dark:text-slate-300">{text}
            </p>}
        </div>
    </section>; 
}