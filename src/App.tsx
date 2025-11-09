import React, { useState, useEffect } from 'react';
import { Home, Compass, Heart, User, X, Calendar, Users, IndianRupee, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AbabaNavbar } from './components/ababa-navbar';
import { AbabaBottomNav } from './components/ababa-bottom-nav';
import { AbabaButton } from './components/ababa-button';
import { AbabaBottomSheet } from './components/ababa-bottom-sheet';
import { OfferListCard, Offer } from './components/offer-list-card';
import { SlotSelector, TimeSlot } from './components/slot-selector';
import { QuantitySelector } from './components/quantity-selector';
import { SuccessConfetti } from './components/success-confetti';
import { Dialog, DialogContent } from './components/ui/dialog';
import { Separator } from './components/ui/separator';
import { toast } from 'sonner@2.0.3';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);
  const [bookingSheetOpen, setBookingSheetOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [bookingDetails, setBookingDetails] = useState<any>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mock offers data
  const offers: Offer[] = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBmb29kJTIwY3Vycnl8ZW58MXx8fHwxNzYyNzAwMjMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      restaurantName: 'Spice Garden',
      title: 'Butter Chicken Combo with Naan',
      price: 299,
      originalPrice: 499,
      discount: '40% OFF',
      slotsAvailable: 8,
      distance: '2.3 km',
      rating: 4.5,
      cuisine: 'Indian',
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1680405229153-a753d043c4ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMEl0YWxpYW4lMjByZXN0YXVyYW50fGVufDF8fHx8MTc2MjcwMDIzMXww&ixlib=rb-4.1.0&q=80&w=1080',
      restaurantName: 'Pasta Paradise',
      title: 'Creamy Alfredo Pasta Special',
      price: 249,
      originalPrice: 399,
      discount: '38% OFF',
      slotsAvailable: 5,
      distance: '1.8 km',
      rating: 4.7,
      cuisine: 'Italian',
    },
    {
      id: '3',
      image: 'https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwY2FrZXxlbnwxfHx8fDE3NjI2MzAzMDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      restaurantName: 'Sweet Treats',
      title: 'Belgian Chocolate Cake Slice',
      price: 149,
      originalPrice: 249,
      discount: '40% OFF',
      slotsAvailable: 12,
      distance: '3.1 km',
      rating: 4.8,
      cuisine: 'Desserts',
    },
    {
      id: '4',
      image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaGluZXNlJTIwbm9vZGxlc3xlbnwxfHx8fDE3NjI3MDAyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      restaurantName: 'Dragon Wok',
      title: 'Hakka Noodles with Manchurian',
      price: 199,
      originalPrice: 329,
      discount: '39% OFF',
      slotsAvailable: 6,
      distance: '2.7 km',
      rating: 4.4,
      cuisine: 'Chinese',
    },
    {
      id: '5',
      image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBmb29kfGVufDF8fHx8MTc2MjY1MTQ5MXww&ixlib=rb-4.1.0&q=80&w=1080',
      restaurantName: 'Morning Bliss',
      title: 'All-Day Breakfast Platter',
      price: 279,
      originalPrice: 449,
      discount: '38% OFF',
      slotsAvailable: 10,
      distance: '1.5 km',
      rating: 4.6,
      cuisine: 'Continental',
    },
    {
      id: '6',
      image: 'https://images.unsplash.com/photo-1651352650142-385087834d9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxhZCUyMGhlYWx0aHklMjBmb29kfGVufDF8fHx8MTc2MjY1NDQwNHww&ixlib=rb-4.1.0&q=80&w=1080',
      restaurantName: 'Green Bowl',
      title: 'Mediterranean Quinoa Salad',
      price: 229,
      originalPrice: 349,
      discount: '34% OFF',
      slotsAvailable: 7,
      distance: '2.0 km',
      rating: 4.5,
      cuisine: 'Healthy',
    },
  ];

  // Mock time slots
  const timeSlots: TimeSlot[] = [
    { id: '1', time: '12:00 PM', available: true },
    { id: '2', time: '12:30 PM', available: true },
    { id: '3', time: '1:00 PM', available: true },
    { id: '4', time: '1:30 PM', available: false },
    { id: '5', time: '2:00 PM', available: true },
    { id: '6', time: '2:30 PM', available: true },
    { id: '7', time: '7:00 PM', available: true },
    { id: '8', time: '7:30 PM', available: true },
    { id: '9', time: '8:00 PM', available: false },
  ];

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home size={20} />, activeIcon: <Home size={20} fill="currentColor" /> },
    { id: 'explore', label: 'Explore', icon: <Compass size={20} />, activeIcon: <Compass size={20} fill="currentColor" /> },
    { id: 'saved', label: 'Saved', icon: <Heart size={20} />, activeIcon: <Heart size={20} fill="currentColor" /> },
    { id: 'profile', label: 'Profile', icon: <User size={20} />, activeIcon: <User size={20} fill="currentColor" /> },
  ];

  const handleBookOffer = (offer: Offer) => {
    setSelectedOffer(offer);
    setSelectedSlot(null);
    setQuantity(1);
    setBookingSheetOpen(true);
  };

  const handleConfirmBooking = () => {
    if (!selectedSlot) {
      toast.error('Please select a time slot', {
        description: 'Choose your preferred dining time',
      });
      return;
    }

    const slot = timeSlots.find(s => s.id === selectedSlot);
    const totalPrice = selectedOffer!.price * quantity;

    setBookingDetails({
      offer: selectedOffer,
      slot: slot?.time,
      quantity,
      totalPrice,
      bookingId: 'BK' + Math.random().toString(36).substr(2, 9).toUpperCase(),
    });

    setBookingSheetOpen(false);
    
    setTimeout(() => {
      setSuccessModalOpen(true);
    }, 300);
  };

  const handleSuccessClose = () => {
    setSuccessModalOpen(false);
    setSelectedOffer(null);
    setSelectedSlot(null);
    setQuantity(1);
    setBookingDetails(null);
  };

  const totalPrice = selectedOffer ? selectedOffer.price * quantity : 0;
  const savings = selectedOffer && selectedOffer.originalPrice 
    ? (selectedOffer.originalPrice - selectedOffer.price) * quantity 
    : 0;

  return (
    <div className="min-h-screen bg-[#FAFAFA] pb-20">
      <Toaster position="top-center" />
      
      {/* ============================================
          SCREEN 1: OFFERS LIST
          ============================================ */}
      
      {/* Sticky Header with blur effect */}
      <AbabaNavbar 
        title="Food Offers"
        subtitle="by Bhukka Nawab"
        showSearch
        showNotifications
        notificationCount={2}
        onSearch={() => toast.info('Search feature coming soon')}
        onNotifications={() => toast.info('2 new notifications')}
      />

      {/* Main Content */}
      <div className="px-4 pt-4 pb-6 space-y-4 max-w-2xl mx-auto">
        {/* Premium Stats Banner with glassmorphism */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative bg-gradient-to-br from-[#7C3AED] via-[#8B5CF6] to-[#6D28D9] rounded-[1.5rem] p-6 text-white overflow-hidden"
          style={{
            boxShadow: '0 10px 25px -5px rgba(124, 58, 237, 0.3), 0 8px 10px -6px rgba(124, 58, 237, 0.2)'
          }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
          
          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-sm text-white/80 mb-1 tracking-tight">Available Today</p>
              <h2 className="text-white mt-0.5 tracking-tight font-semibold">{offers.length} Hot Deals</h2>
            </div>
            <div className="text-right">
              <p className="text-sm text-white/80 mb-1 tracking-tight">Save up to</p>
              <div className="flex items-center gap-1.5 justify-end">
                <Sparkles size={18} className="text-yellow-300" />
                <h2 className="text-white mt-0.5 tracking-tight font-semibold">40% OFF</h2>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Offers List with staggered animations */}
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
              >
                <OfferListCard 
                  offer={offer} 
                  onBook={handleBookOffer}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="h-4"></div>
      </div>

      {/* Bottom Navigation */}
      <AbabaBottomNav 
        items={navItems} 
        activeItem={activeTab} 
        onItemClick={setActiveTab} 
      />

      {/* ============================================
          SCREEN 2: OFFER DETAIL / BOOKING SHEET
          ============================================ */}
      
      <AbabaBottomSheet
        open={bookingSheetOpen}
        onOpenChange={setBookingSheetOpen}
        showCloseButton={false}
      >
        {selectedOffer && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-6 pb-6"
          >
            {/* Header with Close Button */}
            <div className="flex items-start justify-between gap-4 -mt-2">
              <div className="flex-1">
                <h2 className="text-[#1D1D1F] mb-1 tracking-tight">{selectedOffer.title}</h2>
                <p className="text-sm text-[#7C3AED] font-medium tracking-tight">{selectedOffer.restaurantName}</p>
              </div>
              <button
                onClick={() => setBookingSheetOpen(false)}
                className="p-2.5 hover:bg-[#F5F5F7] rounded-full transition-all duration-200 active:scale-90 flex-shrink-0"
              >
                <X size={20} className="text-[#6E6E73]" strokeWidth={2.5} />
              </button>
            </div>

            {/* Offer Image with enhanced styling */}
            <div className="w-full h-52 -mx-4 overflow-hidden relative">
              <img 
                src={selectedOffer.image} 
                alt={selectedOffer.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Offer Details with refined styling */}
            <div className="bg-[#FAFAFA] rounded-[1.125rem] p-4 space-y-3 border border-[#F5F5F7]">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#6E6E73] tracking-tight">Original Price</span>
                <span className="text-sm text-[#98989D] line-through tracking-tight">
                  ₹{selectedOffer.originalPrice}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#6E6E73] tracking-tight">Offer Price</span>
                <span className="text-[#1D1D1F] font-semibold tracking-tight">₹{selectedOffer.price}</span>
              </div>
              {selectedOffer.discount && (
                <div className="flex items-center justify-between pt-2 border-t border-[#E8E8ED]">
                  <span className="text-sm text-[#6E6E73] tracking-tight">You Save</span>
                  <span className="text-[#10B981] font-semibold tracking-tight">
                    {selectedOffer.discount}
                  </span>
                </div>
              )}
            </div>

            <Separator className="bg-[#E8E8ED]" />

            {/* Slot Selector */}
            <SlotSelector 
              slots={timeSlots}
              selectedSlot={selectedSlot}
              onSelectSlot={setSelectedSlot}
            />

            <Separator className="bg-[#E8E8ED]" />

            {/* Quantity Selector */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Users size={18} className="text-[#6E6E73]" strokeWidth={2.5} />
                <label className="text-[#1D1D1F] font-medium tracking-tight">Number of People</label>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-[#6E6E73] tracking-tight">Select quantity</p>
                <QuantitySelector 
                  value={quantity}
                  onChange={setQuantity}
                  min={1}
                  max={selectedOffer.slotsAvailable}
                />
              </div>
            </div>

            <Separator className="bg-[#E8E8ED]" />

            {/* Price Summary with premium styling */}
            <div className="bg-gradient-to-br from-[#7C3AED]/5 to-[#8B5CF6]/5 rounded-[1.125rem] p-4 space-y-3 border border-[#7C3AED]/10">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#6E6E73] tracking-tight">Price × {quantity}</span>
                <span className="text-[#1D1D1F] font-medium tracking-tight">₹{totalPrice}</span>
              </div>
              {savings > 0 && (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#6E6E73] tracking-tight">Total Savings</span>
                  <span className="text-[#10B981] font-semibold tracking-tight">- ₹{savings}</span>
                </div>
              )}
              <Separator className="my-2 bg-[#E8E8ED]" />
              <div className="flex items-center justify-between">
                <span className="text-[#1D1D1F] font-semibold tracking-tight">Total Amount</span>
                <span className="text-[#7C3AED] font-bold tracking-tight text-lg">₹{totalPrice}</span>
              </div>
            </div>

            {/* Floating Action Button with enhanced shadow */}
            <div className="sticky bottom-0 left-0 right-0 pt-4 bg-gradient-to-t from-white via-white to-transparent -mx-4 px-4 pb-2">
              <AbabaButton
                variant="primary"
                size="lg"
                fullWidth
                onClick={handleConfirmBooking}
                className="shadow-2xl shadow-[#7C3AED]/30"
              >
                <IndianRupee size={18} strokeWidth={2.5} />
                Pay ₹{totalPrice} & Book
              </AbabaButton>
            </div>
          </motion.div>
        )}
      </AbabaBottomSheet>

      {/* ============================================
          SCREEN 3: PAYMENT SUCCESS MODAL
          ============================================ */}
      
      <Dialog open={successModalOpen} onOpenChange={setSuccessModalOpen}>
        <DialogContent className="sm:max-w-md max-w-[90%] rounded-[2rem] p-0 overflow-hidden border-0 shadow-2xl">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative"
          >
            {/* Confetti Animation with gradient background */}
            <div className="h-72 bg-gradient-to-b from-[#7C3AED]/5 via-[#8B5CF6]/5 to-transparent relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(124,58,237,0.1),transparent_70%)]" />
              <SuccessConfetti />
            </div>

            {/* Success Content */}
            <div className="p-6 space-y-6">
              {/* Success Message */}
              <div className="text-center space-y-2">
                <h2 className="text-[#1D1D1F] tracking-tight">Booking Confirmed!</h2>
                <p className="text-[#6E6E73] tracking-tight">
                  Your table has been reserved successfully
                </p>
              </div>

              {/* Booking Details with refined card */}
              {bookingDetails && (
                <div className="bg-[#FAFAFA] rounded-[1.125rem] p-4 space-y-3 border border-[#E8E8ED]">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E8E8ED]">
                    <span className="text-sm text-[#6E6E73] tracking-tight">Booking ID</span>
                    <span className="text-sm text-[#7C3AED] font-semibold tracking-tight">{bookingDetails.bookingId}</span>
                  </div>
                  
                  <div className="space-y-2.5">
                    <div className="flex items-start justify-between">
                      <span className="text-sm text-[#6E6E73] tracking-tight">Restaurant</span>
                      <span className="text-sm text-[#1D1D1F] text-right max-w-[60%] font-medium tracking-tight">
                        {bookingDetails.offer.restaurantName}
                      </span>
                    </div>
                    
                    <div className="flex items-start justify-between">
                      <span className="text-sm text-[#6E6E73] tracking-tight">Offer</span>
                      <span className="text-sm text-[#1D1D1F] text-right max-w-[60%] font-medium tracking-tight">
                        {bookingDetails.offer.title}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#6E6E73] tracking-tight">Time Slot</span>
                      <div className="flex items-center gap-1.5 text-sm text-[#1D1D1F] font-medium tracking-tight">
                        <Calendar size={14} className="text-[#7C3AED]" strokeWidth={2.5} />
                        {bookingDetails.slot}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#6E6E73] tracking-tight">People</span>
                      <span className="text-sm text-[#1D1D1F] font-medium tracking-tight">
                        {bookingDetails.quantity} {bookingDetails.quantity === 1 ? 'person' : 'people'}
                      </span>
                    </div>
                  </div>

                  <Separator className="bg-[#E8E8ED]" />

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[#1D1D1F] font-semibold tracking-tight">Amount Paid</span>
                    <span className="text-[#10B981] font-bold tracking-tight">₹{bookingDetails.totalPrice}</span>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-2.5">
                <AbabaButton
                  variant="primary"
                  size="lg"
                  fullWidth
                  onClick={handleSuccessClose}
                >
                  View My Bookings
                </AbabaButton>
                <AbabaButton
                  variant="secondary"
                  size="md"
                  fullWidth
                  onClick={handleSuccessClose}
                >
                  Back to Offers
                </AbabaButton>
              </div>
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
