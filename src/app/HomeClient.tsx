"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Badge } from "@/components/Badge";
import { projects } from "@/data/projects";
import { ProjectLinksComponent } from "@/components/ProjectLinks";

export default function Home() {
	return (
		<div className="relative overflow-hidden">
			{/* Background decoration */}
			<div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
			<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />
			<div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

			<section className="max-w-6xl mx-auto px-6 pt-20 pb-32 relative">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
					{/* Left Content */}
					<div className="lg:col-span-7">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							<div className="flex items-center gap-3 mb-6">
								<Badge variant="glass">Available for Consulting</Badge>
								<span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
							</div>

							<h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
								Johan Sutrisno<span className="text-accent">.</span>
							</h1>

							<h2 className="text-2xl md:text-3xl font-medium text-muted mb-8 max-w-2xl leading-relaxed">
								<span className="text-foreground">Senior Product Engineer</span>{" "}
								based in Jakarta. I turn ideas into high-quality products —{" "}
								<span className="text-accent-light">
									Backed by 6+ years in production from architecture to shipping
								</span>
								.
							</h2>

							<div className="flex flex-wrap gap-4 mb-12">
								<Link
									href="/work"
									className="px-8 py-4 bg-accent hover:bg-accent-light text-white font-bold rounded-xl transition-all flex items-center gap-2 group shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-1"
								>
									See My Work
									<ArrowRight
										size={18}
										className="group-hover:translate-x-1 transition-transform"
									/>
								</Link>
								<Link
									href="/contact"
									className="px-8 py-4 bg-surface border border-border hover:border-accent/50 text-foreground font-bold rounded-xl transition-all hover:-translate-y-1"
								>
									Get in Touch
								</Link>
							</div>

							<div className="flex items-center gap-8 pt-4">
								<div className="flex flex-col">
									<span className="text-2xl font-bold">6+</span>
									<span className="text-xs uppercase tracking-widest text-muted font-bold">
										Years Exp.
									</span>
								</div>
								<div className="h-8 w-[1px] bg-border" />
								<div className="flex flex-col">
									<span className="text-2xl font-bold">20K+</span>
									<span className="text-xs uppercase tracking-widest text-muted font-bold">
										Daily Users
									</span>
								</div>
								<div className="h-8 w-[1px] bg-border" />
								<div className="flex flex-col">
									<span className="text-2xl font-bold">YC</span>
									<span className="text-xs uppercase tracking-widest text-muted font-bold">
										W22 Alumni
									</span>
								</div>
							</div>
						</motion.div>
					</div>

					{/* Right Visual */}
					<div className="lg:col-span-5 relative hidden lg:block">
						<motion.div
							initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
							animate={{ opacity: 1, scale: 1, rotate: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="relative z-10"
						>
							{/* Pseudo-Avatar Card */}
							<div className="w-full aspect-square bg-surface border border-border rounded-3xl p-8 shadow-2xl overflow-hidden group">
								<div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

								<div className="h-full flex flex-col justify-between relative z-10">
									<div className="flex justify-between items-start">
										<div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
											JS
										</div>
										<div className="flex gap-2">
											<div className="w-3 h-3 rounded-full bg-border" />
											<div className="w-3 h-3 rounded-full bg-border" />
											<div className="w-3 h-3 rounded-full bg-border" />
										</div>
									</div>

									<div>
										<p className="text-sm font-mono text-accent-light mb-2">
											class ProductEngineer {"{"}
										</p>
										<p className="pl-4 text-sm font-mono text-muted mb-1">
											expertise: ["Flutter", "React", "Django", "Dart",
											"Typescript", "Python"];
										</p>
										<p className="pl-4 text-sm font-mono text-muted mb-1">
											mindset: "Product-driven";
										</p>
										<p className="pl-4 text-sm font-mono text-muted">
											location: "Jakarta, ID";
										</p>
										<p className="text-sm font-mono text-accent-light">{"}"}</p>
									</div>

									<div className="h-12 w-full bg-background/50 backdrop-blur-sm rounded-xl border border-border flex items-center px-4 justify-between group-hover:border-accent/30 transition-colors">
										<span className="text-xs text-muted font-medium italic">
											Building with purpose...
										</span>
										<ExternalLink
											size={14}
											className="text-muted group-hover:text-accent transition-colors"
										/>
									</div>
								</div>
							</div>

							{/* Floating elements */}
							<motion.div
								animate={{ y: [0, -10, 0] }}
								transition={{
									duration: 4,
									repeat: Infinity,
									ease: "easeInOut",
								}}
								className="absolute -top-6 -right-6 px-4 py-2 bg-background border border-border rounded-full shadow-lg z-20 flex items-center gap-2"
							>
								<div className="w-2 h-2 rounded-full bg-[#00D2FF]" />
								<span className="text-xs font-bold font-mono">
									Product Minded
								</span>
							</motion.div>

							<motion.div
								animate={{ y: [0, 10, 0] }}
								transition={{
									duration: 5,
									repeat: Infinity,
									ease: "easeInOut",
									delay: 1,
								}}
								className="absolute -bottom-4 -left-8 px-4 py-2 bg-background border border-border rounded-full shadow-lg z-20 flex items-center gap-2"
							>
								<div className="w-2 h-2 rounded-full bg-[#FF4B2B]" />
								<span className="text-xs font-bold font-mono">YC Alum</span>
							</motion.div>
						</motion.div>

						{/* Background geometric shapes */}
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-accent/5 rounded-full pointer-events-none" />
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-accent/5 rounded-full pointer-events-none" />
					</div>
				</div>
			</section>

			{/* Featured Projects Highlight (Small version for Home) */}
			<section className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
				<div className="flex items-center justify-between mb-12">
					<h2 className="text-3xl font-bold">Featured Projects</h2>
					<Link
						href="/projects"
						className="text-accent hover:text-accent-light font-medium flex items-center gap-2 group"
					>
						View All Projects{" "}
						<ArrowRight
							size={16}
							className="group-hover:translate-x-1 transition-transform"
						/>
					</Link>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects
						.filter((p) => p.featured)
						.slice(0, 3)
						.map((project) => (
							<div
								key={project.slug}
								className="p-8 bg-surface border border-border rounded-2xl hover:border-accent/30 transition-all group flex flex-col"
							>
								<h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
									{project.title}
								</h3>
								<p className="text-muted text-sm mb-6 leading-relaxed flex-grow line-clamp-3">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2 mb-6">
									{project.tags.slice(0, 2).map((tag) => (
										<Badge key={tag}>{tag}</Badge>
									))}
								</div>
								<div className="pt-4 border-t border-border/50">
									<ProjectLinksComponent links={project.links} />
								</div>
							</div>
						))}
				</div>
			</section>
		</div>
	);
}
