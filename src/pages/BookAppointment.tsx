import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { useTranslation } from 'react-i18next';
import { doctors, appointmentSpecialities } from '../data/doctors';
import {
  Search, Stethoscope, Baby, Heart, Scissors, Bone, Sparkles, Eye, Ear,
  Brain, HeartPulse, Activity, Droplets, FlaskRound, Shield, Smile,
  Ambulance, Syringe, Monitor, ChevronRight, X, Calendar, Clock, Phone,
  User, MapPin, ArrowRight, CheckCircle2, Filter,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const iconMap: Record<string, React.ElementType> = {
  Stethoscope, Baby, Heart, Scissors, Bone, Sparkles, Eye, Ear,
  Brain, HeartPulse, Activity, Droplets, FlaskRound, Shield, Smile,
  Ambulance, Syringe, Monitor,
};

export default function BookAppointment() {
  const { t } = useTranslation();
  const [selectedDept, setSelectedDept] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    patientName: '', phone: '', email: '', date: '', time: '',
    department: '', doctor: '', reason: '',
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const filteredDoctors = useMemo(() => {
    let result = doctors;
    if (selectedDept) {
      result = result.filter(d => d.departmentSlug === selectedDept);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(d =>
        d.name.toLowerCase().includes(q) ||
        d.department.toLowerCase().includes(q) ||
        d.qualification.toLowerCase().includes(q) ||
        (d.specialInterests && d.specialInterests.some(s => s.toLowerCase().includes(q)))
      );
    }
    return result;
  }, [selectedDept, searchQuery]);

  const currentDoctor = doctors.find(d => d.id === selectedDoctor);

  const handleBookClick = (doctorId: string) => {
    const doc = doctors.find(d => d.id === doctorId);
    setSelectedDoctor(doctorId);
    setBookingData(prev => ({
      ...prev,
      doctor: doctorId,
      department: doc?.departmentSlug || '',
    }));
    setShowBookingForm(true);
    setBookingStep(1);
    setBookingConfirmed(false);
  };

  const handleBookingSubmit = () => {
    setBookingConfirmed(true);
  };

  const handleCloseModal = () => {
    setShowBookingForm(false);
    setSelectedDoctor(null);
    setBookingStep(1);
    setBookingConfirmed(false);
  };

  return (
    <div className="bg-[var(--color-ivory)] min-h-screen">
      <PageHero
        labelKey="bookAppt.label"
        titleKey="bookAppt.title"
        subtitleKey="bookAppt.subtitle"
      />

      {/* Search Bar */}
      <section className="py-8 container mx-auto px-6 md:px-12">
        <div className="relative max-w-2xl mx-auto">
          <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder={t('bookAppt.searchPlaceholder')}
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-[var(--color-border)] bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-teal)]/30 focus:border-[var(--color-teal)] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] hover:text-[var(--color-navy)]">
              <X size={18} />
            </button>
          )}
        </div>
      </section>

      {/* Speciality Grid */}
      <section className="pb-8 container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-serif font-bold text-[var(--color-navy)]">{t('bookAppt.findBySpeciality')}</h2>
          {selectedDept && (
            <button
              onClick={() => setSelectedDept(null)}
              className="text-sm text-[var(--color-teal)] font-semibold hover:underline flex items-center gap-1"
            >
              {t('bookAppt.clearFilter')} <X size={14} />
            </button>
          )}
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3">
          {appointmentSpecialities.map(spec => {
            const Icon = iconMap[spec.icon] || Stethoscope;
            const isActive = selectedDept === spec.slug;
            return (
              <button
                key={spec.slug}
                onClick={() => setSelectedDept(isActive ? null : spec.slug)}
                className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all duration-200 cursor-grow ${
                  isActive
                    ? 'border-[var(--color-teal)] bg-[var(--color-teal)]/5 shadow-md'
                    : 'border-[var(--color-border)] bg-white hover:border-[var(--color-teal)]/40 hover:shadow-sm'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  isActive ? 'bg-[var(--color-teal)] text-white' : 'bg-[var(--color-mist)] text-[var(--color-teal)]'
                }`}>
                  <Icon size={22} />
                </div>
                <span className={`text-xs font-medium text-center leading-tight ${
                  isActive ? 'text-[var(--color-teal)]' : 'text-[var(--color-navy)]'
                }`}>
                  {spec.label}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Doctor Listing */}
      <section className="pb-20 container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-serif font-bold text-[var(--color-navy)]">
              {selectedDept
                ? `${doctors.filter(d => d.departmentSlug === selectedDept)[0]?.department || ''} ${t('bookAppt.doctors')}`
                : t('bookAppt.allDoctors')
              }
            </h2>
            <p className="text-sm text-[var(--color-text-muted)] mt-1">
              {filteredDoctors.length} {t('bookAppt.doctorsAvailable')}
            </p>
          </div>
        </div>

        {filteredDoctors.length === 0 ? (
          <div className="text-center py-16">
            <Stethoscope size={48} className="text-[var(--color-text-muted)] mx-auto mb-4" />
            <p className="text-lg text-[var(--color-text-muted)]">{t('bookAppt.noDoctors')}</p>
            <button
              onClick={() => { setSelectedDept(null); setSearchQuery(''); }}
              className="mt-4 text-[var(--color-teal)] font-semibold hover:underline"
            >
              {t('bookAppt.clearFilters')}
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredDoctors.map((doctor, i) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="bg-white rounded-3xl border border-[var(--color-border)] overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-teal)] to-[var(--color-navy)] flex items-center justify-center shrink-0">
                      <User size={28} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif font-bold text-[var(--color-navy)] group-hover:text-[var(--color-teal)] transition-colors truncate">
                        {doctor.name}
                      </h3>
                      <p className="text-sm text-[var(--color-teal)] font-semibold">{doctor.designation}</p>
                      <p className="text-xs text-[var(--color-text-muted)] mt-1">{doctor.qualification}</p>
                    </div>
                  </div>

                  {/* Department badge */}
                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-xs bg-[var(--color-mist)] text-[var(--color-teal)] px-3 py-1 rounded-full font-medium">
                      {doctor.department}
                    </span>
                  </div>

                  {/* Experience & Timing */}
                  <div className="mt-4 flex items-center gap-4 text-sm text-[var(--color-text-muted)]">
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} className="text-[var(--color-teal)]" />
                      <span>{doctor.experience} {t('bookAppt.yearsExp')}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-[var(--color-teal)]" />
                      <span>{doctor.availableDays.join(', ')}</span>
                    </div>
                  </div>

                  {/* Timing */}
                  <div className="mt-2 text-sm text-[var(--color-text-muted)]">
                    <span className="font-medium text-[var(--color-navy)]">{t('bookAppt.timings')}:</span> {doctor.timing}
                  </div>

                  {/* Special Interests */}
                  {doctor.specialInterests && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {doctor.specialInterests.slice(0, 3).map(s => (
                        <span key={s} className="text-[10px] bg-[var(--color-ivory)] text-[var(--color-navy)] px-2 py-0.5 rounded-full border border-[var(--color-border)]">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="mt-5 flex gap-3">
                    <button
                      onClick={() => handleBookClick(doctor.id)}
                      className="flex-1 pill-btn bg-[var(--color-teal)] text-white hover:bg-[var(--color-teal-dark)] text-sm py-2.5"
                    >
                      {t('bookAppt.bookNow')}
                    </button>
                    <Link
                      to={`/departments/${doctor.departmentSlug}`}
                      className="pill-btn border-2 border-[var(--color-teal)] text-[var(--color-teal)] hover:bg-[var(--color-teal)]/5 text-sm py-2.5"
                    >
                      {t('bookAppt.viewProfile')}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Booking Modal */}
      <AnimatePresence>
        {showBookingForm && currentDoctor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-[var(--color-teal)] to-[var(--color-navy)] p-6 rounded-t-3xl relative">
                <button onClick={handleCloseModal} className="absolute top-4 right-4 text-white/80 hover:text-white">
                  <X size={24} />
                </button>
                <h3 className="text-xl font-serif font-bold text-white">{t('bookAppt.bookAppointment')}</h3>
                <p className="text-white/70 text-sm mt-1">{t('bookAppt.step')} {bookingStep} {t('bookAppt.of')} 2</p>
                {/* Progress bar */}
                <div className="mt-3 h-1.5 bg-white/20 rounded-full">
                  <div className="h-full bg-white rounded-full transition-all duration-500" style={{ width: `${bookingStep * 50}%` }} />
                </div>
              </div>

              <div className="p-6">
                {/* Doctor Info (always visible) */}
                <div className="flex items-center gap-3 mb-6 p-4 bg-[var(--color-mist)] rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-teal)] to-[var(--color-navy)] flex items-center justify-center">
                    <User size={22} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[var(--color-navy)]">{currentDoctor.name}</h4>
                    <p className="text-xs text-[var(--color-teal)]">{currentDoctor.designation} · {currentDoctor.department}</p>
                    <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{currentDoctor.timing}</p>
                  </div>
                </div>

                {bookingConfirmed ? (
                  /* Success State */
                  <div className="text-center py-8">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={40} className="text-green-600" />
                    </div>
                    <h4 className="text-2xl font-serif font-bold text-[var(--color-navy)] mb-2">{t('bookAppt.confirmed')}</h4>
                    <p className="text-[var(--color-text-muted)] mb-1">{t('bookAppt.confirmMsg')}</p>
                    <p className="text-sm text-[var(--color-text-muted)] mb-6">{t('bookAppt.confirmNote')}</p>
                    <div className="bg-[var(--color-mist)] rounded-2xl p-4 text-left text-sm space-y-2 mb-6">
                      <div className="flex justify-between"><span className="text-[var(--color-text-muted)]">{t('bookAppt.patientName')}</span><span className="font-medium text-[var(--color-navy)]">{bookingData.patientName}</span></div>
                      <div className="flex justify-between"><span className="text-[var(--color-text-muted)]">{t('bookAppt.doctor')}</span><span className="font-medium text-[var(--color-navy)]">{currentDoctor.name}</span></div>
                      <div className="flex justify-between"><span className="text-[var(--color-text-muted)]">{t('bookAppt.date')}</span><span className="font-medium text-[var(--color-navy)]">{bookingData.date}</span></div>
                      <div className="flex justify-between"><span className="text-[var(--color-text-muted)]">{t('bookAppt.time')}</span><span className="font-medium text-[var(--color-navy)]">{bookingData.time}</span></div>
                    </div>
                    <button onClick={handleCloseModal} className="pill-btn bg-[var(--color-teal)] text-white hover:bg-[var(--color-teal-dark)] px-8 py-3">
                      {t('bookAppt.done')}
                    </button>
                  </div>
                ) : bookingStep === 1 ? (
                  /* Step 1: Patient Details */
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-[var(--color-navy)] mb-1.5">{t('bookAppt.patientName')} *</label>
                      <input
                        type="text"
                        value={bookingData.patientName}
                        onChange={e => setBookingData(prev => ({ ...prev, patientName: e.target.value }))}
                        placeholder={t('bookAppt.namePlaceholder')}
                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-teal)]/30 focus:border-[var(--color-teal)]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[var(--color-navy)] mb-1.5">{t('bookAppt.phone')} *</label>
                      <input
                        type="tel"
                        value={bookingData.phone}
                        onChange={e => setBookingData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="+91"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-teal)]/30 focus:border-[var(--color-teal)]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[var(--color-navy)] mb-1.5">{t('bookAppt.email')}</label>
                      <input
                        type="email"
                        value={bookingData.email}
                        onChange={e => setBookingData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="email@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-teal)]/30 focus:border-[var(--color-teal)]"
                      />
                    </div>
                    <button
                      onClick={() => setBookingStep(2)}
                      disabled={!bookingData.patientName || !bookingData.phone}
                      className="w-full pill-btn bg-[var(--color-teal)] text-white hover:bg-[var(--color-teal-dark)] py-3 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {t('bookAppt.next')} <ArrowRight size={16} />
                    </button>
                  </div>
                ) : (
                  /* Step 2: Date/Time & Reason */
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-[var(--color-navy)] mb-1.5">{t('bookAppt.date')} *</label>
                        <input
                          type="date"
                          value={bookingData.date}
                          onChange={e => setBookingData(prev => ({ ...prev, date: e.target.value }))}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-teal)]/30 focus:border-[var(--color-teal)]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[var(--color-navy)] mb-1.5">{t('bookAppt.time')} *</label>
                        <select
                          value={bookingData.time}
                          onChange={e => setBookingData(prev => ({ ...prev, time: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-teal)]/30 focus:border-[var(--color-teal)] bg-white"
                        >
                          <option value="">{t('bookAppt.selectTime')}</option>
                          <option value="9:00 AM">9:00 AM</option>
                          <option value="9:30 AM">9:30 AM</option>
                          <option value="10:00 AM">10:00 AM</option>
                          <option value="10:30 AM">10:30 AM</option>
                          <option value="11:00 AM">11:00 AM</option>
                          <option value="11:30 AM">11:30 AM</option>
                          <option value="12:00 PM">12:00 PM</option>
                          <option value="12:30 PM">12:30 PM</option>
                          <option value="1:00 PM">1:00 PM</option>
                          <option value="2:00 PM">2:00 PM</option>
                          <option value="3:00 PM">3:00 PM</option>
                          <option value="4:00 PM">4:00 PM</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[var(--color-navy)] mb-1.5">{t('bookAppt.reason')}</label>
                      <textarea
                        value={bookingData.reason}
                        onChange={e => setBookingData(prev => ({ ...prev, reason: e.target.value }))}
                        placeholder={t('bookAppt.reasonPlaceholder')}
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-teal)]/30 focus:border-[var(--color-teal)] resize-none"
                      />
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => setBookingStep(1)}
                        className="pill-btn border-2 border-[var(--color-border)] text-[var(--color-navy)] hover:bg-[var(--color-mist)] px-6 py-3"
                      >
                        {t('bookAppt.back')}
                      </button>
                      <button
                        onClick={handleBookingSubmit}
                        disabled={!bookingData.date || !bookingData.time}
                        className="flex-1 pill-btn bg-[var(--color-teal)] text-white hover:bg-[var(--color-teal-dark)] py-3 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {t('bookAppt.confirmBooking')} <CheckCircle2 size={16} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
