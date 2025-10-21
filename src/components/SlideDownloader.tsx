import { Camera } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from 'sonner';

interface SlideDownloaderProps {
  slideNumber: number;
  totalSlides: number;
}

export function SlideDownloader({ slideNumber, totalSlides }: SlideDownloaderProps) {
  const downloadCurrentSlide = async () => {
    try {
      // Dynamically import html2canvas
      const html2canvas = (await import('html2canvas')).default;
      
      // Find the slide element
      const slideElement = document.querySelector('[data-slide-container]') as HTMLElement;
      
      if (!slideElement) {
        toast.error('Could not find slide to capture');
        return;
      }

      toast.info('Capturing slide...', { duration: 1000 });

      // Capture the slide
      const canvas = await html2canvas(slideElement, {
        backgroundColor: '#ffffff',
        scale: 2, // Higher quality
        logging: false,
        width: slideElement.offsetWidth,
        height: slideElement.offsetHeight,
      });

      // Convert to blob and download
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `blinkdeals-slide-${String(slideNumber + 1).padStart(2, '0')}.png`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
          
          toast.success(`Slide ${slideNumber + 1} downloaded!`);
        }
      }, 'image/png');
    } catch (error) {
      console.error('Download failed:', error);
      toast.error('Download failed. Try using screenshot instead.');
    }
  };

  return (
    <Button
      onClick={downloadCurrentSlide}
      variant="outline"
      size="sm"
      className="bg-white/10 text-white border-white/20 hover:bg-white/20 text-xs"
      title="Download current slide as image"
    >
      <Camera className="w-3 h-3 mr-1" />
      Save Slide {slideNumber + 1}/{totalSlides}
    </Button>
  );
}
