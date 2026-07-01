import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Calendar, ExternalLink, Users, Target, Lightbulb, Palette, Code } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroImg from "../assets/tradebrains-1.png";
import Mapping from "../assets/tradebrains_user_mapping.png";
import wireframe from "../assets/Wireframe-2-portal 1.png";
import All_screens from "../assets/All_screens.png";
import Dashboard from "../assets/Dashboard.png";
import Stock_Compare from "../assets/Stock_Compare.png";
import Stock_Details from "../assets/Stock_Details.png";
import heroImg2 from "../assets/tradebrainsapp-1.png";
import highfidelityapp from "../assets/All_screens_app.png";
import app1 from "../assets/App_1.png";
import app2 from "../assets/App_2.png";
import app3 from "../assets/App_3.png";


const projectsData = {
  1: {
    title: "Trade Brains Portal Website",
    subtitle: "A data-driven web platform for stock research and portfolio management designed to help investors make informed decisions.",
    role: "UI/UX Designer",
    duration: "Ongoing (Redesign + Feature Enhancements)",
    team: "Solo Designer · 5 Developers",
    year: "June 2023  Present",
    heroImage: heroImg,
     wireframes: [wireframe, Mapping],
  highFidelity: {
    main: All_screens,
    screens: [Dashboard, Stock_Details, Stock_Compare]
  },
    overview: "Trade Brains Portal supports investors with reliable fundamental data and intuitive visualizations for deeper stock research and analysis. When I joined, the product required updated interactions, new features, and a full UI/UX refresh. I led the redesign and ongoing improvement of the platform, elevating usability and creating a more cohesive and accessible research experience for investors.",
    
    problem: {
      title: "The Challenge",
      points: [
        "Platform needed a new Stock Research Reports module.",
        "Needed to introduce an AI model without disrupting existing workflows.",
        "Inconsistent user experience between older and newer sections",
        "Lack of personalized investment insights",
        "Complex financial data required clear visual hierarchy",
        "Complex navigation for beginner investors"
      ]
    },
    
    research: {
      methods: ["UX Audit of existing platform", "Competitive Analysis", "Stakeholder Discussions (product, data & research teams)", "Internal Team Feedback", "Market Study on investor behavior"],
      insights: [
        "Users needed a clear place for deeper stock insights",
        "Financial data required clearer, more visual presentation",
        "Navigation complexity affected beginner investors",
        "Inconsistent UI disrupted flow across sections",
        "Growing demand for quick, AI-powered investment summaries"
      ]
    },
    
    personas: [
      {
        name: "Priya, 32",
        type: "Active Investor",
        goals: "Quick stock analysis, Access deeper insights & research reports, Track portfolio efficiently",
        pain: "Insights scattered across multiple pages, Difficulty finding clear, actionable research, Overwhelmed by complex financial tables"
      },
      {
        name: "Rahul, 45",
        type: "Long-term Investor",
        goals: "Fundamental analysis of stocks, Long-term comparison & watchlist tracking, Reliable AI-powered summaries",
        pain: "UI inconsistency between platform sections, Hard to interpret dense financial data, No centralized place for research reports"
      }
    ],
    
    solution: {
      approach: [
        "Created a dedicated section for Stock Research Reports",
        "Designed AI-powered analysis flows for Portal AI",
        "Improved navigation structure for easier discovery",
        "Applied consistent UI patterns across sections",
        "Simplified complex financial data with visual hierarchy",
        "Built scalable layouts for future insights and modules"
      ],
      features: [
        "Stock Research Reports with clear summaries",
        "AI-powered stock analysis with Portal AI",
        "Visual data blocks for easier financial interpretation",
        "Improved navigation to insights and tools",
        "Consistent UI across redesigned sections",
        "Scalable design system for new additions"
      ]
    },
    
    results: [
      { metric: "50K+", label: "Active monthly users" },
      { metric: "70%", label: "Increase in user engagement" },
      { metric: "4.5/5", label: "Average user rating" },
      { metric: "2x", label: "Growth in premium subscriptions" }
    ],
    takeaways: "This project focused on improving usability across a data-heavy platform by restructuring information, enhancing navigation, and creating a more consistent user experience."
  },
  2: {
    title: "Trade Brains Portal App",
    subtitle: "A data-driven Mobile app for stock research and portfolio management designed to help investors make informed decisions.",
    role: "UI/UX Designer",
    duration: "Ongoing (Redesign + Feature Enhancements)",
    team: "Solo Designer · 5 Developers",
    year: "June 2023 - Present",
    heroImage: heroImg2,
   wireframes: [wireframe, Mapping],
  highFidelity: {
    main: highfidelityapp,
    screens: [
      app1,
      app2,
      app3
    ]
  },
    overview: "Designed a mobile-first stock research and analysis platform that enables investors to explore stocks, track portfolios, and access data-driven insights for informed decision-making. The experience focuses on simplifying complex financial data while maintaining depth and usability. When I joined, the app required a full redesign to improve usability and introduce new features. I led the redesign and ongoing improvement of the mobile experience, creating a more intuitive and engaging platform for investors on-the-go.",
    
    problem: {
      title: "The Challenge",
      points: [
         "Platform needed a new Stock Research Reports module.",
        "Needed to introduce an AI model without disrupting existing workflows.",
        "Inconsistent user experience between older and newer sections.",
        "Lack of personalized investment insights.",
        "Complex financial data required clear visual hierarchy.",
        "Complex navigation for beginner investors."
      ]
    },
    
    research: {
      methods: ["UX Audit of existing platform", "Competitive Analysis", "Stakeholder Discussions (product, data & research teams)", "Internal Team Feedback", "Market Study on investor behavior"],
      insights: [
        "Users needed a clear place for deeper stock insights",
        "Financial data required clearer, more visual presentation",
        "Navigation complexity affected beginner investors",
        "Inconsistent UI disrupted flow across sections",
        "Growing demand for quick, AI-powered investment summaries"
      ]
    },
    
    personas: [
      {
        name: "Priya, 32",
        type: "Active Investor",
        goals: [
          "Quickly check portfolio performance with real-time updates",
          "Scan key stock insights through cards, summaries, and alerts",
          "Add stocks to watchlist and track price movements instantly"
        ],
        pain:[
          "Needs too many taps to access important stock details",
          "Key insights are not visible at a glance (lack of glanceable UI)",
          "Hard to switch between portfolio, watchlist, and stock details smoothly"
        ],
      },
      {
        name: "Rahul, 45",
        type: "Long-term Investor",
        goals: [
          "View long-term performance trends with simplified charts on mobile",
          "Access structured research summaries without navigating multiple screens",
          "Monitor portfolio health and key metrics in a single view"
        ],
        pain: [
          "Charts and financial data are difficult to interact with on mobile",
          "Too much scrolling required to access complete information",
          "Lack of a consolidated dashboard for reports, insights, and portfolio"
        ]
      }
    ],
    
    solution: {
      approach: [
        "Bottom navigation for quick access to portfolio, watchlist, and stock discovery",
        "Card-based layout for scanning key insights and stock data",
        "Simplified chart interactions with touch-friendly gestures",
        "Progressive disclosure to manage complex financial information",
        "Consistent visual hierarchy for better readability of data-heavy screens"
      ],
      features: [
        "Unified portfolio dashboard with performance insights",
        "Stock detail pages with structured financial data and key metrics",
        "Watchlist with real-time tracking and quick actions",
        "Research reports with simplified summaries and highlights",
        "Quick search and stock discovery with filters and categories"
      ]
    },
    
    results: [
      { metric: "30K+", label: "App downloads in first month" },
      { metric: "4.6/5", label: "App store rating" },
      { metric: "65%", label: "Daily active user rate" },
      { metric: "8 min", label: "Average session duration" }
    ],
    takeaways: "This project reinforced the importance of designing for data-heavy experiences on mobile. By simplifying complex financial information and improving navigation, the app became more intuitive and enabled users to access key insights efficiently."
  },
  3: {
    title: "FitTrack - Fitness App",
    subtitle: "Personalized fitness & wellness platform",
    role: "Lead UI/UX Designer",
    duration: "4 months",
    team: "3 designers, 5 developers",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1762768767074-e491f1eebdfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2NDIzMTU5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    wireframes: [wireframe, Mapping],
  highFidelity: {
    main: highfidelityapp,
    screens: [
      app1,
      app2,
      app3
    ]
  },
    
    overview: "Designed a comprehensive fitness tracking application that provides personalized workout plans, nutrition guidance, and progress analytics. The app aims to make fitness accessible and enjoyable for users of all fitness levels.",
    
    problem: {
      title: "The Challenge",
      points: [
        "Low user motivation and high dropout rates",
        "Difficulty in tracking varied workout types",
        "Generic workout plans not fitting individual needs",
        "Poor integration between fitness and nutrition",
        "Complex interfaces deterring beginners"
      ]
    },
    
    research: {
      methods: ["User Interviews (25 fitness enthusiasts)", "Behavioral Analysis", "Competitor Review", "A/B Testing"],
      insights: [
        "Users needed visual progress tracking for motivation",
        "Simple, quick logging was crucial for consistency",
        "Social features increased accountability",
        "Integration with wearables was highly requested"
      ]
    },
    
    personas: [
      {
        name: "Sarah, 26",
        type: "Fitness Beginner",
        goals: "Weight loss, Build habits",
        pain: "Overwhelmed by complex routines"
      },
      {
        name: "Mike, 34",
        type: "Gym Enthusiast",
        goals: "Track PRs, Optimize workouts",
        pain: "Tedious manual logging"
      }
    ],
    
    solution: {
      approach: [
        "Gamification with achievement badges",
        "AI-powered personalized workout recommendations",
        "Quick-log workout with voice commands",
        "Visual progress charts and body metrics",
        "Community features for motivation"
      ],
      features: [
        "Smart workout builder with video demos",
        "Nutrition tracker with barcode scanner",
        "Integration with Apple Health & Google Fit",
        "Social challenges and leaderboards"
      ]
    },
    
    results: [
      { metric: "75%", label: "User retention after 30 days" },
      { metric: "4.7/5", label: "App store rating" },
      { metric: "2M+", label: "Workouts logged monthly" },
      { metric: "3x", label: "Increase in premium conversions" }
    ],
    takeaways: "This project reinforced the importance of designing for data-heavy experiences on mobile. By simplifying complex financial information and improving navigation, the app became more intuitive and enabled users to access key insights efficiently."
  },
  4: {
    title: "QuickBite - Food Delivery",
    subtitle: "Seamless food ordering experience",
    role: "UX/UI Designer",
    duration: "4 months",
    team: "4 designers, 8 developers",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1729860649884-40ec104f9dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHB8ZW58MXx8fHwxNzY0MjkyNTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    wireframes: [wireframe, Mapping],
  highFidelity: {
    main: highfidelityapp,
    screens: [
      app1,
      app2,
      app3
    ]
  },
    
    overview: "Created a modern food delivery platform that simplifies the ordering process with personalized recommendations, real-time tracking, and seamless checkout. The design focuses on visual appeal and reducing decision fatigue.",
    
    problem: {
      title: "The Challenge",
      points: [
        "High cart abandonment due to complex checkout",
        "Difficult to discover new restaurants",
        "Lack of dietary preference filtering",
        "Poor order tracking experience",
        "Slow app performance affecting conversions"
      ]
    },
    
    research: {
      methods: ["User Journey Mapping", "Heatmap Analysis", "Customer Feedback", "Usability Testing"],
      insights: [
        "Users abandoned orders due to unexpected fees",
        "Photos were the primary decision factor",
        "Quick reorder was the most desired feature",
        "Real-time tracking reduced support queries"
      ]
    },
    
    personas: [
      {
        name: "Alex, 28",
        type: "Busy Professional",
        goals: "Quick ordering, Reliable delivery",
        pain: "Too many steps to checkout"
      },
      {
        name: "Maya, 31",
        type: "Food Explorer",
        goals: "Discover restaurants, Try new cuisines",
        pain: "Hard to find specific dietary options"
      }
    ],
    
    solution: {
      approach: [
        "Streamlined 3-step checkout process",
        "AI-powered restaurant recommendations",
        "Advanced filters for dietary preferences",
        "Live order tracking with map integration",
        "One-tap reordering from history"
      ],
      features: [
        "Smart search with cuisine and dish suggestions",
        "Group ordering for teams",
        "Schedule orders in advance",
        "Loyalty rewards and personalized deals"
      ]
    },
    
    results: [
      { metric: "45%", label: "Reduction in cart abandonment" },
      { metric: "3.5x", label: "Increase in repeat orders" },
      { metric: "4.8/5", label: "Customer satisfaction score" },
      { metric: "100K+", label: "Monthly active users" }
    ],
    takeaways: "This project reinforced the importance of designing for data-heavy experiences on mobile. By simplifying complex financial information and improving navigation, the app became more intuitive and enabled users to access key insights efficiently."
  }
};

