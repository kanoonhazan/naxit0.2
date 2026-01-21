
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Lock,
    Plus,
    Trash2,
    Edit3,
    Star,
    Save,
    X,
    Layout,
    Image as ImageIcon,
    ExternalLink,
    Search,
    CheckCircle2,
    AlertCircle
} from 'lucide-react';
import { Project } from '../types';
import { PROJECTS as INITIAL_PROJECTS } from '../data';

import { supabase } from '../supabase';
import { useProjects } from '../context/ProjectContext';
import { getOptimizedImage } from '../utils';

const ADMIN_PASSWORD = 'naxit-admin-2026';

const Admin: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { projects, refreshProjects } = useProjects();
    const [editingProject, setEditingProject] = useState<Project | null>(null);
    const [isAdding, setIsAdding] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [isSyncing, setIsSyncing] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            setIsAuthenticated(true);
            setError('');
        } else {
            setError('Invalid Access Token');
        }
    };

    const handleDelete = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            const { error } = await supabase
                .from('projects')
                .delete()
                .eq('id', id);

            if (error) alert('Error deleting: ' + error.message);
            else refreshProjects();
        }
    };

    const handleToggleFeatured = async (id: string) => {
        const project = projects.find(p => p.id === id);
        if (!project) return;

        const featuredCount = projects.filter(p => p.featured).length;
        if (!project.featured && featuredCount >= 4) {
            alert('Maximum of 4 featured projects allowed.');
            return;
        }

        const { error } = await supabase
            .from('projects')
            .update({ featured: !project.featured })
            .eq('id', id);

        if (error) alert('Error updating: ' + error.message);
        else refreshProjects();
    };

    const handleSaveProject = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);

        const projectData = {
            id: editingProject?.id || `0${projects.length + 1}_${Date.now()}`,
            slug: formData.get('slug') as string,
            title: formData.get('title') as string,
            category: formData.get('category') as any,
            featured: formData.get('featured') === 'on',
            tagline: formData.get('tagline') as string,
            image: formData.get('image') as string,
            impact: formData.get('impact') as string,
            tech: (formData.get('tech') as string).split(',').map(t => t.trim()),
            challenge: formData.get('challenge') as string,
            approach: formData.get('approach') as string,
            full_description: formData.get('fullDescription') as string,
            gallery: (formData.get('gallery') as string).split(',').map(t => t.trim()).filter(Boolean),
            problem: {
                title: formData.get('problemTitle') as string || 'The Problem',
                content: (formData.get('problemContent') as string).split('\n').map(l => l.trim()).filter(l => l.length > 0)
            },
            solution: {
                title: formData.get('solutionTitle') as string || 'Our Solution',
                content: (formData.get('solutionContent') as string).split('\n').map(l => l.trim()).filter(l => l.length > 0)
            },
            design_decisions: (formData.get('designDecisions') as string).split('\n').map(l => l.trim()).filter(l => l.length > 0),
            result_outcome: {
                title: formData.get('resultOutcomeTitle') as string || 'Result (Project Outcome)',
                content: (formData.get('resultOutcomeContent') as string).split('\n').map(l => l.trim()).filter(l => l.length > 0)
            }
        };

        const { error } = isAdding
            ? await supabase.from('projects').insert([projectData])
            : await supabase.from('projects').update(projectData).eq('id', projectData.id);

        if (error) {
            alert('Error saving: ' + error.message);
        } else {
            setEditingProject(null);
            setIsAdding(false);
            refreshProjects();
        }
    };

    const handleSyncAllData = async () => {
        if (!window.confirm('This will synchronize your projects. NEW projects from deployment will be preserved, and STATIC projects from code will be uploaded if missing. Continue?')) return;
        setIsSyncing(true);
        try {
            // 1. Fetch current projects from Supabase to check what's already there
            const { data: remoteProjects, error: fetchError } = await supabase
                .from('projects')
                .select('*');

            if (fetchError) throw fetchError;

            // 2. Prepare static projects from data.ts
            const staticProjectsMapped = INITIAL_PROJECTS.map(p => ({
                id: p.id,
                slug: p.slug,
                title: p.title,
                category: p.category,
                featured: p.featured || false,
                tagline: p.tagline,
                image: p.image,
                impact: p.impact,
                tech: p.tech,
                challenge: p.challenge,
                approach: p.approach,
                full_description: p.fullDescription,
                gallery: p.gallery,
                problem: p.problem,
                solution: p.solution,
                design_decisions: p.designDecisions,
                result_outcome: p.resultOutcome
            }));

            // 3. Merge Logic: 
            // - We keep all remote projects (they are considered authoritative).
            // - We add static projects ONLY if their ID doesn't exist in remote.
            // This prevents overwriting newer remote updates with old static data.
            const remoteIds = new Set(remoteProjects?.map(p => p.id) || []);
            const mergedProjects = [...(remoteProjects || [])];

            staticProjectsMapped.forEach(sp => {
                if (!remoteIds.has(sp.id)) {
                    mergedProjects.push(sp);
                }
            });

            // 4. Upsert the merged set back to Supabase
            const { error: upsertError } = await supabase.from('projects').upsert(mergedProjects);
            if (upsertError) throw upsertError;

            alert(`Sync complete! Total cloud projects: ${mergedProjects.length}`);
            refreshProjects();
        } catch (err: any) {
            console.error('Sync failed:', err);
            alert('Sync failed: ' + err.message);
        } finally {
            setIsSyncing(false);
        }
    };

    const handleDownloadData = () => {
        // Prepare the data to match the data.ts format
        const projectsToExport = projects.map(p => ({
            ...p,
            // Ensure any UI-specific or extra fields are cleaned if necessary
        }));

        const dataStr = "export const PROJECTS = " + JSON.stringify(projectsToExport, null, 4) + ";";
        const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
        const exportFileDefaultName = 'projects_data.ts';

        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    };

    const filteredProjects = projects.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-naxit-charcoal flex items-center justify-center p-6 bg-[radial-gradient(circle_at_50%_50%,rgba(0,85,255,0.1),transparent)]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass p-10 rounded-[2.5rem] border border-white/10 w-full max-w-md relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-naxit-royal via-naxit-cyan to-naxit-royal" />
                    <div className="flex flex-col items-center mb-8">
                        <div className="w-16 h-16 bg-naxit-royal/20 rounded-2xl flex items-center justify-center mb-4 border border-naxit-cyan/30">
                            <Lock className="w-8 h-8 text-naxit-cyan" />
                        </div>
                        <h1 className="text-3xl font-display font-bold text-white uppercase tracking-widest">Admin Naxit</h1>
                        <p className="text-gray-500 text-xs font-mono tracking-widest mt-2">SECURE PROTOCOL ACCESS</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest pl-2">Access Token</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter password..."
                                className="w-full glass bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-naxit-cyan outline-none transition-all placeholder:text-gray-600"
                            />
                        </div>
                        {error && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-red-500 text-xs font-mono pl-2">
                                <AlertCircle className="w-4 h-4" /> {error}
                            </motion.div>
                        )}
                        <button className="w-full bg-white text-black font-bold py-4 rounded-2xl hover:bg-naxit-cyan transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                            INITIALIZE SESSION
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-naxit-charcoal text-white font-sans selection:bg-naxit-cyan selection:text-black">
            {/* Sidebar / Topbar */}
            <nav className="border-b border-white/5 bg-black/40 backdrop-blur-xl sticky top-0 z-[100]">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-naxit-royal/20 rounded-xl flex items-center justify-center border border-naxit-cyan/20">
                            <Layout className="w-5 h-5 text-naxit-cyan" />
                        </div>
                        <div>
                            <h2 className="text-sm font-bold tracking-tight">PROJECT COMMAND</h2>
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-naxit-cyan animate-pulse" />
                                <span className="text-[9px] font-mono text-gray-500 tracking-widest uppercase">System Online</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={handleSyncAllData}
                            disabled={isSyncing}
                            className={`glass border border-white/10 px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${isSyncing ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/5'}`}
                        >
                            <Save className="w-4 h-4" /> {isSyncing ? 'SYNCING...' : 'SYNC ALL DATA'}
                        </button>
                        <button
                            onClick={handleDownloadData}
                            className="glass border border-white/10 px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 hover:bg-white/5"
                            title="Download project data to update data.ts"
                        >
                            <ExternalLink className="w-4 h-4" /> EXPORT DATA
                        </button>
                        <button
                            onClick={() => { setIsAdding(true); setEditingProject({} as Project); }}
                            className="bg-naxit-royal hover:bg-naxit-cyan text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2"
                        >
                            <Plus className="w-4 h-4" /> ADD PROJECT
                        </button>
                        <button
                            onClick={() => setIsAuthenticated(false)}
                            className="glass border border-white/10 hover:border-red-500/50 hover:text-red-500 px-5 py-2.5 rounded-xl text-xs font-bold transition-all"
                        >
                            TERMINATE
                        </button>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 py-12">
                {/* Stats & Search */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    <div className="glass p-6 rounded-3xl border border-white/5 bg-gradient-to-br from-naxit-royal/5 to-transparent">
                        <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2">Total Deployments</p>
                        <p className="text-4xl font-display font-bold">{projects.length}</p>
                    </div>
                    <div className="glass p-6 rounded-3xl border border-white/5 bg-gradient-to-br from-naxit-cyan/5 to-transparent">
                        <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2">Featured Core (Max 4)</p>
                        <div className="flex items-end gap-3">
                            <p className="text-4xl font-display font-bold">{projects.filter(p => p.featured).length}</p>
                            <p className="text-gray-600 mb-1">/ 4</p>
                        </div>
                    </div>
                    <div className="md:col-span-2 relative flex items-center">
                        <Search className="absolute left-6 w-5 h-5 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search projects by title or category..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full glass bg-white/5 border border-white/10 rounded-3xl pl-16 pr-6 py-6 outline-none focus:border-naxit-cyan/30 transition-all"
                        />
                    </div>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="glass rounded-[2rem] border border-white/5 overflow-hidden group hover:border-white/20 transition-all flex flex-col"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img src={getOptimizedImage(project.image, 400)} alt={`${project.title} - Admin Dashboard Preview Mannar, Sri Lanka`} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-naxit-charcoal to-transparent" />
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        <button
                                            onClick={() => handleToggleFeatured(project.id)}
                                            className={`p-2 rounded-xl border transition-all ${project.featured
                                                ? 'bg-naxit-cyan text-black border-naxit-cyan shadow-[0_0_15px_rgba(0,187,255,0.4)]'
                                                : 'glass border-white/10 text-white hover:bg-white/10'
                                                }`}
                                        >
                                            <Star className={`w-4 h-4 ${project.featured ? 'fill-black' : ''}`} />
                                        </button>
                                    </div>
                                    <div className="absolute top-4 right-4 flex gap-2">
                                        <button
                                            onClick={() => { setEditingProject(project); setIsAdding(false); }}
                                            className="p-2 glass border border-white/10 text-white rounded-xl hover:bg-naxit-royal hover:border-naxit-royal transition-all"
                                        >
                                            <Edit3 className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(project.id)}
                                            className="p-2 glass border border-white/10 text-white rounded-xl hover:bg-red-500 hover:border-red-500 transition-all"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <span className="text-[10px] font-mono text-naxit-cyan tracking-widest uppercase">{project.category}</span>
                                            <h3 className="text-xl font-bold mt-1">{project.title}</h3>
                                        </div>
                                        <span className="text-[9px] font-mono text-gray-500 border border-white/5 px-2 py-1 rounded">ID: {project.id}</span>
                                    </div>
                                    <p className="text-gray-400 text-sm font-light line-clamp-2 mb-6">{project.tagline}</p>

                                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                                        <div className="flex gap-2">
                                            {project.tech.slice(0, 3).map(t => (
                                                <span key={t} className="text-[8px] font-mono text-gray-500 uppercase">{t}</span>
                                            ))}
                                        </div>
                                        <span className="text-[9px] font-mono text-gray-600 tracking-tighter">{project.slug}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </main>

            {/* Editor Modal */}
            <AnimatePresence>
                {editingProject && (
                    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-10">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setEditingProject(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="glass w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[3rem] border border-white/10 relative z-10 custom-scrollbar"
                            data-lenis-prevent
                        >
                            <div className="sticky top-0 z-20 glass bg-black/60 backdrop-blur-xl border-b border-white/10 px-8 py-6 flex items-center justify-between">
                                <div>
                                    <h3 className="text-2xl font-display font-bold">{isAdding ? 'Deploy New Project' : 'Edit Project Core'}</h3>
                                    <p className="text-[10px] font-mono text-gray-500 tracking-widest uppercase">System Config v2.0</p>
                                </div>
                                <button
                                    onClick={() => setEditingProject(null)}
                                    className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <form onSubmit={handleSaveProject} className="p-8 md:p-12 space-y-10">
                                {/* Basic Info */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest pl-2">Project Title</label>
                                        <input name="title" defaultValue={editingProject.title} required className="w-full glass bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-naxit-cyan" />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest pl-2">URL Slug</label>
                                        <input name="slug" defaultValue={editingProject.slug} required className="w-full glass bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-naxit-cyan" />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest pl-2">Category</label>
                                        <select name="category" defaultValue={editingProject.category} required className="w-full glass bg-naxit-charcoal border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-naxit-cyan appearance-none">
                                            <option value="Website Design">Website Design</option>
                                            <option value="UI/UX Design">UI/UX Design</option>
                                            <option value="Digital Branding">Digital Branding</option>
                                            <option value="Graphic Design">Graphic Design</option>
                                        </select>
                                    </div>
                                    <div className="space-y-4">
                                        <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest pl-2">Impact Stat</label>
                                        <input name="impact" defaultValue={editingProject.impact} placeholder="+140% Growth" className="w-full glass bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-naxit-cyan" />
                                    </div>
                                </div>

                                {/* Imagery */}
                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest pl-2 flex items-center gap-2">
                                            <ImageIcon className="w-3 h-3" /> Main Hero Image URL
                                        </label>
                                        <input name="image" defaultValue={editingProject.image} required className="w-full glass bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-naxit-cyan" />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest pl-2">Gallery Images (Comma separated URLs)</label>
                                        <textarea name="gallery" defaultValue={editingProject.gallery?.join(', ')} rows={3} className="w-full glass bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-naxit-cyan resize-none" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest pl-2">Tagline (Brief Hook)</label>
                                        <input name="tagline" defaultValue={editingProject.tagline} required className="w-full glass bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-naxit-cyan" />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest pl-2">The Challenge</label>
                                        <textarea name="challenge" defaultValue={editingProject.challenge} rows={3} className="w-full glass bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-naxit-cyan resize-none" />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest pl-2">Our Approach</label>
                                        <textarea name="approach" defaultValue={editingProject.approach} rows={3} className="w-full glass bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-naxit-cyan resize-none" />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest pl-2">Full Narrative</label>
                                        <textarea name="fullDescription" defaultValue={editingProject.fullDescription} rows={5} className="w-full glass bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-naxit-cyan resize-none" />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest pl-2">Tech Stack (Comma separated)</label>
                                        <input name="tech" defaultValue={editingProject.tech?.join(', ')} placeholder="React, Tailwind, Framer" className="w-full glass bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-naxit-cyan" />
                                    </div>

                                    {/* Detailed Sections */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/5">
                                        <div className="space-y-4">
                                            <h4 className="text-xs font-bold text-naxit-cyan uppercase tracking-widest">Problem Section</h4>
                                            <input name="problemTitle" defaultValue={editingProject.problem?.title} placeholder="Section Title (e.g. The Problem)" className="w-full glass bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-naxit-cyan text-sm" />
                                            <textarea name="problemContent" defaultValue={editingProject.problem?.content?.join('\n')} rows={4} placeholder="Content points (one per line)..." className="w-full glass bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-naxit-cyan resize-none text-sm" />
                                        </div>
                                        <div className="space-y-4">
                                            <h4 className="text-xs font-bold text-naxit-cyan uppercase tracking-widest">Solution Section</h4>
                                            <input name="solutionTitle" defaultValue={editingProject.solution?.title} placeholder="Section Title (e.g. Our Solution)" className="w-full glass bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-naxit-cyan text-sm" />
                                            <textarea name="solutionContent" defaultValue={editingProject.solution?.content?.join('\n')} rows={4} placeholder="Content points (one per line)..." className="w-full glass bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-naxit-cyan resize-none text-sm" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/5">
                                        <div className="space-y-4">
                                            <h4 className="text-xs font-bold text-naxit-cyan uppercase tracking-widest">Design Decisions</h4>
                                            <textarea name="designDecisions" defaultValue={editingProject.designDecisions?.join('\n')} rows={6} placeholder="Decisions (one per line)..." className="w-full glass bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-naxit-cyan resize-none text-sm" />
                                        </div>
                                        <div className="space-y-4">
                                            <h4 className="text-xs font-bold text-naxit-cyan uppercase tracking-widest">Result & Outcome</h4>
                                            <input name="resultOutcomeTitle" defaultValue={editingProject.resultOutcome?.title} placeholder="Section Title (e.g. The Result)" className="w-full glass bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-naxit-cyan text-sm" />
                                            <textarea name="resultOutcomeContent" defaultValue={editingProject.resultOutcome?.content?.join('\n')} rows={4} placeholder="Outcome points (one per line)..." className="w-full glass bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-naxit-cyan resize-none text-sm" />
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row gap-4 items-center justify-between">
                                    <label className="flex items-center gap-4 cursor-pointer p-4 glass rounded-2xl border border-white/5 hover:border-naxit-cyan/30 transition-all">
                                        <input type="checkbox" name="featured" defaultChecked={editingProject.featured} className="w-5 h-5 accent-naxit-cyan" />
                                        <span className="text-sm font-bold flex items-center gap-2">
                                            <Star className={`w-4 h-4 ${editingProject.featured ? 'fill-naxit-cyan text-naxit-cyan' : ''}`} />
                                            FEATURE ON HOME PAGE
                                        </span>
                                    </label>

                                    <div className="flex gap-4 w-full md:w-auto">
                                        <button type="button" onClick={() => setEditingProject(null)} className="flex-1 md:px-10 py-5 rounded-2xl font-bold glass border border-white/10 hover:bg-white/5 transition-all uppercase text-xs tracking-widest">Discard</button>
                                        <button type="submit" className="flex-1 md:px-16 py-5 rounded-2xl font-bold bg-white text-black hover:bg-naxit-cyan transition-all hover:scale-105 active:scale-95 uppercase text-xs tracking-widest flex items-center justify-center gap-3">
                                            <Save className="w-4 h-4" /> Commit Changes
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Admin;
