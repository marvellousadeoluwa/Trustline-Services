import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { Award, CheckCircle2, TrendingUp, Users } from 'lucide-react';

export default function Proof() {
  return (
    <Section background="white" spacing="lg" className="bg-[#F9FAFB] py-20 lg:py-24 border-b border-slate-200/60">
      <Container size="xl">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-trust-blue text-xs font-semibold uppercase tracking-wider">
            Verified Industry Impact
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-[#0F2942] tracking-[-0.03em] leading-tight">
            Trusted Thinking, Proven in Public
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed tracking-[-0.015em]">
            Trustline is led by <strong>Eniola Ayo-Fagbuyi</strong>, Human Capital Strategist, whose regulatory frameworks and compensation analyses reach thousands of Nigerian business and HR leaders monthly.
          </p>

          {/* Brex-style Metric Trio */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Metric 1 */}
            <div className="bg-white rounded-xl border border-slate-200/80 p-8 text-center space-y-2 shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow-md">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Monthly Authority
              </span>
              <p className="text-4xl lg:text-5xl font-display font-bold text-[#0F2942] tracking-tight">
                9,000+
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Active monthly reach among Nigerian founders, CFOs, and people operations directors.
              </p>
            </div>

            {/* Metric 2 */}
            <div className="bg-white rounded-xl border border-slate-200/80 p-8 text-center space-y-2 shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow-md">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Audit Record
              </span>
              <p className="text-4xl lg:text-5xl font-display font-bold text-trust-blue tracking-tight">
                100%
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Clean audit standing with zero unresolved statutory penalties for compliant retainer clients.
              </p>
            </div>

            {/* Metric 3 */}
            <div className="bg-white rounded-xl border border-slate-200/80 p-8 text-center space-y-2 shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow-md">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Jurisdiction
              </span>
              <p className="text-4xl lg:text-5xl font-display font-bold text-[#0F2942] tracking-tight">
                36 States
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Serving corporate clients across Lagos (LIRS), Ogun (OGIRS), Abuja (FCT-IRS) and nationwide.
              </p>
            </div>
          </div>

          {/* Testimonial / Credibility Quote */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm max-w-2xl mx-auto space-y-3 text-left">
            <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed">
              &quot;Trustline restructured our entire 80-person payroll structure, aligned our PRA pension contributions, and conducted our first clean tax diagnostic without business disruption. It gave our board total peace of mind.&quot;
            </p>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-semibold text-[#0F2942]">Managing Director</span>
              <span className="text-slate-500 font-mono">Lagos-based Logistics SME (Series A)</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
