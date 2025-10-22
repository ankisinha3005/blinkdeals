import { useState, useEffect } from 'react';
import { Briefcase, MapPin, Clock, TrendingUp, ChevronRight, Calendar, Users, Award, X } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Header } from './Header';
import { Footer } from './Footer';
import { GRADIENTS, COLORS, APP_NAME } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Separator } from './ui/separator';
import { apiService } from '../services/apiService';

interface CareersPageProps {
  onBack: () => void;
  onLogin: () => void;
  onBecomeSeller?: () => void;
  onSupport?: () => void;
  onAbout?: () => void;
  onCareers?: () => void;
  onPressMedia?: () => void;
  onBlog?: () => void;
  onTerms?: () => void;
  onPrivacy?: () => void;
  onCookiePolicy?: () => void;
  onDisclaimer?: () => void;
  onAccessibility?: () => void;
  onProfile?: () => void;
  onOrders?: () => void;
  onLogout?: () => void;
  isLoggedIn?: boolean;
  userName?: string;
}

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  postedDate: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
}

// Mock API call - replace with actual API endpoint
const fetchJobOpenings = async (): Promise<JobOpening[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock data - replace with actual API call
  return [
    {
      id: '1',
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Bangalore, India',
      type: 'Full-time',
      experience: '3-5 years',
      postedDate: '2 days ago',
      description: 'We are looking for a talented Senior Frontend Developer to join our engineering team and help build the next generation of our flash sales platform.',
      responsibilities: [
        'Develop and maintain responsive web applications using React and TypeScript',
        'Collaborate with designers to implement pixel-perfect UI components',
        'Optimize application performance and ensure smooth user experience',
        'Write clean, maintainable, and well-documented code',
        'Participate in code reviews and mentor junior developers',
      ],
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        '3-5 years of experience in frontend development',
        'Strong proficiency in React, TypeScript, and modern JavaScript',
        'Experience with state management libraries (Redux, Zustand, etc.)',
        'Understanding of responsive design and cross-browser compatibility',
        'Excellent problem-solving and communication skills',
      ],
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Redux', 'Git', 'REST APIs', 'Performance Optimization'],
    },
    {
      id: '2',
      title: 'Product Manager',
      department: 'Product',
      location: 'Mumbai, India',
      type: 'Full-time',
      experience: '4-6 years',
      postedDate: '1 week ago',
      description: 'Join our product team to drive the vision and strategy for our flash sales platform, working closely with engineering, design, and business teams.',
      responsibilities: [
        'Define product roadmap and prioritize features based on business value',
        'Conduct user research and analyze customer feedback',
        'Work with engineering and design teams to deliver exceptional products',
        'Track and analyze product metrics to drive data-driven decisions',
        'Collaborate with stakeholders across the organization',
      ],
      requirements: [
        "Bachelor's degree in Business, Engineering, or related field",
        '4-6 years of product management experience in e-commerce',
        'Strong analytical and problem-solving skills',
        'Excellent communication and stakeholder management abilities',
        'Experience with agile development methodologies',
        'Data-driven mindset with ability to use analytics tools',
      ],
      skills: ['Product Strategy', 'User Research', 'Analytics', 'Agile', 'Wireframing', 'SQL', 'A/B Testing', 'Stakeholder Management'],
    },
    {
      id: '3',
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      experience: '2-4 years',
      postedDate: '3 days ago',
      description: 'We are seeking a creative UI/UX Designer to craft beautiful and intuitive user experiences for our flash sales platform.',
      responsibilities: [
        'Design user interfaces for web and mobile applications',
        'Create wireframes, prototypes, and high-fidelity mockups',
        'Conduct user research and usability testing',
        'Maintain and evolve the design system',
        'Collaborate with product and engineering teams',
      ],
      requirements: [
        "Bachelor's degree in Design, HCI, or related field",
        '2-4 years of experience in UI/UX design',
        'Proficiency in Figma, Sketch, or similar design tools',
        'Strong portfolio demonstrating design thinking and problem-solving',
        'Understanding of responsive design principles',
        'Excellent visual design skills',
      ],
      skills: ['Figma', 'UI Design', 'UX Research', 'Prototyping', 'Design Systems', 'User Testing', 'Wireframing', 'Visual Design'],
    },
  ];
};

