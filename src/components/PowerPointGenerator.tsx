import { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { APP_NAME, CURRENCY_SYMBOL } from '../constants';

export function PowerPointGenerator() {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePowerPoint = async () => {
    setIsGenerating(true);
    toast.info('Generating PowerPoint presentation...', { duration: 2000 });

    try {
      // Dynamically import PptxGenJS
      const pptxModule = await import('pptxgenjs');
      const PptxGenJS = pptxModule.default || pptxModule;
      
      // Create new presentation
      const pptx = new PptxGenJS();
      
      // Disable any CSS parsing or color inheritance
      pptx.layout = 'LAYOUT_16x9';
      pptx.rtlMode = false;
      
      // Set presentation metadata
      pptx.author = 'BlinkDeals';
      pptx.company = 'BlinkDeals';
      pptx.subject = 'Seller Partnership Presentation';
      pptx.title = `${APP_NAME} - Seller Pitch`;
      
      // Define all colors as 6-digit hex strings (no CSS, no variables, no functions)
      const C = {
        INDIGO: '6366F1',
        PURPLE: 'A855F7',
        PINK: 'EC4899',
        GRAY_800: '1F2937',
        GRAY_600: '4B5563',
        GRAY_400: '9CA3AF',
        GRAY_50: 'F9FAFB',
        WHITE: 'FFFFFF',
        GREEN: '10B981',
        BLUE_LIGHT: 'DBEAFE',
        PURPLE_LIGHT: 'F3E8FF',
        PINK_LIGHT: 'FCE7F3',
        GREEN_LIGHT: 'D1FAE5',
        GRAY_LIGHT: 'E5E7EB'
      };

      // === SLIDE 1: TITLE WITH GRADIENT ===
      const s1 = pptx.addSlide();
      
      // Create gradient background using shapes (PptxGenJS gradient approach)
      // Layer 1: Base indigo
      s1.addShape(pptx.ShapeType.rect, {
        x: 0, y: 0, w: '100%', h: '100%',
        fill: { color: C.INDIGO },
        line: { width: 0 }
      });
      
      // Layer 2: Purple gradient overlay (top-right)
      s1.addShape(pptx.ShapeType.rect, {
        x: '40%', y: 0, w: '60%', h: '100%',
        fill: { color: C.PURPLE },
        line: { width: 0 },
        transparency: 40
      });
      
      // Layer 3: Pink accent (bottom-right corner for depth)
      s1.addShape(pptx.ShapeType.ellipse, {
        x: '70%', y: '60%', w: '50%', h: '50%',
        fill: { color: C.PINK },
        line: { width: 0 },
        transparency: 70
      });
      
      // Layer 4: Subtle light overlay (top-left for dimension)
      s1.addShape(pptx.ShapeType.ellipse, {
        x: '-10%', y: '-10%', w: '40%', h: '40%',
        fill: { color: C.WHITE },
        line: { width: 0 },
        transparency: 90
      });
      
      s1.addShape(pptx.ShapeType.ellipse, {
        x: 4.3, y: 1.5, w: 1.4, h: 1.4,
        fill: { color: C.WHITE },
        line: { width: 0 }
      });
      
      s1.addText('⚡', {
        x: 4.3, y: 1.5, w: 1.4, h: 1.4,
        fontSize: 72,
        color: C.INDIGO,
        align: 'center',
        valign: 'middle'
      });
      
      s1.addText(APP_NAME, {
        x: 0.5, y: 3.2, w: 9, h: 1,
        fontSize: 72,
        bold: true,
        color: C.WHITE,
        align: 'center'
      });
      
      s1.addShape(pptx.ShapeType.rect, {
        x: 4.0, y: 4.3, w: 2, h: 0.05,
        fill: { color: C.WHITE },
        line: { width: 0 }
      });
      
      s1.addText('Seller Partnership Presentation', {
        x: 0.5, y: 4.6, w: 9, h: 0.6,
        fontSize: 32,
        color: C.WHITE,
        align: 'center'
      });
      
      s1.addText('⬆ Boost Sales    👥 Reach Millions    🏆 Grow Together', {
        x: 0.5, y: 6.2, w: 9, h: 0.5,
        fontSize: 18,
        color: C.WHITE,
        align: 'center'
      });
      
      s1.addText('Your Gateway to Flash Sale Success', {
        x: 0.5, y: 7.0, w: 9, h: 0.4,
        fontSize: 14,
        color: C.WHITE,
        align: 'center'
      });

      // === SLIDE 2: OPPORTUNITY ===
      const s2 = pptx.addSlide();
      s2.background = { color: C.GRAY_50 };
      
      s2.addShape(pptx.ShapeType.roundRect, {
        x: 0.5, y: 0.5, w: 2.5, h: 0.5,
        fill: { color: C.INDIGO },
        line: { width: 0 }
      });
      s2.addText('The Opportunity', {
        x: 0.5, y: 0.5, w: 2.5, h: 0.5,
        fontSize: 14,
        color: C.WHITE,
        align: 'center',
        valign: 'middle'
      });
      
      s2.addText('The Flash Sale Revolution', {
        x: 0.5, y: 1.2, w: 9, h: 0.8,
        fontSize: 48,
        bold: true,
        color: C.GRAY_800
      });
      
      s2.addShape(pptx.ShapeType.rect, {
        x: 0.5, y: 2.1, w: 1.5, h: 0.05,
        fill: { color: C.INDIGO },
        line: { width: 0 }
      });
      
      s2.addShape(pptx.ShapeType.roundRect, {
        x: 0.5, y: 2.7, w: 4.2, h: 3.5,
        fill: { color: C.WHITE },
        line: { color: C.BLUE_LIGHT, width: 2 }
      });
      s2.addShape(pptx.ShapeType.ellipse, {
        x: 0.8, y: 3.0, w: 0.8, h: 0.8,
        fill: { color: C.INDIGO },
        line: { width: 0 }
      });
      s2.addText('📈', {
        x: 0.8, y: 3.0, w: 0.8, h: 0.8,
        fontSize: 32,
        align: 'center',
        valign: 'middle'
      });
      s2.addText('Market Growth', {
        x: 0.8, y: 4.0, w: 3.6, h: 0.5,
        fontSize: 24,
        bold: true,
        color: C.GRAY_800
      });
      s2.addText('[Add statistics about flash sale market growth in India]', {
        x: 0.8, y: 4.6, w: 3.6, h: 1.4,
        fontSize: 14,
        color: C.GRAY_600
      });
      
      s2.addShape(pptx.ShapeType.roundRect, {
        x: 5.3, y: 2.7, w: 4.2, h: 3.5,
        fill: { color: C.WHITE },
        line: { color: C.PURPLE_LIGHT, width: 2 }
      });
      s2.addShape(pptx.ShapeType.ellipse, {
        x: 5.6, y: 3.0, w: 0.8, h: 0.8,
        fill: { color: C.PURPLE },
        line: { width: 0 }
      });
      s2.addText('👥', {
        x: 5.6, y: 3.0, w: 0.8, h: 0.8,
        fontSize: 32,
        align: 'center',
        valign: 'middle'
      });
      s2.addText('Customer Demand', {
        x: 5.6, y: 4.0, w: 3.6, h: 0.5,
        fontSize: 24,
        bold: true,
        color: C.GRAY_800
      });
      s2.addText('[Add data about demand for flash sales]', {
        x: 5.6, y: 4.6, w: 3.6, h: 1.4,
        fontSize: 14,
        color: C.GRAY_600
      });
      
      addFooter(s2, pptx, C.INDIGO, C.GRAY_400);

      // === SLIDE 3: WHY BLINKDEALS ===
      const s3 = pptx.addSlide();
      s3.background = { color: C.WHITE };
      
      s3.addShape(pptx.ShapeType.roundRect, {
        x: 3.5, y: 0.5, w: 3, h: 0.5,
        fill: { color: C.BLUE_LIGHT },
        line: { width: 0 }
      });
      s3.addText('Why Partner With Us', {
        x: 3.5, y: 0.5, w: 3, h: 0.5,
        fontSize: 14,
        color: C.INDIGO,
        align: 'center',
        valign: 'middle'
      });
      
      s3.addText(`Why Choose ${APP_NAME}?`, {
        x: 0.5, y: 1.2, w: 9, h: 0.8,
        fontSize: 48,
        bold: true,
        color: C.GRAY_800,
        align: 'center'
      });
      
      s3.addShape(pptx.ShapeType.rect, {
        x: 4.4, y: 2.1, w: 1.2, h: 0.05,
        fill: { color: C.INDIGO },
        line: { width: 0 }
      });
      
      const boxes = [
        { icon: '🚀', title: 'Fast Growth', x: 0.5, bg: C.BLUE_LIGHT, border: C.INDIGO },
        { icon: '🎯', title: 'Targeted Audience', x: 3.6, bg: C.PURPLE_LIGHT, border: C.PURPLE },
        { icon: '🏆', title: 'Premium Platform', x: 6.7, bg: C.PINK_LIGHT, border: C.PINK }
      ];
      
      boxes.forEach((box) => {
        s3.addShape(pptx.ShapeType.roundRect, {
          x: box.x, y: 3.0, w: 2.8, h: 3.0,
          fill: { color: box.bg },
          line: { color: box.border, width: 2 }
        });
        
        s3.addShape(pptx.ShapeType.roundRect, {
          x: box.x + 0.3, y: 3.3, w: 0.7, h: 0.7,
          fill: { color: box.border },
          line: { width: 0 }
        });
        
        s3.addText(box.icon, {
          x: box.x + 0.3, y: 3.3, w: 0.7, h: 0.7,
          fontSize: 28,
          align: 'center',
          valign: 'middle'
        });
        
        s3.addText(box.title, {
          x: box.x + 0.3, y: 4.2, w: 2.2, h: 0.4,
          fontSize: 18,
          bold: true,
          color: C.GRAY_800
        });
        
        s3.addText('[Add your platform statistics here]', {
          x: box.x + 0.3, y: 4.7, w: 2.2, h: 1.2,
          fontSize: 11,
          color: C.GRAY_600
        });
      });
      
      addFooter(s3, pptx, C.INDIGO, C.GRAY_400);

      // === SLIDE 4: REACH MILLIONS WITH GRADIENT ===
      const s4 = pptx.addSlide();
      
      // Gradient background
      s4.addShape(pptx.ShapeType.rect, {
        x: 0, y: 0, w: '100%', h: '100%',
        fill: { color: C.INDIGO },
        line: { width: 0 }
      });
      
      s4.addShape(pptx.ShapeType.rect, {
        x: 0, y: '50%', w: '100%', h: '50%',
        fill: { color: C.PURPLE },
        line: { width: 0 },
        transparency: 50
      });
      
      s4.addText('👥', {
        x: 0.5, y: 1.2, w: 9, h: 1,
        fontSize: 96,
        align: 'center'
      });
      
      s4.addText('Reach Millions of\nEager Buyers', {
        x: 0.5, y: 2.4, w: 9, h: 1.4,
        fontSize: 56,
        bold: true,
        color: C.WHITE,
        align: 'center'
      });
      
      s4.addShape(pptx.ShapeType.rect, {
        x: 4.2, y: 3.9, w: 1.6, h: 0.05,
        fill: { color: C.WHITE },
        line: { width: 0 }
      });
      
      const stats = [
        { label: 'Active Users', value: '[500K+]', x: 0.8 },
        { label: 'Conversion', value: '[25%]', x: 3.65 },
        { label: 'Daily Visitors', value: '[50K+]', x: 6.5 }
      ];
      
      stats.forEach(stat => {
        s4.addShape(pptx.ShapeType.roundRect, {
          x: stat.x, y: 4.6, w: 2.5, h: 1.5,
          fill: { color: C.WHITE },
          line: { color: C.WHITE, width: 1 }
        });
        
        s4.addText(stat.value, {
          x: stat.x, y: 4.8, w: 2.5, h: 0.6,
          fontSize: 44,
          bold: true,
          color: C.INDIGO,
          align: 'center'
        });
        
        s4.addText(stat.label, {
          x: stat.x, y: 5.5, w: 2.5, h: 0.4,
          fontSize: 18,
          color: C.GRAY_800,
          align: 'center'
        });
      });
      
      s4.addText('Numbers that speak for themselves', {
        x: 0.5, y: 7.0, w: 9, h: 0.4,
        fontSize: 14,
        color: C.WHITE,
        align: 'center'
      });

      // === SLIDE 5: FAST SALES ===
      const s5 = pptx.addSlide();
      s5.background = { color: C.WHITE };
      
      s5.addShape(pptx.ShapeType.roundRect, {
        x: 0.5, y: 0.8, w: 3.5, h: 0.5,
        fill: { color: C.GREEN_LIGHT },
        line: { width: 0 }
      });
      s5.addText('Lightning Fast Sales', {
        x: 0.5, y: 0.8, w: 3.5, h: 0.5,
        fontSize: 14,
        color: C.GREEN,
        align: 'center',
        valign: 'middle'
      });
      
      s5.addText('Sell Out in Minutes,\nNot Days', {
        x: 0.5, y: 1.5, w: 4.5, h: 1.4,
        fontSize: 42,
        bold: true,
        color: C.GRAY_800
      });
      
      s5.addShape(pptx.ShapeType.rect, {
        x: 0.5, y: 3.0, w: 1.5, h: 0.05,
        fill: { color: C.GREEN },
        line: { width: 0 }
      });
      
      s5.addShape(pptx.ShapeType.roundRect, {
        x: 0.5, y: 3.5, w: 4.2, h: 1.2,
        fill: { color: C.GREEN_LIGHT },
        line: { color: C.GREEN, width: 2 }
      });
      s5.addText('⏰  Time-Limited Deals', {
        x: 0.7, y: 3.6, w: 4.0, h: 0.4,
        fontSize: 18,
        bold: true,
        color: C.GRAY_800
      });
      s5.addText('[Explain flash sale timing strategy]', {
        x: 0.7, y: 4.0, w: 3.8, h: 0.5,
        fontSize: 12,
        color: C.GRAY_600
      });
      
      s5.addShape(pptx.ShapeType.roundRect, {
        x: 0.5, y: 5.0, w: 4.2, h: 1.2,
        fill: { color: C.BLUE_LIGHT },
        line: { color: C.INDIGO, width: 2 }
      });
      s5.addText('⚡  Instant Visibility', {
        x: 0.7, y: 5.1, w: 4.0, h: 0.4,
        fontSize: 18,
        bold: true,
        color: C.GRAY_800
      });
      s5.addText('[Describe product promotion]', {
        x: 0.7, y: 5.5, w: 3.8, h: 0.5,
        fontSize: 12,
        color: C.GRAY_600
      });
      
      s5.addShape(pptx.ShapeType.ellipse, {
        x: 6.0, y: 2.5, w: 3.5, h: 3.5,
        fill: { color: C.INDIGO },
        line: { width: 0 }
      });
      
      s5.addText('⏰', {
        x: 6.8, y: 3.2, w: 2.0, h: 0.8,
        fontSize: 72,
        align: 'center'
      });
      
      s5.addText('2:00', {
        x: 6.0, y: 4.2, w: 3.5, h: 0.8,
        fontSize: 56,
        bold: true,
        color: C.WHITE,
        align: 'center'
      });
      
      s5.addText('Average Sale Time', {
        x: 6.0, y: 5.1, w: 3.5, h: 0.4,
        fontSize: 18,
        color: C.WHITE,
        align: 'center'
      });
      
      addFooter(s5, pptx, C.INDIGO, C.GRAY_400);

      // === SLIDE 6: SUCCESS METRICS ===
      const s6 = pptx.addSlide();
      s6.background = { color: C.GRAY_50 };
      
      s6.addShape(pptx.ShapeType.roundRect, {
        x: 3.2, y: 0.5, w: 3.6, h: 0.5,
        fill: { color: C.INDIGO },
        line: { width: 0 }
      });
      s6.addText('Success Stories', {
        x: 3.2, y: 0.5, w: 3.6, h: 0.5,
        fontSize: 14,
        color: C.WHITE,
        align: 'center',
        valign: 'middle'
      });
      
      s6.addText('Proven Results', {
        x: 0.5, y: 1.2, w: 9, h: 0.8,
        fontSize: 48,
        bold: true,
        color: C.GRAY_800,
        align: 'center'
      });
      
      s6.addShape(pptx.ShapeType.rect, {
        x: 4.4, y: 2.1, w: 1.2, h: 0.05,
        fill: { color: C.INDIGO },
        line: { width: 0 }
      });
      
      s6.addShape(pptx.ShapeType.roundRect, {
        x: 0.5, y: 2.8, w: 4.4, h: 3.5,
        fill: { color: C.WHITE },
        line: { color: C.GRAY_LIGHT, width: 2 }
      });
      s6.addText('📊', {
        x: 0.8, y: 3.1, w: 0.7, h: 0.7,
        fontSize: 36
      });
      s6.addText('Revenue Growth', {
        x: 0.8, y: 4.0, w: 3.8, h: 0.5,
        fontSize: 28,
        bold: true,
        color: C.GRAY_800
      });
      s6.addText('Avg seller growth: [45%]', {
        x: 0.8, y: 4.7, w: 3.5, h: 0.4,
        fontSize: 16,
        color: C.GRAY_600
      });
      
      s6.addShape(pptx.ShapeType.roundRect, {
        x: 0.8, y: 5.2, w: 3.8, h: 0.15,
        fill: { color: C.GRAY_LIGHT },
        line: { width: 0 }
      });
      s6.addShape(pptx.ShapeType.roundRect, {
        x: 0.8, y: 5.2, w: 2.85, h: 0.15,
        fill: { color: C.INDIGO },
        line: { width: 0 }
      });
      
      s6.addText('[Add seller success metrics]', {
        x: 0.8, y: 5.6, w: 3.8, h: 0.5,
        fontSize: 11,
        color: C.GRAY_400
      });
      
      s6.addShape(pptx.ShapeType.roundRect, {
        x: 5.1, y: 2.8, w: 4.4, h: 3.5,
        fill: { color: C.WHITE },
        line: { color: C.GRAY_LIGHT, width: 2 }
      });
      s6.addText('₹', {
        x: 5.4, y: 3.1, w: 0.7, h: 0.7,
        fontSize: 36,
        color: C.GREEN
      });
      s6.addText('Transaction Volume', {
        x: 5.4, y: 4.0, w: 3.8, h: 0.5,
        fontSize: 28,
        bold: true,
        color: C.GRAY_800
      });
      s6.addText(`Monthly GMV: ${CURRENCY_SYMBOL}[50]Cr`, {
        x: 5.4, y: 4.7, w: 3.5, h: 0.4,
        fontSize: 16,
        color: C.GRAY_600
      });
      
      s6.addShape(pptx.ShapeType.roundRect, {
        x: 5.4, y: 5.2, w: 3.8, h: 0.15,
        fill: { color: C.GRAY_LIGHT },
        line: { width: 0 }
      });
      s6.addShape(pptx.ShapeType.roundRect, {
        x: 5.4, y: 5.2, w: 3.04, h: 0.15,
        fill: { color: C.GREEN },
        line: { width: 0 }
      });
      
      s6.addText('[Add GMV statistics]', {
        x: 5.4, y: 5.6, w: 3.8, h: 0.5,
        fontSize: 11,
        color: C.GRAY_400
      });
      
      addFooter(s6, pptx, C.INDIGO, C.GRAY_400);

      // === SLIDE 7: HOW IT WORKS ===
      const s7 = pptx.addSlide();
      s7.background = { color: C.WHITE };
      
      s7.addShape(pptx.ShapeType.roundRect, {
        x: 3.5, y: 0.5, w: 3, h: 0.5,
        fill: { color: C.PURPLE_LIGHT },
        line: { width: 0 }
      });
      s7.addText('Simple Process', {
        x: 3.5, y: 0.5, w: 3, h: 0.5,
        fontSize: 14,
        color: C.PURPLE,
        align: 'center',
        valign: 'middle'
      });
      
      s7.addText('How It Works', {
        x: 0.5, y: 1.2, w: 9, h: 0.8,
        fontSize: 48,
        bold: true,
        color: C.GRAY_800,
        align: 'center'
      });
      
      s7.addShape(pptx.ShapeType.rect, {
        x: 4.4, y: 2.1, w: 1.2, h: 0.05,
        fill: { color: C.PURPLE },
        line: { width: 0 }
      });
      
      const steps = [
        { num: '1', title: 'Register', x: 0.7, color: C.INDIGO, bg: C.BLUE_LIGHT, desc: '[Registration process details]' },
        { num: '2', title: 'List Products', x: 3.75, color: C.PURPLE, bg: C.PURPLE_LIGHT, desc: '[Product listing requirements]' },
        { num: '3', title: 'Start Selling', x: 6.8, color: C.PINK, bg: C.PINK_LIGHT, desc: '[Sales and payment process]' }
      ];
      
      steps.forEach((step, idx) => {
        s7.addShape(pptx.ShapeType.ellipse, {
          x: step.x + 0.65, y: 3.0, w: 1.0, h: 1.0,
          fill: { color: step.color },
          line: { width: 0 }
        });
        s7.addText(step.num, {
          x: step.x + 0.65, y: 3.0, w: 1.0, h: 1.0,
          fontSize: 36,
          bold: true,
          color: C.WHITE,
          align: 'center',
          valign: 'middle'
        });
        
        s7.addText(step.title, {
          x: step.x, y: 4.2, w: 2.3, h: 0.5,
          fontSize: 20,
          bold: true,
          color: C.GRAY_800,
          align: 'center'
        });
        
        s7.addShape(pptx.ShapeType.roundRect, {
          x: step.x, y: 4.9, w: 2.3, h: 1.3,
          fill: { color: step.bg },
          line: { color: step.color, width: 2 }
        });
        
        s7.addText(step.desc, {
          x: step.x + 0.2, y: 5.1, w: 1.9, h: 0.9,
          fontSize: 12,
          color: C.GRAY_600
        });
        
        if (idx < 2) {
          s7.addText('→', {
            x: step.x + 2.5, y: 3.3, w: 0.5, h: 0.5,
            fontSize: 32,
            color: C.GRAY_400,
            align: 'center'
          });
        }
      });
      
      addFooter(s7, pptx, C.INDIGO, C.GRAY_400);

      // === SLIDE 8: BENEFITS ===
      const s8 = pptx.addSlide();
      s8.background = { color: C.GRAY_50 };
      
      s8.addShape(pptx.ShapeType.roundRect, {
        x: 0.5, y: 0.5, w: 3.5, h: 0.5,
        fill: { color: C.INDIGO },
        line: { width: 0 }
      });
      s8.addText('Partnership Benefits', {
        x: 0.5, y: 0.5, w: 3.5, h: 0.5,
        fontSize: 14,
        color: C.WHITE,
        align: 'center',
        valign: 'middle'
      });
      
      s8.addText('What You Get', {
        x: 0.5, y: 1.2, w: 9, h: 0.8,
        fontSize: 48,
        bold: true,
        color: C.GRAY_800
      });
      
      s8.addShape(pptx.ShapeType.rect, {
        x: 0.5, y: 2.1, w: 1.5, h: 0.05,
        fill: { color: C.INDIGO },
        line: { width: 0 }
      });
      
      const benefits = [
        { icon: '🛍️', title: 'Marketing Support', x: 0.5, y: 2.8, border: C.INDIGO },
        { icon: '📊', title: 'Analytics Dashboard', x: 5.1, y: 2.8, border: C.PURPLE },
        { icon: '₹', title: 'Financial Benefits', x: 0.5, y: 5.0, border: C.PINK },
        { icon: '🏆', title: 'Seller Support', x: 5.1, y: 5.0, border: C.GREEN }
      ];
      
      benefits.forEach(box => {
        s8.addShape(pptx.ShapeType.roundRect, {
          x: box.x, y: box.y, w: 4.4, h: 1.9,
          fill: { color: C.WHITE },
          line: { color: box.border, width: 2 }
        });
        
        s8.addShape(pptx.ShapeType.roundRect, {
          x: box.x + 0.3, y: box.y + 0.25, w: 0.6, h: 0.6,
          fill: { color: box.border },
          line: { width: 0 }
        });
        
        s8.addText(box.icon, {
          x: box.x + 0.3, y: box.y + 0.25, w: 0.6, h: 0.6,
          fontSize: 24,
          align: 'center',
          valign: 'middle'
        });
        
        s8.addText(box.title, {
          x: box.x + 1.0, y: box.y + 0.3, w: 3.1, h: 0.5,
          fontSize: 18,
          bold: true,
          color: C.GRAY_800,
          valign: 'middle'
        });
        
        s8.addText('[Add benefit details - promotional support, insights, commission structure, or account management]', {
          x: box.x + 0.3, y: box.y + 1.0, w: 3.8, h: 0.8,
          fontSize: 12,
          color: C.GRAY_600
        });
      });
      
      addFooter(s8, pptx, C.INDIGO, C.GRAY_400);

      // === SLIDE 9: CONTACT WITH GRADIENT ===
      const s9 = pptx.addSlide();
      
      // Gradient background (reverse of slide 1)
      s9.addShape(pptx.ShapeType.rect, {
        x: 0, y: 0, w: '100%', h: '100%',
        fill: { color: C.PURPLE },
        line: { width: 0 }
      });
      
      s9.addShape(pptx.ShapeType.rect, {
        x: 0, y: 0, w: '60%', h: '100%',
        fill: { color: C.INDIGO },
        line: { width: 0 },
        transparency: 40
      });
      
      s9.addShape(pptx.ShapeType.ellipse, {
        x: '-10%', y: '60%', w: '50%', h: '50%',
        fill: { color: C.PINK },
        line: { width: 0 },
        transparency: 70
      });
      
      s9.addShape(pptx.ShapeType.ellipse, {
        x: 4.4, y: 1.2, w: 1.2, h: 1.2,
        fill: { color: C.WHITE },
        line: { width: 0 }
      });
      s9.addText('⚡', {
        x: 4.4, y: 1.2, w: 1.2, h: 1.2,
        fontSize: 60,
        color: C.INDIGO,
        align: 'center',
        valign: 'middle'
      });
      
      s9.addText("Let's Grow Together", {
        x: 0.5, y: 2.7, w: 9, h: 0.8,
        fontSize: 56,
        bold: true,
        color: C.WHITE,
        align: 'center'
      });
      
      s9.addShape(pptx.ShapeType.rect, {
        x: 4.2, y: 3.6, w: 1.6, h: 0.05,
        fill: { color: C.WHITE },
        line: { width: 0 }
      });
      
      s9.addText(`Join ${APP_NAME} and start reaching millions of customers today`, {
        x: 1.0, y: 4.0, w: 8, h: 0.6,
        fontSize: 22,
        color: C.WHITE,
        align: 'center'
      });
      
      const contacts = [
        { label: 'Email', value: 'sellers@blinkdeals.com', y: 5.0 },
        { label: 'Phone', value: '+91 [Your Contact Number]', y: 5.7 },
        { label: 'Website', value: 'www.blinkdeals.com', y: 6.4 }
      ];
      
      contacts.forEach(contact => {
        s9.addShape(pptx.ShapeType.roundRect, {
          x: 2.5, y: contact.y, w: 5, h: 0.5,
          fill: { color: C.WHITE },
          line: { color: C.WHITE, width: 1 }
        });
        
        s9.addText(contact.label.toUpperCase(), {
          x: 2.5, y: contact.y + 0.05, w: 5, h: 0.15,
          fontSize: 9,
          color: C.GRAY_600,
          align: 'center'
        });
        
        s9.addText(contact.value, {
          x: 2.5, y: contact.y + 0.22, w: 5, h: 0.25,
          fontSize: 16,
          bold: true,
          color: C.INDIGO,
          align: 'center'
        });
      });
      
      s9.addText('Thank you for your time', {
        x: 0.5, y: 7.2, w: 9, h: 0.4,
        fontSize: 14,
        color: C.WHITE,
        align: 'center'
      });

      // Generate file
      await pptx.writeFile({ fileName: `${APP_NAME}-Seller-Pitch.pptx` });
      
      toast.success('PowerPoint downloaded successfully!', { duration: 3000 });
    } catch (error) {
      console.error('PowerPoint generation failed:', error);
      toast.error('Failed to generate PowerPoint. Please try again.', { duration: 4000 });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      onClick={generatePowerPoint}
      disabled={isGenerating}
      className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      style={{ 
        fontWeight: 500,
        fontSize: '14px',
        border: 'none',
        outline: 'none'
      }}
    >
      {isGenerating ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Generating PPT...
        </>
      ) : (
        <>
          <Download className="w-4 h-4 mr-2" />
          Download PowerPoint
        </>
      )}
    </button>
  );
}

// Footer helper
function addFooter(slide: any, pptx: any, primaryColor: string, grayColor: string) {
  slide.addText('⚡', {
    x: 8.8, y: 7.1, w: 0.3, h: 0.3,
    fontSize: 16,
    color: primaryColor
  });
  slide.addText(APP_NAME, {
    x: 9.1, y: 7.1, w: 0.8, h: 0.3,
    fontSize: 11,
    color: grayColor
  });
}
