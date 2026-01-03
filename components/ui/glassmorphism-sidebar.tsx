"use client";

import React, { useState } from 'react';
import {
    LayoutDashboard,
    BarChart2,
    Users,
    Folder,
    CheckSquare,
    Hexagon
} from 'lucide-react';
import { cn } from "@/lib/utils";

// --- Data for each page ---
const pageContent: Record<string, { title: string; description: string; content: React.ReactNode }> = {
    Dashboard: {
        title: 'Dashboard',
        description: "Welcome back, Serafim. Here's what's happening today.",
        content: (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <h2 className="text-lg font-semibold text-white">Active Projects</h2>
                    <p className="text-4xl font-bold mt-2 text-indigo-400">12</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <h2 className="text-lg font-semibold text-white">Tasks Due</h2>
                    <p className="text-4xl font-bold mt-2 text-pink-400">5</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <h2 className="text-lg font-semibold text-white">New Users</h2>
                    <p className="text-4xl font-bold mt-2 text-emerald-400">28</p>
                </div>
            </div>
        )
    },
    Analytics: {
        title: 'Analytics',
        description: 'Detailed insights and metrics for your projects.',
        content: (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm lg:col-span-2 h-64 flex items-center justify-center">
                    <p className="text-gray-400">Chart placeholder for User Growth</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <h2 className="text-lg font-semibold text-white">Bounce Rate</h2>
                    <p className="text-4xl font-bold mt-2 text-indigo-400">24.5%</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <h2 className="text-lg font-semibold text-white">Session Duration</h2>
                    <p className="text-4xl font-bold mt-2 text-pink-400">8m 12s</p>
                </div>
            </div>
        )
    },
    Users: {
        title: 'Users',
        description: 'Manage all the users in your organization.',
        content: (
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-white/10">
                            <th className="p-3 text-gray-300 font-medium">Name</th>
                            <th className="p-3 text-gray-300 font-medium">Email</th>
                            <th className="p-3 text-gray-300 font-medium">Role</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                        <tr><td className="p-3 text-gray-200">Jane Doe</td><td className="p-3 text-gray-400">jane.doe@example.com</td><td className="p-3 text-indigo-300">Admin</td></tr>
                        <tr><td className="p-3 text-gray-200">John Smith</td><td className="p-3 text-gray-400">john.smith@example.com</td><td className="p-3 text-emerald-300">Developer</td></tr>
                        <tr><td className="p-3 text-gray-200">Sam Wilson</td><td className="p-3 text-gray-400">sam.wilson@example.com</td><td className="p-3 text-pink-300">Designer</td></tr>
                    </tbody>
                </table>
            </div>
        )
    },
    Projects: {
        title: 'Projects',
        description: 'An overview of all your ongoing and completed projects.',
        content: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <h2 className="text-lg font-semibold text-white">Project Alpha</h2>
                    <p className="text-sm text-gray-400 mt-1">Status: In Progress</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <h2 className="text-lg font-semibold text-white">Project Beta</h2>
                    <p className="text-sm text-gray-400 mt-1">Status: Completed</p>
                </div>
            </div>
        )
    },
    Tasks: {
        title: 'Tasks',
        description: 'Track and manage all your tasks and to-dos.',
        content: (
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                <ul className="space-y-3">
                    <li className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                        <span className="text-gray-200">Finalize Q3 report</span>
                        <span className="text-xs text-pink-400 font-medium">Due Tomorrow</span>
                    </li>
                    <li className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                        <span className="text-gray-200">Design new landing page mockups</span>
                        <span className="text-xs text-gray-400 font-medium">In Progress</span>
                    </li>
                    <li className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                        <span className="text-gray-200">Deploy server updates</span>
                        <span className="text-xs text-emerald-400 font-medium">Completed</span>
                    </li>
                </ul>
            </div>
        )
    }
};

const navItems = [
    { page: 'Dashboard', icon: LayoutDashboard },
    { page: 'Analytics', icon: BarChart2 },
    { page: 'Users', icon: Users },
    { page: 'Projects', icon: Folder },
    { page: 'Tasks', icon: CheckSquare },
];

// Sidebar Component
const Sidebar = ({ activePage, setActivePage }: { activePage: string; setActivePage: (page: string) => void }) => (
    <aside className="w-64 flex-shrink-0 flex flex-col z-10 backdrop-blur-md bg-white/5 border-r border-white/10 h-full">
        <div className="h-20 flex items-center justify-center border-b border-white/10">
            <div className="flex items-center gap-2">
                <Hexagon className="w-8 h-8 text-indigo-400" />
                <span className="text-xl font-bold text-white">AetherUI</span>
            </div>
        </div>
        <nav className="flex-grow p-4 space-y-2">
            {navItems.map(item => (
                <a
                    key={item.page}
                    href="#"
                    className={cn(
                        "flex items-center gap-3 px-4 py-2 rounded-lg text-gray-300 transition-colors hover:bg-white/10",
                        activePage === item.page ? 'bg-white/10 text-white font-medium' : ''
                    )}
                    onClick={(e) => {
                        e.preventDefault();
                        setActivePage(item.page);
                    }}
                >
                    <item.icon className="w-5 h-5" />
                    <span>{item.page}</span>
                </a>
            ))}
        </nav>
        <div className="p-4 border-t border-white/10">
            <div className="flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" alt="User Avatar" className="w-10 h-10 rounded-full border-2 border-indigo-400" />
                <div>
                    <p className="font-semibold text-white">Serafim P.</p>
                    <p className="text-xs text-gray-400">Admin</p>
                </div>
            </div>
        </div>
    </aside>
);

// Main Content Component
const MainContent = ({ activePage }: { activePage: string }) => {
    const { title, description, content } = pageContent[activePage];
    return (
        <main className="flex-grow p-8 overflow-y-auto">
            <h1 className="text-3xl font-bold text-white">{title}</h1>
            <p className="text-gray-400 mt-2">{description}</p>
            <div className="mt-8">{content}</div>
        </main>
    );
};

// Main Dashboard Layout Component
export const DashboardLayout = () => {
    const [activePage, setActivePage] = useState('Dashboard');
    return (
        <div className="relative min-h-screen w-full flex bg-gray-900 text-gray-200 overflow-hidden font-sans">
            {/* Background Shapes */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600/20 blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-pink-600/20 blur-[100px] pointer-events-none"></div>

            <Sidebar activePage={activePage} setActivePage={setActivePage} />
            <MainContent activePage={activePage} />
        </div>
    );
};
