import React, { useEffect, useState } from 'react';
import { PROFILE, EXPERIENCE_DATA, SOCIALS, PROJECTS } from './constants';
import ExperienceItem from './components/ExperienceItem';
import { Icon } from './components/Icons';
import { GitHubCalendar } from 'react-github-calendar';

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Keep only contributions from year 2026
  const selectYear2026 = (contributions: any[]) => {
    return (contributions || []).filter((c: any) => {
      const d = new Date(c.date);
      return d.getFullYear() === 2026;
    });
  };

  // Calendar theme: black & white mapping for light and dark
  const calendarTheme = {
    dark: ['#000000', '#1f1f1f', '#3f3f3f', '#bfbfbf', '#ffffff'],
  };

  return (
    <div className={`min-h-screen bg-background text-primary antialiased selection:bg-primary selection:text-background transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>

      <main className="max-w-[640px] mx-auto px-6 pt-10 sm:pt-12 pb-24 sm:pb-32 space-y-24 relative">

        {/* Header / Profile */}
        <header className="space-y-8 relative">

          {/* Banner / Thumbnail */}
          <div className="w-full h-36 sm:h-44 rounded-md overflow-hidden relative group cursor-pointer transition-transform duration-500">
            {PROFILE.bannerUrl ? (
              <img
                src={PROFILE.bannerUrl}
                alt="Banner"
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                className="w-full h-full"
                style={{
                  background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #1a1a2e 100%)',
                }}
              />
            )}
            {/* Noise texture overlay */}
            <div
              className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                backgroundSize: '128px 128px',
              }}
            />
            {/* Subtle bottom gradient for smooth transition */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent" />
          </div>

          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <h1 className="text-3xl font-medium tracking-tight text-primary font-sans">
                {PROFILE.name}
              </h1>
              <p className="text-base text-secondary font-mono">
                {PROFILE.role} <span className="text-border px-2">/</span> {PROFILE.location}
              </p>
            </div>

          </div>

          <p className="text-base text-secondary/90 leading-relaxed max-w-lg">
            {PROFILE.bio}
          </p>

          <div className="flex gap-5 pt-2">
            {SOCIALS.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
                aria-label={social.platform}
              >
                <Icon name={social.iconName} size={20} />
              </a>
            ))}
          </div>
        </header>

        {/* Experience Section */}
        <section>
          <h2 className="text-sm font-medium text-primary mb-12 font-sans">
            Experience
          </h2>
          <div className="space-y-12 relative md:ml-0">
            {EXPERIENCE_DATA.map((exp) => (
              <ExperienceItem key={exp.id} data={exp} />
            ))}
          </div>
        </section>


        {/* Activity Section */}
        <section>
          <h2 className="text-sm font-medium text-primary mb-8 font-sans">
            Contributions
          </h2>
          <GitHubCalendar
            username="sanketttt26"
            transformData={selectYear2026}
            hideColorLegend
            labels={{ totalCount: '{{count}} contributions in 2026' }}
            theme={calendarTheme}
          />
        </section>

        {/* Footer */}
        <footer className="pt-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 text-sm text-secondary font-mono">
          <p>© {new Date().getFullYear()} {PROFILE.name.split(' ')[0]}</p>
          <div className="flex gap-6">
            <a href="https://drive.google.com/file/d/1C-wYuihg9SMWfgO-cnRMSJN8SiRMbvHo/view" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Resume</a>
            <a href="mailto:sanketpawarsp7781@gmail.com" className="hover:text-primary transition-colors">Email</a>
          </div>
        </footer>

      </main>
    </div>
  );
}

export default App;
