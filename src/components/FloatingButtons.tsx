import { Link } from 'react-router-dom';
import { PhoneCall, CalendarPlus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function FloatingButtons() {
  const { t } = useTranslation();
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <Link
        to="/contact"
        className="pill-btn bg-[var(--color-teal)] text-white hover:bg-[var(--color-teal-dark)] shadow-lg shadow-[var(--color-teal)]/30 hover:shadow-[var(--color-teal)]/50 hover:scale-105 transition-all duration-300 cursor-grow text-sm px-6 py-3"
      >
        <CalendarPlus size={18} />
        {t('floating.bookAppointment')}
      </Link>
      <a
        href="tel:05523350400"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-coral)] text-white shadow-lg shadow-[var(--color-coral)]/30 hover:shadow-[var(--color-coral)]/50 hover:scale-110 transition-all duration-300 cursor-grow relative"
      >
        <PhoneCall size={24} />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[var(--color-coral)] animate-ping opacity-75" />
      </a>
    </div>
  );
}
