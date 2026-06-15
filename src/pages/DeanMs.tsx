import PageHero from '../components/PageHero';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, GraduationCap, Briefcase, Clock } from 'lucide-react';

export default function DeanMs() {
  const { t } = useTranslation();

  const deanData = {
    name: 'Dr. Sankalp Dwivedi',
    designation: t('deanMs.deanDesignation'),
    photo: '/dean.png',
    dob: '18th June 1971',
    totalExp: '19 Years',
    adminExp: '14 Years',
    education: 'MBBS, MS',
    qualifications: [
      { degree: 'MBBS', institute: 'Govt. Medical College, Jabalpur', year: '1997' },
      { degree: 'MS', institute: 'Govt. Medical College, Jabalpur', year: '2002' },
    ],
    address: 'Dean Office, KMC Medical College & Hospital, Village - Kandh, Near Pakadi Chouraha, Maharajganj (U.P.) - 273303',
    phone: '05523-350431, 350430',
    residence: 'House No. A-2, Ambika City, Sri Ganganagar, Rajasthan - 335002',
    mobile: '9755590055',
    email: 'dean@kmcmedicalcollege.com',
  };

  const msData = {
    name: 'Dr. Rajendra Chaudhary',
    designation: t('deanMs.msDesignation'),
    photo: '/ms.jpg',
    dob: '08th March 1962',
    totalExp: '27 Years',
    adminExp: '05 Years',
    education: 'MBBS, MD (Medicine)',
    qualifications: [
      { degree: 'MBBS', institute: 'GSVM Medical College Kanpur, Kanpur University', year: '1990' },
      { degree: 'MD', institute: 'BRD Medical College Gorakhpur, Gorakhpur University', year: '2000' },
    ],
    address: 'Medical Superintendent Office, KMC Medical College & Hospital, Village - Kandh, Near Pakadi Chouraha, Maharajganj (U.P.) - 273303',
    phone: '05523-350401',
    residence: 'A-5 Rapti Nagar II, Chargawa, Gorakhpur, U.P. - 273409',
    mobile: '9415282254',
    email: 'ms@kmcmedicalcollege.com',
  };

  function ProfileCard({ data, title }: { data: typeof deanData; title: string }) {
    return (
      <div className="bg-white rounded-3xl border border-[var(--color-border)] overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
        <div className="bg-gradient-to-r from-[var(--color-teal)] to-[var(--color-navy)] px-8 py-5">
          <h3 className="text-2xl font-serif font-bold text-white">{title}</h3>
        </div>
        <div className="p-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Photo */}
            <div className="shrink-0 flex flex-col items-center">
              <div className="w-48 h-60 rounded-2xl overflow-hidden border-4 border-[var(--color-mist)] shadow-md">
                <img
                  src={data.photo}
                  alt={data.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="mt-3 text-sm font-semibold text-[var(--color-teal)] uppercase tracking-wider">
                {title}
              </span>
            </div>

            {/* Details */}
            <div className="flex-1 space-y-4">
              <h4 className="text-2xl font-serif font-bold text-[var(--color-navy)]">{data.name}</h4>
              <p className="text-[var(--color-teal)] font-semibold">{data.designation}</p>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="bg-[var(--color-mist)] rounded-xl p-3 text-center">
                  <Clock size={18} className="text-[var(--color-teal)] mx-auto mb-1" />
                  <div className="text-xs text-[var(--color-text-muted)]">{t('deanMs.totalExp')}</div>
                  <div className="font-bold text-[var(--color-navy)]">{data.totalExp}</div>
                </div>
                <div className="bg-[var(--color-mist)] rounded-xl p-3 text-center">
                  <Briefcase size={18} className="text-[var(--color-teal)] mx-auto mb-1" />
                  <div className="text-xs text-[var(--color-text-muted)]">{t('deanMs.adminExp')}</div>
                  <div className="font-bold text-[var(--color-navy)]">{data.adminExp}</div>
                </div>
                <div className="bg-[var(--color-mist)] rounded-xl p-3 text-center">
                  <GraduationCap size={18} className="text-[var(--color-teal)] mx-auto mb-1" />
                  <div className="text-xs text-[var(--color-text-muted)]">{t('deanMs.education')}</div>
                  <div className="font-bold text-[var(--color-navy)] text-xs">{data.education}</div>
                </div>
              </div>

              {/* Qualifications Table */}
              <div className="mt-4">
                <h5 className="text-sm font-bold text-[var(--color-navy)] mb-2 uppercase tracking-wider">{t('deanMs.qualifications')}</h5>
                <div className="overflow-x-auto rounded-xl border border-[var(--color-border)]">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[var(--color-mist)]">
                        <th className="text-left px-4 py-2 font-semibold text-[var(--color-navy)]">{t('deanMs.degree')}</th>
                        <th className="text-left px-4 py-2 font-semibold text-[var(--color-navy)]">{t('deanMs.institute')}</th>
                        <th className="text-left px-4 py-2 font-semibold text-[var(--color-navy)]">{t('deanMs.year')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.qualifications.map((q, i) => (
                        <tr key={i} className="border-t border-[var(--color-border)]">
                          <td className="px-4 py-2 font-medium text-[var(--color-navy)]">{q.degree}</td>
                          <td className="px-4 py-2 text-[var(--color-text-muted)]">{q.institute}</td>
                          <td className="px-4 py-2 text-[var(--color-text-muted)]">{q.year}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Contact Details */}
              <div className="mt-4 space-y-2">
                <h5 className="text-sm font-bold text-[var(--color-navy)] uppercase tracking-wider">{t('deanMs.contactInfo')}</h5>
                <div className="flex items-start gap-3 text-sm">
                  <MapPin size={16} className="text-[var(--color-teal)] mt-0.5 shrink-0" />
                  <span className="text-[var(--color-text-muted)]">{data.address}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone size={16} className="text-[var(--color-teal)] shrink-0" />
                  <span className="text-[var(--color-text-muted)]">{t('deanMs.office')}: {data.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail size={16} className="text-[var(--color-teal)] shrink-0" />
                  <a href={`mailto:${data.email}`} className="text-[var(--color-teal)] hover:underline">{data.email}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[var(--color-ivory)]">
      <PageHero
        labelKey="deanMs.label"
        titleKey="deanMs.title"
        subtitleKey="deanMs.subtitle"
      />
      <section className="py-16 container mx-auto px-6 md:px-12 space-y-10">
        <ProfileCard data={deanData} title={t('deanMs.dean')} />
        <ProfileCard data={msData} title={t('deanMs.medicalSuperintendent')} />
      </section>
    </div>
  );
}