export function CareersPage({ 
  onBack, 
  onLogin, 
  onBecomeSeller, 
  onSupport, 
  onAbout, 
  onCareers, 
  onPressMedia, 
  onBlog, 
  onTerms, 
  onPrivacy, 
  onCookiePolicy, 
  onDisclaimer, 
  onAccessibility, 
  onProfile, 
  onOrders, 
  onLogout, 
  isLoggedIn, 
  userName 
}: CareersPageProps) {
  const [jobOpenings, setJobOpenings] = useState<JobOpening[]>([]);
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    loadJobOpenings();
  }, []);

  const loadJobOpenings = async () => {
    setIsLoading(true);
    try {
      const response = await apiService.getJobOpenings();
      if (response.success && response.data) {
        setJobOpenings(response.data);
      } else {
        // Fallback to hardcoded data if API fails
        const jobs = await fetchJobOpenings();
        setJobOpenings(jobs);
      }
    } catch (error) {
      console.error('Failed to fetch job openings:', error);
      // Fallback to hardcoded data if API fails
      const jobs = await fetchJobOpenings();
      setJobOpenings(jobs);
    } finally {
      setIsLoading(false);
    }
  };

  const handleJobClick = (job: JobOpening) => {
    setSelectedJob(job);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setTimeout(() => setSelectedJob(null), 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col">
      <Header 
        onLogoClick={onBack}
        onLoginClick={onLogin}
        onBecomeSellerClick={onBecomeSeller}
        onSupportClick={onSupport}
        onProfileClick={onProfile}
        onOrdersClick={onOrders}
        onLogoutClick={onLogout}
        isLoggedIn={isLoggedIn}
        userName={userName}
      />

      <main className="flex-1 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-4">
              <div className={`${GRADIENTS.primary} p-4 rounded-2xl`}>
                <Briefcase className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className={`${GRADIENTS.primary} bg-clip-text text-transparent mb-4`}>
              Careers at {APP_NAME}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Join our team and help us revolutionize the flash sales experience. 
              We're looking for talented individuals who are passionate about e-commerce and technology.
            </p>
          </motion.div>

          {/* Loading State */}
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-20">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className={`w-12 h-12 border-4 border-${COLORS.primary} border-t-transparent rounded-full`}
              />
              <p className="mt-4 text-gray-600">Loading job openings...</p>
            </div>
          )}

          {/* No Jobs State */}
          {!isLoading && jobOpenings.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-xl p-12 text-center"
            >
              <div className={`inline-block ${GRADIENTS.primary} p-6 rounded-2xl mb-6`}>
                <Briefcase className="w-16 h-16 text-white" />
              </div>
              <h2 className="text-gray-900 mb-4">We don't have an opening, yet.</h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                There are no open positions at the moment, but we're always looking for talented people. 
                Feel free to send us your resume for future opportunities.
              </p>
              <Button 
                className={`${GRADIENTS.primary} ${GRADIENTS.primaryHover}`}
                onClick={() => window.location.href = 'mailto:careers@blinkdeals.in'}
              >
                Send Your Resume
              </Button>
            </motion.div>
          )}

          {/* Job Listings */}
          {!isLoading && jobOpenings.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => handleJobClick(job)}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group overflow-hidden"
                >
                  <div className="p-6 lg:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-4">
                          <div className={`${GRADIENTS.primary} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                            <Briefcase className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                              {job.title}
                            </h3>
                            <div className="flex flex-wrap gap-3 mb-3">
                              <Badge variant="secondary" className="flex items-center gap-1">
                                <Users className="w-3 h-3" />
                                {job.department}
                              </Badge>
                              <Badge variant="secondary" className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {job.location}
                              </Badge>
                              <Badge variant="secondary" className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {job.type}
                              </Badge>
                              <Badge variant="secondary" className="flex items-center gap-1">
                                <TrendingUp className="w-3 h-3" />
                                {job.experience}
                              </Badge>
                            </div>
                            <p className="text-gray-600 text-sm line-clamp-2">
                              {job.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right hidden lg:block">
                          <div className="flex items-center gap-1 text-gray-500 text-sm mb-2">
                            <Calendar className="w-4 h-4" />
                            <span>Posted {job.postedDate}</span>
                          </div>
                        </div>
                        <ChevronRight className={`w-6 h-6 text-${COLORS.primary} group-hover:translate-x-2 transition-transform duration-300`} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Why Join Us Section */}
          {!isLoading && jobOpenings.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 bg-white rounded-3xl shadow-xl p-8 lg:p-12"
            >
              <h2 className="text-gray-900 text-center mb-8">Why Join {APP_NAME}?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: TrendingUp, title: 'Growth', desc: 'Rapid career advancement' },
                  { icon: Users, title: 'Team', desc: 'Collaborative culture' },
                  { icon: Award, title: 'Impact', desc: 'Make a real difference' },
                  { icon: Briefcase, title: 'Benefits', desc: 'Competitive packages' },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className={`inline-block ${GRADIENTS.primary} p-4 rounded-xl mb-3`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-gray-900 text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </main>

      {/* Job Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedJob && (
            <div>
              <DialogHeader>
                <div className="flex items-start gap-4 mb-4">
                  <div className={`${GRADIENTS.primary} p-3 rounded-xl`}>
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <DialogTitle className="text-2xl mb-2">{selectedJob.title}</DialogTitle>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {selectedJob.department}
                      </Badge>
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {selectedJob.location}
                      </Badge>
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {selectedJob.type}
                      </Badge>
                    </div>
                  </div>
                </div>
              </DialogHeader>

              <Separator className="my-6" />

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-gray-900 text-lg mb-3">About the Role</h3>
                <p className="text-gray-600 leading-relaxed">{selectedJob.description}</p>
              </div>

              {/* Experience */}
              <div className="mb-6">
                <h3 className="text-gray-900 text-lg mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Experience Required
                </h3>
                <p className={`text-${COLORS.primary} font-medium`}>{selectedJob.experience}</p>
              </div>

              {/* Responsibilities */}
              <div className="mb-6">
                <h3 className="text-gray-900 text-lg mb-3">Key Responsibilities</h3>
                <ul className="space-y-2">
                  {selectedJob.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-600">
                      <span className={`text-${COLORS.primary} mt-1`}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="mb-6">
                <h3 className="text-gray-900 text-lg mb-3">Requirements</h3>
                <ul className="space-y-2">
                  {selectedJob.requirements.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-600">
                      <span className={`text-${COLORS.primary} mt-1`}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h3 className="text-gray-900 text-lg mb-3">Skills Required</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedJob.skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      className={`${GRADIENTS.primary} text-white`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator className="my-6" />

              {/* Apply Button */}
              <div className="flex gap-3">
                <Button 
                  className={`flex-1 ${GRADIENTS.primary} ${GRADIENTS.primaryHover}`}
                  onClick={() => window.location.href = `mailto:careers@blinkdeals.in?subject=Application for ${selectedJob.title}`}
                >
                  Apply for this Position
                </Button>
                <Button 
                  variant="outline"
                  onClick={handleCloseDialog}
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer 
        onAboutClick={onAbout} 
        onCareersClick={onCareers}
        onBecomeSellerClick={onBecomeSeller}
        onPressMediaClick={onPressMedia}
        onBlogClick={onBlog}
        onSupportClick={onSupport}
        onTermsClick={onTerms}
        onPrivacyClick={onPrivacy}
        onCookiePolicyClick={onCookiePolicy}
        onDisclaimerClick={onDisclaimer}
        onAccessibilityClick={onAccessibility}
      />
    </div>
  );
}
