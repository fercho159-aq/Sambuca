"use client";

import { MapPin, Clock, Facebook, Navigation } from "lucide-react";

const branches = [
  {
    name: "Bar Sambuca San Ángel",
    address: "Rio de la Magdalena 38, Tizapán San Ángel, Álvaro Obregón, 01000 CDMX",
    hours: "Jue-Dom 6pm - 3am",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.331238478744!2d-99.2015386889814!3d19.35479088190302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff8a5d3c8f7b%3A0x294187985473063!2sBar%20Sambuca%20San%20%C3%81ngel!5e0!3m2!1sen!2sus!4v1716921858368!5m2!1sen!2sus&output=embed",
    mapsUrl: "https://maps.app.goo.gl/PGCCfZAgnQUQKW6LA",
    facebookUrl: "https://www.facebook.com/BarSambucaOficial",
  },
  {
    name: "Sambuca Copilco",
    address: "Av. Pedro Henríquez Ureña 546, Los Reyes, Coyoacán, 04330 CDMX",
    hours: "Todos los días 2pm - 12am",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.331238478744!2d-99.18349168898138!3d19.35479088190302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fffa488b901b%3A0x6b5a3e74e3a47a0!2sSambuca%20Copilco!5e0!3m2!1sen!2sus!4v1716921960233!5m2!1sen!2sus&output=embed",
    mapsUrl: "https://maps.app.goo.gl/44MK8bGXDi95rdhZ6",
    facebookUrl: "https://www.facebook.com/BarSambucaOficial",
  },
  {
    name: "Bar Sambuca Cuauhtémoc",
    address: "Claudio Bernard LOC COM, Doctores, Cuauhtémoc, 06720 CDMX",
    hours: "Jue-Sab 7pm - 3am",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.69742012111!2d-99.14923708897992!3d19.42555098185528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fed528d2288d%3A0x33e5c94625293466!2sBar%20Sambuca%20Cuauht%C3%A9moc!5e0!3m2!1sen!2sus!4v1716922002381!5m2!1sen!2sus&output=embed",
    mapsUrl: "https://maps.app.goo.gl/DjJftxeU3qtERKFPA",
    facebookUrl: "https://www.facebook.com/BarSambucaOficial",
  },
  {
    name: "Bar Sambuca Roma",
    address: "Colonia Roma, Cuauhtémoc, CDMX",
    hours: "Jue-Sab 7pm - 3am",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.9!2d-99.16!3d19.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSambuca%20Roma!5e0!3m2!1ses!2smx&output=embed",
    mapsUrl: "https://maps.app.goo.gl/bkfyJuo1sG8SM8is5",
    facebookUrl: "https://www.facebook.com/BarSambucaOficial",
  },
];

export function LocationsSection() {
  return (
    <section id="sucursales" className="py-20 px-4 bg-sambuca-surface">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-headline tracking-wider text-white inline-block pb-3 relative">
            Encuentra tu Sede
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-sambuca-lime rounded-full" />
          </h2>
        </div>

        {/* Cards grid: 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {branches.map((branch, idx) => (
            <div
              key={idx}
              className="bg-sambuca-surface-light border-l-4 border-sambuca-lime rounded-lg p-6 flex flex-col gap-5 transition-all duration-300 hover:shadow-lg hover:shadow-sambuca-lime/5"
            >
              {/* Branch name */}
              <h3 className="text-xl font-bold text-white">{branch.name}</h3>

              {/* Hours badge */}
              <div className="inline-flex items-center gap-2 w-fit">
                <Clock size={14} className="text-sambuca-purple" />
                <span className="text-xs font-medium text-sambuca-purple bg-sambuca-purple/15 px-3 py-1 rounded-full">
                  {branch.hours}
                </span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin size={16} className="text-sambuca-lime flex-shrink-0 mt-0.5" />
                <p>{branch.address}</p>
              </div>

              {/* Google Map embed */}
              <div className="w-full h-48 rounded-md overflow-hidden">
                <iframe
                  src={branch.mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Action links */}
              <div className="flex items-center gap-4 mt-auto">
                <a
                  href={branch.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium border border-sambuca-lime text-sambuca-lime px-4 py-2 rounded-md transition-all duration-300 hover:bg-sambuca-lime hover:text-sambuca-bg"
                >
                  <Navigation size={12} />
                  Cómo llegar
                </a>
                <a
                  href={branch.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-gray-400 transition-colors duration-300 hover:text-sambuca-pink"
                >
                  <Facebook size={14} />
                  Ver en Facebook
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
