import { Product, Review } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Premium Minimal Watch',
    category: 'Accessories',
    price: 49.99,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtWMWfgJmU8a0f_X0D7535WjDgV-wLbkMEC_soYw2sJHUrajGVDtpsjnecRzzoHPt1bvCk5CsHaGEAE0TTDUfJEWTrPa_QPmtFKBxeLKOqHXF_xaVJF-SdHUdaiDPfjAE7OZ_oUW66Kn4PJlzsmq5B8rtv4a8Tz8NLS8Zr_NPLYj-sLcuY4Y6uiDHmQ26cKiOYyOI08DTOioo2dmtlnQZcgU67LwBN7qXxl7zXtEP8crmVWobbvmpJGP_wCtHccc0evkOTfe5D65L1',
    rating: 4.8,
    description: 'Clean minimal white wrist watch on grey background',
    status: 'In Stock'
  },
  {
    id: '2',
    name: 'Velocity Trainers',
    category: 'Fashion',
    price: 89.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4XKJnS1vUZg-_p_Qd7H6rvECy6iqcNvon2i5GmGsyihSEDQlepBbMdf-rzhaoJleJIM-q6Nlq7E0TXi5n1jlZo3MiNQqneFY76CBxf4jd3sUVxaKse3qNVOLSsPeBcsA-1f9dETFlzxf1iPGI1VDN-CMoCywGFkE0O1go96a1yXs0rOjFlKw3uWTtBZ23NLzPUevBk_BY3T22iQepcZjd2V37XCPGAQcOYusMOTGkUZZFg13ORwLiXBP7yWReBOts171fMPL5xzf1',
    rating: 4.5,
    description: 'Bright red performance running shoes on studio background',
    tag: 'New'
  },
  {
    id: '3',
    name: 'Studio Wireless Buds',
    category: 'Electronics',
    price: 55.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWC5oz2za3y8EE0gRlRUuNa_fXf_f0KoU6roNF9-KMcKh7PJ57RZcVYMpkm9j-cyH59FwD1F1NWWsAR1Pe7qyVimi08CcfXaKjVN2JRh8grspoClh3GkrwBd1tkFfgHeg43AjIQU4XbZt2Bj2R6fDscdwScPcm5qGZiib0Eiid0Dc9hBRK-ZSmuK1Dz1MzxP0syx3sl_9Gyg0JnggfEmOiMDZ7dz73KmosG6zXSnPNYOIVdsp1U22YFeWX2vkBpScpxxv5p2GlDPhr',
    rating: 4.9,
    description: 'Premium gold and black wireless over-ear headphones',
    tag: 'Best Seller'
  },
  {
    id: '4',
    name: 'Minimalist Desk Lamp',
    category: 'Home & Living',
    price: 35.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCuBoNWqcKfwFWLc-ZQrZ8vmxVieeJZhMlMguyhjuBYudhtbxrPrboFAhOJsgB2LPm3_DMplsm0gQufzCQdB-g-n4ARcOS5bQSEceMGgAG1ZpGvpS3jljwpAMUygQLYw8_cY73R1WATwZBWBWj78m1d1L_M8pUW6UifczpaFVNI2psbDSPr3e8JMA6UpxW9jV2C3h3DB2UHk2uqL3ZxtoVjgwc2ximPfhZS1y_tiFQrWQh8gBng6CUSssaU6Kmlzf3VAOLWigYcmKM',
    rating: 4.7,
    description: 'Modern geometric concrete desk lamp with Edison bulb'
  },
  {
    id: '5',
    name: 'Pro Wireless Headphones',
    category: 'Electronics',
    price: 299.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCz_XFBvH9h0-1L7DlPV3n7_azmU4DbYiQysL6UBVTEFO8r65SPGbwxR86tUTOT48Tvy3pEJ64mt2tyN5-peLEvepA57wQhf5pztSRhfC-V6yb-xYzHWExMgVvwRDoeAJMCQ2y83QaneaLlbKCC2_qjmmdtTeOlWA29v1vw3xwWwxeEEf08Dqr2-ZiAersO0XSWlPfwMTvDGvphgVKFcX3uzr_E1TIKcmI_RBWDf4qT3NnEfGDtV_E5mTJ2UM_A0DKyVitvjrx1AyoK',
    rating: 4.8,
    description: 'Experience studio-quality sound with active noise cancellation and 40h battery life.'
  },
  {
    id: '6',
    name: 'Minimalist Quartz Watch',
    category: 'Accessories',
    price: 145.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLHrFrdK4oXz49-eVBB3nU7YMm9MEaqB_6L7Q8f-4MGLiaAaJgCqG4_3n1TTS1SyIBqOuDvPm4tG4ddDMNqVqLmVtxDtSL1BFQl0l4QQkjzcAc4NAdAqHFxVvY2cJBaPvwbpIDXahbPYvN8GL81F2WM-0ESQWORxfGsBkKKOljgxcJnjNfKG1H-kZU-cYrlFHLR4AxA51hOWzSORJhoCeBCdG-1vJXpMd0ryJpR-Z-qfFbP7r_47Ykv9rxvhPvzKUk9B_ZsMj2V4p6',
    rating: 4.5,
    description: 'Sleek design with genuine leather strap and sapphire crystal glass.'
  },
  {
    id: '7',
    name: 'Urban Canvas Sneakers',
    category: 'Fashion',
    price: 59.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6Zne5SxwUhNbX2hLyeKOxfKvGJ4zSE04tT7ZhdHGYxH14Y1_XuBSYpGCbQ6rRIAfOaiMKRr6orGvNihs0UWKmoWM1bksp63rAZ_lFeVQtxXrSELuZ8MvAxbtCF3YOL-elQfEU87gNOEn3K2QnHrfp-0juBYSFJbfwtcIL1nyUXaUIa6Y5dITtoKvgTurFyeztsIsw1CrzVFLAgO-XerBhAX_FJBzfYeUkuTdHfGg9DYbMK5L_VmzzBcyC_e9lQD3Q3aGyEZxwEaNe',
    rating: 4.2,
    description: 'Versatile everyday comfort with reinforced soles and breathable fabric.'
  },
  {
    id: '8',
    name: 'Smart Home Speaker',
    category: 'Electronics',
    price: 129.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwncBZQMIgl8fSA3tV-DXLDegPLIsVsgnQ-wH4tao9pOrAj8bDItzs9BGMvVb5ABwtXK3x2G0hUNDwrdBh54rKQTciPcCOr30pgWPEnvjBUYbDqpdoCzCmoiCZiCNe2Y0xXqAvg_r6SH6gobLP35IHNPi8P0K5TAoJkLH_rXc8G6IIgtjP13sgP_4LLTEWgEZHdmHk9K5YaLeRJvnQh48lXaS-w2_Oyd_p0kQyIyPcrEuPpPHsmq79GLOYvGPz_LjNnpNTP_p48V4k',
    rating: 4.9,
    description: 'Control your home with voice commands and crystal clear 360-degree audio.'
  },
  {
    id: '9',
    name: 'Navigator Sunglasses',
    category: 'Fashion',
    price: 180.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyvitfJG9aVAu1OcJ4Y2ast5NtcJBVB_56Bxzt_0gBCfq6ayizNmuSrZ865qd82BWO_ow9SQ6baz05EKWOCaKyJmp3yeFMqd1HETX17Z_LCxnuRgDa-8HuvAHZFr3rxi8JDRsn3KM80lHQauovGlW_FVIk2mrH8mx0FG0MgFRnXKWjeo5GMk9-bQ3RgL10E4-JxxpEu-R4rGo5UJ9rLnCnUFEF6S_tij5wzmn0lLn59kxybMHrdxMFxY_41yrGvdZEVLZmxDMc99hJ',
    rating: 4.6,
    description: 'Polarized lenses with premium titanium frame for ultimate eye protection.'
  },
  {
    id: '10',
    name: 'Mechanical Keyboard',
    category: 'Electronics',
    price: 89.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB82_i5Au7P_sNpvQSYU8UUnui84ae25b1p66eRtEhvHFh6kf5kqYDhuz9hhspmqm0F-pXuBqroVl4_kMtJYtiypXCPRj6xM8raSuUESiOjvXLPOLeJwklNufS23I_aRnWOS4qRm8n7RF4zpCQ5hKdyQNfJ-xp2zdi08CjXTNT4nA-CoHvLYI4nz6BX8FnTJ0arc68Dbuc92l_ECQWUEYy5K0thkTMY77FA3XK-X6dyHRLfL2GC61YdkExWNcRuySlBisK8whPUxbH7',
    rating: 4.7,
    description: 'Quiet tactile switches with customizable RGB lighting and ergonomic design.'
  },
  {
    id: '11',
    name: 'Organic Face Cream',
    category: 'Beauty',
    price: 24.00,
    image: 'https://picsum.photos/seed/beauty1/800/1000',
    rating: 4.8,
    description: 'Nourishing organic face cream with vitamin E and aloe vera.',
    tag: 'New'
  },
  {
    id: '12',
    name: 'Silk Pillowcase',
    category: 'Home & Living',
    price: 45.00,
    image: 'https://picsum.photos/seed/home2/800/1000',
    rating: 4.9,
    description: '100% mulberry silk pillowcase for better skin and hair.',
    status: 'In Stock'
  }
];

