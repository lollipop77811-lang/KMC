export interface AboutMessage {
  slug: string
  title: string
  author: string
  role: string
  content: string[]
  image?: string
}

export const aboutMessages: Record<string, AboutMessage> = {
  chairman: {
    slug: 'chairman',
    title: "Chairman's Message",
    author: 'Vinay Kumar Srivastava',
    role: 'Chairman',
    image: '/about/chairman_s message/chairman-Custom.jpg.webp',
    content: [
      'Dear Students,',
      'I have great pleasure in welcoming you to KMC Medical College & Hospital. I feel confident that the ideas, impressions, and images I had about medical education as cherished dreams are now unfolding and taking shape.',
      'Our institution has gained recognition for delivering modern healthcare services in an environment of academic excellence and friendly participation.',
      'With expanded facilities for sports and recreation, we foster a holistic environment where students can thrive academically and personally.',
      'It is my firm belief that by joining KMC, you are taking a meaningful step toward becoming not just capable doctors, but compassionate contributors to society.',
      'My vision is to elevate KMC Medical College & Hospital into a Medical University in the near future—a place of pride for students, faculty, and the entire community.',
      'I invite you to be a part of this transformational journey and extend my warm wishes to all who are ready to embark on a rewarding path in the healing profession.',
    ],
  },
  ceo: {
    slug: 'ceo',
    title: 'Welcome Message from the CEO',
    author: 'Dr. S. M. Rafeek',
    role: 'Chief Executive Officer, Shanti Foundation',
    content: [
      'It is an inordinate honor and privilege for me to welcome you to KMC Medical College & Hospital. Our goal is to produce competent doctors who possess knowledge, intellect, and integrity.',
      'We aim to provide a safe and intellectually stimulating environment that enables students to become innovative thinkers, creative problem solvers, and inspired learners—well prepared to thrive in a progressive world.',
      'To achieve this, I urge you to: keep your mind open to broader medical knowledge; be accountable for your actions; welcome and empathize with your patients; participate in shared decision-making; and commit your energies to serving both individuals and the larger healthcare needs of society, even with limited resources.',
      'Our College has adopted modular teaching methods, in line with global practices. We are continuously upgrading our educational standards by recruiting the best faculty and investing in infrastructure and learning systems.',
      'I extend my best wishes to the administration, faculty, and students of this institution in all their future endeavors.',
    ],
  },
  trustees: {
    slug: 'trustees',
    title: 'About KMC Medical College',
    author: 'Shanti Foundation',
    role: 'Trustees',
    content: [
      'KMC Medical College and Hospital is situated on the Farenda–Maharajganj Highway in the main city of Maharajganj (PIN 273303), the headquarters of district Maharajganj, Uttar Pradesh. This city is 55 km from Gorakhpur and about 170 km from Ayodhya, the birthplace of Lord Ram. It is well connected by road, and the nearest airport is in Gorakhpur, while the nearest railway station is Farenda.',
      'The campus is lush green and sprawls over 20 acres. A well-built residential complex for faculty and separate hostels for girls and boys are available within the premises.',
      'KMC Medical College & Hospital is established by the Shanti Foundation, permitted by the Government of Uttar Pradesh and affiliated with Atal Bihari Vajpayee Medical University, in collaboration with the government under the Public Private Partnership (PPP) mode. The vision is to provide world-class medical education and patient care at an affordable cost and to produce competent doctors with a human touch.',
      'To achieve this vision, a 665-bedded hospital named KMC Digital Hospital has been functional since 2017, equipped with the latest medical facilities and equipment.',
      'High-quality nursing and paramedical services are integral to medical education and training. KMC Nursing College and KMC Para Medical College, also operated by the Shanti Foundation, are functioning within the KMC Digital Hospital campus to meet the growing needs of healthcare professionals.',
      'The college also houses a large Central Library, well-stocked with books and journals and equipped with internet facilities. It has a seating and reading capacity of 150 students, providing a learning environment conducive to academic excellence.',
    ],
  },
  principal: {
    slug: 'principal',
    title: 'Message from the Dean',
    author: 'Dr. Sankalp Dwivedi',
    role: 'Dean / Principal',
    content: [
      'KMC Medical College and Hospital is situated on the Farenda – Maharajganj Highway in the main city of Maharajganj PIN 273303, which is headquarter of district Maharajganj, Uttar Pradesh.',
      'This city is 55 km from Gorakhpur and about 170 km from Ayodhya, the birth place of God Ram. It is well connected by road and nearest airport is Gorakhpur & railway station Farenda, dist. Maharajganj.',
      'The campus is lush green and sprawling over an area of 20 acres with built-up area of A well-built residential complex for faculty and separate hostels for girls and boys are available within the campus.',
      'KMC Medical College & Hospital is started by the Shanti Foundation, permitted by Govt. Of U.P. & affiliated to Atal Bihari Vajpayee Medical University, Uttar Pradesh, in collaboration with Govt. Of U.P. on Public Private Partnership (PPP Mode), to provide world class medical education & patient care at affordable cost, to the needy and to produce competent doctors with human touch.',
      'To achieve the above goal, a 665 Bedded hospital named KMC Digital Hospital is functional since 2017 with latest and modern medical facilities & equipments.',
      'Good nursing & para medical services are part and parcel of medical education & training. KMC Nursing College & KMC Para Medical College being run by the Shanti Foundation in the campus of KMC Digital Hospital to fulfill the nursing and paramedics needs.',
      'To provide an environment conducive to learning, a large Central Library with well-stocked books, journals & internet facilities, having seating & reading capacity of 150 students, exists in the college campus.',
      'I hope & wish that KMC Medical College & Hospital, Maharajganj will be a milestone in Medical Education & patient care not only for this region but the entire country.',
    ],
  },
  ms: {
    slug: 'ms',
    title: 'Message from the Medical Superintendent',
    author: 'Dr. Rajendra Chaudhary',
    role: 'Medical Superintendent',
    content: [
      'I, with immense pleasure, would like to welcome you to KMC Hospital, a tertiary care hospital offering promotive, preventive and world class curative health care in a patient friendly manner and at an affordable cost.',
      'This is a state-of-the-art multispecialty hospital having 605+ beds with caring staff full of empathy, providing patients and their relatives full medical and emotional support. We offer highly subsidized services ranging from basic life support to highly specialized care, catering to all sections of society in UP and even to neighboring Nepal.',
      'Besides these services, our outreach programmes hold medical camps in rural areas, serving the poor and weaker sections of society.',
      'We have a student-friendly atmosphere, rich academic culture, and a perfect ambience for research and learning. I assure all aspiring doctors that KMC Hospital is a great place to learn medicine and to emerge as competent, compassionate doctors, in tune with the goals of the National Medical Commission and the vision of our Honble Prime Minister.',
      'It is a challenge to keep pace with rapidly advancing medical technology. This challenge is well accepted here as we strive to deliver quality healthcare while upholding our core values through our dedicated medical, nursing, and paramedical staff.',
      'We will continue to strive for excellence and any contribution made here will surely help the suffering humanity.',
    ],
  },
}

export const leaderSlugs = ['chairman', 'ceo', 'trustees', 'principal', 'ms'] as const
