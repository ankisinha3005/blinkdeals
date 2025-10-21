import { Zap, Store, User, HeadphonesIcon, Share2, ChevronDown, UserCircle, ShoppingBag, LogOut } from 'lucide-react';
import { Button } from './ui/button';
import { ShareDialog } from './ShareDialog';
import { APP_NAME, COLORS, GRADIENTS } from '../constants';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

interface HeaderProps {
  onLogoClick?: () => void;
  onLoginClick?: () => void;
  onBecomeSellerClick?: () => void;
  onSupportClick?: () => void;
  onProfileClick?: () => void;
  onOrdersClick?: () => void;
  onLogoutClick?: () => void;
  isLoggedIn?: boolean;
  userName?: string;
}

export function Header({ 
  onLogoClick, 
  onLoginClick, 
  onBecomeSellerClick, 
  onSupportClick,
  onProfileClick,
  onOrdersClick,
  onLogoutClick,
  isLoggedIn = false,
  userName = 'User'
}: HeaderProps) {
  // Extract first name only
  const firstName = userName.split(' ')[0];
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Left */}
          <button 
            onClick={onLogoClick}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity group"
          >
            <Zap className={`w-8 h-8 text-${COLORS.primary} fill-${COLORS.primary} group-hover:text-${COLORS.primaryDark} group-hover:fill-${COLORS.primaryDark} transition-colors`} />
            <h1 className={`${GRADIENTS.primary} bg-clip-text text-transparent font-bold`}>{APP_NAME}</h1>
          </button>

          {/* Navigation - Right */}
          <nav className="flex items-center gap-4">
            <Button
              onClick={onBecomeSellerClick}
              variant="ghost"
              className="hidden md:flex items-center gap-2"
            >
              <Store className="w-5 h-5" />
              <span>Become a Seller</span>
            </Button>
            
            <Button
              onClick={onSupportClick}
              variant="ghost"
              className="hidden md:flex items-center gap-2"
            >
              <HeadphonesIcon className="w-5 h-5" />
              <span>Support</span>
            </Button>

            <ShareDialog
              trigger={
                <Button
                  variant="ghost"
                  className="hidden sm:flex items-center gap-2"
                >
                  <Share2 className="w-5 h-5" />
                  <span className="hidden lg:inline">Share</span>
                </Button>
              }
            />

            {/* Login/Profile Button */}
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    className={`${GRADIENTS.primary} ${GRADIENTS.primaryHover} flex items-center gap-2`}
                  >
                    <div className={`w-8 h-8 rounded-full bg-white/20 flex items-center justify-center`}>
                      <User className="w-5 h-5" />
                    </div>
                    <span className="max-w-[100px] truncate">{firstName}</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <div className="flex flex-col">
                      <span className="text-sm">{userName}</span>
                      <span className="text-xs text-gray-500">My Account</span>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={onProfileClick} className="cursor-pointer">
                    <UserCircle className="w-4 h-4 mr-2" />
                    My Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={onOrdersClick} className="cursor-pointer">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Orders
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={onLogoutClick} className="cursor-pointer text-red-600">
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                onClick={onLoginClick}
                className={`${GRADIENTS.primary} ${GRADIENTS.primaryHover} flex items-center gap-2`}
              >
                <User className="w-5 h-5" />
                <span>Login</span>
              </Button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
