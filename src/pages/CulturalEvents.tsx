import Header from "../components/Layout/Header"
import Footer from "../components/Layout/Footer"
import { motion } from 'framer-motion';

type EventType = 'Festival' | 'Cérémonie' | 'Concert';

interface EventActivity {
  title: string;
  description: string;
  time?: string;
  location: string;
}

interface Event {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  type: EventType;
  description: string;
  location: string;
  imageUrl?: string;
  website: string;
  activities: EventActivity[];
}

const VODUN_DAYS: Event = {
  id: 1,
  title: "Vodun Days 2025",
  startDate: "2025-01-09",
  endDate: "2025-01-11",
  type: "Festival",
  description: "Un événement international majeur célébrant les arts, la culture et la spiritualité Vodun. Les Vodun Days visent à promouvoir et valoriser le patrimoine culturel béninois, en mettant en lumière la spiritualité Vodun et son influence sur les arts et traditions locales.",
  location: "Ouidah, Bénin",
  imageUrl: "https://vodundays.bj/wp-content/uploads/2024/12/Video-homepage.mp4",
  website: "https://vodundays.bj",
  activities: [
    {
      title: "Animations en journée",
      description: "Sorties de couvents et performances traditionnelles",
      location: "Place Maro, Esplanade du Fort Français, Temple des Pythons, Forêt sacrée de Kpassè"
    },
    {
      title: "Grande cérémonie Vodun",
      description: "Cérémonie rituelle réunissant dignitaires et fidèles pour honorer les divinités Vodun",
      time: "10 janvier 2025",
      location: "Site sacré de Ouidah"
    },
    {
      title: "Concerts et spectacles",
      description: "Performances d'artistes de renom comme Kassav', Magic System et Toofan",
      location: "Plage de Ouidah"
    },
    {
      title: "Village des Vodun Days",
      description: "Stands d'artisanat, gastronomie et animations culturelles",
      location: "Centre-ville de Ouidah"
    },
    {
      title: "Espace camping",
      description: "Zone de camping aménagée pour une expérience immersive",
      location: "Proximité des activités principales"
    }
  ]
};

function EventCard({ event }: { event: Event }) {
  return (
    <div className="relative w-full min-h-screen">
      <div className="sticky top-0 w-full h-screen">
        {event.imageUrl?.endsWith('.mp4') ? (
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={event.imageUrl} type="video/mp4" />
          </video>
        ) : (
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: event.imageUrl ? `url(${event.imageUrl})` : 'url(/images/default-event.jpg)',
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
        
        <div className="absolute inset-0 overflow-y-auto">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="space-y-8">
                <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-lg">
                  {event.type}
                </span>
                
                <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white [text-shadow:_2px_2px_8px_rgb(0_0_0_/_60%)]">
                  {event.title}
                </h2>
                
                <p className="text-lg md:text-xl text-white/90 leading-relaxed [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">
                  {event.description}
                </p>

                <div className="flex flex-wrap gap-6 text-base md:text-lg items-center text-white/90">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">📅</span>
                    <span>Du {new Date(event.startDate).toLocaleDateString('fr-FR')} au {new Date(event.endDate).toLocaleDateString('fr-FR')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">📍</span>
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">Programme des festivités</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {event.activities.map((activity, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                      >
                        <h4 className="text-lg font-semibold mb-2 text-white">{activity.title}</h4>
                        <p className="text-white/80 mb-4">{activity.description}</p>
                        <div className="flex items-center gap-2 text-white/70">
                          <span className="text-base">📍</span>
                          <span>{activity.location}</span>
                        </div>
                        {activity.time && (
                          <div className="flex items-center gap-2 text-white/70 mt-2">
                            <span className="text-base">🕒</span>
                            <span>{activity.time}</span>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <a 
                    href={event.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full text-lg transition-all hover:scale-105"
                  >
                    Voir le site officiel
                    <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CulturalEvents() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header/>
      <section className="relative h-[50vh] w-full overflow-hidden bg-gradient-to-r from-indigo-900 to-purple-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
              Événements Culturels
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light text-white/90 leading-relaxed">
              Plongez dans la richesse de notre patrimoine culturel
            </p>
          </motion.div>
        </div>
      </section>
      <main className="flex-grow">
        <div className="pt-12">
          <EventCard event={VODUN_DAYS} />
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default CulturalEvents