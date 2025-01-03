import React from 'react';
import { X, User, Info, Settings, LogOut } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-hot-toast';

interface SlidingMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SlidingMenu({ isOpen, onClose }: SlidingMenuProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Logged out successfully');
      navigate('/');
      onClose();
    } catch (error) {
      toast.error('Failed to log out');
    }
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sliding Panel */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-semibold">Menu</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* User Profile Section */}
          {user && (
            <div className="p-4 border-b">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium">{user.email}</div>
                  <div className="text-sm text-gray-500">Member since {new Date(user.metadata.creationTime).getFullYear()}</div>
                </div>
              </div>
            </div>
          )}

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto p-4">
            <Link
              to="/about"
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 ${
                location.pathname === '/about'
                  ? 'bg-blue-50 text-blue-600'
                  : 'hover:bg-gray-50'
              }`}
              onClick={onClose}
            >
              <Info className="h-5 w-5" />
              <span>About Us</span>
            </Link>

            {user ? (
              <>
                <Link
                  to="/profile"
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 ${
                    location.pathname === '/profile'
                      ? 'bg-blue-50 text-blue-600'
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={onClose}
                >
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </Link>

                <Link
                  to="/wishlist"
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 ${
                    location.pathname === '/wishlist'
                      ? 'bg-blue-50 text-blue-600'
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={onClose}
                >
                  <Settings className="h-5 w-5" />
                  <span>Wishlist</span>
                </Link>
                
                {/* <Link
                  to="/wishlist"
                  className={`flex items-center px-3 py-2 rounded-md ${
                    location.pathname === '/wishlist'
                      ? 'text-primary bg-primary/10'
                      : 'text-theme-text hover:text-primary hover:bg-primary/10'
                  }`}
                >
                  <Star className="h-5 w-5 mr-1" />
                  <span>Wishlist</span>
                </Link> */}

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-50 text-left"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </>
      ) : (
              <Link
                to="/login"
                className={`flex items-center px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 ${
                location.pathname === '/login'
                  ? 'bg-blue-50 text-blue-600'
                  : 'hover:bg-gray-50'
              }`}
              >
                <LogOut className="h-5 w-5 mr-1" />
                <span>Login</span>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </>
  );
}