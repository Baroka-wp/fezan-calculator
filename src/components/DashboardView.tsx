import { motion } from 'framer-motion';
import { DateSelector } from './DateSelector';
import { FezanResult } from './FezanResult';
import { PersonalEvents } from './PersonalEvents';
import type { FezanInfo } from '../types/fezan';
import type { PersonalEvent } from '../types/events';

interface DashboardViewProps {
  selectedDate: Date;
  fezanInfo: FezanInfo | null;
  events: PersonalEvent[];
  onDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAddEvent: (event: PersonalEvent) => void;
}

export const DashboardView = ({
  selectedDate,
  fezanInfo,
  events,
  onDateChange,
  onAddEvent
}: DashboardViewProps) => {
  return (
    <motion.div 
      className="flex-1 p-6 space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <DateSelector 
            selectedDate={selectedDate}
            onDateChange={onDateChange}
          />
          <PersonalEvents 
            events={events}
            onAddEvent={onAddEvent}
            selectedDate={selectedDate}
          />
        </div>
        {fezanInfo && <FezanResult fezanInfo={fezanInfo} />}
      </div>
    </motion.div>
  );
};