export function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectId = Number(id);
  const project = projectsData[projectId as keyof typeof projectsData];

  if (!project) return null;

  return (
    <div className="min-h-screen bg-black">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white hover:bg-white/20 transition-all"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-12">
            <h1 className="text-white mb-4 text-4xl md:text-6xl">{project.title}</h1>
            <p className="text-white/60 text-xl">{project.subtitle}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div>
              <div className="text-white/50 mb-2">Role</div>
              <div className="text-white">{project.role}</div>
            </div>
            <div>
              <div className="text-white/50 mb-2">Duration</div>
              <div className="text-white">{project.duration}</div>
            </div>
            <div>
              <div className="text-white/50 mb-2">Team</div>
              <div className="text-white">{project.team}</div>
            </div>
            <div>
              <div className="text-white/50 mb-2">Year</div>
              <div className="text-white">{project.year}</div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-white/10">
            <ImageWithFallback
              src={project.heroImage}
              alt={project.title}
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-white mb-8">Overview</h2>
          <p className="text-white/70 text-lg leading-relaxed">{project.overview}</p>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
              <Target className="text-white" size={24} />
            </div>
            <h2 className="text-white">{project.problem.title}</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {project.problem.points.map((point, index) => (
              <div
                key={index}
                className="p-6 bg-black/50 border border-white/10 rounded-xl"
              >
                <p className="text-white/70">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <Lightbulb className="text-white" size={24} />
            </div>
            <h2 className="text-white">Research & Discovery</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-white mb-6">Research Methods</h3>
              <ul className="space-y-3">
                {project.research.methods.map((method, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/70">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                    {method}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white mb-6">Key Insights</h3>
              <ul className="space-y-3">
                {project.research.insights.map((insight, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/70">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-2"></div>
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* User Personas */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Users className="text-white" size={24} />
            </div>
            <h2 className="text-white">User Personas</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {project.personas.map((persona, index) => (
              <div
                key={index}
                className="p-8 bg-black/50 border border-white/10 rounded-2xl"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl mb-4">
                  {persona.name.charAt(0)}
                </div>
                <h3 className="text-white mb-2">{persona.name}</h3>
                <p className="text-white/50 mb-6">{persona.type}</p>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-white/70 mb-1">Goals</div>
                    <div className="text-white/90">{persona.goals}</div>
                  </div>
                  <div>
                    <div className="text-white/70 mb-1">Pain Points</div>
                    <div className="text-white/90">{persona.pain}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wireframes & Sketches */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white mb-4">Low-Fidelity Wireframes</h2>
          <p className="text-white/60 mb-12 max-w-3xl">
            Initial sketches and wireframes to explore layout concepts and user flows before committing to high-fidelity designs.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
              <ImageWithFallback
                src={wireframe}
                alt="Wireframe sketches"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white">Initial Wireframe Concepts</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
              <ImageWithFallback
                src={Mapping}
                alt="Design process"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white">User Flow Mapping</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
              <Palette className="text-white" size={24} />
            </div>
            <h2 className="text-white">Design Solution</h2>
          </div>

          <div className="mb-12">
            <h3 className="text-white mb-6">Design Approach</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.solution.approach.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <p className="text-white/80">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white mb-6">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {project.solution.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-xl"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code className="text-white" size={16} />
                  </div>
                  <p className="text-white/80">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* High-Fidelity Mockups */}
<section className="py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-white mb-4">High-Fidelity Designs</h2>
    <p className="text-white/60 mb-12 max-w-3xl">
      Final high-fidelity screens showcasing the overall layout, visual design, and key user flows across the platform.
    </p>

    <div className="space-y-8">
      
      {/* Main UI Showcase */}
      <div className="relative rounded-2xl overflow-hidden border border-white/10">
        <ImageWithFallback
          src={project.highFidelity?.main}
          alt="Main UI"
          className="w-full h-[500px] object-cover"
        />
      </div>

      {/* Grid of UI Screens */}
      <div className="grid md:grid-cols-3 gap-6">
        {project.highFidelity?.screens?.map((screen, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden border border-white/10 group"
          >
            <ImageWithFallback
              src={screen}
              alt={`Screen ${index + 1}`}
              className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <p className="text-white">UI Screen {index + 1}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>

      {/* Results */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white mb-12 text-center">Impact & Results</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {project.results.map((result, index) => (
              <div
                key={index}
                className="text-center p-8 bg-black/50 border border-white/10 rounded-2xl"
              >
                <div className="text-4xl md:text-5xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-3">
                  {result.metric}
                </div>
                <div className="text-white/70">{result.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Takeaways */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white mb-8">Key Takeaways</h2>
          <p className="text-white/70 text-lg leading-relaxed mb-12">
  {project.takeaways}
</p>
          
          <button
            onClick={() => navigate("/")}
            className="px-8 py-4 bg-white text-black rounded-full hover:bg-white/90 transition-all hover:scale-105"
          >
            View More Projects
          </button>
        </div>
      </section>
    </div>
  );
}
