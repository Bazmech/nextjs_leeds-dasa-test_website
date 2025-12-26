'use client';

import { motion } from 'framer-motion';
import { 
  Fish, Users, Trophy, Mail, BookOpen, Zap, 
  MapPin, Calendar, Clock, Star 
} from 'lucide-react';

const iconMap = {
  Fish,
  Users,
  Trophy,
  Mail,
  BookOpen,
  Zap,
  MapPin,
  Calendar,
  Clock,
  Star,
};

export default function FeatureCard({ feature, index = 0 }) {
  const Icon = iconMap[feature.icon] || Star;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group p-6 rounded-2xl bg-white border border-river-100 hover:border-river-200 hover:shadow-xl hover:shadow-river-950/5 transition-all duration-300"
    >
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sunset-400 to-sunset-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="font-display text-xl font-bold text-river-900 mb-3">
        {feature.title}
      </h3>
      <p className="text-river-600 leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
}

