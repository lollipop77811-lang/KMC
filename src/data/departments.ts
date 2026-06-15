import {
  LucideIcon, Microscope, FlaskRound, BookOpen, Library, Monitor,
  Heart, HeartPulse, Activity, Dna, Syringe, Shield, Stethoscope,
  Globe, Users, Search, Scale, Bug, Lightbulb, Pill, Droplets,
  Thermometer, Bone, Scissors, Baby, Eye, Ear, Tooth, Sparkles,
  Ambulance, Brain, UserCheck, Scan, User,
} from 'lucide-react';

export interface Highlight {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface DepartmentData {
  key: string;
  slug: string;
  badge: string;
  title: string;
  subtitle: string;
  sectionHeading: string;
  sectionSubDesc?: string;
  introParagraphs: string[];
  hasGallery: boolean;
  galleryImages?: string[];
  highlights: Highlight[];
}

export const departments: DepartmentData[] = [
  {
    key: 'anatomy',
    slug: 'anatomy',
    badge: 'Pre-Clinical',
    title: 'Department of Anatomy',
    subtitle: 'Infrastructure & Facilities',
    sectionHeading: 'Our State-of-the-Art Infrastructure Includes',
    introParagraphs: [
      'The Department of Anatomy is built with world-class infrastructure to provide medical students with a deeply engaging, hands-on learning experience. To facilitate advanced medical training, the department is systematically divided into specialized learning zones, all fully integrated with modern teaching materials and high-end audio-visual aids.',
    ],
    hasGallery: true,
    galleryImages: [
      '/pre%20clinical/anatomy/Anotomy1.jpg.webp',
      '/pre%20clinical/anatomy/Anotomy2.jpg.webp',
      '/pre%20clinical/anatomy/Anotomy3.jpg.webp',
    ],
    highlights: [
      { icon: Microscope, title: 'Spacious Dissection Hall', desc: 'A well-ventilated, advanced facility designed for practical training and detailed cadaveric dissection.' },
      { icon: FlaskRound, title: 'Modern Histology Laboratory', desc: 'Fully equipped with high-resolution microscopes, an extensive collection of histology slides, and detailed color charts for microscopic study.' },
      { icon: BookOpen, title: 'Anatomy Museum', desc: 'An immersive learning hub featuring a rich collection of wet specimens, anatomical models, descriptive charts, X-ray view boxes, and articulated skeletons.' },
      { icon: Library, title: 'Departmental Library & Research Lab', desc: 'Dedicated spaces stocked with reference books, journals, and modern resources to foster academic research and deeper study.' },
      { icon: Monitor, title: 'Seminar & Demonstration Rooms', desc: 'Interactive learning spaces tailored for group discussions, peer-to-peer learning, and multimedia presentations.' },
    ],
  },
  {
    key: 'physiology',
    slug: 'physiology',
    badge: 'Pre-Clinical',
    title: 'Department of Physiology',
    subtitle: 'Understanding Human Body Functions',
    sectionHeading: 'Our State-of-the-Art Physiology Laboratories',
    sectionSubDesc: 'To bridge the gap between theoretical knowledge and practical expertise, the department features five specialized, ultra-modern laboratories. Each lab is fully integrated with advanced audio-visual aids and sophisticated diagnostic instruments for experimental learning.',
    introParagraphs: [
      'The Department of Physiology at KMC Medical College & Hospital provides an in-depth understanding of the vital functions and intricate mechanisms of the human body. We believe that Physiology is the scientific bedrock of medicine; it bridges the gap between basic anatomical structures and complex clinical practice.',
      'Our department is equipped with cutting-edge infrastructure, featuring state-of-the-art laboratories and modern teaching aids designed to provide an immersive, hands-on learning experience for every student.',
    ],
    hasGallery: true,
    galleryImages: [
      '/pre%20clinical/physiology/Physiology1.jpg.webp',
      '/pre%20clinical/physiology/Physiology2.jpg.webp',
      '/pre%20clinical/physiology/Physiology3.jpg.webp',
    ],
    highlights: [
      { icon: Heart, title: 'Hematology Lab', desc: 'Dedicated to the comprehensive study of blood and its components. This facility features high-resolution modern microscopes and advanced cell-analysis instruments.' },
      { icon: FlaskRound, title: 'Amphibian Lab', desc: 'Designed to demonstrate muscle contractions, nerve pathways, and physiological responses using modern kymographs and experimental setups.' },
      { icon: HeartPulse, title: 'Mammalian Lab', desc: 'Tailored for both undergraduate and postgraduate medical students. It features high-speed kymographs and isolated organ baths to analyze organ functions using animal tissue models (rats/rabbits).' },
      { icon: Activity, title: 'Clinical Physiology Lab', desc: 'A hands-on training hub for monitoring vital human systems. It is fully operational with diagnostic tools including ECG machines, B.M.R. instruments, spirometers, and bicycle ergometers.' },
      { icon: Microscope, title: 'Advanced Research Lab', desc: 'Built to foster medical innovation and extensive research work. The facility is backed by high-end technology, including Single and multi-channel physiographs, Polyright systems and gas analyzers, Incubators, pH meters, calorimeters, and specialized instruments for recording passive movements.' },
    ],
  },
  {
    key: 'biochemistry',
    slug: 'biochemistry',
    badge: 'Pre-Clinical',
    title: 'Department of Biochemistry',
    subtitle: 'Exploring the Molecular Basis of Medicine',
    sectionHeading: 'Why Our Biochemistry Program Stands Out',
    introParagraphs: [
      'The Department of Biochemistry is dedicated to advancing the understanding of chemical structures and biomolecular processes that govern human health and disease. Alongside Anatomy and Physiology, Biochemistry forms the absolute cornerstone of basic medical sciences, offering students a deep dive into the chemical transformations within the human body.',
      'Our academic curriculum focuses heavily on the structural and functional aspects of cellular components and bio-molecules, seamlessly integrating this theoretical knowledge into real-world clinical scenarios.',
    ],
    hasGallery: true,
    galleryImages: [
      '/pre%20clinical/biochemistry/bio1.jpg.webp',
      '/pre%20clinical/biochemistry/bio2.jpg.webp',
      '/pre%20clinical/biochemistry/bio3.jpg.webp',
    ],
    highlights: [
      { icon: FlaskRound, title: 'Integrated Clinical Learning', desc: 'To build a strong diagnostic foundation, we bridge the gap between classroom concepts and medical practice. The department regularly invites experienced clinicians to discuss real-world case scenarios, highlighting how biochemical mechanisms directly influence the root cause and progression of diseases.' },
      { icon: Microscope, title: '24/7 Advanced Diagnostic Laboratory', desc: 'Our specialized Biochemistry wing inside the Central Diagnostic Laboratory functions round-the-clock (24/7). It is fully backed by modern diagnostic infrastructure, cutting-edge automated analyzers, and highly skilled laboratory personnel committed to delivering precise, high-quality patient care.' },
      { icon: Dna, title: 'In-Depth Biomolecular Insights', desc: 'We empower medical students to decode complex biochemical interactions, helping them understand how cellular health translates into overall human wellness.' },
    ],
  },
  {
    key: 'microbiology',
    slug: 'microbiology',
    badge: 'Para-Clinical',
    title: 'Department of Microbiology',
    subtitle: 'Advancing Infectious Disease Research & Diagnostics',
    sectionHeading: 'Key Highlights of Our Microbiology Program',
    introParagraphs: [
      'The Department of Microbiology is deeply committed to educating and training medical students in systematic microbiology, encompassing Bacteriology, Virology, Mycology, Parasitology, and Immunology. As a rapidly advancing field, microbiology plays an irreplaceable role in diagnosing infectious diseases, managing hospital infection control, and spearheading biomedical research.',
      'Infrastructure-wise, our department is fully equipped with state-of-the-art diagnostic and research facilities, including a Modern Bacteriology Lab, Advanced Serology and Immunology Lab, Mycobacteriology (TB) Lab, Mycology and Parasitology Labs, and a high-tech Research Lab & Animal House facility.',
    ],
    hasGallery: true,
    galleryImages: [
      '/para%20clinical/micro%20biology/Micro1.jpg.webp',
      '/para%20clinical/micro%20biology/micro2.jpg.webp',
      '/para%20clinical/micro%20biology/micro3.jpg.webp',
    ],
    highlights: [
      { icon: Shield, title: 'Infection Control & Bio-Waste Management', desc: 'The department stands at the forefront of hospital safety, emphasizing critical protocols for infection control and healthcare waste management to ensure a secure medical environment.' },
      { icon: Bug, title: 'Core Focus on Infectious Diseases', desc: 'Students dive deep into the world of pathogens, learning how infectious diseases originate, transmit, and the definitive clinical protocols required to treat them effectively.' },
      { icon: Lightbulb, title: 'Innovative, Problem-Based Training', desc: 'Moving away from traditional rote learning, we utilize engaging, interactive teaching methodologies—such as clinical role-playing, model-making, and case-based discussions—to enhance practical problem-solving skills.' },
      { icon: Microscope, title: 'A Hub for Testing, Teaching, and Research', desc: 'Our facility seamlessly balances three major responsibilities: high-accuracy clinical testing for patients, top-tier medical education for students, and cutting-edge research in microbial sciences.' },
    ],
  },
  {
    key: 'pharmacology',
    slug: 'pharmacology',
    badge: 'Para-Clinical',
    title: 'Department of Pharmacology',
    subtitle: 'Mastering Rational Drug Therapy & Safety',
    sectionHeading: 'Key Facets of Our Pharmacology Program',
    introParagraphs: [
      'The Department of Pharmacology at KMC is dedicated to training future doctors in the principles of rational, safe, and effective drug therapy. Students gain a comprehensive understanding of how drugs interact with the human body—from pharmacokinetics and pharmacodynamics to clinical therapeutics and patient safety.',
      'Our curriculum is designed to produce competent medical professionals who can make informed clinical decisions, prescribe medications responsibly, and adapt to rapidly advancing pharmacotherapeutic landscapes.',
    ],
    hasGallery: true,
    galleryImages: [
      '/para%20clinical/pharmacology/Pharmacology1.jpg.webp',
      '/para%20clinical/pharmacology/Pharmacology2.jpg.webp',
      '/para%20clinical/pharmacology/Pharmacology3.jpg.webp',
    ],
    highlights: [
      { icon: Stethoscope, title: 'Comprehensive Clinical Therapeutics', desc: 'We empower future healthcare professionals with deep insights into the clinical use of drugs across various diseases. Students gain expert knowledge in drafting accurate prescriptions, managing treatment regimens, and understanding drug mechanisms.' },
      { icon: Shield, title: 'Adverse Drug Reactions (ADR) & Complications', desc: 'Our curriculum places high emphasis on patient safety, teaching students how to anticipate, identify, and mitigate potential drug complications, side effects, and adverse interactions.' },
      { icon: Activity, title: 'Dedicated Pharmacovigilance Centre', desc: 'The department features a specialized, fully operational Pharmacovigilance Centre. This wing is actively involved in clinical auditing and research projects dedicated to monitoring drug safety, tracking adverse drug reactions, and improving overall patient care standards.' },
    ],
  },
  {
    key: 'pathology',
    slug: 'pathology',
    badge: 'Para-Clinical',
    title: 'Department of Pathology',
    subtitle: 'Excellence in Teaching & Advanced Diagnostics',
    sectionHeading: 'Comprehensive Diagnostic Services & Sub-Specialties',
    sectionSubDesc: 'To provide accurate and timely medical reports for the teaching hospital, our advanced diagnostic wing is divided into specialized sections.',
    introParagraphs: [
      'The Department of Pathology at KMC Medical College & Hospital is the interface between basic medical science and clinical practice. As the backbone of accurate disease diagnosis, pathology plays an indispensable role in modern medicine—providing clarity on disease mechanisms through the study of cells, tissues, and bodily fluids.',
      'Our distinguished department combines state-of-the-art diagnostic facilities with a robust academic curriculum. Through hands-on training and real-world lab exposure, we empower medical students with the clinical expertise they need to bridge the gap between symptoms and scientific evidence.',
    ],
    hasGallery: true,
    galleryImages: [
      '/para%20clinical/pathology/pathology1.jpg.webp',
      '/para%20clinical/pathology/pathology2.jpg.webp',
      '/para%20clinical/pathology/pathology3.jpg.webp',
    ],
    highlights: [
      { icon: Search, title: 'Histopathology & Histochemistry', desc: 'Detailed microscopic examination of tissue biopsies to diagnose complex diseases and malignancies.' },
      { icon: FlaskRound, title: 'Cytology', desc: 'Specialized cytopathology services, including Fine Needle Aspiration Cytology (FNAC) and Pap smears, for early cancer detection and cellular analysis.' },
      { icon: Droplets, title: 'Advanced Hematology', desc: 'Comprehensive blood disorders investigation, leveraging automated cell counters and expert peripheral blood smear evaluations.' },
      { icon: Shield, title: 'Immunopathology', desc: 'High-precision testing utilizing immunological techniques to diagnose autoimmune disorders and complex tissue conditions.' },
      { icon: Thermometer, title: 'Blood Bank Facilities', desc: 'A fully operational, modern blood bank handling safe blood collection, component separation, screening, and transfusion services.' },
    ],
  },
  {
    key: 'forensic',
    slug: 'forensic',
    badge: 'Para-Clinical',
    title: 'Department of Forensic Medicine & Toxicology',
    subtitle: 'Bridging Medicine and Justice',
    sectionHeading: 'Key Features of Our Forensic Department',
    introParagraphs: [
      'The Department of Forensic Medicine & Toxicology at KMC Medical College & Hospital is dedicated to imparting world-class education in the legal and ethical dimensions of medical practice. This unique branch bridges the critical gap between the medical sciences and the legal justice system.',
      'Through comprehensive teaching, practical demonstrations, and continuous research, the department trains students to become competent medical professionals skilled in medico-legal investigations, autopsy procedures, and forensic analysis.',
    ],
    hasGallery: true,
    galleryImages: [
      '/para%20clinical/forensic%20medicine/Forensic1.jpg.webp',
      '/para%20clinical/forensic%20medicine/Forensic2.jpg.webp',
      '/para%20clinical/forensic%20medicine/Forensic3.jpg.webp',
    ],
    highlights: [
      { icon: Search, title: 'Advanced Forensic Museum', desc: 'The department houses a highly specialized museum featuring an extensive collection of wet specimens, detailed forensic charts, weapon models, and case study photographs designed for interactive learning.' },
      { icon: Scale, title: 'Medico-Legal Expertise', desc: 'We train students to meticulously examine medical evidence, draft flawless legal-medical reports, and understand the duties of a medical practitioner in a court of law.' },
      { icon: BookOpen, title: 'Bioethics & Medical Laws', desc: 'Beyond diagnostics, our curriculum deeply introduces students to medical ethics, patient rights, malpractice regulations, and the legal responsibilities of the healthcare profession.' },
    ],
  },
  {
    key: 'community',
    slug: 'community',
    badge: 'Para-Clinical',
    title: 'Department of Community Medicine',
    subtitle: 'Public Health & Preventive Care',
    sectionHeading: 'Key Initiatives & Community Impact',
    introParagraphs: [
      'The Department of Community Medicine is highly regarded for its value-based medical education and its impactful contributions to public health across all strata of society. Through an integrated approach of hands-on teaching, clinical training, community service, and field research, the department plays a pivotal role in developing empathetic, empowered physicians of first contact.',
      'Our core mission is to elevate the standards of medical training by focusing on a holistic healthcare model. This encompasses the four essential pillars of medicine: Promotive, Preventive, Curative, and Rehabilitative healthcare.',
    ],
    hasGallery: true,
    galleryImages: [
      '/para%20clinical/community%20medicine/Community1.jpg.webp',
      '/para%20clinical/community%20medicine/Community2.jpg.webp',
      '/para%20clinical/community%20medicine/Community3.jpg.webp',
    ],
    highlights: [
      { icon: Globe, title: 'National Health Programmes', desc: 'The department actively coordinates, implements, and monitors various healthcare activities aligned with National Health Programmes to combat infectious and lifestyle diseases.' },
      { icon: Heart, title: 'On-Field Health Camps', desc: 'Regular rural and urban health camps, along with community awareness drives, provide medical students with real-world exposure to preventive medicine and rural healthcare dynamics.' },
      { icon: Users, title: 'Specialized Community Services', desc: 'We are deeply involved in delivering targeted healthcare services at the grassroots level, focusing on critical areas such as Maternal and Child Health (MCH), Geriatric Care, Non-Communicable Diseases (NCDs) screening, and Eco-friendly Biomedical Waste Management protocols.' },
      { icon: Microscope, title: 'Public Health Research', desc: 'Fostering an environment of research that helps students analyze epidemiological data and understand the socio-economic determinants of health.' },
    ],
  },
  {
    key: 'generalMed',
    slug: 'general-medicine',
    badge: 'Clinical',
    title: 'Department of General Medicine',
    subtitle: 'Comprehensive Adult Healthcare & Medical Education',
    sectionHeading: 'Our Clinical Excellence & Educational Innovation',
    introParagraphs: [
      'The Department of General Medicine at KMC Medical College & Hospital is considered the cornerstone of clinical medical education. As the first point of contact for most adult patients, this department handles a vast and diverse spectrum of illnesses, focusing on the prevention, diagnosis, and non-surgical treatment of adult diseases.',
      'Our department is committed to delivering holistic, evidence-based, and compassionate patient care. As a premier teaching unit, we also play a transformational role in shaping the next generation of physicians through a unique, low student-to-teacher ratio training model and rigorous academic mentorship.',
    ],
    hasGallery: true,
    galleryImages: [
      '/clinical/general%20medicine/genmed1.jpg.webp',
      '/clinical/general%20medicine/genmed2.jpg.webp',
      '/clinical/general%20medicine/genmed3.jpg.webp',
    ],
    highlights: [
      { icon: HeartPulse, title: 'Comprehensive Patient Care & Clinical Services', desc: 'Our department delivers round-the-clock medical excellence through a robust network of outpatient (OPD) and inpatient (IPD) services. We specialize in managing a wide spectrum of acute and chronic adult illnesses, including advanced care for lifestyle disorders such as Diabetes, Hypertension, and Metabolic Syndromes, expert treatment for Asthma, COPD, and other pulmonary conditions, and comprehensive, multi-disciplinary critical care support for our Intensive Care Units (ICUs).' },
      { icon: Users, title: 'Academic Excellence & Micro-Teaching Innovation', desc: 'We maintain a low student-to-teacher ratio by allotting dedicated faculty members to small batches of students, guaranteeing personalized attention, deeper student-teacher interaction, and enhanced clinical skill development. Thanks to our innovative training modules and globally aligned curriculum, the department proudly attracts a steady influx of foreign exchange students every year.' },
      { icon: Globe, title: 'Community Outreach & Preventive Health', desc: 'Healthcare at KMC extends far beyond the hospital walls. We are deeply committed to social welfare through regular Community Health Camps offering free screenings, early detection, and awareness programs for prevalent health issues like Diabetes and Hypertension, bringing quality healthcare directly to the rural and underserved populations of Uttar Pradesh.' },
    ],
  },
  {
    key: 'dermatology',
    slug: 'dermatology',
    badge: 'Clinical',
    title: 'Department of Dermatology & Venereal Disease',
    subtitle: 'Excellence in Skin, Hair & Cosmetic Care',
    sectionHeading: 'Our Clinical Services & Specialized Treatments',
    introParagraphs: [
      'The Department of Dermatology and Venereal Disease at KMC Medical College & Hospital is a center of excellence dedicated to the comprehensive care of skin, hair, nails, and mucous membranes. Combining medical expertise with advanced surgical interventions, our department provides world-class treatment for a wide spectrum of dermatological conditions, venereal diseases (STDs), and leprosy.',
    ],
    hasGallery: false,
    highlights: [
      { icon: Microscope, title: 'Advanced Clinical Care & Specialized Treatments', desc: 'Our department goes beyond routine skin care to offer state-of-the-art diagnostic and therapeutic solutions. Our clinical focus includes expert diagnosis and management of routine and chronic skin disorders like psoriasis, eczema, acne, and vitiligo, specialized confidential screening and advanced treatment for Sexually Transmitted Diseases (STDs), comprehensive management of Leprosy cases, and round-the-clock medical care for both OPD patients and severe dermatological emergencies requiring hospitalization.' },
      { icon: Sparkles, title: 'Cosmetic Dermatology & Dermatosurgery Clinic', desc: 'To meet the growing demand for aesthetic and corrective procedures, the department features a specialized clinic supervised by highly trained senior consultants. We offer micrographic surgery, scar revisions, cyst removals, nail surgeries, and advanced therapies for anti-aging, skin rejuvenation, hair loss treatments, chemical peels, and laser-assisted procedures.' },
      { icon: Shield, title: 'Why Choose KMC Dermatology?', desc: 'Our team is driven by senior specialists with extensive experience in clinical, surgical, and cosmetic dermatology. We are equipped with contemporary diagnostic tools and therapeutic lasers to ensure precision and safety, following a patient-centric model focused on restoring both skin health and patient confidence.' },
    ],
  },
  {
    key: 'psychiatry',
    slug: 'psychiatry',
    badge: 'Clinical',
    title: 'Department of Psychiatry',
    subtitle: 'Promoting Mental Health & Emotional Well-being',
    sectionHeading: 'Our Mental Health Services & Community Initiatives',
    introParagraphs: [
      'The Department of Psychiatry at KMC Medical College & Hospital is dedicated to advancing mental health awareness and providing high-quality, compassionate care to individuals and families impacted by psychiatric and psychological disorders. We are deeply committed to destigmatizing mental illness and promoting a holistic approach to well-being in our community and beyond.',
      'To achieve mental wellness across all age groups, our department offers integrated clinical psychiatry services, evidence-based therapeutic interventions, and a multi-disciplinary treatment framework tailored to each patient\'s unique needs.',
    ],
    hasGallery: false,
    highlights: [
      { icon: Brain, title: 'Comprehensive Mental Health Services', desc: 'We offer integrated clinical services designed to support individuals facing mental health challenges. Our expertise spans expert evaluation and treatment for conditions such as depression, anxiety, bipolar disorder, schizophrenia, and stress-related disorders, personalized counseling and psychotherapy sessions tailored to help individuals cope with emotional distress, trauma, and life transitions, and specialized mental well-being initiatives for all age groups including child and adolescent psychiatry, adult mental healthcare, and geriatric psychiatric support.' },
      { icon: Heart, title: 'Holistic Well-being & Community Awareness', desc: 'At KMC, we believe that mental health is just as important as physical health. The department actively works towards breaking the societal stigma surrounding mental illness through promotive mental health initiatives, organizing workshops, awareness campaigns, and counseling seminars to foster a supportive environment for mental health.' },
      { icon: Shield, title: 'De-addiction & Crisis Intervention', desc: 'We provide structured intervention programs to help individuals overcome substance abuse and behavioral addictions, along with offering immediate, empathetic psychological support for patients undergoing acute emotional crises.' },
    ],
  },
  {
    key: 'pediatrics',
    slug: 'pediatrics',
    badge: 'Clinical',
    title: 'Department of Pediatrics',
    subtitle: 'Specialized Care for Infants, Children & Adolescents',
    sectionHeading: 'Our Pediatric Services & Specialized Facilities',
    introParagraphs: [
      'The Department of Pediatrics at KMC Medical College & Hospital is dedicated to providing comprehensive medical care for infants, children, and adolescents up to 12 years of age. As the cornerstone of family health, our pediatric team is committed to ensuring the healthy growth, development, and well-being of every child through state-of-the-art clinical care and compassionate support.',
    ],
    hasGallery: true,
    galleryImages: [
      '/clinical/pediatrics/Padeatrics1.jpg.webp',
      '/clinical/pediatrics/Padeatrics2.jpg.webp',
      '/clinical/pediatrics/Padeatrics3.jpg.webp',
    ],
    highlights: [
      { icon: Baby, title: 'Critical Care & Advanced Neonatal Infrastructure', desc: 'We specialize in managing high-risk and critical pediatric cases with precision and utmost care. Our Neonatal Intensive Care Unit (NICU) is a highly specialized, advanced facility dedicated to the care of premature newborns, low-birth-weight babies, and infants requiring critical medical intervention. Our Pediatric Intensive Care Unit (PICU) is a fully equipped, continuous-monitoring unit designed to provide life-saving care to older children and adolescents facing acute or life-threatening illnesses.' },
      { icon: Users, title: 'Interdisciplinary Healthcare Approach', desc: 'To provide holistic treatment, the Pediatrics department works in close collaboration with various specialized clinical and diagnostic branches of the hospital. This includes working hand-in-hand with Neurology and Physiotherapy for developmental delays and neurological disorders, and robust integration with Biochemistry, Pathology, and Microbiology labs for rapid, accurate diagnosis and targeted treatment plans.' },
      { icon: Activity, title: 'Comprehensive Pediatric Services', desc: 'We provide routine child healthcare including immunization and vaccination drives, growth and development monitoring, and nutritional counseling. Our services also cover infectious disease management for common and seasonal childhood illnesses, respiratory infections, and gastric disorders, along with 24/7 emergency support for trauma, poisoning, acute asthma attacks, and pediatric seizures.' },
    ],
  },
  {
    key: 'generalSurg',
    slug: 'general-surgery',
    badge: 'Clinical',
    title: 'Department of General Surgery',
    subtitle: 'Surgical Excellence & Innovative Medical Training',
    sectionHeading: 'Our Surgical Services & Training Excellence',
    introParagraphs: [
      'The Department of General Surgery at KMC Medical College & Hospital is a premier center for surgical care, education, and innovation. General Surgery occupies a pivotal position in the medical field, encompassing the diagnosis, preoperative, operative, and postoperative management of a broad spectrum of abdominal, endocrine, vascular, and soft tissue diseases.',
      'Our approach is rooted in precision, compassion, and academic rigor — ensuring that our patients receive the best possible outcomes and our students get world-class surgical training.',
    ],
    hasGallery: true,
    galleryImages: [
      '/clinical/general%20surgery/gensur1.jpg.webp',
      '/clinical/general%20surgery/gensur2.jpg.webp',
      '/clinical/general%20surgery/gensur3.jpg.webp',
    ],
    highlights: [
      { icon: HeartPulse, title: 'Round-the-Clock Emergency & Planned Surgical Care', desc: 'Our surgical team is dedicated to providing precise, evidence-based interventions for both routine and complex medical conditions. The department offers 24/7 emergency room coverage alongside meticulously planned elective surgeries, including advanced Hepato-Pancreato-Biliary (HPB) surgery for complex conditions affecting the pancreas, liver, and bile duct, trauma and emergency surgery for acute abdominal pain and severe trauma, and seamless integration of thorough pre-operative evaluations with dedicated post-operative rehabilitation.' },
      { icon: Monitor, title: 'Innovative Medical Education & Live OT Learning', desc: 'At KMC, we leverage modern technology to provide world-class training to the next generation of surgeons. A standout feature of our academic program is the specialized audio-visual observation room where students can observe live, real-time major and minor surgical procedures in a controlled environment, gaining invaluable clinical insights without compromising the sterile field of the Operation Theatre.' },
    ],
  },
  {
    key: 'ortho',
    slug: 'orthopedics',
    badge: 'Clinical',
    title: 'Department of Orthopedics',
    subtitle: 'Restoring Mobility & Enhancing Quality of Life',
    sectionHeading: 'Our Orthopedic Services & Specialized Treatments',
    introParagraphs: [
      'The Department of Orthopedics at KMC Medical College & Hospital is a center of excellence dedicated to the diagnosis, treatment, and rehabilitation of disorders affecting the musculoskeletal system. From acute fractures to chronic degenerative conditions, our expert team integrates advanced surgical precision with compassionate patient care.',
      'Our department is committed to restoring mobility and improving the quality of life for every patient. Equipped with state-of-the-art modular operation theatres and cutting-edge orthopedic instrumentation, we deliver exceptional outcomes across a wide range of bone, joint, ligament, and muscular conditions.',
    ],
    hasGallery: true,
    galleryImages: [
      '/clinical/orthopaedic/ortho1.jpg.webp',
      '/clinical/orthopaedic/ortho2.jpg.webp',
      '/clinical/orthopaedic/ortho3.jpg.webp',
    ],
    highlights: [
      { icon: Activity, title: 'Precision Diagnosis & Comprehensive Care', desc: 'We believe that effective treatment begins with an accurate diagnosis. The department follows a rigorous protocol combining detailed physical assessments with advanced diagnostic imaging (X-rays, CT scans, and MRIs) to pinpoint the exact root of musculoskeletal issues.' },
      { icon: Bone, title: 'Specialized Treatment Spectrum', desc: 'Our orthopedic department is fully equipped to handle a wide array of bone, joint, ligament, and muscular conditions. This includes 24/7 emergency management for acute fractures, complex joint dislocations, and polytrauma injuries, advanced care for debilitating conditions like osteoarthritis, rheumatoid arthritis, osteoporosis, and chronic back pain, and expert treatment for sports-related injuries such as ligament tears (ACL/MCL), tendonitis, meniscus injuries, and muscle strain.' },
      { icon: Shield, title: 'Why Choose KMC Orthopedics?', desc: 'We offer patient-centric rehabilitation with post-surgical care integrated with our advanced physiotherapy wing to ensure faster recovery and long-term joint health. Our modern operation theatres are equipped with cutting-edge orthopedic instrumentation for joint replacements and arthroscopic procedures, all driven by senior consultants committed to delivering safe, evidence-based, and compassionate healthcare.' },
    ],
  },
  {
    key: 'ophthal',
    slug: 'ophthalmology',
    badge: 'Clinical',
    title: 'Department of Ophthalmology',
    subtitle: 'Preserving Vision, Transforming Lives',
    sectionHeading: 'Our Ophthalmology Services & Community Initiatives',
    introParagraphs: [
      'The Department of Ophthalmology at KMC Medical College & Hospital is dedicated to preserving vision and enhancing the quality of life for patients suffering from a full spectrum of eye disorders. As the window to both the world and systemic health, vision plays an irreplaceable role in human well-being, and our department is committed to protecting it with the highest standards of clinical care.',
      'Equipped with advanced diagnostic and surgical infrastructure, our department combines evidence-based medicine with state-of-the-art ophthalmic technology to provide comprehensive eye care to all segments of the community.',
    ],
    hasGallery: false,
    highlights: [
      { icon: Eye, title: 'Clinical Services & Advanced Surgical Care', desc: 'Our department is fully equipped to provide round-the-clock ophthalmic care, handling both routine eye problems and complex surgical interventions. We specialize in high-precision elective surgeries such as micro-incision cataract surgery (phacoemulsification), glaucoma management, and corrective eyelid procedures, along with 24/7 ocular emergency care for chemical burns, ocular trauma, foreign body removals, and sudden vision loss.' },
      { icon: Users, title: 'Academic Excellence & Paramedical Training', desc: 'As a premier teaching institution, the Department of Ophthalmology delivers rigorous academic and practical training to undergraduate medical students (MBBS) to build a strong foundation in clinical ophthalmology. We also conduct regular training programs for paramedical students and ophthalmic assistants, ensuring a skilled workforce for comprehensive eye care delivery.' },
      { icon: Heart, title: 'Community Outreach & Blindness Prevention', desc: 'Following our mission of accessible healthcare, we regularly organize Community Eye Camps in rural and underserved areas. These camps focus on free vision screenings and distribution of corrective glasses, identifying cataract cases and facilitating free or subsidized micro-surgeries, and spreading awareness about preventive eye health, diabetic eye diseases, and childhood blindness.' },
    ],
  },
  {
    key: 'ent',
    slug: 'ent',
    badge: 'Clinical',
    title: 'Department of Oto-Rhino-Laryngology (ENT)',
    subtitle: 'Comprehensive Ear, Nose & Throat Care',
    sectionHeading: 'Our ENT Services & Surgical Expertise',
    introParagraphs: [
      'The Department of Oto-Rhino-Laryngology (ENT) at KMC Medical College & Hospital is a premier center for the diagnosis and advanced treatment of Ear, Nose, and Throat diseases, as well as complex Head and Neck disorders. This specialized branch blends medical expertise with highly sophisticated surgical interventions to restore vital sensory and structural functions.',
      'Equipped with cutting-edge medical infrastructure, our department is dedicated to providing comprehensive care, ranging from routine clinical consultations to intricate life-saving surgeries.',
    ],
    hasGallery: true,
    galleryImages: [
      '/clinical/Oto%20Rhino%20Laryngology%20(ENT)/ent1.jpg.webp',
      '/clinical/Oto%20Rhino%20Laryngology%20(ENT)/ent2.jpg.webp',
      '/clinical/Oto%20Rhino%20Laryngology%20(ENT)/ent3.jpg.webp',
    ],
    highlights: [
      { icon: Ear, title: 'Advanced Surgical Spectrum & Modern Equipment', desc: 'Our ENT department boasts state-of-the-art diagnostic and operative technologies, enabling our skilled surgeons to perform a wide plethora of complex and minimally invasive surgical procedures. This includes micro ear surgeries for chronic ear infections and tympanic membrane perforations, hearing restoration surgeries such as stapedectomy and ossiculoplasty, endoscopic sinus and nose surgeries (FESS) for chronic sinusitis and nasal polyps, and complex head, neck and skull-base surgeries addressing tumors and structural abnormalities.' },
      { icon: Activity, title: 'Comprehensive Clinical Care', desc: 'We cater to a vast influx of outpatients and inpatients, providing empathetic and evidence-based care for everyday ailments as well as emergency conditions. Our services include 24/7 emergency support for foreign body removal from the ear, nose, or throat pathway and acute airway emergencies, specialized evaluation and therapy for voice and swallowing disorders including hoarseness and dysphagia, and comprehensive diagnostic assessments with surgical or non-surgical solutions for obstructive sleep apnea and snoring.' },
    ],
  },
  {
    key: 'obgy',
    slug: 'obgy',
    badge: 'Clinical',
    title: 'Department of Obstetrics & Gynaecology',
    subtitle: 'Comprehensive Women\'s Health & Maternity Care',
    sectionHeading: 'Our Women\'s Health Services & Clinical Excellence',
    introParagraphs: [
      'The Department of Obstetrics & Gynaecology (OB-GYN) at KMC Medical College & Hospital is a distinguished center dedicated to women\'s health through every stage of life. From adolescent gynecology and reproductive medicine to high-risk pregnancy care and menopausal health, our team provides exceptional clinical services with empathy and precision.',
      'Equipped with state-of-the-art infrastructure and round-the-clock In-House specialist coverage, our department ensures that every woman receives prompt, safe, and high-quality medical attention.',
    ],
    hasGallery: true,
    galleryImages: [
      '/clinical/obstetrics%20&%20gynaecology/gynee.jpg.webp',
      '/clinical/obstetrics%20&%20gynaecology/gynee1.jpg.webp',
      '/clinical/obstetrics%20&%20gynaecology/gynee2.jpg.webp',
    ],
    highlights: [
      { icon: Baby, title: 'Maternal Care & 24/7 Advanced Labor Infrastructure', desc: 'We provide a secure, nurturing, and medically advanced environment for expectant mothers to ensure safe deliveries and healthy outcomes. Our services include comprehensive routine check-ups coupled with specialized, focused protocols for managing high-risk pregnancies and maternal complications, state-of-the-art labor rooms manned 24/7 by a highly qualified team of obstetricians, skilled nurses, and paramedics.' },
      { icon: Activity, title: 'Comprehensive Gynaecological & Reproductive Services', desc: 'Our clinical expertise spans preventive, therapeutic, and advanced surgical interventions tailored to women\'s unique physiological needs. We offer cutting-edge solutions for infertility issues and perform minimally invasive laparoscopic surgeries for faster patient recovery, specialized clinical counseling and treatment for adolescent girls through post-menopausal health concerns.' },
      { icon: Heart, title: 'Academic Integrity & Empathetic Training', desc: 'At KMC, our educational philosophy goes beyond standard medical textbooks. The department is driven by two core academic objectives: inspiring medical graduates to practice obstetrics and gynaecology with absolute sincerity, clinical precision, and deep ethical grounding, and emphasizing a deeply empathetic approach to medical training.' },
    ],
  },
  {
    key: 'emergency',
    slug: 'emergency',
    badge: 'Clinical',
    title: 'Department of Emergency Medicine',
    subtitle: 'Immediate Care, Every Second Counts',
    sectionHeading: 'Our Emergency Services & Critical Care Capabilities',
    introParagraphs: [
      'The Department of Emergency Medicine at KMC Medical College & Hospital is at the frontline of critical healthcare, equipped and staffed to handle acute medical and surgical emergencies with speed, precision, and compassion. As the gateway to the hospital for countless critically ill and injured patients, our department serves as a vital lifeline to the community.',
      'Our team of dedicated emergency physicians, intensivists, and highly trained paramedical staff works around the clock to ensure that every patient receives timely, life-saving interventions in a well-organized and controlled emergency care environment.',
    ],
    hasGallery: true,
    galleryImages: [
      '/clinical/emergency%20medicine/emergency1.jpg.webp',
      '/clinical/emergency%20medicine/emergency2.jpg.webp',
      '/clinical/emergency%20medicine/emergency3.jpg.webp',
    ],
    highlights: [
      { icon: Ambulance, title: '24/7 Trauma & Acute Care Capabilities', desc: 'Our emergency department functions as a highly coordinated, responsive unit capable of handling a massive influx of critical medical and surgical emergencies. Our core clinical services include immediate resuscitation, triage, and stabilizing care for victims of road accidents, falls, and severe physical trauma, rapid intervention for life-threatening medical crises such as cardiac arrests, strokes, acute respiratory distress, and severe poisoning.' },
      { icon: Shield, title: 'State-of-the-Art Infrastructure & Multi-Disciplinary Support', desc: 'At KMC, the Emergency Medicine wing is backed by cutting-edge medical technology and a seamless network of super-specialty departments. This includes continuous integration with our ICUs, advanced imaging diagnostics, and a 24/7 operational blood bank for immediate transfusions.' },
      { icon: Activity, title: 'Global Academic & Research Orientation', desc: 'As a center of medical learning, the department is deeply committed to keeping pace with global advancements in trauma care. We actively encourage our faculty and students to engage with peer-reviewed research, global clinical protocols, and open-access medical journals to consistently elevate the standard of emergency healthcare globally.' },
    ],
  },
  {
    key: 'anaesth',
    slug: 'anaesthesiology',
    badge: 'Clinical',
    title: 'Department of Anaesthesiology',
    subtitle: 'Safe, Precise & Compassionate Perioperative Care',
    sectionHeading: 'Our Anesthesia Services & Clinical Expertise',
    introParagraphs: [
      'The Department of Anaesthesiology at KMC Medical College & Hospital is dedicated to providing safe, precise, and effective anesthesia care of the highest clinical standards. Anesthesiology is a critical cornerstone of modern medicine, ensuring patient comfort, pain relief, and vital life-support management before, during, and after surgical procedures.',
      'Our mission is to deliver timely, compassionate, and state-of-the-art perioperative care while training the next generation of medical leaders and driving clinical advancements in the field of anesthesia.',
    ],
    hasGallery: false,
    highlights: [
      { icon: Syringe, title: 'Comprehensive Clinical Services & Surgical Support', desc: 'The department provides complete, round-the-clock anesthesia and critical care support across the entire surgical spectrum of the hospital. Our key clinical areas include tailored sedation and anesthesia management for routine, elective, and high-risk complex surgeries across all surgical specialties, a thorough pre-operative assessment clinic to evaluate patient health and manage underlying medical risks, and advanced pain relief solutions catering to the acute recovery needs of post-operative patients as well as specialized therapies for chronic pain.' },
      { icon: Activity, title: 'Academic Excellence & Forward-Thinking Research', desc: 'As a premier teaching facility, the Department of Anaesthesiology focuses heavily on bridging the gap between clinical practice and academic research. We deliver rigorous hands-on clinical training, simulation-based learning, and academic modules to medical students and residents, while actively investigating new ideas, modern techniques, and safer drug protocols through structured research studies.' },
    ],
  },
  {
    key: 'radio',
    slug: 'radio-diagnosis',
    badge: 'Clinical',
    title: 'Department of Radio Diagnosis',
    subtitle: 'Precision Diagnostics, Patient-Centric Imaging',
    sectionHeading: 'Our Diagnostic Services & Advanced Imaging Capabilities',
    introParagraphs: [
      'The Department of Radio Diagnosis at KMC Medical College & Hospital is a premier diagnostic imaging center offering a comprehensive range of radiological services. Our expert team of radiologists and trained technicians is dedicated to delivering high-precision imaging results that form the bedrock of accurate clinical decision-making.',
    ],
    hasGallery: true,
    galleryImages: [
      '/clinical/radiodiagnosis/radio1.jpg.webp',
      '/clinical/radiodiagnosis/radio2.jpg.webp',
      '/clinical/radiodiagnosis/radio3.jpg.webp',
    ],
    highlights: [
      { icon: Heart, title: 'Patient-Centric Imaging Philosophy', desc: 'At KMC, we practice patient-centric imaging, which means we do not treat diagnostic scans as mere routine procedures. Before performing any requested investigation, our radiologists meticulously analyze each patient\'s clinical history and active symptoms. Every scan, ultrasound, or X-ray is customized according to the patient\'s specific complaints to ensure the highest diagnostic accuracy.' },
      { icon: Scan, title: 'Specialty Diagnostic Services', desc: 'Our department offers advanced diagnostic expertise and image-guided interventional procedures across a wide range of medical specialties. This includes high-resolution scans for neurologic and head-neck imaging of brain and spine disorders, detailed cardiovascular and abdominal imaging for evaluation of internal organs and blood vessels, specialized musculoskeletal and paediatric imaging for patients of all age groups, and dedicated women\'s imaging focusing on maternal and gynecological health.' },
      { icon: Monitor, title: 'State-of-the-Art Infrastructure', desc: 'To achieve the highest clinical standards and absolute diagnostic precision, the department is equipped with cutting-edge technologies including a 32-Slice Siemens CT Scanner for rapid and detailed cross-sectional imaging, specialized high-end Ultrasound and Colour Doppler machines for vascular studies, modern digital X-ray networks that reduce radiation exposure while delivering crisp image quality, and bedside ultrasound and X-ray machines for critical patients in ICUs and emergency wards.' },
    ],
  },
  {
    key: 'dentistry',
    slug: 'dentistry',
    badge: 'Clinical',
    title: 'Department of Dentistry',
    subtitle: 'Advanced Oral Healthcare & Maxillofacial Excellence',
    sectionHeading: 'Our Dental Services & Clinical Excellence',
    introParagraphs: [
      'The Department of Dentistry at KMC Medical College & Hospital is a premier center for advanced oral healthcare, dedicated to diagnosing, preventing, and treating a wide spectrum of dental and maxillofacial conditions. Combining clinical expertise with cutting-edge dental technology, our department delivers exceptional care to restore oral health, function, and aesthetics for patients of all ages.',
    ],
    hasGallery: false,
    highlights: [
      { icon: Monitor, title: 'State-of-the-Art Infrastructure & Technology', desc: 'Our department is equipped with a modern infrastructure designed to provide precise diagnostics and comfortable treatment experiences. Our advanced facilities include premium ergonomic dental chairs equipped with integrated modular systems for maximum patient comfort, high-resolution low-radiation digital X-ray units for immediate and accurate diagnostic evaluations, fully equipped in-house dental labs for streamlined fabrication of customized oral prosthetics, and the latest specialized dental tools and materials ensuring international standards of safety and hygiene.' },
      { icon: Activity, title: 'Comprehensive Clinical Services & Maxillofacial Surgeries', desc: 'From routine preventive care to complex reconstructive procedures, we offer an extensive range of specialized treatments. This includes expert management of common dental disorders including root canal treatments, advanced fillings, deep scaling, periodontal care, and crown or bridge placements, seamless execution of minor oral surgeries such as complex tooth extractions and impacted wisdom teeth removals, and advanced operative care for severe facial trauma, jaw fractures, congenital deformities, and oral tumors.' },
    ],
  },
  {
    key: 'physio',
    slug: 'physiotherapy',
    badge: 'Clinical',
    title: 'Department of Physiotherapy & Rehabilitation',
    subtitle: 'Restoring Mobility, Reclaiming Lives',
    sectionHeading: 'Our Rehabilitation Services & Therapeutic Techniques',
    introParagraphs: [
      'The Department of Physiotherapy & Rehabilitation at KMC Medical College & Hospital is dedicated to enhancing and restoring functional ability and quality of life to those with physical impairments or disabilities. Using a holistic, evidence-based approach, our expert physiotherapists guide patients through personalized recovery pathways that reduce pain, restore movement, and prevent long-term disability.',
    ],
    hasGallery: false,
    highlights: [
      { icon: Activity, title: 'Advanced Physiotherapy & Rehabilitation Techniques', desc: 'At KMC, our licensed physical therapists utilize a multi-dimensional approach encompassing physical, emotional, and social rehabilitation. We employ state-of-the-art modalities including electrotherapy for deep tissue pain relief, thermotherapy and cryotherapy for inflammation management, kinesiotherapy for improving range of motion and muscle strength, soft tissue mobilization through therapeutic massages, hydrotherapy for gentle water-based rehabilitation, and phototherapy for specific skin and tissue conditions.' },
      { icon: Users, title: 'Who Benefits from Physical Rehabilitation?', desc: 'Our comprehensive therapeutic programs cater to a wide demographic of outpatients and recovering inpatients. We specialize in reconstructive physical training for individuals recovering from neurological disorders such as Stroke, Parkinson\'s disease, or Spinal Cord Injuries, long-term pain management and mobility recovery for orthopedic conditions like arthritis, scoliosis, and frozen shoulder, and structured recovery pathways for patients following total knee or hip replacements, open-heart surgeries, or major trauma interventions.' },
      { icon: Heart, title: 'Why Choose Physiotherapy at KMC?', desc: 'While traditional prescription medications often provide temporary systemic relief, physiotherapy addresses the root cause of functional limitations. Our specialists focus on long-term recovery, restoring natural biomechanics through highly individualized, evidence-based treatment plans.' },
    ],
  },
  {
    key: 'gastro',
    slug: 'gastrology',
    badge: 'Super Speciality',
    title: 'Department of Gastrology',
    subtitle: 'Digestive Health & Hepatology Excellence',
    sectionHeading: 'Our Clinical Excellence & Educational Innovation',
    introParagraphs: [
      'The Department of Gastrology at KMC Medical College & Hospital is a premier center for diagnosing and treating a comprehensive spectrum of gastrointestinal, hepatic (liver), and pancreatic disorders. With advanced endoscopic technology and a multi-disciplinary care approach, our department is committed to providing the highest standard of digestive health care.',
      'Our dedicated team of expert gastroenterologists and support staff combines clinical precision with compassionate patient care, ensuring that every patient receives personalized, evidence-based treatment in a state-of-the-art medical environment.',
    ],
    hasGallery: false,
    highlights: [
      { icon: Microscope, title: 'Advanced Clinical Diagnostics & Therapeutic Services', desc: 'Equipped with state-of-the-art infrastructure, our department offers highly precise diagnostic and therapeutic interventions to ensure optimal gastrointestinal health. Modern Endoscopic Units featuring high-resolution monitors and advanced imaging technologies for early detection and accurate assessment of mucosal disorders. Comprehensive Care Spectrum for complex liver disorders (including hepatitis and cirrhosis), gastrointestinal tract diseases, and acute/chronic pancreatic issues.' },
      { icon: BookOpen, title: 'Academic Excellence & Practical Training', desc: 'As a premier teaching institution, the Gastrology unit focuses heavily on building robust clinical and practical skills among medical students. Hands-on Endoscopic Training through regular, structured training sessions for students to master the complexities of upper GI endoscopy and colonoscopy. Innovative Learning Spaces featuring a modern teaching seminar room fully integrated with advanced audiovisual aids.' },
    ],
  },
  {
    key: 'cardio',
    slug: 'cardiology',
    badge: 'Super Speciality',
    title: 'Department of Cardiology',
    subtitle: 'Comprehensive Heart Care & Medical Training',
    sectionHeading: 'Our Clinical Excellence & Educational Innovation',
    introParagraphs: [
      'Our Department of Cardiology is dedicated to providing comprehensive, state-of-the-art treatment for a wide spectrum of heart conditions and cardiovascular diseases. We prioritize patient health by utilizing the latest medical technologies to deliver accurate diagnoses and effective treatments.',
    ],
    hasGallery: false,
    highlights: [
      { icon: Monitor, title: 'Expert Cardiovascular Care You Can Trust', desc: 'Our Department of Cardiology is dedicated to providing comprehensive, state-of-the-art treatment for a wide spectrum of heart conditions and cardiovascular diseases. We prioritize patient health by utilizing the latest medical technologies to deliver accurate diagnoses and effective treatments. Our world-class facility is equipped with an Advanced Cardiac ICU providing round-the-clock, critical monitoring for severe heart conditions, a Modern Echocardiography Lab for precise, non-invasive imaging of the heart, and a State-of-the-Art Catheterization Lab (Cath Lab) fully equipped for life-saving interventional procedures.' },
      { icon: BookOpen, title: 'Empowering the Next Generation of Cardiologists', desc: 'Beyond exceptional patient care, our department is a premier hub for medical education. We are deeply committed to shaping the future of medicine by offering hands-on, comprehensive training for medical students. Under the direct supervision of experienced cardiologists, students master vital skills including accurate ECG interpretation, expert heart sound auscultation techniques, and advanced clinical cardiology procedures.' },
    ],
  },
  {
    key: 'neuro',
    slug: 'neurology',
    badge: 'Super Speciality',
    title: 'Department of Neurology',
    subtitle: 'Expert Care & Medical Education',
    sectionHeading: 'Our Clinical Excellence & Educational Innovation',
    introParagraphs: [
      'Our Department of Neurology is dedicated to the precise diagnosis and effective management of complex conditions affecting the brain, spine, and nervous system. We are committed to providing exceptional, patient-centered care for a wide spectrum of neurological challenges.',
    ],
    hasGallery: false,
    highlights: [
      { icon: Activity, title: 'Comprehensive Treatment for Neurological Disorders', desc: 'Our Department of Neurology is dedicated to the precise diagnosis and effective management of complex conditions affecting the brain, spine, and nervous system. We are committed to providing exceptional, patient-centered care for a wide spectrum of neurological challenges. To ensure accurate diagnoses and tailored treatment plans, our state-of-the-art facility is fully equipped to handle specialized care for stroke, epilepsy, Parkinson\'s disease, and complex neuropathies, along with advanced neuro-diagnostics through fully functioning, modern labs for EEG (Electroencephalogram), EMG (Electromyography), and Nerve Conduction Studies.' },
      { icon: BookOpen, title: 'Pioneering the Future of Neurological Medicine', desc: 'Beyond delivering world-class patient care, our department is deeply invested in medical education. We provide an immersive, hands-on learning environment designed to transform today\'s medical students into tomorrow\'s leading neurologists. Under the close guidance of our expert faculty, students gain critical clinical experience through interactive clinical rounds engaging in deep, real-world case discussions to sharpen diagnostic reasoning.' },
    ],
  },
  {
    key: 'uro',
    slug: 'urology',
    badge: 'Super Speciality',
    title: 'Department of Urology',
    subtitle: 'Expert Care & Clinical Training',
    sectionHeading: 'Our Clinical Excellence & Educational Innovation',
    introParagraphs: [
      'Our Department of Urology is committed to providing specialized, high-quality care for a wide range of conditions affecting the urinary tract and male reproductive system. We leverage cutting-edge medical technology to deliver precise diagnoses and highly effective, patient-centered treatment plans.',
    ],
    hasGallery: false,
    highlights: [
      { icon: Microscope, title: 'Comprehensive Urological Diagnostics and Treatment', desc: 'Our Department of Urology is committed to providing specialized, high-quality care for a wide range of conditions affecting the urinary tract and male reproductive system. We leverage cutting-edge medical technology to deliver precise diagnoses and highly effective, patient-centered treatment plans. To ensure the best possible outcomes, our modern facility is equipped with advanced diagnostic technology utilizing the latest tools including expert cystoscopy and comprehensive urodynamic testing.' },
      { icon: BookOpen, title: 'Excellence in Medical Education and Practical Training', desc: 'In addition to exceptional patient care, our department serves as a premier training ground for the next generation of medical professionals. We believe in an immersive, hands-on approach to clinical education that bridges the gap between classroom theory and real-world surgical practice.' },
    ],
  },
  {
    key: 'plastic',
    slug: 'plastic-surgery',
    badge: 'Super Speciality',
    title: 'Department of Plastic Surgery',
    subtitle: 'Reconstructive Care & Surgical Training',
    sectionHeading: 'Our Clinical Excellence & Educational Innovation',
    introParagraphs: [
      'Our Department of Plastic Surgery is dedicated to restoring form, function, and confidence through highly specialized surgical interventions. We provide comprehensive, patient-centered care for everything from aesthetic enhancements to critical trauma recovery.',
    ],
    hasGallery: false,
    highlights: [
      { icon: Activity, title: 'Transformative Care in Reconstructive and Cosmetic Surgery', desc: 'Our Department of Plastic Surgery is dedicated to restoring form, function, and confidence through highly specialized surgical interventions. We provide comprehensive, patient-centered care for everything from aesthetic enhancements to critical trauma recovery. Equipped with cutting-edge, modern operation theaters, our expert surgeons deliver top-tier treatment across key areas including reconstructive surgery, cosmetic procedures, and specialized burn management.' },
      { icon: BookOpen, title: 'Shaping the Future of Surgical Excellence', desc: 'As a dynamic center for medical education, our department is deeply committed to training the next generation of skilled surgeons. We blend rigorous clinical instruction with innovative technology to ensure our students achieve absolute clinical proficiency. Under the mentorship of our expert faculty, medical students gain invaluable hands-on experience through advanced simulation training.' },
    ],
  },
];

export const departmentBySlug: Record<string, DepartmentData> = {};
departments.forEach((d) => { departmentBySlug[d.slug] = d; });
