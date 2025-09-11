import Image from 'next/image';
import Link from 'next/link';
import * as motion from 'motion/react-client';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ProfileCardProps {
  name?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  githubUrl?: string;
  twitterUrl?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
  className?: string;
}

export function ProfileCard(props: ProfileCardProps) {
  const {
    name,
    title,
    description,
    imageUrl,
    githubUrl,
    twitterUrl,
    linkedinUrl,
    instagramUrl,
    className,
  } = props;

  const socialIcons = [
    { icon: Github, url: githubUrl, label: 'GitHub' },
    { icon: Twitter, url: twitterUrl, label: 'Twitter' },
    { icon: Linkedin, url: linkedinUrl, label: 'LinkedIn' },
    { icon: Instagram, url: instagramUrl, label: 'Instagram' },
  ];

  return (
    <div
      className={cn(
        'w-full max-w-4xl mx-auto px-4 border-red-100 border-2 p-4 rounded-4xl bg-white',
        className
      )}
    >
      {/* Mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-sm mx-auto text-center bg-transparent"
      >
        {/* Square Mobile Image */}
        <div className="w-full aspect-square bg-gray-200 dark:bg-gray-700 rounded-3xl overflow-hidden mb-6 flex items-center justify-center">
          <Image
            src={imageUrl || ''}
            alt={
              name ? `${name}${title ? ` — ${title}` : ''}` : 'Profile photo'
            }
            width={400}
            height={400}
            className="w-full h-full object-cover"
            draggable={false}
            priority
          />
        </div>

        <div className="px-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {name}
          </h2>

          <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-4">
            {title}
          </p>

          <p className="text-black dark:text-white text-sm leading-relaxed mb-6">
            {description}
          </p>

          <div className="flex justify-center space-x-4">
            {socialIcons.map(({ icon: Icon, url, label }) => (
              <Link
                key={label}
                href={url || ''}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 bg-primary rounded-full flex items-center justify-center transition-colors hover:bg-primary/75 ${url ? 'opacity-100' : 'hidden'}`}
                aria-label={label}
              >
                <Icon className="w-5 h-5 text-white dark:text-gray-900" />
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
