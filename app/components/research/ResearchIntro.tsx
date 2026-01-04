import React from 'react';
import AwardIcon from '../icons/award.svg';
import CheckCircleIcon from '../icons/check-circle.svg';
import ArrowRightIcon from '../icons/arrow-right-small.svg';
import ResearchBgIcon from '../icons/research-bg.svg';

export default function ResearchIntro() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Expert Research Services
              <br />
              for Informed Decisions
            </h1>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-600">
                At Consolution, we provide comprehensive research services that empower
                businesses to make data-driven decisions. Our expert team combines
                advanced methodologies with industry expertise to deliver actionable
                insights.
              </p>
             
            </div>

            <button 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ff3333] to-[#f97316] text-white px-8 py-3.5 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all hover:scale-105"
              style={{
                boxShadow: '0px 4px 6px #fed7aa, 0px 10px 15px #fed7aa',
              }}
            >
              Get Started Today
              <ArrowRightIcon className="w-3.5 h-3" style={{ color: '#ffffff' }} />
            </button>
          </div>

          {/* Right - Why Choose Card */}
          <div className="relative">
            {/* Background decoration */}
            <ResearchBgIcon className="absolute -top-12 -right-12 w-full h-auto opacity-50" style={{ color: 'rgba(255, 237, 213, 0.50)' }} />
            
            <div 
              className="relative bg-white rounded-2xl border border-gray-100 p-8 space-y-6"
              style={{
                boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.10), 0px 20px 25px rgba(0, 0, 0, 0.10)',
              }}
            >
              <AwardIcon className="w-5 h-5" style={{ color: '#ff3333' }} />
              
              <h3 className="text-2xl font-bold text-gray-900">
                Why Choose Our Research Services?
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <CheckCircleIcon className="w-3 h-2 flex-shrink-0" style={{ color: '#16a34a' }} />
                  <p className="text-base font-medium text-gray-700">
                    Expert team with years of research experience
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircleIcon className="w-3 h-2 flex-shrink-0" style={{ color: '#16a34a' }} />
                  <p className="text-base font-medium text-gray-700">
                    Advanced analytical tools and methodologies
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircleIcon className="w-3 h-2 flex-shrink-0" style={{ color: '#16a34a' }} />
                  <p className="text-base font-medium text-gray-700">
                    Customized solutions for your unique needs
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircleIcon className="w-3 h-2 flex-shrink-0" style={{ color: '#16a34a' }} />
                  <p className="text-base font-medium text-gray-700">
                    Timely delivery with actionable insights
                  </p>
                </div>
              </div>
            </div>
          </div>

         
        </div>
<div className="grid lg:grid-cols-1 pt-18 space-y-4 items-start">
          <p className="text-lg leading-relaxed text-gray-600">
                Whether you need market research, competitive analysis, or custom research
                solutions, we have the tools and expertise to help you stay ahead of the
                competition and identify new opportunities for growth.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                Our research services are designed to provide you with the clarity and
                confidence needed to navigate complex business challenges and capitalize
                on emerging trends.
              </p>
      </div>
      </div>
    </section>
  );
}