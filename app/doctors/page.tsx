import DoctorCard from "@/components/doctor-card"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function DoctorsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl">Our Expert Doctors</h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-blue-100 md:text-lg">
            Meet our team of highly qualified specialists dedicated to providing exceptional healthcare in Gorakhpur
          </p>
        </div>
      </section>

      {/* Doctors Grid Section */}
      <section className="w-full py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Home
            </Link>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Specialist Doctors at Radiant Healthcare Hospital</h2>
            <p className="mt-2 text-gray-600">
              Our team of experienced doctors are experts in their respective fields, providing comprehensive care
              across all specialties.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
            
            <DoctorCard
              name="Dr. Ashutosh Tripathi"
              qualifications="General Physician"
              specialty="General Physician"
              imageUrl="/placeholder.svg?height=300&width=300&query=doctor%20male%207"
            />
            
            <DoctorCard
              name="Dr. Prashant Rajan Gupta"
              qualifications="M.B.B.S., M.S., M.C.H. (Urologist)"
              specialty="General surgery, urology, laparoscopic surgery"
              imageUrl="/placeholder.svg?height=300&width=300&query=doctor%20male%209"
            />
            
            <DoctorCard
              name="Dr. Nityanand Singh"
              qualifications="MCH (Burn/Plastic & Cosmetic Surgeon)"
              specialty="Burns, plastic surgery, cosmetic surgery"
              imageUrl="/placeholder.svg?height=300&width=300&query=doctor%20male%2012"
            />
            <DoctorCard
              name="Dr. Amit Singh"
              qualifications="M.B.B.S., M.D (Pediatrics)"
              specialty="Neonatologist and Critical Care Specialist"
              imageUrl="/placeholder.svg?height=300&width=300&query=doctor%20male%2013"
            />
            <DoctorCard
              name="Dr. Rajan Shahi"
              qualifications="M.S. (Ortho)"
              specialty="Spine and Orthopedic Specialist"
              imageUrl="/placeholder.svg?height=300&width=300&query=doctor%20male%2013"
            />
            <DoctorCard
              name="Dr. Ashish Khetan"
              qualifications="MS FMAS FNB(MIS) Gastro Surgeon"
              specialty="Gastro Surgeon"
              imageUrl="/placeholder.svg?height=300&width=300&query=doctor%20male%2013"
            />
            <DoctorCard
              name="Dr. Sandarbh Sinha"
              qualifications="BDS MDS"
              specialty="Facial Surgeon"
              imageUrl="/placeholder.svg?height=300&width=300&query=doctor%20male%2013"
            />
          </div>
          
        </div>
      </section>
    </main>
  )
}
