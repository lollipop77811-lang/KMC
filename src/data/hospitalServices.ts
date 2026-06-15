import { Activity, HeartPulse, FlaskConical, ScanLine, BedDouble, Stethoscope, Baby, Droplet } from 'lucide-react';

export interface ServiceSection {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
}

export interface HospitalServiceData {
  key: string;
  slug: string;
  icon: any;
  title: string;
  subtitle: string;
  badge: string;
  sections: ServiceSection[];
}

export const hospitalServices: HospitalServiceData[] = [
  {
    key: 'critical',
    slug: 'critical-care',
    icon: Activity,
    title: 'Top-Tier Department of Critical Care Medicine',
    subtitle: 'Advanced ICU Services',
    badge: 'Critical Care',
    sections: [
      {
        paragraphs: [
          'Established in 2017, our Department of Critical Care Medicine is dedicated to delivering comprehensive, multidisciplinary care for critically ill medical and surgical patients. Equipped with a high-capacity unit featuring 30 state-of-the-art critical care beds, we are committed to providing life-saving treatments with precision, speed, and compassion.',
        ],
      },
      {
        heading: 'Advanced ICU Facilities & Clinical Technology',
        paragraphs: [
          'Our Intensive Care Unit (ICU) leverages cutting-edge medical technology to ensure optimal patient outcomes. Our core clinical facilities include:',
        ],
        list: [
          'Advanced Hemodynamic Monitoring for real-time patient assessment.',
          'State-of-the-Art Ventilators (both Invasive and Non-Invasive).',
          'Renal Replacement Therapy (RRT) for acute kidney support.',
          'Point of Care Ultrasound (POCUS) and Bedside Bronchoscopy.',
          'High Flow Nasal Cannula (HFNC) Oxygen Therapy.',
          'Patient Warming Systems and Sequential Compression Devices.',
          'Advanced Video Laryngoscopes for safe airway management.',
        ],
      },
      {
        heading: 'Specialized Life-Support & Advanced Care',
        paragraphs: [
          'For patients requiring complex and highly specialized interventions, our critical care department offers advanced medical modalities, including:',
        ],
        list: [
          'Extra-Corporeal Membrane Oxygenation (ECMO) Services',
          'Intra-Aortic Balloon Pump (IABP) support',
          'Precision Ultrasound-Guided Procedures',
          'Smart eICU Monitoring Systems for proactive, highly focused patient care.',
        ],
      },
      {
        heading: 'Expert Multidisciplinary Team & 24x7 Support',
        paragraphs: [
          'Exceptional care requires an exceptional team. Our department is led by dedicated senior faculty members and supported by highly trained senior and junior residents. To guarantee personalized, continuous care, we maintain a strict 1:1 nurse-to-patient ratio.',
          'Our holistic approach brings together specialized technicians, physiotherapists, dieticians, and ancillary staff. Furthermore, our 24x7 Rapid Response Team (RRT) ensures that timely, life-saving interventions are available even outside the ICU.',
        ],
      },
      {
        heading: 'Proven Clinical Excellence & Medical Research',
        paragraphs: [
          'We pride ourselves on clinical excellence. During the COVID-19 pandemic, our facility achieved the region\'s lowest mortality rate among critically ill patients.',
          'Beyond delivering world-class, affordable patient care—which includes supporting allied units like Paediatrics—we are deeply invested in the future of medicine. Our department regularly hosts training workshops for doctors, nurses, and paramedics. We also offer robust opportunities for clinical research, currently spearheading various national and international healthcare projects.',
        ],
      },
    ],
  },
  {
    key: 'coronary',
    slug: 'ccu',
    icon: HeartPulse,
    title: 'Advanced Coronary Care Unit (CCU)',
    subtitle: 'Expert Cardiac Emergency Care',
    badge: 'Cardiac Care',
    sections: [
      {
        paragraphs: [
          'When it comes to your heart, every second matters. Our dedicated 5-bed Coronary Care Unit (CCU) is fully equipped with state-of-the-art technology to provide uninterrupted, continuous cardiac monitoring for critically ill patients.',
          'We prioritize rapid response and precision care. Our highly specialized medical staff and cardiac care team are rigorously trained to manage complex heart conditions and expertly handle all types of cardiac emergencies. From proactive monitoring to life-saving interventions, we are committed to delivering the highest standard of cardiovascular care when you need it most.',
        ],
      },
    ],
  },
  {
    key: 'lab',
    slug: 'lab-services',
    icon: FlaskConical,
    title: 'Advanced 24/7 Hospital Lab Services',
    subtitle: 'Precision Diagnostics',
    badge: 'Laboratory',
    sections: [
      {
        paragraphs: [
          'Accurate and timely diagnosis is the cornerstone of effective medical care. The KMC Hospital Laboratory is a highly advanced, fully equipped diagnostic center operating 24 hours a day, 7 days a week to provide rapid and reliable test results.',
          'Our facility is designed to seamlessly process and analyze samples for all Inpatient Department (IPD), Outpatient Department (OPD), and critical emergency patients, ensuring that high-quality care is never delayed.',
        ],
      },
      {
        heading: 'Comprehensive Routine & Specialized Testing',
        paragraphs: [
          'Our state-of-the-art diagnostic lab is staffed by expert technicians and specialists dedicated to precision. We offer a complete spectrum of routine health screenings as well as highly specialized medical tests, including:',
        ],
        list: [
          'Clinical Pathology & Blood Chemistry: Comprehensive profiling for metabolic, organ function, and routine blood tests.',
          'Hematology & Immunology: Advanced blood disorder diagnostics and immune system evaluations.',
          'Endocrinology: Precise hormonal testing, screening, and monitoring.',
          'Microbiology & Infectious Diseases: In-depth pathogen testing encompassing Bacteriology, Virology, Mycology, and Parasitology.',
          'Cytology & Serology: Detailed cellular-level examinations and critical antibody screenings.',
        ],
      },
      {
        paragraphs: [
          'Whether you require a routine wellness check or urgent diagnostic insights during a medical emergency, our laboratory is committed to delivering fast, accurate, and high-quality results to support your healthcare journey.',
        ],
      },
    ],
  },
  {
    key: 'radio',
    slug: 'radiodiagnosis',
    icon: ScanLine,
    title: 'Advanced Radiodiagnosis & Medical Imaging Center',
    subtitle: 'at KMC Medical College & Hospital',
    badge: 'Imaging',
    sections: [
      {
        paragraphs: [
          'The Radio Diagnosis and Imaging Department at KMC Medical College & Hospital is recognized as a premier center of excellence for diagnostic healthcare. We are committed to delivering highly precise, rapid, and comprehensive diagnostic services utilizing the world\'s most advanced medical imaging technology.',
        ],
      },
      {
        heading: 'State-of-the-Art MRI & Diagnostic Modalities',
        paragraphs: [
          'Our department has recently upgraded its infrastructure with a cutting-edge, high-resolution MRI Machine that offers unparalleled diagnostic precision. This technology is especially vital for accurately diagnosing diseases of the Central Nervous System (CNS) and musculoskeletal system.',
          'Our complete suite of modern diagnostic equipment includes:',
        ],
        list: [
          'Advanced MRI Scans: Featuring dedicated mammography coils for MR mammograms, alongside high-quality Diffusion and MRCP sequences.',
          'Spiral CT Scanner * Digital Mammography Machine',
          'High-Resolution Colour Doppler',
          'Latest Ultrasound & X-Ray Systems',
        ],
      },
      {
        heading: 'The Somatom Force CT Scanner: The World\'s Fastest Imaging Technology',
        paragraphs: [
          'To provide our patients with the absolute best in medical imaging, we have installed the Somatom Force CT Scan Machine—the fastest and most technically advanced system available globally.',
          'This revolutionary scanner can scan an entire heart in approximately 150 milliseconds (faster than a single heartbeat) and capture the entire thorax and abdomen in just one second. This technology puts our department two steps ahead in three critical areas of patient care:',
        ],
      },
      {
        heading: 'Preventive Care & Patient Safety',
        list: [
          'Kidney-Friendly Scanning: Designed to protect renal function during contrast imaging.',
          'Low-Dose Early Detection: Safer routine screenings with significantly reduced radiation exposure.',
        ],
      },
      {
        heading: 'Freezing Motion (Ultra-Fast Scanning)',
        list: [
          'Free-Breathing CT Imaging: Patients no longer need to hold their breath, making it ideal for acute care and obese patients.',
          'Unmatched Speed: Utilizing Turbo Flash mode, it reaches scan speeds up to 737 mm/s with a 50 cm field of view. This minimizes preparation time and eliminates motion blur.',
        ],
      },
      {
        heading: 'Enhanced Decision Making (4D Imaging at Half the Radiation)',
        paragraphs: [
          'Dynamic evaluations and body perfusion scans are often limited by high radiation doses. The Somatom Force shatters this barrier.',
        ],
        list: [
          'Up to 50% Less Radiation: It significantly reduces the applied X-ray dose compared to other leading CT systems.',
          'Extended Coverage: Offers a broad coverage area of up to 22 cm for perfusion scans and up to 80 cm for CT Angiography (CTAs), providing doctors with precise 4D imaging and Dual Energy quantification for faster, more accurate diagnoses.',
        ],
      },
    ],
  },
  {
    key: 'icu',
    slug: 'icu-sicu-micu',
    icon: BedDouble,
    title: 'Advanced Critical Care Units',
    subtitle: 'ICU, SICU, MICU & OBST-ICU',
    badge: 'Critical Care',
    sections: [
      {
        paragraphs: [
          'When life is on the line, immediate, highly specialized, and vigilant care is absolutely vital. Our comprehensive critical care divisions—comprising the Intensive Care Unit (ICU), Surgical ICU (SICU), Medical ICU (MICU), and Obstetrics ICU (OBST-ICU)—are meticulously designed to provide life-saving treatments for patients facing severe and complex medical conditions.',
        ],
      },
      {
        heading: 'State-of-the-Art Monitoring & Infrastructure',
        paragraphs: [
          'Every critical care bed in our facility is equipped with advanced medical technology to ensure continuous, real-time patient assessment. Our cutting-edge infrastructure includes:',
        ],
        list: [
          'Centralized Patient Monitoring: Individual bedside monitors are seamlessly connected to a central station, allowing our trained nursing staff to proactively and meticulously track vital signs.',
          'Essential Critical Infrastructure: Every unit features an uninterrupted central oxygen supply, central suction facilities, advanced ECG machines, and immediate-access defibrillators.',
          'Exclusive On-Site Diagnostics: We maintain a dedicated Arterial Blood Gas (ABG) machine exclusively for the critical care units, ensuring rapid, on-the-spot respiratory and metabolic analysis without delay.',
        ],
      },
      {
        heading: 'Advanced Life-Support Systems',
        paragraphs: [
          'To support our most vulnerable patients requiring intensive interventions, every critical care unit is fully equipped with top-tier life-support technology, including:',
        ],
        list: [
          'Advanced Ventilators for invasive breathing support.',
          'BiPAP Machines for non-invasive respiratory assistance.',
          'Precision Infusion Pumps for the accurate, continuous delivery of critical medications and fluids.',
        ],
      },
      {
        heading: 'Round-the-Clock Expert Medical Team',
        paragraphs: [
          'Advanced technology is only as effective as the experts who operate it. Our critical care units are staffed 24 hours a day, 7 days a week by a highly responsive, multidisciplinary healthcare team. Your loved ones are in the safe, capable hands of:',
        ],
        list: [
          'Senior Medical Faculties and Specialist Consultants',
          'Experienced Senior and Junior Residents',
          'Rigorously Trained ICU Nursing Staff',
          'Expert Cardiac Technicians',
        ],
      },
      {
        paragraphs: [
          'From proactive monitoring to rapid emergency interventions, our dedicated team is committed to delivering vigilant, compassionate, and uncompromising care around the clock.',
        ],
      },
    ],
  },
  {
    key: 'emergency',
    slug: 'emergency',
    icon: Stethoscope,
    title: '24/7 Emergency & Casualty Department',
    subtitle: 'Rapid, Life-Saving Care',
    badge: 'Emergency',
    sections: [
      {
        paragraphs: [
          'During a medical emergency, every single second counts. Our highly responsive Emergency and Casualty Department is designed to provide immediate, structured, and life-saving medical attention round the clock.',
          'Operating a comprehensive 30-bed facility, our department ensures that patients receive rapid assessment and the highest standard of urgent care the moment they arrive.',
        ],
      },
      {
        heading: 'Structured Patient Care & Triage System',
        paragraphs: [
          'To ensure that care is delivered efficiently and prioritized based on medical necessity, our department is divided into specialized zones:',
        ],
        list: [
          'Dedicated Triage Area (6 Beds): Upon arrival, patients are quickly and accurately categorized based on the severity of their condition to ensure priority treatment for high-risk cases.',
          'Main Emergency Ward (24 Beds): A fully equipped general emergency area featuring continuous monitoring.',
          'Exclusive Critical Care Beds (2 Beds): Reserved specifically for highly critical patients, these beds are fully equipped with ventilators, defibrillators, fully stocked crash carts, and all essential emergency medications.',
        ],
      },
      {
        heading: 'Advanced Medical Infrastructure & Equipment',
        paragraphs: [
          'Our emergency ward is backed by state-of-the-art medical technology to handle any crisis. Our advanced infrastructure includes:',
        ],
        list: [
          'Uninterrupted Utilities: Central oxygen supply and central suction facilities available at every bed.',
          'Real-Time Monitoring: Advanced patient monitors, pulse oximeters, and glucometers for continuous vital tracking.',
          'Precision Delivery: High-quality infusion pumps for the accurate administration of emergency fluids and medications.',
          'Exclusive On-Site Diagnostics: A dedicated Arterial Blood Gas (ABG) machine located directly within the emergency department for instant, critical blood gas analysis without waiting for lab results.',
        ],
      },
      {
        heading: 'Expert Round-the-Clock Medical Team',
        paragraphs: [
          'Emergencies don\'t wait, and neither do we. Our casualty department is fully staffed 24 hours a day, 7 days a week to handle any medical crisis. Our shifts are meticulously managed by:',
        ],
        list: [
          'Experienced Casualty Medical Officers (CMOs) on duty at all times.',
          'Specialized on-call doctors for expert medical intervention.',
          'Rigorously trained emergency care nurses.',
          'Dedicated ward boys and support staff (Ayas) ensure smooth, compassionate, and continuous patient care.',
        ],
      },
    ],
  },
  {
    key: 'picu',
    slug: 'picu-nicu',
    icon: Baby,
    title: 'Advanced PICU & NICU',
    subtitle: 'Specialized Critical Care for Children and Newborns',
    badge: 'PICU & NICU',
    sections: [
      {
        paragraphs: [
          'When your child needs urgent medical attention, expert care and advanced technology make all the difference. Our specialized Paediatric Intensive Care Unit (PICU) and Neonatal Intensive Care Unit (NICU) are designed to provide highly vigilant, compassionate, and life-saving care for infants, children, and critically ill newborns.',
        ],
      },
      {
        heading: 'Paediatric Intensive Care Unit (PICU)',
        paragraphs: [
          'Our 6-bed PICU is fully equipped to deliver rapid, intensive medical support for sick babies and children. To ensure your child receives the safest and most effective care, our unit features:',
        ],
        list: [
          'Advanced Life-Support Equipment: State-of-the-art monitors, defibrillators, and ventilators tailored for paediatric patients.',
          'Specialized Infrastructure: Centralized suction systems and precision infusion pumps for accurate fluid and medication delivery.',
          'Fully Stocked Emergency Ward: Immediate access to all necessary emergency paediatric medications.',
          'Round-the-Clock Expert Care: Manned 24/7 by skilled paediatric nurses and an on-call senior resident doctor, ensuring that expert help is always available at a moment\'s notice.',
        ],
      },
      {
        heading: 'State-of-the-Art Neonatal Intensive Care Unit (NICU)',
        paragraphs: [
          'For our smallest and most vulnerable patients, we offer a highly advanced 21-bed NICU. To maintain the highest standards of infection control and specialized care, the NICU is strategically divided into two dedicated sections: one for babies born within our hospital (in-born) and another for babies transferred from outside facilities (out-born).',
          'Our comprehensive neonatal critical care facilities include:',
        ],
        list: [
          'Advanced Neonatal Life Support: Equipped with modern ventilators and Bubble CPAP machines to assist newborns with breathing difficulties.',
          'Critical Patient Monitoring: High-precision monitors and infusion pumps designed specifically for the delicate management of neonates.',
          'Essential Diagnostics & Utilities: Centralized oxygen and suction systems at every bed, along with a dedicated Bilirubinometer for instantly checking newborn jaundice (bilirubin levels).',
          '24/7 Multidisciplinary Team: Your newborn is constantly monitored by a dedicated, round-the-clock team of senior and junior residents, trained neonatal nurses, and specialized technicians.',
        ],
      },
      {
        paragraphs: [
          'We are committed to providing a safe, nurturing, and medically advanced environment to give your child the best possible start in life.',
        ],
      },
    ],
  },
  {
    key: 'blood',
    slug: 'blood-bank',
    icon: Droplet,
    title: 'Advanced Blood Bank & Component Unit',
    subtitle: 'Safe, Reliable, and Accessible',
    badge: 'Blood Bank',
    sections: [
      {
        paragraphs: [
          'At KMC Medical College & Hospital, we operate a fully equipped, modern, and licensed Blood Bank and Component Unit. Upgraded with the latest technical facilities and holding a trusted license for over 8 years, we are proud to be one of the few blood banks in North India consistently providing high-quality blood components to patients since May 2017.',
        ],
      },
      {
        heading: 'Community-Centric Care & Subsidized Services',
        paragraphs: [
          'We believe that life-saving blood should be accessible to everyone. Our mission is to support patients in critical need, particularly those from lower socioeconomic backgrounds.',
        ],
        list: [
          'Highly Affordable Rates: We provide blood and its components at deeply subsidized rates—often much lower than those of government blood banks in Uttar Pradesh.',
          'No-Replacement Policy for Surplus: For surplus components like Fresh Frozen Plasma (FFP), we provide them to patients without requiring a replacement donor.',
          'Zero Shortages: Thanks to our relentless efforts in organizing regular blood donation camps, symposiums, and mass outreach programs, our hospital maintains a continuous and stable blood supply.',
        ],
      },
      {
        heading: 'Licensed Apheresis Unit: Specialized Plasma & Platelet Donation',
        paragraphs: [
          'In addition to traditional blood collection, our facility features a fully licensed Apheresis Unit. Apheresis is an advanced donation process that allows us to collect specific blood components—such as just plasma or just platelets—while safely returning your red blood cells to your body.',
        ],
      },
      {
        heading: 'Why Choose Apheresis Donation?',
        list: [
          'Higher Yield, Greater Impact: A single apheresis session provides a much higher volume of concentrated plasma or platelets compared to a standard whole blood donation, allowing you to help more patients.',
          'Safe and Comfortable: The process takes just 45 to 60 minutes. You can relax, read, or watch TV during your donation. For your absolute safety, every set of tubing is 100% sterile, used only once, and immediately disposed of.',
          'Donate More Frequently: Because your red blood cells are returned to you, your body recovers much faster. This means you can safely donate platelets or plasma every 2 to 3 weeks, rather than waiting the standard 12 weeks required for whole blood donation.',
        ],
      },
      {
        paragraphs: [
          'Whether you are a patient in need of critical blood components or a generous donor looking to save lives, the KMC Blood Bank is equipped to serve you with the highest medical standards.',
        ],
      },
    ],
  },
];

export const serviceByKey: Record<string, HospitalServiceData> = {};
export const serviceBySlug: Record<string, HospitalServiceData> = {};

hospitalServices.forEach((s) => {
  serviceByKey[s.key] = s;
  serviceBySlug[s.slug] = s;
});
