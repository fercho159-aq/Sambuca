"use client";

import { MapPin, Clock, Facebook } from "lucide-react";

const branches = [
    { 
        name: "Bar Sambuca San Ángel", 
        address: "Rio de la Magdalena 38, Tizapán San Ángel, Álvaro Obregón, 01000 CDMX", 
        hours: "Jue-Dom 6pm - 3am",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.331238478744!2d-99.2015386889814!3d19.35479088190302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff8a5d3c8f7b%3A0x294187985473063!2sBar%20Sambuca%20San%20%C3%81ngel!5e0!3m2!1sen!2sus!4v1716921858368!5m2!1sen!2sus",
        facebookUrl: "https://facebook.com/sambucasanangel"
    },
    { 
        name: "Sambuca Roma", 
        address: "Av. Yucatán 147, Roma Nte., Cuauhtémoc, 06700 CDMX", 
        hours: "Mar-Dom 5pm - 2am",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.772393319034!2d-99.16770078897999!3d19.42232988185799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff3b593414ab%3A0x1a459056f7336203!2sSambuca%20Roma!5e0!3m2!1sen!2sus!4v1716921915998!5m2!1sen!2sus",
        facebookUrl: "https://facebook.com/profile.php?id=100066643299654"
    },
    { 
        name: "Sambuca Copilco", 
        address: "Av. Pedro Henríquez Ureña 546, Los Reyes, Coyoacán, 04330 CDMX", 
        hours: "Todos los días 2pm - 12am",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.331238478744!2d-99.18349168898138!3d19.35479088190302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fffa488b901b%3A0x6b5a3e74e3a47a0!2sSambuca%20Copilco!5e0!3m2!1sen!2sus!4v1716921960233!5m2!1sen!2sus",
        facebookUrl: "https://facebook.com/profile.php?id=100080317183250"
    },
    { 
        name: "Bar Sambuca Cuauhtémoc", 
        address: "Claudio Bernard LOC COM, Doctores, Cuauhtémoc, 06720 CDMX", 
        hours: "Jue-Sab 7pm - 3am",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.69742012111!2d-99.14923708897992!3d19.42555098185528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fed528d2288d%3A0x33e5c94625293466!2sBar%20Sambuca%20Cuauht%C3%A9moc!5e0!3m2!1sen!2sus!4v1716922002381!5m2!1sen!2sus",
        facebookUrl: "https://facebook.com/profile.php?id=100071399785044"
    },
    { 
        name: "Sambuca Marina Nacional", 
        address: "Av. Marina Nacional 286, Anáhuac I Secc, Miguel Hidalgo, 11320 CDMX", 
        hours: "Vie-Sab 8pm - 4am",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.290558117183!2d-99.1843132889796!3d19.44318788184386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8ac9787a073%3A0x3733a7638972163b!2sSambuca%20Marina%20Nacional!5e0!3m2!1sen!2sus!4v1716922037418!5m2!1sen!2sus",
        facebookUrl: "https://facebook.com/profile.php?id=100064352935019"
    },
    { 
        name: "Sambuca Tlalpan - Coapa", 
        address: "Calz. de Tlalpan 3427, Sta. Úrsula Coapa, Coyoacán, 04650 CDMX", 
        hours: "Lun-Dom 1pm - 3am",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.590193158027!2d-99.14040888898234!3d19.30006248194464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0012bf16a087%3A0x623e592751f3807c!2sBar%20Sambuca%20Tlalpan%20-%20Coapa!5e0!3m2!1sen!2sus!4v1716922152861!5m2!1sen!2sus",
        facebookUrl: "https://facebook.com/profile.php?id=100075976017318"
    },
];

export function LocationsSection() {
    return (
        <section id="sucursales" className="py-20 px-4 bg-gradient-to-t from-pink-900/20 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase text-glow-primary inline-block pb-2">Encuentra tu Sede</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {branches.map((branch, idx) => (
              <div key={idx} className="bg-card/50 p-6 rounded-2xl border border-border/30 flex flex-col gap-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-3xl font-bold text-primary">{branch.name}</h3>
                    <a href={branch.facebookUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                      <Facebook size={24} />
                    </a>
                  </div>
                  <div className="flex items-start text-foreground/80">
                      <MapPin size={24} className="mr-3 mt-1 text-accent flex-shrink-0" />
                      <p>{branch.address}</p>
                  </div>
                  <div className="flex items-center text-foreground/80">
                      <Clock size={20} className="mr-3 text-accent flex-shrink-0" />
                      <p className="text-sm">{branch.hours}</p>
                  </div>
                </div>
                <div className="w-full h-64 rounded-lg overflow-hidden border-2 border-primary/50 box-glow-primary">
                  <iframe
                    src={branch.mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}
