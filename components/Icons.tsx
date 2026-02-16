import React from 'react';
import { Github, Mail, ExternalLink, ChevronDown, ChevronUp, Box, Sun, Moon } from 'lucide-react';

export const Icons = {
  Github,
  Mail,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Box,
  Sun,
  Moon
};

export type IconName = keyof typeof Icons;

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, size = 20, className }) => {
  const LucideIcon = Icons[name];
  if (!LucideIcon) return null;
  return <LucideIcon size={size} className={className} />;
};