import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import MagneticButton from '../components/MagneticButton';
import PageHero from '../components/PageHero';

export default function Contact() {
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const onSubmit = async (data: any) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log(data);
    alert('Message sent successfully!');
  };

  return (
    <div className="bg-[var(--color-ivory)]">
      <PageHero labelKey="contact.label" titleKey="contact.title" />
      <section className="py-16 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="lg:col-span-1 space-y-5">
            <div className="bg-white p-7 rounded-3xl border border-[var(--color-border)] hover:shadow-lg transition-all cursor-grow">
              <div className="w-12 h-12 rounded-2xl bg-[var(--color-mist)] text-[var(--color-teal)] flex items-center justify-center mb-4"><MapPin size={22} /></div>
              <h3 className="font-serif text-xl font-bold text-[var(--color-navy)] mb-2">{t('contact.hospitalAddress')}</h3>
              <div className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                {t('footer.address')}
                <span className="flex items-center gap-2 text-xs font-bold text-[var(--color-teal)] uppercase tracking-widest mt-3"><Clock size={14} /> {t('contact.open247')}</span>
              </div>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-[var(--color-border)] hover:shadow-lg transition-all cursor-grow">
              <div className="w-12 h-12 rounded-2xl bg-[var(--color-mist)] text-[var(--color-teal)] flex items-center justify-center mb-4"><Phone size={22} /></div>
              <h3 className="font-serif text-xl font-bold text-[var(--color-navy)] mb-2">{t('contact.contactNumbers')}</h3>
              <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
                <li>{t('contact.hospital')}: <b>05523-350400-29</b></li>
                <li>{t('contact.college')}: <b>05523-350430-59</b></li>
                <li className="text-[var(--color-teal)]">{t('contact.tollFree')}: <b>1800-8898-390</b></li>
              </ul>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-[var(--color-border)] hover:shadow-lg transition-all cursor-grow">
              <div className="w-12 h-12 rounded-2xl bg-[var(--color-mist)] text-[var(--color-teal)] flex items-center justify-center mb-4"><Mail size={22} /></div>
              <h3 className="font-serif text-xl font-bold text-[var(--color-navy)] mb-2">{t('contact.emailSupport')}</h3>
              <a href="mailto:info@kmcmedicalcollege.com" className="text-[var(--color-navy)] hover:text-[var(--color-teal)] font-medium text-sm cursor-grow">info@kmcmedicalcollege.com</a>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl border border-[var(--color-border)]">
            <h2 className="font-serif text-3xl font-bold text-[var(--color-navy)] mb-8">{t('contact.sendMessage')}</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label={t('contact.fullName')} err={!!errors.name} errText={t('contact.required')}>
                  <input {...register('name', { required: true })} placeholder={t('contact.placeholders.name')} className="inp" />
                </Field>
                <Field label={t('contact.email')} err={!!errors.email} errText={t('contact.required')}>
                  <input type="email" {...register('email', { required: true })} placeholder={t('contact.placeholders.email')} className="inp" />
                </Field>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label={t('contact.phone')}>
                  <input {...register('phone')} placeholder={t('contact.placeholders.phone')} className="inp" />
                </Field>
                <Field label={t('contact.department')}>
                  <select {...register('department')} className="inp appearance-none">
                    <option value="">{t('contact.selectDept')}</option>
                    <option>{t('contact.deptOptions.admissions')}</option>
                    <option>{t('contact.deptOptions.emergency')}</option>
                    <option>{t('contact.deptOptions.general')}</option>
                    <option>{t('contact.deptOptions.other')}</option>
                  </select>
                </Field>
              </div>
              <Field label={t('contact.message')} err={!!errors.message} errText={t('contact.required')}>
                <textarea {...register('message', { required: true })} rows={5} placeholder={t('contact.placeholders.message')} className="inp resize-none" />
              </Field>
              <MagneticButton variant="primary">{isSubmitting ? t('contact.sending') : t('contact.submit')}</MagneticButton>
            </form>
          </div>
        </div>
      </section>

      <style>{`.inp{width:100%;background:var(--color-mist);border:1px solid var(--color-border);border-radius:1rem;padding:0.8rem 1rem;font-size:0.875rem;outline:none;transition:border-color .2s;}.inp:focus{border-color:var(--color-teal);}`}</style>
    </div>
  );
}

function Field({ label, children, err, errText }: { label: string; children: React.ReactNode; err?: boolean; errText?: string }) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-2">{label}</label>
      {children}
      {err && <span className="text-xs text-[var(--color-coral)] mt-1 block">{errText}</span>}
    </div>
  );
}
