import { Info, Clock, Star, AlertTriangle } from 'lucide-react';

export const QuickFacts = () => {
  return (
    <div className="bg-indigo-50 rounded-xl p-4">
      <h3 className="text-sm font-semibold text-indigo-900 mb-3 flex items-center gap-2">
        <Info className="h-4 w-4" />
        Points Clés du FEZAN
      </h3>
      <ul className="space-y-2 text-sm text-indigo-700">
        <li className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          Cycle de 9 jours
        </li>
        <li className="flex items-center gap-2">
          <Star className="h-4 w-4" />
          5 jours favorables
        </li>
        <li className="flex items-center gap-2">
          <AlertTriangle className="h-4 w-4" />
          4 jours défavorables
        </li>
      </ul>
    </div>
  );
};