'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CalendarIcon from '../icons/calendar-small.svg';
import ArrowLeftIcon from '../icons/arrow-left.svg';

// Article data - in a real app, this would come from a CMS or API
const articles: Record<string, {
  category: string;
  image: string | null;
  date: string;
  readTime: string;
  title: string;
  description: string;
  content: string;
}> = {
  'the-future-of-business-consulting': {
    category: 'INDUSTRY ANALYSIS',
    image: '/images/insights/featured-insight.jpg',
    date: 'March 20, 2024',
    readTime: '10 min read',
    title: 'The Future of Business Consulting',
    description: 'As businesses navigate an increasingly complex landscape, consulting services are evolving to meet new challenges. This comprehensive analysis explores emerging trends, technologies, and methodologies shaping the future of business consulting.',
    content: `
      <h2>The Evolving Landscape of Business Consulting</h2>
      <p>The business consulting industry stands at a pivotal crossroads. As organizations face unprecedented challenges from digital transformation, global market shifts, and changing workforce dynamics, the role of consultants is evolving dramatically. Today's consultants must be more than advisors—they need to be strategic partners who can navigate complexity and drive real, measurable change.</p>
      
      <h2>Key Trends Reshaping the Industry</h2>
      <p>Several major trends are fundamentally transforming how consulting services are delivered and consumed:</p>
      <ul>
        <li><strong>Digital-First Approach:</strong> Modern consulting engagements increasingly leverage digital tools, data analytics, and AI-powered insights to deliver faster, more accurate recommendations</li>
        <li><strong>Specialized Expertise:</strong> Clients are seeking consultants with deep domain knowledge in specific industries and emerging technologies rather than generalists</li>
        <li><strong>Value-Based Pricing:</strong> The traditional hourly billing model is giving way to outcome-based and value-driven pricing structures</li>
        <li><strong>Remote Collaboration:</strong> Virtual consulting models have proven effective, enabling global talent access and reducing engagement costs</li>
        <li><strong>Continuous Partnership:</strong> One-off projects are being replaced by long-term strategic partnerships with ongoing support</li>
      </ul>
      
      <h2>Technology's Central Role</h2>
      <p>Technology is no longer just a tool for consultants—it's becoming central to the consulting value proposition. Advanced analytics, machine learning, and automation are enabling consultants to:</p>
      <ul>
        <li>Process and analyze vast amounts of data to uncover insights that would be impossible to identify manually</li>
        <li>Build predictive models that help clients anticipate market changes and make proactive decisions</li>
        <li>Automate routine analysis and reporting, allowing consultants to focus on strategic thinking</li>
        <li>Deliver real-time dashboards and monitoring systems that provide continuous value beyond project completion</li>
      </ul>
      
      <h2>The Human Element Remains Critical</h2>
      <p>Despite increasing automation and AI capabilities, the human element of consulting remains irreplaceable. Successful consultants of the future will excel at:</p>
      <ul>
        <li><strong>Strategic Thinking:</strong> Synthesizing complex information into actionable strategies</li>
        <li><strong>Change Management:</strong> Helping organizations navigate the human side of transformation</li>
        <li><strong>Relationship Building:</strong> Developing trust and credibility with stakeholders at all levels</li>
        <li><strong>Creative Problem-Solving:</strong> Finding innovative solutions to unique challenges</li>
      </ul>
      
      <h2>Sustainability and Social Responsibility</h2>
      <p>Modern consulting must incorporate sustainability and social responsibility into every engagement. Clients increasingly expect consultants to help them achieve business goals while making positive impacts on society and the environment. This includes guidance on ESG (Environmental, Social, and Governance) initiatives, sustainable business models, and responsible growth strategies.</p>
      
      <h2>Preparing for What's Next</h2>
      <p>The consulting firms and independent consultants who will thrive in the coming years are those who:</p>
      <ul>
        <li>Continuously invest in learning new technologies and methodologies</li>
        <li>Build diverse teams with complementary skills and perspectives</li>
        <li>Develop flexible service models that can adapt to client needs</li>
        <li>Maintain a focus on delivering measurable, sustainable results</li>
        <li>Foster genuine partnerships built on trust and shared success</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>The future of business consulting is bright for those who embrace change and evolution. By combining cutting-edge technology with deep human expertise, consultants can deliver unprecedented value to their clients. The key is to remain adaptable, continuously learn, and never lose sight of the fundamental goal: helping businesses succeed in an ever-changing world.</p>
      
      <p>As we move forward, the most successful consultants will be those who view themselves not just as problem-solvers, but as partners in their clients' long-term success—bringing together technology, expertise, and genuine commitment to drive transformative results.</p>
    `,
  },
  'ai-integration-in-modern-workflow': {
    category: 'TECHNOLOGY',
    image: '/images/insights/ai-integration.svg',
    date: 'Mar 18, 2024',
    readTime: '5 min read',
    title: 'AI Integration in Modern Workflow',
    description: 'Discover how artificial intelligence is reshaping daily operations and boosting productivity across sectors.',
    content: `
      <h2>The Rise of AI in Business Operations</h2>
      <p>Artificial intelligence is no longer a futuristic concept—it's here, transforming how businesses operate on a daily basis. From automating routine tasks to providing deep insights from data analysis, AI is becoming an indispensable tool for modern organizations.</p>
      
      <h2>Key Benefits of AI Integration</h2>
      <p>Organizations that have successfully integrated AI into their workflows report significant improvements in productivity, accuracy, and decision-making capabilities. Here are some of the key benefits:</p>
      <ul>
        <li><strong>Enhanced Efficiency:</strong> AI automates repetitive tasks, freeing up employees to focus on strategic work</li>
        <li><strong>Data-Driven Insights:</strong> Machine learning algorithms can process vast amounts of data to uncover patterns and trends</li>
        <li><strong>Improved Customer Experience:</strong> AI-powered chatbots and recommendation systems provide personalized service 24/7</li>
        <li><strong>Cost Reduction:</strong> Automation reduces operational costs while maintaining or improving quality</li>
      </ul>
      
      <h2>Implementation Strategies</h2>
      <p>Successfully integrating AI requires careful planning and execution. Start with clearly defined use cases and measurable goals. Invest in training your team to work alongside AI tools, and ensure you have the necessary data infrastructure in place.</p>
      
      <h2>Looking Ahead</h2>
      <p>As AI technology continues to evolve, its impact on business operations will only grow. Organizations that embrace AI now will be better positioned to compete in an increasingly digital marketplace.</p>
    `,
  },
  'strategic-planning-for-q2-growth': {
    category: 'STRATEGY',
    image: '/images/insights/strategic-planning.svg',
    date: 'Mar 15, 2024',
    readTime: '8 min read',
    title: 'Strategic Planning for Q2 Growth',
    description: 'Key strategies to align your team and resources for maximum impact in the upcoming quarter.',
    content: `
      <h2>Setting the Foundation for Success</h2>
      <p>As we enter Q2, it's crucial to reassess your strategic priorities and ensure your team is aligned with organizational goals. Effective strategic planning can make the difference between incremental progress and breakthrough results.</p>
      
      <h2>Essential Planning Components</h2>
      <p>A comprehensive Q2 strategy should include:</p>
      <ul>
        <li><strong>Clear Objectives:</strong> Define specific, measurable goals for the quarter</li>
        <li><strong>Resource Allocation:</strong> Ensure you have the right people and tools in place</li>
        <li><strong>Risk Assessment:</strong> Identify potential obstacles and develop mitigation strategies</li>
        <li><strong>Performance Metrics:</strong> Establish KPIs to track progress and make data-driven adjustments</li>
      </ul>
      
      <h2>Aligning Your Team</h2>
      <p>Communication is key to successful execution. Hold strategy sessions to ensure everyone understands their role in achieving Q2 objectives. Create transparency around goals and progress to maintain momentum.</p>
      
      <h2>Staying Agile</h2>
      <p>While planning is essential, remain flexible enough to adapt to changing market conditions and emerging opportunities. Regular check-ins and reviews will help you stay on track while remaining responsive to new information.</p>
    `,
  },
  'global-market-trends-2024': {
    category: 'RESEARCH',
    image: '/images/insights/global-trends.svg',
    date: 'Mar 12, 2024',
    readTime: '12 min read',
    title: 'Global Market Trends 2024',
    description: 'An in-depth look at the shifting global markets and what they mean for international business.',
    content: `
      <h2>Understanding the Global Landscape</h2>
      <p>The global market in 2024 is characterized by rapid change and increasing interconnectedness. Businesses must navigate complex geopolitical dynamics, technological disruption, and evolving consumer preferences.</p>
      
      <h2>Key Trends Shaping Markets</h2>
      <p>Several major trends are reshaping the global business landscape:</p>
      <ul>
        <li><strong>Digital Transformation:</strong> Accelerated adoption of digital technologies across all sectors</li>
        <li><strong>Sustainability Focus:</strong> Growing emphasis on ESG factors and sustainable business practices</li>
        <li><strong>Supply Chain Resilience:</strong> Shift towards diversified and localized supply chains</li>
        <li><strong>Emerging Markets:</strong> Rising economic power of developing nations</li>
      </ul>
      
      <h2>Regional Variations</h2>
      <p>Different regions are experiencing unique economic conditions and opportunities. Asia-Pacific continues to show strong growth potential, while Western markets focus on innovation and efficiency.</p>
      
      <h2>Strategic Implications</h2>
      <p>To succeed in this environment, businesses must remain agile, invest in technology, and develop a deep understanding of local markets while maintaining a global perspective.</p>
    `,
  },
  'optimizing-cash-flow': {
    category: 'FINANCE',
    image: null,
    date: 'Mar 10, 2024',
    readTime: '6 min read',
    title: 'Optimizing Cash Flow',
    description: 'Practical tips for managing liquidity and ensuring financial stability in uncertain times.',
    content: `
      <h2>The Importance of Cash Flow Management</h2>
      <p>Cash flow is the lifeblood of any business. Even profitable companies can fail if they don't manage their cash flow effectively. In uncertain economic times, maintaining healthy liquidity becomes even more critical.</p>
      
      <h2>Key Strategies for Optimization</h2>
      <p>Implement these proven strategies to improve your cash flow position:</p>
      <ul>
        <li><strong>Accelerate Receivables:</strong> Offer early payment discounts and improve invoicing processes</li>
        <li><strong>Manage Payables:</strong> Negotiate better payment terms with suppliers while maintaining good relationships</li>
        <li><strong>Reduce Inventory:</strong> Optimize inventory levels to free up cash without affecting operations</li>
        <li><strong>Monitor Closely:</strong> Implement regular cash flow forecasting and monitoring</li>
      </ul>
      
      <h2>Technology Solutions</h2>
      <p>Modern financial management tools can provide real-time visibility into cash positions and automate many aspects of cash flow management, helping you make faster, more informed decisions.</p>
      
      <h2>Building Resilience</h2>
      <p>Maintain a cash reserve for unexpected challenges and opportunities. This financial cushion provides flexibility and peace of mind in volatile markets.</p>
    `,
  },
};

