import { useState } from 'react';
import { Share2, Copy, Check, Facebook, Twitter, MessageCircle, Mail } from 'lucide-react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Input } from './ui/input';
import { APP_NAME, COLORS, GRADIENTS } from '../constants';

interface ShareDialogProps {
  url?: string;
  title?: string;
  description?: string;
  trigger?: React.ReactNode;
}

export function ShareDialog({ 
  url = typeof window !== 'undefined' ? window.location.href : '',
  title = `Check out ${APP_NAME}!`,
  description = 'Amazing flash deals on electronics and gadgets',
  trigger
}: ShareDialogProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} - ${url}`)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${description}\n\n${url}`)}`
  };

  const handleShare = (platform: keyof typeof shareLinks) => {
    window.open(shareLinks[platform], '_blank', 'width=600,height=400');
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" size="sm" className="gap-2">
            <Share2 className="w-4 h-4" />
            Share
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share {APP_NAME}</DialogTitle>
          <DialogDescription>
            Share this deal with your friends and family
          </DialogDescription>
        </DialogHeader>

        {/* Social Media Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <Button
            variant="outline"
            onClick={() => handleShare('facebook')}
            className="w-full gap-2 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition-colors"
          >
            <Facebook className="w-5 h-5" />
            Facebook
          </Button>
          
          <Button
            variant="outline"
            onClick={() => handleShare('twitter')}
            className="w-full gap-2 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-300 transition-colors"
          >
            <Twitter className="w-5 h-5" />
            Twitter
          </Button>
          
          <Button
            variant="outline"
            onClick={() => handleShare('whatsapp')}
            className="w-full gap-2 hover:bg-green-50 hover:text-green-600 hover:border-green-300 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </Button>
          
          <Button
            variant="outline"
            onClick={() => handleShare('email')}
            className="w-full gap-2 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-300 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Email
          </Button>
        </div>

        {/* Copy Link */}
        <div className="mt-6">
          <p className="text-sm text-gray-600 mb-2">Or copy link</p>
          <div className="flex items-center gap-2">
            <Input
              readOnly
              value={url}
              className="flex-1 text-sm"
              onClick={(e) => e.currentTarget.select()}
            />
            <Button
              onClick={handleCopyLink}
              size="sm"
              className={`gap-2 ${
                copied 
                  ? 'bg-green-500 hover:bg-green-600' 
                  : `${GRADIENTS.primary} ${GRADIENTS.primaryHover}`
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy
                </>
              )}
            </Button>
          </div>
        </div>

        {/* QR Code Placeholder */}
        <div className="mt-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 text-center border-2 border-dashed border-indigo-200">
          <div className="w-32 h-32 mx-auto bg-white rounded-lg flex items-center justify-center mb-3">
            <div className={`w-24 h-24 ${GRADIENTS.primary} rounded grid grid-cols-3 gap-1 p-2`}>
              {[...Array(9)].map((_, i) => (
                <div 
                  key={i} 
                  className={`rounded-sm ${
                    [0, 2, 3, 5, 6, 8].includes(i) ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-600">Scan to share on mobile</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
