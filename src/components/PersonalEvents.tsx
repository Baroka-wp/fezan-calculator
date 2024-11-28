import { useState } from 'react';
import { Plus, CheckCircle2, Clock, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import type { PersonalEvent } from '../types/events';

interface PersonalEventsProps {
  events: PersonalEvent[];
  selectedDate: Date;
  onAddEvent: (event: PersonalEvent) => void;
}

export const PersonalEvents = ({ events, selectedDate, onAddEvent }: PersonalEventsProps) => {
  const [showForm, setShowForm] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    type: 'task' as const,
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddEvent({
      id: Date.now().toString(),
      date: selectedDate,
      ...newEvent
    });
    setNewEvent({ title: '', type: 'task', description: '' });
    setShowForm(false);
  };

  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-xl p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Mes Événements</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="p-2 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="mb-6 space-y-4">
          <input
            type="text"
            placeholder="Titre de l'événement"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-200"
          />
          <select
            value={newEvent.type}
            onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value as any })}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-200"
          >
            <option value="task">Tâche</option>
            <option value="reminder">Rappel</option>
            <option value="appointment">Rendez-vous</option>
          </select>
          <textarea
            placeholder="Description (optionnel)"
            value={newEvent.description}
            onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-200"
          />
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Ajouter
          </button>
        </form>
      )}

      <div className="space-y-4">
        {events.length === 0 ? (
          <p className="text-gray-500 text-center py-4">
            Aucun événement pour cette date
          </p>
        ) : (
          events.map((event) => (
            <motion.div
              key={event.id}
              className="p-4 rounded-lg bg-gray-50 flex items-start gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {event.type === 'task' && <CheckCircle2 className="h-5 w-5 text-green-500" />}
              {event.type === 'reminder' && <Clock className="h-5 w-5 text-blue-500" />}
              {event.type === 'appointment' && <Calendar className="h-5 w-5 text-purple-500" />}
              <div>
                <h3 className="font-medium">{event.title}</h3>
                {event.description && (
                  <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                )}
              </div>
            </motion.div>
          ))
        )}
      </div>
    </motion.div>
  );
};