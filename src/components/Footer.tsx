import React from 'react';
import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  BookOpen,
  FileText,
  Library,
} from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="space-y-16 pt-10 pb-8 px-4">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 justify-items-center">
          {/* Contact Us */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-xl font-bold text-red-900">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-red-900 flex-shrink-0" />
                <a
                  href="https://share.google.com/nri6J8HbXml6ad6oO"
                  className="text-red-900 hover:text-red-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VIT Chennai Campus
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-red-900 flex-shrink-0" />
                <a
                  href="tel:+919566009801"
                  className="text-red-900 hover:text-red-700 transition-colors"
                >
                  +91 95660 09801
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-red-900 flex-shrink-0" />
                <a
                  href="mailto:viteach.vitcc@gmail.com"
                  className="text-red-900 hover:text-red-700 transition-colors"
                >
                  viteach.vitcc@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Must Visit */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-xl font-bold text-red-900">Must Visit</h3>
            <div className="space-y-3">
              <Link
                href="/viteacher-tales"
                className="text-red-900 hover:text-red-700 transition-colors flex items-center gap-3"
              >
                <BookOpen className="w-4 h-4 flex-shrink-0" />
                VITeacher Tales
              </Link>
              <Link
                href="/blogs"
                className="text-red-900 hover:text-red-700 transition-colors flex items-center gap-3"
              >
                <FileText className="w-4 h-4 flex-shrink-0" />
                Blogs
              </Link>
              <Link
                href="/content"
                className="text-red-900 hover:text-red-700 transition-colors flex items-center gap-3"
              >
                <Library className="w-4 h-4 flex-shrink-0" />
                Content
              </Link>
            </div>
          </div>

          {/* Follow Us */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-xl font-bold text-red-900">Follow Us</h3>
            <div className="space-y-3">
              <a
                href="https://discord.gg/viteach"
                className="text-red-900 hover:text-red-700 transition-colors flex items-center gap-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                Discord
              </a>
              <a
                href="https://instagram.com/viteach"
                className="text-red-900 hover:text-red-700 transition-colors flex items-center gap-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-4 h-4 flex-shrink-0" />
                Instagram
              </a>
              <a
                href="https://linkedin.com/company/viteach"
                className="text-red-900 hover:text-red-700 transition-colors flex items-center gap-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4 flex-shrink-0" />
                LinkedIn
              </a>
              <a
                href="https://facebook.com/viteach"
                className="text-red-900 hover:text-red-700 transition-colors flex items-center gap-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-4 h-4 flex-shrink-0" />
                Facebook
              </a>
              <a
                href="https://youtube.com/@viteach"
                className="text-red-900 hover:text-red-700 transition-colors flex items-center gap-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="w-4 h-4 flex-shrink-0" />
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-red-200 pt-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-sm text-gray-500 space-y-2">
            <p>
              Made with ❤️ by{' '}
              <a
                href="https://github.com/VITeach"
                className="text-red-900 hover:text-red-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                VITeach Tech Team
              </a>
            </p>
            <p>Copyright © 2025 VITeach. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
