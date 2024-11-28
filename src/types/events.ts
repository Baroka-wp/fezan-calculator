export interface PersonalEvent {
  id: string;
  title: string;
  date: Date;
  description?: string;
  type: 'task' | 'reminder' | 'appointment';
  completed?: boolean;
}

export interface DayPlan {
  date: Date;
  events: PersonalEvent[];
  notes?: string;
}