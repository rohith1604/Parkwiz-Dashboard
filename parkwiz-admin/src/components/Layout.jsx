import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Home, Users, Layers, CreditCard, Settings } from 'lucide-react';

export default function Layout() {
  const navItems = [
    { icon: <Home className="w-6 h-6" />, label: 'Dashboard', path: '/' },
    { icon: <Users className="w-6 h-6" />, label: 'Customers', path: '/customers' },
    { icon: <Layers className="w-6 h-6" />, label: 'Parking Spaces', path: '/parking-spaces' },
    { icon: <CreditCard className="w-6 h-6" />, label: 'Transactions', path: '/transactions' },
    { icon: <Settings className="w-6 h-6" />, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r">
        <div className="p-6">
          <h1 className="text-2xl font-bold">Parkwiz</h1>
        </div>
        <nav className="space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
                  isActive ? 'bg-gray-100' : ''
                }`
              }
            >
              {item.icon}
              <span className="ml-3">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}