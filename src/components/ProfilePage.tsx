import { useState } from 'react';
import { ArrowLeft, User, Phone, Mail, UserCircle, Edit2, Save, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { APP_NAME, COLORS, GRADIENTS } from '../constants';
import { motion } from 'motion/react';

interface ProfilePageProps {
  onBack: () => void;
  userData: {
    name: string;
    phone: string;
    email?: string;
    gender?: 'male' | 'female' | 'other';
  };
  onUpdateProfile?: (data: { name: string; email?: string; gender?: 'male' | 'female' | 'other' }) => void;
}

export function ProfilePage({ onBack, userData, onUpdateProfile }: ProfilePageProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email || '');
  const [gender, setGender] = useState<string>(userData.gender || '');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (onUpdateProfile) {
      onUpdateProfile({
        name,
        email: email || undefined,
        gender: gender as 'male' | 'female' | 'other' | undefined
      });
    }
    
    setIsSaving(false);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setName(userData.name);
    setEmail(userData.email || '');
    setGender(userData.gender || '');
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back</span>
            </button>
            <h1 className={`${GRADIENTS.primary} bg-clip-text text-transparent`}>
              My Profile
            </h1>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Profile Header Card */}
          <Card className="p-8 mb-6 bg-white/80 backdrop-blur-sm border-none shadow-lg">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-6">
                {/* Avatar */}
                <div className={`w-24 h-24 rounded-full bg-gradient-to-br from-${COLORS.primary} via-${COLORS.secondary} to-pink-400 flex items-center justify-center shadow-lg`}>
                  <User className="w-12 h-12 text-white" strokeWidth={2} />
                </div>
                
                {/* Name and Phone */}
                <div>
                  <h2 className="text-gray-900 mb-1">{userData.name}</h2>
                  <p className="text-gray-600 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    {userData.phone}
                  </p>
                </div>
              </div>

              {/* Edit Button */}
              {!isEditing && (
                <Button
                  onClick={() => setIsEditing(true)}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <Edit2 className="w-4 h-4" />
                  Edit Profile
                </Button>
              )}
            </div>

            {/* Info Message */}
            {!isEditing && (
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-4">
                <p className="text-sm text-gray-700 text-center">
                  Welcome to {APP_NAME}! Your profile helps us personalize your shopping experience.
                </p>
              </div>
            )}
          </Card>

          {/* Profile Details Card */}
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-none shadow-lg">
            <h3 className="text-gray-900 mb-6 flex items-center gap-2">
              <UserCircle className="w-5 h-5" />
              Personal Information
            </h3>

            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <Label htmlFor="name" className="text-gray-700 mb-2 block">
                  Full Name
                </Label>
                {isEditing ? (
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-12 border-2 border-gray-200 focus:border-indigo-400 rounded-xl"
                    placeholder="Enter your full name"
                  />
                ) : (
                  <div className="h-12 px-4 bg-gray-50 border-2 border-gray-100 rounded-xl flex items-center text-gray-700">
                    {name}
                  </div>
                )}
              </div>

              {/* Phone Field (Read-only) */}
              <div>
                <Label htmlFor="phone" className="text-gray-700 mb-2 block">
                  Phone Number
                </Label>
                <div className="h-12 px-4 bg-gray-100 border-2 border-gray-100 rounded-xl flex items-center text-gray-500">
                  {userData.phone}
                  <span className="ml-auto text-xs text-gray-400">Verified</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Phone number cannot be changed</p>
              </div>

              {/* Email Field */}
              <div>
                <Label htmlFor="email" className="text-gray-700 mb-2 block flex items-center gap-2">
                  Email Address
                  <span className="text-xs text-gray-500">(Optional)</span>
                </Label>
                {isEditing ? (
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 border-2 border-gray-200 focus:border-indigo-400 rounded-xl"
                    placeholder="your@email.com"
                  />
                ) : (
                  <div className="h-12 px-4 bg-gray-50 border-2 border-gray-100 rounded-xl flex items-center text-gray-700">
                    {email || (
                      <span className="text-gray-400 flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Not provided
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Gender Field */}
              <div>
                <Label className="text-gray-700 mb-3 block flex items-center gap-2">
                  Gender
                  <span className="text-xs text-gray-500">(Optional)</span>
                </Label>
                {isEditing ? (
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setGender('male')}
                      className={`flex-1 h-12 rounded-xl border-2 transition-all ${
                        gender === 'male'
                          ? `border-${COLORS.primary} bg-gradient-to-r from-${COLORS.primary}/10 to-${COLORS.secondary}/10 text-${COLORS.primary}`
                          : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      Male
                    </button>
                    <button
                      type="button"
                      onClick={() => setGender('female')}
                      className={`flex-1 h-12 rounded-xl border-2 transition-all ${
                        gender === 'female'
                          ? `border-${COLORS.primary} bg-gradient-to-r from-${COLORS.primary}/10 to-${COLORS.secondary}/10 text-${COLORS.primary}`
                          : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      Female
                    </button>
                  </div>
                ) : (
                  <div className="h-12 px-4 bg-gray-50 border-2 border-gray-100 rounded-xl flex items-center text-gray-700 capitalize">
                    {gender || (
                      <span className="text-gray-400">Not specified</span>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Edit Mode Actions */}
            {isEditing && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 mt-8 pt-6 border-t border-gray-200"
              >
                <Button
                  onClick={handleSave}
                  disabled={isSaving || !name.trim()}
                  className={`flex-1 h-12 ${GRADIENTS.primary} ${GRADIENTS.primaryHover} flex items-center justify-center gap-2`}
                >
                  {isSaving ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="w-5 h-5" />
                      Save Changes
                    </>
                  )}
                </Button>
                <Button
                  onClick={handleCancel}
                  disabled={isSaving}
                  variant="outline"
                  className="flex-1 h-12 flex items-center justify-center gap-2"
                >
                  <X className="w-5 h-5" />
                  Cancel
                </Button>
              </motion.div>
            )}
          </Card>

          {/* Account Info */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Member since {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