export default function ArticleDetail({ slug }: { slug: string }) {
  const article = articles[slug];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link href="/tsr-insights" className="text-[#ff3333] hover:underline">
            Back to TSR Insights
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="pt-32 pb-24">
      <div className="container-custom max-w-4xl">
        {/* Back Button */}
        <Link 
          href="/tsr-insights"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#ff3333] transition-colors mb-8"
        >
          <ArrowLeftIcon className="w-4 h-4" style={{ color: 'currentColor' }} />
          Back to TSR Insights
        </Link>

        {/* Article Header */}
        <div className="space-y-6 mb-12">
          <span className="inline-block bg-gradient-to-r from-[#ff3333] to-[#f97316] text-white px-4 py-1.5 rounded text-xs font-bold tracking-wide uppercase">
            {article.category}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            {article.title}
          </h1>

          <p className="text-lg text-gray-600">
            {article.description}
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-3 h-3.5" style={{ color: '#9ca3af' }} />
              <span>{article.date}</span>
            </div>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
        </div>

        {/* Featured Image */}
        {article.image && (
          <div className="mb-12 rounded-2xl overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              width={800}
              height={480}
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
          style={{
            '--tw-prose-headings': '#111827',
            '--tw-prose-body': '#4b5563',
            '--tw-prose-links': '#ff3333',
          } as React.CSSProperties}
        />

        {/* Related Articles CTA */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link 
            href="/tsr-insights"
            className="inline-flex items-center gap-2 text-base font-semibold text-[#ff3333] hover:gap-3 transition-all"
          >
            View More Insights
            <ArrowLeftIcon className="w-4 h-4 rotate-180" style={{ color: '#ff3333' }} />
          </Link>
        </div>
      </div>
    </article>
  );
}