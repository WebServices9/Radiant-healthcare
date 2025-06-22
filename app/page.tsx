import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight,  MessageCircle } from "lucide-react"
import Link from "next/link"
import DoctorCard from "@/components/doctor-card"
import StatCard from "@/components/stat-card"
// import BookAppointmentButton from "@/components/book-appointment-button"



import ServicesSection from "@/components/services-section"
import Footer from "./footer/page"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
    

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-50 to-blue-100 py-8 md:py-12 lg:py-20 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-800 dark:text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-3 md:space-y-4">
              <h1 className="text-xl font-bold tracking-tighter text-gray-900 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl dark:text-white">
                Radiant Healthcare Hospital – The Best Multispecialty Hospital in Gorakhpur
              </h1>
              <p className="text-xs text-gray-600 sm:text-sm md:text-base dark:text-gray-300">
                Radiant Healthcare Hospital stands as the most trusted and advanced multispecialty hospital in
                Gorakhpur, offering world-class medical care with cutting-edge technology and a team of highly
                experienced doctors. Located at the heart of Uttar Pradesh, we are committed to providing affordable,
                patient-centric healthcare services across departments like Cardiology, Neurology, Orthopedics,
                Pediatrics, and Emergency Care.
              </p>
              <p className="text-xs text-gray-600 sm:text-sm md:text-base dark:text-gray-300">
                As the number one hospital in Gorakhpur, Radiant Healthcare combines compassionate treatment with
                state-of-the-art infrastructure to deliver superior health outcomes, making us the preferred choice for
                patients seeking reliable and holistic medical solutions in Eastern UP.
              </p>
              <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-3 sm:space-y-0">
                {/* <BookAppointmentButton variant="large" /> */}

                <Link href="/appointment" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 sm:w-auto dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-800"
                  >
                    {/* <MessageCircle className="mr-2 h-4 w-4" /> */}
                    Book Appointment
                  </Button>
                </Link>




                <Link href="https://wa.me/6389021255" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 sm:w-auto dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-800"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Chat on WhatsApp
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative mx-auto h-[250px] w-full max-w-md overflow-hidden rounded-lg sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[500px] lg:max-w-none">
              <Image
                src="/home.png"
                alt="Best Hospital in Gorakhpur - Radiant Healthcare"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* About Us Section */}
      <section className="w-full py-8 md:py-12 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="relative mx-auto h-[250px] w-full max-w-md overflow-hidden rounded-lg sm:h-[300px] md:h-[350px] lg:h-[400px] lg:max-w-none order-2 lg:order-1">
              <Image src="/about.JPG" alt="Best Doctors in Gorakhpur" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center space-y-3 md:space-y-4 order-1 lg:order-2">
              <h2 className="text-xl font-bold tracking-tighter text-gray-900 sm:text-2xl md:text-3xl">About Us</h2>
              <p className="text-xs text-gray-600 sm:text-sm md:text-base">
                Radiant Healthcare Hospital is the leading healthcare institution in Gorakhpur dedicated to providing
                exceptional medical services and personalized care at affordable rates. With state-of-the-art
                infrastructure and advanced technology, we ensure the highest standards of healthcare delivery.
              </p>

              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <div>
                  <h3 className="text-base font-semibold sm:text-lg md:text-xl">Vision</h3>
                  <p className="mt-1 text-xs text-gray-600 sm:text-sm md:mt-2">
                    To be the premier healthcare provider in Eastern UP, recognized for our excellence in medical care,
                    patient-centered approach, and commitment to advancing healthcare services, ultimately improving the
                    health and well-being of our community.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold sm:text-lg md:text-xl">Missions</h3>
                  <ul className="mt-1 space-y-1 text-xs text-gray-600 sm:text-sm md:mt-2 md:space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="mr-1 h-4 w-4 text-blue-600 sm:mr-2 sm:h-5 sm:w-5" />
                      <span>
                        Provide exceptional and comprehensive healthcare services to Gorakhpur and surrounding regions
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-1 h-4 w-4 text-blue-600 sm:mr-2 sm:h-5 sm:w-5" />
                      <span>Prioritize patient-centered care and satisfaction with affordable treatment options</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-1 h-4 w-4 text-blue-600 sm:mr-2 sm:h-5 sm:w-5" />
                      <span>Foster a culture of continuous learning and innovation in medical practices</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-1 h-4 w-4 text-blue-600 sm:mr-2 sm:h-5 sm:w-5" />
                      <span>Cultivate strong partnerships with the community for better healthcare access</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <div>
                <Button variant="link" className="text-blue-600 hover:text-blue-700 p-0 text-xs sm:text-sm">
                  Learn More About the Best Hospital in Gorakhpur{" "}
                  <ChevronRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </section>

          {/* Services Section */}
          <ServicesSection />


          {/* Doctors Section */}
      <section id="doctors" className="w-full py-8 md:py-12 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6 text-center sm:mb-8 lg:mb-10">
            <h2 className="text-xl font-bold tracking-tighter text-gray-900 sm:text-2xl md:text-3xl">Our Doctors</h2>
            <p className="mx-auto mt-3 max-w-3xl text-xs text-gray-600 sm:text-sm md:text-base">
              Meet Our Exceptional Doctors - The Best in Gorakhpur
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6">
            <DoctorCard
                         name="Dr. Prashant Singh"
                         qualifications="M.B.B.S., M.D. (Chest)"
                         specialty="Heart, Chest, Abdomen, Diabetes, Asthma, Lung Diseases"
                         imageUrl="/placeholder.svg?key=ko6dm"
                       />
                       <DoctorCard
                         name="Dr. N. K. Pandey"
                         qualifications="M.B.B.S., M.D. Physician, MPH (USA)"
                         specialty="Heart, Chest, Abdomen, Diabetes Diseases"
                         imageUrl="/placeholder.svg?key=ne3oy"
                       />
                       <DoctorCard
                         name="Dr. Ashwani Kumar Mishra"
                         qualifications="M.B.B.S., M.S. MCH (Neuro Surgeon)"
                         specialty="Neurologist and Spine Specialist"
                         imageUrl="/placeholder.svg?key=ne3oy"
                       />
                       <DoctorCard
                         name="Dr. Arpita Shrivastava"
                         qualifications="M.S. (ENT)"
                         specialty="Ear, Nose, and Throat (ENT) Specialist"
                         imageUrl="/placeholder.svg?key=8vdqg"
                       />
                       <DoctorCard
                         name="Dr. Akil Ahmad Ansari"
                         qualifications="MBBS, MS (General & Laproscopy Surgeon)"
                         specialty="General and laproscopic surgery"
                         imageUrl="/placeholder.svg?key=za17p"
                       />
                       <DoctorCard
                         name="Dr. Deepak Tiwari"
                         qualifications="D.M. Cardio, Interventional Cardiologist"
                         specialty="Cardiologist"
                         imageUrl="/placeholder.svg?key=qytxd"
                       />
                       <DoctorCard
                         name="Dr. Shahnavaz Jamal"
                         qualifications="MBBS(Honors), M.D. (Pediatrics)"
                         specialty="Neonatologist and Critical Care Specialist"
                         imageUrl="/placeholder.svg?height=300&width=300&query=doctor%20male%205"
                       />
                       <DoctorCard
                         name="Dr. Shweta Mishra"
                         qualifications="M.B.B.S., M.S. (Obs. & Gyne.)"
                         specialty="Obstetrician-Gynecologist and Pediatrician"
                         imageUrl="/placeholder.svg?height=300&width=300&query=doctor%20female%202"
                       />
          </div>

          <div className="mt-6 text-center sm:mt-8">
            <Link href="/doctors">
              <Button variant="link" className="text-blue-600 hover:text-blue-700 text-xs sm:text-sm">
                View All Doctors <ChevronRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

          {/* Holographic Dashboard
          <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-16">
            <HolographicDashboard />
          </div> */}

          {/* Stats */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 md:mt-10 lg:mt-16 md:gap-4">
            <StatCard value="50+" label="Experienced Doctors" />
            <StatCard value="25+" label="Medical Specialties" />
          </div>
         
        </div>
      </section>

      {/* Footer */}
      <Footer/>

      {/* <BookAppointmentButton variant="floating" /> */}
    </main>
  )
}
