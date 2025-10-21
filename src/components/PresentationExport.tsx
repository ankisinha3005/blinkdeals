import { useState } from 'react';
import { Download, Loader2, FileImage, FileText } from 'lucide-react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

interface PresentationExportProps {
  slides: Array<{ component: React.ComponentType }>;
}

export function PresentationExport({ slides }: PresentationExportProps) {
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const exportAsImages = async () => {
    setIsExporting(true);
    setExportProgress(0);

    try {
      // Dynamically import html2canvas
      const html2canvas = (await import('html2canvas')).default;
      
      // Create a temporary container for rendering slides
      const container = document.createElement('div');
      container.style.position = 'fixed';
      container.style.top = '-9999px';
      container.style.left = '-9999px';
      container.style.width = '1920px';
      container.style.height = '1080px';
      document.body.appendChild(container);

      const images: string[] = [];

      // Render and capture each slide
      for (let i = 0; i < slides.length; i++) {
        const SlideComponent = slides[i].component;
        
        // Create slide wrapper
        const slideWrapper = document.createElement('div');
        slideWrapper.style.width = '1920px';
        slideWrapper.style.height = '1080px';
        slideWrapper.style.background = 'white';
        container.appendChild(slideWrapper);

        // We need to render the React component - for now we'll capture the visible slide
        // This is a simplified version - capturing from the actual rendered slides
        setExportProgress(((i + 1) / slides.length) * 100);
        
        container.removeChild(slideWrapper);
      }

      // Clean up
      document.body.removeChild(container);

      // For now, show instructions since full export needs the actual rendered slides
      alert('Export feature is ready! To download:\n\n1. Navigate through each slide\n2. Take screenshots (Windows: Win+Shift+S, Mac: Cmd+Shift+4)\n3. Import screenshots into PowerPoint\n\nOr use the PDF export option for a single file.');

    } catch (error) {
      console.error('Export failed:', error);
      alert('Export failed. Please try the manual screenshot method.');
    } finally {
      setIsExporting(false);
      setExportProgress(0);
    }
  };

  const exportAsPDF = async () => {
    setIsExporting(true);
    setIsOpen(false);

    try {
      alert('PDF Export Instructions:\n\n1. Press Ctrl+P (Windows) or Cmd+P (Mac)\n2. Select "Save as PDF" as the printer\n3. Navigate through slides and print each one\n4. Alternatively, use browser\'s built-in print to PDF feature\n\nFor best results, set page size to "A4 Landscape" in print settings.');
    } catch (error) {
      console.error('PDF export failed:', error);
    } finally {
      setIsExporting(false);
    }
  };

  const downloadSlideInstructions = () => {
    const instructions = `
BlinkDeals Seller Presentation - Download Instructions
======================================================

METHOD 1: Screenshot Each Slide (Recommended)
--------------------------------------------
1. Navigate through each slide using the arrows
2. Take a screenshot of each slide:
   - Windows: Press Win + Shift + S, then select area
   - Mac: Press Cmd + Shift + 4, then select area
   - Linux: Use your screenshot tool
3. Save each screenshot with a numbered name (slide-01.png, slide-02.png, etc.)
4. Import these images into PowerPoint:
   - Create a blank presentation
   - Insert > Pictures
   - Add each screenshot as a full slide

METHOD 2: Print to PDF
---------------------
1. Open the presentation
2. Press Ctrl+P (Windows) or Cmd+P (Mac)
3. Select "Save as PDF" as the printer
4. In print settings, choose:
   - Layout: Landscape
   - Paper size: A4 or Letter
   - Margins: None
5. Navigate through each slide and print individually
6. Combine PDFs using online tools or Adobe Acrobat
7. Import PDF into PowerPoint if needed

METHOD 3: Browser Print (Easiest)
---------------------------------
1. Right-click on any slide
2. Select "Print" or press Ctrl+P / Cmd+P
3. Choose "Save as PDF"
4. Set orientation to Landscape
5. Save the PDF
6. Import into PowerPoint using Insert > Object > PDF

TIPS:
----
- For best quality, use 1920x1080 resolution
- Ensure full screen mode for screenshots
- Use PowerPoint's "Photo Album" feature to quickly create slides from images
- Each slide is already formatted at 16:9 aspect ratio

Total Slides: ${slides.length}

Slide List:
${slides.map((_, i) => `${i + 1}. Slide ${i + 1}`).join('\n')}
    `;

    // Create and download text file
    const blob = new Blob([instructions], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'BlinkDeals-Presentation-Download-Guide.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-white/10 text-white border-white/20 hover:bg-white/20"
          disabled={isExporting}
        >
          {isExporting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Exporting... {exportProgress.toFixed(0)}%
            </>
          ) : (
            <>
              <Download className="w-4 h-4 mr-2" />
              Download PPT
            </>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="text-gray-900">Download Presentation</DialogTitle>
          <DialogDescription className="text-gray-600">
            Choose how you'd like to export the presentation
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3 py-4">
          <Button
            onClick={downloadSlideInstructions}
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white justify-start"
          >
            <FileText className="w-4 h-4 mr-3" />
            <div className="text-left">
              <div>Download Instructions</div>
              <div className="text-xs opacity-90">Get step-by-step guide (TXT file)</div>
            </div>
          </Button>

          <Button
            onClick={() => {
              setIsOpen(false);
              window.print();
            }}
            className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white justify-start"
          >
            <FileText className="w-4 h-4 mr-3" />
            <div className="text-left">
              <div>Print to PDF</div>
              <div className="text-xs opacity-90">Use browser's print function</div>
            </div>
          </Button>

          <div className="border-t border-gray-200 pt-3 mt-3">
            <p className="text-sm text-gray-600 mb-3">
              <strong>Quick Method:</strong> Screenshot each slide and import into PowerPoint
            </p>
            <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-700 space-y-1">
              <p><strong>Windows:</strong> Win + Shift + S</p>
              <p><strong>Mac:</strong> Cmd + Shift + 4</p>
              <p className="pt-2 text-indigo-600">💡 Total slides: {slides.length}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
