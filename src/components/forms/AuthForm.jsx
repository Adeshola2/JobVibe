import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";

const schema = z.object({ email: z.string().email("Enter a valid email"), password: z.string().min(6, "Password must be at least 6 characters") });
export default function AuthForm() {
  const nav = useNavigate();
  const { register, handleSubmit, formState:{errors} } = useForm({ resolver: zodResolver(schema) });
  const submit = () => nav("/candidate");
  return <form onSubmit={handleSubmit(submit)} className="space-y-5">
    <div><label className="label">Email address</label><input className="input" {...register("email")} placeholder="you@example.com"/>{errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}</div>
    <div><label className="label">Password</label><input type="password" className="input" {...register("password")} placeholder="••••••••"/>{errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}</div>
    <div className="flex justify-end"><Link to="/forgot-password" className="text-sm font-semibold text-brand">Forgot password?</Link></div>
    <button className="btn-primary w-full">Log in</button>
  </form>;
}