export const FAKE_USERS = [
  { id: '1', name: 'Sarah Jenkins', email: 'sarah.j@example.com', role: 'Customer', status: 'Active' },
  { id: '2', name: 'Marcus Chen', email: 'marcus.c@example.com', role: 'Customer', status: 'Active' },
  { id: '3', name: 'Elena Rodriguez', email: 'elena.r@example.com', role: 'Admin', status: 'Active' },
  { id: '4', name: 'John Doe', email: 'john.d@example.com', role: 'Customer', status: 'Inactive' },
];

export const FAKE_STATS = [
  { label: 'Total Revenue', value: '$12,840', icon: 'payments' },
  { label: 'Active Users', value: '1,240', icon: 'group' },
  { label: 'Total Orders', value: '458', icon: 'shopping_cart' },
  { label: 'Conversion Rate', value: '3.2%', icon: 'trending_up' },
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    userName: 'Sarah Jenkins',
    userImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKSzampJPiXZDz98I7sf3Tpz0XTKeU-1jLEUEjI7WRv5aE9zFfwYNTZ2QIPPqLPqtjKYHJtkhV6TdU7Lj6LpHoIGeOWcO25RVQGP6OmyCzQdMZqwZCC3wZWcKcP-NdKWQTJK9LArPY1GqZ-ZGdL4Slk9COes4Ldj7-n8Ytdsu7k3nLIkXkXhjaZUALZ0pS4odqFwB2B3sWUX1IYLM2qg2o0StKDFO7UbW1gRGHcp-ZQ54-Q8Cd9_qm1YDnkKjz6RtaCS2J_zi-oxQK',
    rating: 5,
    comment: '"Honestly surprised by the quality. I bought the minimalist watch and it looks way more expensive than $50. Ream\'s Store is my new go-to."',
    verified: true
  },
  {
    id: '2',
    userName: 'Marcus Chen',
    userImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8yQGlBFMsB3VImRtm6co2ScbBku40adcHfuOD9lb3R38SNK3JxkjniMrGRYtEL4-ZvkSEpyKtgZBSrjMphgC3MonSfb8Nzzt8rFQJ8fY36ZzW4nyUJebEinQeashNmedeZmB3pH8f6ScF7vNVSa8xRahIBsIVbhLjXo1RMgomnQJJxcLXl0ztI00Yg0-h1aEiNObc2s6p5Di7hyF0J84ZHc0XGMdSwsWtBArtiVTMUEOq1_PGi90H4CNM1MHt7MZaWdx2N8WCbwNB',
    rating: 5,
    comment: '"The shipping was incredibly fast and the packaging was premium. You can tell they care about the customer experience. Highly recommend!"',
    verified: true
  },
  {
    id: '3',
    userName: 'Elena Rodriguez',
    userImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCk4SP39HGp2Q54jhoxmd5_Nx0s-WF-iKbLbe-BQLdVzRbiJJPvCI3jiBOrvH24nRyepkopCwjuI427_r6ajI1bpSimKjLLS-gd84WxVtpoNUbHIGVZaqTH4pfWcrCts2xn6mO4iI0bwVZ5VgMMyVN2mu5U5he5im4k2IejeIlXghHY3R_rv7-CmBK2fTnbxL7ogZM01hqvMt51C-TG5y1mHw45MDrhi4LalHAXHHy8OvD-_YG6bJZyXmnCKc0icbBcqEuCImBDGkZB',
    rating: 5,
    comment: '"Affordable doesn\'t mean cheap here. The lamp I bought is heavy and well-made. Definitely looking forward to more items!"',
    verified: true
  }
];

export const CATEGORIES = [
  { id: 'all', name: 'All Products', icon: 'grid_view' },
  { id: 'electronics', name: 'Electronics', icon: 'devices' },
  { id: 'fashion', name: 'Fashion', icon: 'apparel' },
  { id: 'home', name: 'Home & Living', icon: 'home' },
  { id: 'beauty', name: 'Beauty', icon: 'auto_fix_high' },
  { id: 'accessories', name: 'Accessories', icon: 'watch' }
];
