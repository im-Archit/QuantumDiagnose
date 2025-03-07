"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"

const teamMembers = [
  {
    name: "Dr. Jane Smith",
    role: "Lead Researcher",
    bio: "PhD in Medical AI with 10+ years of experience in machine learning for healthcare applications.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Prof. Michael Johnson",
    role: "Medical Advisor",
    bio: "Cardiologist with expertise in preventive medicine and early disease detection methodologies.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Sarah Williams",
    role: "Data Scientist",
    bio: "Specializes in healthcare analytics and developing predictive models for disease diagnosis.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "David Chen",
    role: "Software Engineer",
    bio: "Full-stack developer focused on creating accessible and secure healthcare applications.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
]

export default function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-muted-foreground">
            Meet the experts behind QuantumDiagnose who are dedicated to advancing disease detection through innovative
            AI research.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full">
                <div className="aspect-square relative">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                  <div className="flex gap-3">
                    <Link href={member.social.twitter} aria-label={`${member.name}'s Twitter`}>
                      <Twitter className="h-5 w-5 text-slate-400 hover:text-primary transition-colors" />
                    </Link>
                    <Link href={member.social.linkedin} aria-label={`${member.name}'s LinkedIn`}>
                      <Linkedin className="h-5 w-5 text-slate-400 hover:text-primary transition-colors" />
                    </Link>
                    <Link href={member.social.github} aria-label={`${member.name}'s GitHub`}>
                      <Github className="h-5 w-5 text-slate-400 hover:text-primary transition-colors" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

