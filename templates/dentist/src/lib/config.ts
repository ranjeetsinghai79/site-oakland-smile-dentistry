import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Oakland Smile Dentistry",
    tagline: "Your Smile, Our Priority Always",
    phone: "(510) 256-5117",
    phoneHref: "tel:+15102565117",
    email: "info@oaklandsmiledentistry.com",
    address: "3147 Telegraph Ave Oakland, CA 94609",
    city: "Oakland",
    serviceAreas: ["Oakland, CA"],
    license: "DDS License #12345",
    since: "2005",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "slate",
    niche: "dentist",
  },

  services: [
    { icon: "star", title: "Dental Checkup", desc: "Routine exams and cleanings keep your smile healthy and bright.", urgent: false },
    { icon: "shield-check", title: "Dental Implants", desc: "Permanent solutions for missing teeth, restoring function and aesthetics.", urgent: false },
    { icon: "sparkles", title: "Teeth Whitening", desc: "Achieve a brighter, more confident smile with professional whitening treatments.", urgent: false },
    { icon: "heart", title: "Emergency Dentist", desc: "Immediate care for dental pain, injuries, or unexpected issues.", urgent: true },
    { icon: "scissors", title: "Wisdom Teeth Extraction", desc: "Safe and comfortable removal of problematic wisdom teeth.", urgent: false },
    { icon: "home", title: "Kid Friendly Dentist", desc: "Gentle and fun dental care designed specifically for children.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Oakland, CA", stars: 5, text: "I had a dental emergency on a Saturday morning and Oakland Smile Dentistry got me in right away. Dr. Chen was incredibly kind and fixed my chipped tooth quickly and painlessly. I'm so grateful for their prompt and professional service, it truly saved my weekend!" },
    { name: "Mark T.", location: "Berkeley, CA", stars: 5, text: "Getting my Invisalign here was a fantastic experience. The staff explained everything clearly, and my appointments were always on time. My teeth look amazing now, and I couldn't be happier with the results and the friendly atmosphere." },
    { name: "Jessica R.", location: "Oakland, CA", stars: 5, text: "My kids actually look forward to going to the dentist now! The team at Oakland Smile Dentistry is wonderful with children, making their visits fun and stress-free. It's such a relief to find a practice that caters so well to families." }
  ],

  trustBadges: [
    "ADA Member", "Kid-Friendly Certified", "Emergency Care Available", "Invisalign Provider", "5-Star Rated"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1500, label: "Happy Smiles", suffix: "+", decimals: 0 },
    { value: 18, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We prioritize urgent dental needs with quick scheduling." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "Clear cost estimates before any treatment begins." },
    { icon: "award", title: "Certified Pros", desc: "Highly skilled and experienced dental professionals." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We ensure you're happy with your dental care." },
    { icon: "phone", title: "AI Reception 24/7", desc: "Book appointments and get answers anytime, day or night." },
    { icon: "truck", title: "Modern Equipment", desc: "Utilizing the latest dental technology for best results." }
  ],

  formServiceOptions: ["Dental Checkup", "Dental Implants", "Teeth Whitening", "Emergency Dentist", "Wisdom Teeth Extraction", "Kid Friendly Dentist"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!