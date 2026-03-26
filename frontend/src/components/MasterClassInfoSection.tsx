import { CalendarDays, Check, Clock3, MonitorPlay, Pin, Users } from "lucide-react";

export default function MasterClassInfoSection() {
  return (
    <section
      className="relative overflow-hidden py-10 sm:py-12 text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/junta.jpg')" }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(7, 26, 66, 0.82)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
          MASTER CLASS EXCLUSIVA
        </h2>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
            <h3 className="text-2xl font-black leading-tight sm:text-3xl">
              Teoría de Restricciones aplicada al negocio real
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-blue-100 sm:text-base">
              Diseñada para gerentes, ingenieros y responsables de operación que
              necesitan resultados rápidos, medibles y sostenibles.
            </p>

            <ul className="mt-5 space-y-3">
              <li className="flex items-start gap-2 rounded-xl border border-white/15 bg-slate-900/30 px-3 py-2">
                <Pin size={16} className="mt-0.5 shrink-0 text-white" />
                <span className="text-sm sm:text-base">Administración de Proyectos</span>
              </li>
              <li className="flex items-start gap-2 rounded-xl border border-white/15 bg-slate-900/30 px-3 py-2">
                <Pin size={16} className="mt-0.5 shrink-0 text-white" />
                <span className="text-sm sm:text-base">Programación de Producción</span>
              </li>
              <li className="flex items-start gap-2 rounded-xl border border-white/15 bg-slate-900/30 px-3 py-2">
                <Pin size={16} className="mt-0.5 shrink-0 text-white" />
                <span className="text-sm sm:text-base">Sistemas de Soporte para Decisiones</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
            <div className="rounded-2xl border border-cyan-300/40 bg-gradient-to-r from-cyan-400/20 via-white/10 to-blue-500/20 p-4 shadow-[0_0_30px_rgba(103,232,249,0.14)]">
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-white/15 p-2">
                    <CalendarDays size={20} className="text-cyan-200" />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-cyan-100">
                      Fecha Confirmada
                    </p>
                    <p className="mt-1 text-sm font-bold uppercase tracking-[0.22em] text-white/85 sm:text-base">
                      Abril 2026
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-white/20 bg-white/12 px-3 py-4 text-center shadow-[0_10px_24px_rgba(15,23,42,0.18)]">
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-cyan-100">
                      Domingo
                    </p>
                    <p className="mt-2 text-4xl font-black leading-none text-white sm:text-5xl">6</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-white/75">
                      Abril
                    </p>
                  </div>

                  <div className="rounded-2xl border border-cyan-200/50 bg-cyan-300/15 px-3 py-4 text-center shadow-[0_10px_24px_rgba(34,211,238,0.16)]">
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-cyan-100">
                      Lunes
                    </p>
                    <p className="mt-2 text-4xl font-black leading-none text-white sm:text-5xl">7</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                      Abril
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/20 bg-white/12 px-3 py-4 text-center shadow-[0_10px_24px_rgba(15,23,42,0.18)]">
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-cyan-100">
                      Martes
                    </p>
                    <p className="mt-2 text-4xl font-black leading-none text-white sm:text-5xl">8</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-white/75">
                      Abril
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/25 px-3 py-1.5 text-sm font-bold text-white/90">
                    <span>3 sesiones consecutivas</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-amber-100">
                    <Clock3 size={14} className="shrink-0" />
                    <span>Cupos limitados</span>
                  </div>
                </div>
              </div>
            </div>

            <ul className="mt-5 space-y-3">
              <li className="flex items-start gap-2 text-base font-semibold sm:text-lg">
                <CalendarDays size={18} className="mt-0.5 shrink-0 text-cyan-200" />
                <span>3 días consecutivos de sesiones intensivas</span>
              </li>
              <li className="flex items-start gap-2 text-base font-semibold sm:text-lg">
                <MonitorPlay size={18} className="mt-0.5 shrink-0 text-cyan-200" />
                <span>Modalidad online en vivo</span>
              </li>
              <li className="flex items-start gap-2 text-base font-semibold sm:text-lg">
                <Users size={18} className="mt-0.5 shrink-0 text-cyan-200" />
                <span>Ideal para equipos de operación y liderazgo</span>
              </li>
            </ul>

            <ul className="mt-5 grid grid-cols-2 gap-2 border-t border-white/25 pt-4">
              <li className="flex items-center gap-2 rounded-lg border border-white/20 bg-slate-900/30 px-3 py-2 text-xs sm:text-sm">
                <Check size={14} className="shrink-0 text-white" />
                <span>3 sesiones intensivas</span>
              </li>
              <li className="flex items-center gap-2 rounded-lg border border-white/20 bg-slate-900/30 px-3 py-2 text-xs sm:text-sm">
                <Check size={14} className="shrink-0 text-white" />
                <span>Enfoque práctico</span>
              </li>
              <li className="flex items-center gap-2 rounded-lg border border-white/20 bg-slate-900/30 px-3 py-2 text-xs sm:text-sm">
                <Check size={14} className="shrink-0 text-white" />
                <span>Casos reales</span>
              </li>
              <li className="flex items-center gap-2 rounded-lg border border-white/20 bg-slate-900/30 px-3 py-2 text-xs sm:text-sm">
                <Check size={14} className="shrink-0 text-white" />
                <span>Cupo limitado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-base font-black uppercase tracking-[0.22em] text-orange-300 drop-shadow-[0_6px_18px_rgba(249,115,22,0.28)] sm:text-lg">
            Inscripciones abiertas por tiempo limitado
          </p>
          <p className="mt-3 text-lg font-black leading-snug text-orange-200 drop-shadow-[0_6px_18px_rgba(251,146,60,0.22)] sm:text-2xl">
            Reserva hoy tu lugar para la masterclass del 6, 7 y 8 de abril.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdX0mZOD97vmZqPaA2DgrlIgOrynLuLP_GzjTBJenfUReiEUw/viewform?usp=send_form"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-xl bg-white px-7 py-3 text-sm font-extrabold text-[#0d2f6f] shadow-[0_12px_35px_rgba(255,255,255,0.2)] transition hover:-translate-y-0.5 hover:bg-slate-100 sm:text-base"
          >
            Regístrate antes de que se llene
          </a>
        </div>
      </div>
    </section>
  );
}
