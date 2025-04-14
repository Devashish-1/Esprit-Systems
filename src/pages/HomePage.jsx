"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  School,
  Building2,
  Users,
  GraduationCap,
  ShoppingBag,
  MessageSquare,
  Mail,
} from "lucide-react";

import { Button } from "../components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import TypewriterText from "../components/typewriter-text";
import StatCard from "../components/stat-card";
import ServiceCard from "../components/service-card";
import CourseCard from "../components/course-card";
import TestimonialCarousel from "../components/testimonial-carousel";
import EventsSection from "../components/events-section";
import ContactForm from "../components/contact-form";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import bgimg from "../assets/bg.svg";
import { Link } from "react-router-dom";
export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={bgimg}
            alt="Students at work"
            className="object-cover w-full h-full opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-gray-900/95"></div>
        </div>

        <div className="container relative z-10 mx-auto max-w-6xl text-center flex flex-col items-center justify-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">
              <TypewriterText
                texts={["Empower.", "Innovate.", "Transform."]}
                delay={2500}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-500"
              />
            </h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Where Students Build Futures & Businesses Thrive Digitally.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  delayChildren: 0.5,
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {/* First Button */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "tween",
                    duration: 0.4,
                    ease: "easeOut",
                  },
                },
              }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="bg-blue-700 hover:bg-blue-800 text-white shadow-lg transition-all"
              >
                Join as Student <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            {/* Second Button */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "tween",
                    duration: 0.4,
                    ease: "easeOut",
                    delay: 0.1,
                  },
                },
              }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                variant="secondary"
                className="bg-yellow-500 text-gray-900 hover:bg-yellow-600 shadow-lg transition-all"
              >
                Get Digital Solutions <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            {/* Third Button */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "tween",
                    duration: 0.4,
                    ease: "easeOut",
                    delay: 0.2,
                  },
                },
              }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-teal-500 text-teal-400 hover:bg-teal-500/10 transition-all"
              >
                Partner with Us <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
          {/* Impact Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <StatCard
              icon={<Building2 className="h-12 w-12 text-blue-500" />}
              count={10}
              text="Our Projects"
              suffix="+"
            />
            <StatCard
              icon={<GraduationCap className="h-12 w-12 text-yellow-500" />}
              count={30}
              text="Achieveachievements"
              suffix="+"
            />
            <StatCard
              icon={<ShoppingBag className="h-12 w-12 text-teal-500" />}
              count={30}
              text="Testimonial"
              suffix="+"
            />
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-400 mb-2">
              Scroll to explore
            </span>
            <motion.div
              className="h-8 w-5 border-2 border-gray-400 rounded-full flex justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            >
              <motion.div
                className="h-2 w-1 bg-gray-400 rounded-full mt-1"
                animate={{ opacity: [0, 1, 0], y: [0, 10, 5] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What We Do</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Bridging the gap between academic knowledge and real-world
              application.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="bg-gray-800/50 p-8 rounded-xl shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <School className="h-12 w-12 text-blue-500 mr-4" />
                <h3 className="text-2xl font-bold">For Students</h3>
              </div>
              <p className="text-xl font-medium text-blue-400 mb-6">
                Gain Real Skills, Build Portfolios, Earn Certifications.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ChevronRight className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300">
                    Work on real business projects to build practical experience
                  </p>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300">
                    Develop a professional portfolio that stands out to
                    employers
                  </p>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300">
                    Earn industry-recognized certifications and credentials
                  </p>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300">
                    Networking opportunities with business owners and
                    professionals
                  </p>
                </li>
              </ul>
              <Button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-600/30 transition-all">
                Learn More
              </Button>
            </motion.div>

            <motion.div
              className="bg-gray-800/50 p-8 rounded-xl shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <Building2 className="h-12 w-12 text-yellow-500 mr-4" />
                <h3 className="text-2xl font-bold">For Businesses</h3>
              </div>
              <p className="text-xl font-medium text-yellow-400 mb-6">
                Affordable E-Commerce, Marketing, Automation.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ChevronRight className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300">
                    Access affordable digital transformation services tailored
                    for SMEs
                  </p>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300">
                    Grow your online presence with e-commerce solutions and
                    digital marketing
                  </p>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300">
                    Streamline operations with business process automation
                  </p>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300">
                    Harness fresh perspectives from motivated student talent
                  </p>
                </li>
              </ul>
              <Button className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-gray-900 shadow-lg hover:shadow-yellow-500/30 transition-all">
                Learn More
              </Button>
            </motion.div>
          </div>

          {/* <motion.div
            className="mt-16 bg-gradient-to-r from-blue-900/30 to-yellow-900/30 p-6 rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-1 mb-6 md:mb-0 md:mr-8">
                <h4 className="text-xl font-bold mb-2">Watch Our Impact</h4>
                <p className="text-gray-300">See how SBBSU is transforming businesses and student careers.</p>
              </div>
              <div className="flex-1 relative aspect-video w-full rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                  <p className="text-center text-gray-400">Video Testimonial Placeholder</p>
                </div>
              </div>
            </div>
          </motion.div> */}
        </div>
      </section>

      {/* Our Specialty Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our Specialty
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We specialize in providing comprehensive digital solutions powered
              by student talent and academic excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="Website & App Development"
              description="Custom websites, e-commerce platforms, and web applications built with modern technologies."
              icon="code"
              delay={0.1}
              color="blue"
              animation="slide-right"
            />
            <ServiceCard
              title="Academic Consultation"
              description=" personalized guidance session that helps students make informed academic and career-related decisions."
              icon="megaphone"
              delay={0.2}
              color="yellow"
              animation="slide-up"
            />
            <ServiceCard
              title="Hardware & Automation"
              description="Integrating advanced hardware systems with intelligent automation to optimize processes and drive innovation."
              icon="settings"
              delay={0.3}
              color="teal"
              animation="slide-down"
            />
            <ServiceCard
              title="Technical Events & Mentorship"
              description="Expert guidance and training in the latest digital tools and technologies."
              icon="users"
              delay={0.4}
              color="orange"
              animation="slide-left"
            />
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Tools & Technologies We Use
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                "Go-lang",
                "Cybersecurity",
                "Cloud-computing",
                "Kubernets",
                "React",
                "Express",
                "Github",
                "PostgreSQL",
                "Nodejs",
                "Tailwindcss",
                "Postman",
                "Pentesting",
              ].map((tool, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 p-4 rounded-lg flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <div className="h-12 w-12 rounded-full bg-gray-700 flex items-center justify-center mb-3">
                    <span className="text-lg font-bold text-white">
                      {tool.charAt(0)}
                    </span>
                  </div>
                  <span className="font-medium">{tool}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      {/* <EventsSection /> */}

      {/* Courses Catalog */}
      {/* <section className="py-24 px-4 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Courses Catalog</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expand your skills with our industry-focused courses taught by experts.
            </p>
          </motion.div>

          <Tabs defaultValue="web" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:w-1/2 lg:mx-auto mb-8">
              <TabsTrigger value="web">Web Development</TabsTrigger>
              <TabsTrigger value="marketing">Digital Marketing</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
            </TabsList>
            <TabsContent value="web" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <CourseCard
                  title="Web Development Basics"
                  description="Learn HTML, CSS, and JavaScript fundamentals for building modern websites."
                  duration="8 weeks"
                  format="Live + Recorded"
                  image="/placeholder.jpg"
                  animationType="fade"
                />
                <CourseCard
                  title="Full-Stack Development"
                  description="Master both frontend and backend technologies to build complete web applications."
                  duration="12 weeks"
                  format="Live Classes"
                  image="/placeholder.jpg"
                  animationType="slide"
                />
                <CourseCard
                  title="React.js Masterclass"
                  description="Build dynamic user interfaces with React, the most popular frontend library."
                  duration="10 weeks"
                  format="Live + Project Work"
                  image="/placeholder.jpg"
                  animationType="zoom"
                />
              </div>
            </TabsContent>
            <TabsContent value="marketing" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <CourseCard
                  title="Digital Marketing Fundamentals"
                  description="Learn the core principles of digital marketing strategies and implementation."
                  duration="6 weeks"
                  format="Live + Recorded"
                  image="/placeholder.jpg"
                  animationType="fade"
                />
                <CourseCard
                  title="SEO Mastery"
                  description="Optimize websites to rank higher in search engines and drive organic traffic."
                  duration="8 weeks"
                  format="Live Classes"
                  image="/placeholder.jpg"
                  animationType="slide"
                />
                <CourseCard
                  title="Social Media Marketing"
                  description="Create and manage effective social media campaigns across multiple platforms."
                  duration="7 weeks"
                  format="Live + Project Work"
                  image="/placeholder.jpg"
                  animationType="zoom"
                />
              </div>
            </TabsContent>
            <TabsContent value="design" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <CourseCard
                  title="UI/UX Design Fundamentals"
                  description="Learn the principles of user interface and experience design for digital products."
                  duration="8 weeks"
                  format="Live + Recorded"
                  image="/placeholder.jpg"
                  animationType="fade"
                />
                <CourseCard
                  title="Graphic Design for Web"
                  description="Create visually appealing graphics optimized for websites and digital platforms."
                  duration="6 weeks"
                  format="Live Classes"
                  image="/placeholder.jpg"
                  animationType="slide"
                />
                <CourseCard
                  title="Product Design Workshop"
                  description="End-to-end product design process from research to high-fidelity prototypes."
                  duration="10 weeks"
                  format="Live + Project Work"
                  image="/placeholder.jpg"
                  animationType="zoom"
                />
              </div>
            </TabsContent>
          </Tabs>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-blue-700 hover:bg-blue-800 text-white shadow-lg shadow-blue-700/30 transition-all hover:scale-105"
            >
              View All Courses <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section> */}

      {/* Success Stories */}
      {/* <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from our students and businesses about their transformative experiences.
            </p>
          </motion.div>

          <TestimonialCarousel />
        </div>
      </section> */}

      {/* Community Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-900/30 to-yellow-900/30 rounded-xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
              <p className="text-xl text-gray-300 mb-6">
                Connect with us in our Digital Innovators Hub. Share ideas, find
                collaborators, and stay updated on the latest opportunities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 transition-all cursor-pointer">
                  <svg
                    className="mr-2 h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z" />
                  </svg>
                  Join Discord Group
                </Button>
                <Button
                  variant="outline"
                  className="border-teal-500 text-teal-400 hover:bg-teal-500/10 transition-all cursor-pointer"
                >
                  <MessageSquare className="mr-2 h-4 w-4" /> WhatsApp Community
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 bg-gray-800 p-8 md:h-full flex items-center justify-center">
              <div className="border border-gray-700 rounded-lg p-4 w-full max-w-md">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                    <span className="font-bold">S</span>
                  </div>
                  <div>
                    <div className="font-medium">Esprit Systems Hub</div>
                    <div className="text-sm text-gray-400">
                      Recent discussion
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-700 rounded-lg text-sm">
                    <p>
                      We’ve just started and launched our very first website for
                      a local grocery store! Excited to share that it's already
                      helping boost their online presence.
                    </p>
                  </div>
                  <div className="p-3 bg-gray-700 rounded-lg text-sm">
                    <p>
                      We’re inviting enthusiastic students to join our very
                      first hackathon—perfect for learning and connecting with
                      the tech community!
                    </p>
                  </div>
                  <div className="p-3 bg-gray-700 rounded-lg text-sm">
                    <p>
                      Starting small but strong—check out our initial case study
                      on how a student team helped a restaurant begin automating
                      their reservation system.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 px-4 bg-gradient-to-b from-gray-900 to-gray-800"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Contact & Collaboration
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Reach out to learn more about our programs or discuss potential
              collaborations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ContactForm />
            </motion.div>

            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gray-800/50 p-8 rounded-xl shadow-xl h-full">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-blue-900/50 flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-blue-300" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <a
                        href="mailto:devashishsharma5000@gmail.com?subject=Inquiry%20from%20Website&body=Hello,%20I%20would%20like%20to%20know%20more%20about..."
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        devashishsharma5000@gmail.com
                      </a>
                      <Link className="text-gray-300"></Link>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-yellow-900/50 flex items-center justify-center mr-4">
                      <Building2 className="h-5 w-5 text-yellow-300" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Address</h4>
                      <p className="text-gray-300">
                        SBBSU Campus, Esprit Innovation Hub
                        <br />
                        Khiala, Jalandhar , 144030
                      </p>
                    </div>
                  </div>

                </div>

                <Link to="https://sbbsuniversity.ac.in/" target="_blank">
                  <div className="mt-10 pt-6 border-t border-gray-700 cursor-pointer">
                    <h4 className="font-medium mb-4">Institutional Partner</h4>
                    <div className="flex items-center">
                      <div className="h-12 w-12 bg-gray-700 rounded-md flex items-center justify-center mr-4">
                        <span className="font-bold text-sm">SBBSU</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-300">
                          Sant Baba Bhag Singh University
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          Official Institutional Partner
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
