import { useState, useEffect } from 'react';
import { Clock, Zap } from 'lucide-react';
import { Badge } from './ui/badge';
import { COLORS, GRADIENTS } from '../constants';
import { motion } from 'motion/react';

interface SaleTimerProps {
  saleStartTime: Date;
  saleEndTime: Date;
}

export function SaleTimer({ saleStartTime, saleEndTime }: SaleTimerProps) {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [saleStatus, setSaleStatus] = useState<'upcoming' | 'active' | 'ended'>('upcoming');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      
      if (now < saleStartTime) {
        // Sale hasn't started yet
        setSaleStatus('upcoming');
        const diff = saleStartTime.getTime() - now.getTime();
        
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        setTimeLeft({ hours, minutes, seconds });
      } else if (now >= saleStartTime && now < saleEndTime) {
        // Sale is active
        setSaleStatus('active');
        const diff = saleEndTime.getTime() - now.getTime();
        
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        setTimeLeft({ hours, minutes, seconds });
      } else {
        // Sale has ended
        setSaleStatus('ended');
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [saleStartTime, saleEndTime]);

  const getStatusText = () => {
    switch (saleStatus) {
      case 'upcoming':
        return 'Sale Starting In';
      case 'active':
        return 'Sale Ends In';
      case 'ended':
        return 'Sale Ended';
      default:
        return '';
    }
  };

  const getStatusGradient = () => {
    switch (saleStatus) {
      case 'upcoming':
        return 'from-blue-500 to-cyan-500';
      case 'active':
        return 'from-red-500 to-pink-500';
      case 'ended':
        return 'from-gray-500 to-gray-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getBadgeColor = () => {
    switch (saleStatus) {
      case 'upcoming':
        return 'bg-blue-500';
      case 'active':
        return 'bg-red-500';
      case 'ended':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative overflow-hidden bg-gradient-to-r ${getStatusGradient()} rounded-2xl shadow-2xl`}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative flex flex-col items-center gap-6 p-8">
        {/* Status Badge */}
        <div className="flex items-center gap-3">
          {saleStatus === 'active' ? (
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Zap className="w-7 h-7 text-yellow-300 fill-yellow-300" />
            </motion.div>
          ) : (
            <Clock className="w-7 h-7 text-white" />
          )}
          <Badge className={`${getBadgeColor()} text-white px-6 py-2 text-base shadow-lg border-none`}>
            {getStatusText()}
          </Badge>
        </div>
        
        {/* Timer Display */}
        <div className="flex items-center gap-3 sm:gap-4">
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <div className="flex items-center justify-center text-white text-4xl pb-6 font-bold">:</div>
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <div className="flex items-center justify-center text-white text-4xl pb-6 font-bold">:</div>
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </motion.div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <motion.div 
      className="flex flex-col items-center"
      whileHover={{ scale: 1.05 }}
    >
      <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 sm:px-5 py-4 min-w-[80px] sm:min-w-[90px] text-center shadow-xl">
        <span className="text-4xl sm:text-5xl text-gray-900 font-bold tabular-nums">{String(value).padStart(2, '0')}</span>
      </div>
      <span className="text-white text-sm mt-2 font-medium">{label}</span>
    </motion.div>
  );
}
