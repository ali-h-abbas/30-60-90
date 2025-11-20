// Using React from CDN in the browser demo. Provide simple emoji-based icon components for the demo.
const IconEmoji = ({ emoji, className }) => <span className={className} style={{ display: 'inline-block' }}>{emoji}</span>;
const Briefcase = (props) => <IconEmoji emoji="💼" {...props} />;
const Zap = (props) => <IconEmoji emoji="⚡" {...props} />;
const Target = (props) => <IconEmoji emoji="🎯" {...props} />;
const BookOpen = (props) => <IconEmoji emoji="📘" {...props} />;
const Users = (props) => <IconEmoji emoji="👥" {...props} />;
const DollarSign = (props) => <IconEmoji emoji="💲" {...props} />;
const Shield = (props) => <IconEmoji emoji="🛡️" {...props} />;
const LayoutGrid = (props) => <IconEmoji emoji="🧩" {...props} />;
const CheckCircle = (props) => <IconEmoji emoji="✅" {...props} />;
const ChevronDown = (props) => <IconEmoji emoji="⬇️" {...props} />;
const Activity = (props) => <IconEmoji emoji="📈" {...props} />;
const BarChart3 = (props) => <IconEmoji emoji="📊" {...props} />;
const AlertTriangle = (props) => <IconEmoji emoji="⚠️" {...props} />;
const MessageSquare = (props) => <IconEmoji emoji="💬" {...props} />;
const HardHat = (props) => <IconEmoji emoji="⛑️" {...props} />;
const Code = (props) => <IconEmoji emoji="💻" {...props} />;
const ClipboardCheck = (props) => <IconEmoji emoji="📋" {...props} />;
const TrendingUp = (props) => <IconEmoji emoji="📈" {...props} />;
const Handshake = (props) => <IconEmoji emoji="🤝" {...props} />;
const Globe = (props) => <IconEmoji emoji="🌐" {...props} />;

// Tailwind is assumed to be available.

const planData = {
    title: "30-60-90 Day Plan: Business Program Manager, SME&C Global STU",
    subtitle: "Focus: Strategic Budgeting, Compliance Integration, Headcount, and Project Portfolio Management.",
    phases: [
        {
            dayRange: 'Days 1-30',
            title: 'Phase 1: Learn & Establish ',
            theme: 'Onboarding, meeting team members, understanding processes, conducting a stakeholder audit, and identifying early wins.',
            color: 'bg-indigo-600',
            icon: BookOpen,
            goals: [
                {
                    id: 'g1-1',
                    area: 'Stakeholder & Culture Alignment',
                    objective: 'Meet 1:1 with all core stakeholders. Understand key dependencies, communication preferences, and the organizational "why" behind current allocations.',
                    metric: '1:1 meetings completed with 100% of core stakeholders. Create a living Stakeholder Map and Master the FY26 Strategy & Blueprint.',
                    icon: Users,
                },
                {
                    id: 'g1-2',
                    area: 'Budget Auditing & Cascade Model',
                    objective: 'Partner with Finance to Audit historical spend (Trends & Variances). Define the initial Cascade Model (Draft: 60% Per Capita / 25% Program Pool / 15% Reserve).',
                    metric: 'Draft Budget Cascade Model defined and shared with Finance. Detailed understanding of the budget vs. actuals process.',
                    icon: DollarSign,
                },
                {
                    id: 'g1-3',
                    area: 'RoB Mapping & Compliance Sentiment',
                    objective: 'Document the existing RoB (cadence, purpose, inputs/outputs). Assess "Compliance Sentiment" (blocker or helper) and map insertion points in existing RoB (All Hands, QBRs).',
                    metric: 'A documented SME&C Global STU RoB map delivered for review. Full ownership of the upcoming 2 weeks of leadership meeting agendas.',
                    icon: LayoutGrid,
                },
                {
                    id: 'g1-4',
                    area: 'Strategic POV & Health Dashboard',
                    objective: 'Build the listening system: Set up alerts (Market/Compete) and access key dashboards (Copilot, ACR, E5 Upsell) to establish the Strategic Point of View.',
                    metric: 'A baseline "Health Dashboard" established for the STU, summarizing key operational and strategic data points.',
                    icon: Shield,
                },
            ],
        },
        {
            dayRange: 'Days 31-60',
            title: 'Phase 2: Contribute & Optimize',
            theme: 'Focus on taking on initial projects, implementing quick wins, and building/strengthening key relationships."',
            color: 'bg-green-600',
            icon: Zap,
            goals: [
                {
                    id: 'g2-1',
                    area: 'Budget Cascade Rollout & Training',
                    objective: 'Roll out the Allocation Matrix. Document the "Eligible Spend" policy. Train managers on the approval workflow and investment criteria (ROI, TTV, Strategic Fit).',
                    metric: 'Budget cascade live. First round of "Investment Bets" ranked and scored against established criteria.',
                    icon: DollarSign,
                },
                {
                    id: 'g2-2',
                    area: 'Compliance Integration & Coaching',
                    objective: 'Launch "Just-in-Time" Coaching Kits for managers (15-min discussion guides). Initiate the "Shades of Grey" ethical decision-making pilots.',
                    metric: 'Coaching Kits launched to 100% of people managers. Training Completion Rate improved by a defined percentage (e.g., 10%).',
                    icon: Shield,
                },
                {
                    id: 'g2-3',
                    area: 'Strategic Synthesis & Friction Check',
                    objective: 'Validate data insights with managers ("Friction Check") to ensure the "numbers match the reality." Draft the first "State of the Business" synthesis report.',
                    metric: 'Successful monthly forecast submission. State of the Business synthesis drafted and presented to the Global STU Leader.',
                    icon: Briefcase,
                },
                {
                    id: 'g2-4',
                    area: 'Project Portfolio Management',
                    objective: 'Inventory the current project portfolio across Specialist Leads. Introduce a standardized status reporting template for unified visibility.',
                    metric: 'A single, centralized Project Portfolio Dashboard is established and actively maintained, enabling data-driven investment vetting.',
                    icon: Target,
                },
            ],
        },
        {
            dayRange: 'Days 61-90',
            title: 'Phase 3: Leading & Impact',
            theme: 'Focus on delivering measurable results, taking ownership of key responsibilities, and high-impact initiatives.',
            color: 'bg-teal-600',
            icon: Target,
            goals: [
                {
                    id: 'g3-1',
                    area: 'Strategic Foresight & Proactive POV',
                    objective: 'Institutionalize the "Foresight Review." Move from reactive reporting to proactive recommendations (e.g., "Competitor X is shifting, we need to pivot Y") and present a 90-Day Operational Review.',
                    metric: 'Full operational rhythm established. Strategic POV integrated into Leadership decision-making and formally presented in the 90-Day Operational Review.',
                    icon: Zap,
                },
                {
                    id: 'g3-2',
                    area: 'Budget Re-allocation & Variance Analysis',
                    objective: 'Conduct the First Variance Analysis. Re-allocate under-spend to the "Central Pool" for high-impact initiatives. Finalize "Bets" recommendation and conduct Capacity Checks (Automate vs. Hire).',
                    metric: 'Under-spend re-allocated to Central Pool. New resource request/prioritization mechanism documented and approved by leadership.',
                    icon: DollarSign,
                },
                {
                    id: 'g3-3',
                    area: 'Compliance Integration & Risk Scenarios',
                    objective: 'Launch Compliance Recognition Program. Integrate "Risk Scenarios" into Quarterly Business Reviews (QBRs) in collaboration with STU Specialist Leads.',
                    metric: 'Compliance Recognition Program launched. Risk Scenarios integrated into QBR process documentation.',
                    icon: Shield,
                },
                {
                    id: 'g3-4',
                    area: 'Operational Execution & Accountability',
                    objective: 'Implement an objective system (e.g., OKRs) that ties directly to organizational goals. Automate or streamline 1-2 manual reporting processes.',
                    metric: 'Q4/H2 Objectives (OKRs) finalized, communicated, and aligned. Documented time savings from process automation.',
                    icon: CheckCircle,
                },
            ],
        },
    ],
};

// --- Pitch Deck Components ---

const AdvantagePillar = ({ title, content, icon: Icon }) => (
    <div className="p-4 bg-white rounded-xl shadow-lg border-t-4 border-blue-500 hover:shadow-xl transition duration-300">
        <Icon className="w-8 h-8 text-blue-600 mb-3" />
        <h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
        <p className="text-sm text-gray-600">{content}</p>
    </div>
);

const SnapshotCard = ({ company, role, win, icon: Icon }) => (
    <div className="bg-white p-5 rounded-xl shadow-md border border-gray-200">
        <div className="flex items-center space-x-3 mb-2">
            <Icon className="w-5 h-5 text-teal-600" />
            <div>
                <p className="text-sm font-bold text-gray-900">{company}</p>
                <p className="text-xs text-gray-500 italic">{role}</p>
            </div>
        </div>
        <p className="text-sm font-medium text-gray-700 mt-2">{win}</p>
    </div>
);

const StrategicPillar = ({ title, description, color }) => (
    <div className={`p-4 rounded-xl border-4 ${color.border} ${color.bg} text-center shadow-md`}>
        <h5 className={`font-extrabold text-sm ${color.text} uppercase`}>{title}</h5>
        <p className="text-xs text-gray-700 mt-1">{description}</p>
    </div>
);

const ValuePropSection = () => (
    <div className="mb-12 p-6 md:p-10 bg-white rounded-3xl shadow-2xl border-b-4 border-blue-500">
        {/* Executive Summary */}
        <div className="text-center mb-10">
            <p className="text-xl font-semibold text-gray-700 mb-2">Executive Summary & Value Prop</p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                A <span className="text-blue-600">Data-Led Operator</span> with End-to-End Ecosystem Fluency
            </h1>
            <h2 className="text-lg md:text-xl text-gray-500 mt-3">
                Combining Microsoft rigor with the agility of a startup Chief of Staff to drive STU excellence.
            </h2>
        </div>

        {/* Unfair Advantage */}
        <div className="mb-10 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">The "Abbas Advantage"</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <AdvantagePillar
                    title="Microsoft Fluency (Internal)"
                    content="9 years exp. Architect of 'Consumption Excellence.' Deep understanding of the End-to-end Microsoft matrix and operational rhythms."
                    icon={LayoutGrid}
                />
                <AdvantagePillar
                    title="The 'Customer Zero' Lens (External)"
                    content="Former Partner & Customer. Startup coach. Ecosystem Enabler. I understand the start-to-scale journey and the friction points in evolution."
                    icon={Handshake}
                />
                <AdvantagePillar
                    title="Chief of Staff Rigor (Operational)"
                    content="Proven ability to run C-Level ROB, manage high-stakes compliance (SOC2/GDPR), and engineer data pipelines and ROB to create a single source of truth."
                    icon={ClipboardCheck}
                />
            </div>
        </div>

        {/* Credibility Snapshots */}
        <div className="mb-10 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">Credibility Snapshots</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <SnapshotCard
                    company="Microsoft (2013–2022)"
                    role="Sales Excellence & Program Management"
                    win="Defined 'Consumption Excellence' frameworks; aligned diverse orgs (CSU/STU/ATU) on shared definitions and reporting. Supported at build phases of organizational transformations."
                    icon={Globe}
                />
                <SnapshotCard
                    company="Delphix (2022–2023)"
                    role="Strategic Alliance & Customer Success"
                    win="Managed strategic FSI customers & Microsoft Data Partnership. Co-sell execution with Azure (ADF/Synapse). Customer obsession and alignment to strategy."
                    icon={TrendingUp}
                />
                <SnapshotCard
                    company="Viral Nation (2023–2024)"
                    role="Chief of Staff / Ops Director"
                    win="Managed $2M in transformational project, revamped DevOps, ITOps, SalesOps, Managed Service Delivery, SDLC Lifecycle, C-Level ROB. Integrated enterprise grade resource management tooling and ROB."
                    icon={HardHat}
                />
            </div>
        </div>

        {/* Strategic Framework */}
        <div className="pt-6 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">Strategic Framework (The Approach)</h3>
            <div className="max-w-xl mx-auto border-4 border-gray-300 rounded-2xl p-4 grid grid-cols-2 gap-4">
                <StrategicPillar
                    title="Budget"
                    description="From 'Spend' to 'Strategic Enabler.'"
                    color={{ border: 'border-yellow-500', bg: 'bg-yellow-50', text: 'text-yellow-800' }}
                />
                <StrategicPillar
                    title="Compliance"
                    description="From 'Check-box' to 'Culture.'"
                    color={{ border: 'border-red-500', bg: 'bg-red-50', text: 'text-red-800' }}
                />
                <StrategicPillar
                    title="Blueprint (HC)"
                    description="From 'Request-based' to 'Data-backed Bets.'"
                    color={{ border: 'border-green-500', bg: 'bg-green-50', text: 'text-green-800' }}
                />
                <StrategicPillar
                    title="Strategic POV"
                    description="From 'Reporting' to 'Foresight.'"
                    color={{ border: 'border-blue-500', bg: 'bg-blue-50', text: 'text-blue-800' }}
                />
            </div>
        </div>
    </div>
);

// Component for a single goal/metric card
const GoalCard = ({ goal }) => {
    const Icon = goal.icon;

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100 flex flex-col">
            <div className="flex items-center space-x-3 mb-3">
                <Icon className="w-5 h-5 text-gray-500" />
                <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">{goal.area}</h4>
            </div>
            <p className="text-base text-gray-800 mb-3 font-medium">{goal.objective}</p>
            
            {/* Success Metric */}
            <div className="mt-auto pt-4 border-t border-dashed border-gray-200">
                <p className="text-xs font-semibold text-gray-500 uppercase">Success Metric</p>
                <p className="text-sm text-gray-600 italic mt-1">{goal.metric}</p>
            </div>
        </div>
    );
};

// Component for a single phase (30/60/90 days)
const PhaseSection = ({ phase }) => {
    const Icon = phase.icon;
    return (
        <div className="mb-12 p-6 md:p-8 bg-gray-50 rounded-2xl shadow-inner">
            <div className="flex items-center space-x-4 mb-6 pb-4 border-b border-gray-200">
                <div className={`p-3 rounded-full ${phase.color} text-white shadow-md`}>
                    <Icon className="w-6 h-6" />
                </div>
                <div>
                    <h2 className={`text-2xl md:text-3xl font-extrabold ${phase.color.replace('bg-', 'text-')}`}>{phase.dayRange}</h2>
                    <p className="text-lg font-medium text-gray-700">{phase.title}</p>
                </div>
            </div>
            <p className="text-gray-600 italic mb-8 border-l-4 pl-4 border-gray-300">
                {phase.theme}
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {phase.goals.map((goal) => (
                    <GoalCard
                        key={goal.id}
                        goal={goal}
                    />
                ))}
            </div>
        </div>
    );
};

// --- Mockup Components ---

const MockVitalCard = ({ title, value, unit, color, icon: Icon }) => (
    <div className="bg-white p-4 rounded-xl shadow-md border-b-4" style={{ borderColor: color }}>
        <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <Icon className="w-5 h-5 opacity-60" style={{ color }} />
        </div>
        <div className="mt-1">
            <span className="text-3xl font-bold text-gray-900">{value}</span>
            <span className="text-base font-semibold text-gray-500 ml-1">{unit}</span>
        </div>
    </div>
);

const MockGaugeChart = ({ value, color, label }) => {
    const angle = (value / 100) * 180; // Assuming 180-degree gauge

    return (
        <div className="p-3 bg-white rounded-xl shadow-inner">
            <h5 className="text-sm font-semibold text-gray-700 mb-2">{label}</h5>
            <div className="flex justify-center">
                <div className="relative w-24 h-12 overflow-hidden">
                    <div className="absolute top-0 left-0 w-24 h-24 rounded-full border-8 border-gray-200"></div>
                    <div
                        className="absolute top-0 left-0 w-24 h-24 rounded-full border-8"
                        style={{
                            borderColor: 'transparent',
                            borderTopColor: color,
                            borderLeftColor: color,
                            transform: `rotate(${angle - 180}deg)`,
                            transition: 'transform 1s',
                        }}
                    ></div>
                    <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-gray-900 rounded-full" style={{ transform: 'translate(-50%, -50%)' }}></div>
                    <div className="absolute bottom-0 left-0 right-0 h-4 bg-white"></div>
                </div>
            </div>
            <p className="text-center mt-2 text-xl font-bold text-gray-900">{value}%</p>
        </div>
    );
};

const MockFunnelChart = ({ label }) => (
    <div className="p-3 bg-white rounded-xl shadow-inner">
        <h5 className="text-sm font-semibold text-gray-700 mb-2">{label}</h5>
        <div className="space-y-1.5 flex flex-col items-center">
            {['Allocated (80)', 'Open Req (65)', 'Interviewing (40)', 'Offer Accepted (20)', 'Onboarded (10)'].map((step, index) => (
                <div key={index} className={`py-1 text-xs font-medium text-white text-center rounded-sm transition-all duration-300`} 
                     style={{ width: `${90 - index * 15}%`, backgroundColor: index % 2 === 0 ? '#4A5568' : '#68748C' }}>
                    {step}
                </div>
            ))}
        </div>
    </div>
);

const MockScatterPlot = ({ label }) => (
    <div className="p-3 bg-white rounded-xl shadow-inner">
        <h5 className="text-sm font-semibold text-gray-700 mb-2">{label}</h5>
        <div className="h-32 w-full border border-gray-300 relative bg-gray-50">
            <div className="absolute top-[20%] left-[70%] w-3 h-3 bg-red-500 rounded-full shadow-lg border border-white"></div>
            <div className="absolute top-[80%] left-[10%] w-4 h-4 bg-green-500 rounded-full shadow-lg border border-white"></div>
            <div className="absolute top-[45%] left-[45%] w-2 h-2 bg-yellow-500 rounded-full shadow-lg border border-white"></div>
            <div className="absolute top-[10%] left-[30%] w-3 h-3 bg-green-600 rounded-full shadow-lg border border-white"></div>
            <div className="absolute bottom-0 left-0 text-xs text-gray-500 p-1">Short TTV</div>
            <div className="absolute top-0 right-0 text-xs text-gray-500 p-1">High Investment</div>
        </div>
    </div>
);

const MockBarChart = ({ label }) => (
    <div className="p-3 bg-white rounded-xl shadow-inner">
        <h5 className="text-sm font-semibold text-gray-700 mb-2">{label}</h5>
        <div className="h-32 w-full flex items-end justify-around border-b border-l border-gray-300 pb-1">
            <div className="w-4 h-[70%] bg-blue-500 rounded-t-sm" title="Security Qtr vs Target"></div>
            <div className="w-4 h-[85%] bg-blue-700 rounded-t-sm"></div>
            <div className="w-4 h-[55%] bg-green-500 rounded-t-sm" title="AI Qtr vs Target"></div>
            <div className="w-4 h-[75%] bg-green-700 rounded-t-sm"></div>
            <div className="w-4 h-[95%] bg-purple-500 rounded-t-sm" title="Azure Qtr vs Target"></div>
            <div className="w-4 h-[60%] bg-purple-700 rounded-t-sm"></div>
        </div>
        <div className="flex justify-around text-xs mt-1 text-gray-500">
            <span>Sec</span><span>AI</span><span>Az</span>
        </div>
    </div>
);

const MockHeatmap = ({ label }) => (
    <div className="p-3 bg-white rounded-xl shadow-inner">
        <h5 className="text-sm font-semibold text-gray-700 mb-2">{label}</h5>
        <div className="grid grid-cols-4 grid-rows-3 gap-0.5 h-32 w-full">
            {['bg-green-300', 'bg-yellow-300', 'bg-red-400', 'bg-green-400', 
              'bg-yellow-500', 'bg-green-500', 'bg-yellow-400', 'bg-red-500', 
              'bg-green-600', 'bg-red-600', 'bg-yellow-600', 'bg-green-700'].map((color, index) => (
                <div key={index} className={`${color} border border-gray-100`}></div>
            ))}
        </div>
        <p className="text-xs text-gray-500 text-center mt-2">Composite Score by Manager</p>
    </div>
);

const MockTrendLine = ({ label }) => (
    <div className="p-3 bg-white rounded-xl shadow-inner">
        <h5 className="text-sm font-semibold text-gray-700 mb-2">{label}</h5>
        <div className="h-32 w-full border-b border-l border-gray-300 relative">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute w-full h-full">
                <polyline 
                    points="0,80 25,60 50,40 75,55 100,20" 
                    fill="none" 
                    stroke="#4F46E5" 
                    strokeWidth="3" 
                    strokeDasharray="4 2"
                />
            </svg>
        </div>
        <div className="flex justify-between text-xs mt-1 text-gray-500">
            <span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span>
        </div>
    </div>
);


// Component for the Dashboard Concept
const DashboardConcept = () => {
    // Set initial state to true to expand by default
    const [isExpanded, setIsExpanded] = React.useState(true); 

    return (
        <section className="mt-12">
            <div className="bg-blue-800 text-white rounded-3xl shadow-2xl overflow-hidden">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-full text-left p-6 flex justify-between items-center transition duration-300 hover:bg-blue-700"
                >
                    <div className="flex items-center space-x-4">
                        <Briefcase className="w-6 h-6" />
                        <h2 className="text-2xl font-bold">Concept - SME&C STU Leadership Dashboard: "The STU Cockpit"</h2>
                    </div>
                    <ChevronDown className={`w-6 h-6 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`} />
                </button>

                {isExpanded && (
                    <div className="p-6 md:p-8 bg-gray-50 text-gray-800">
                        <p className="mb-8 border-l-4 border-blue-500 pl-4 text-gray-700 italic font-medium">
                            "A single pane of glass correlating operational inputs (Budget/HC) with strategic outputs (Revenue/Wins) and organizational health (Culture/Compliance). This is the functional spec sheet for the BI team."
                        </p>

                        <div className="mb-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <Activity className="w-5 h-5 mr-2 text-blue-600" />
                                Top Row (The Vitals - L0)
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <MockVitalCard title="Budget Variance" value="2.5M" unit="Under" color="#10B981" icon={DollarSign} />
                                <MockVitalCard title="Open HC" value="12" unit="Reqs" color="#EF4444" icon={Users} />
                                <MockVitalCard title="Compliance Score" value="98" unit="%" color="#3B82F6" icon={Shield} />
                                <MockVitalCard title="Top Strategic Bet" value="Green" unit="" color="#FBBF24" icon={Target} />
                            </div>
                        </div>

                        {/* Zone Breakdown - Visual Mockup */}
                        <h3 className="text-xl font-bold text-gray-900 mb-5 flex items-center">
                            <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                            Core Zones: Operational, Strategic, & Health
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            
                            {/* Zone 1: Financial & Operational Efficiency */}
                            <div className="bg-white p-5 rounded-xl border-t-4 border-yellow-600 shadow-lg space-y-4">
                                <h4 className="font-extrabold text-base uppercase text-yellow-700 flex items-center">
                                    <Activity className="w-4 h-4 mr-2" /> Zone 1: Run Business
                                </h4>
                                <MockGaugeChart label="KPI 1: Discretionary Budget Utilization" value={92} color="#10B981" />
                                <MockFunnelChart label="KPI 2: Headcount (HC) Velocity Funnel" />
                            </div>

                            {/* Zone 2: Project Portfolio & Strategy */}
                            <div className="bg-white p-5 rounded-xl border-t-4 border-purple-600 shadow-lg space-y-4">
                                <h4 className="font-extrabold text-base uppercase text-purple-700 flex items-center">
                                    <BarChart3 className="w-4 h-4 mr-2" /> Zone 2: Change Business
                                </h4>
                                <MockScatterPlot label="KPI 3: Strategic Bet Portfolio Health (ROI vs. Investment)" />
                                <MockBarChart label="KPI 4: Solution Area Pipeline Velocity" />
                            </div>

                            {/* Zone 3: Culture, Compliance & Risk */}
                            <div className="bg-white p-5 rounded-xl border-t-4 border-red-600 shadow-lg space-y-4">
                                <h4 className="font-extrabold text-base uppercase text-red-700 flex items-center">
                                    <AlertTriangle className="w-4 h-4 mr-2" /> Zone 3: Protect Business
                                </h4>
                                <MockHeatmap label="KPI 5: Compliance Hygiene Scorecard" />
                                <MockTrendLine label="KPI 6: 'Pulse' Sentiment (Clarity of Strategy)" />
                            </div>
                        </div>

                        {/* Zone 4 Synthesis */}
                        <div className="mt-8 p-6 bg-blue-100 rounded-xl border-t-4 border-blue-400 shadow-md">
                            <div className="flex items-center space-x-3 mb-3">
                                <MessageSquare className="w-5 h-5 text-blue-700" />
                                <h4 className="text-lg font-bold text-blue-800">Zone 4: The BPM "Synthesis" (The "POV")</h4>
                            </div>
                            <p className="text-sm text-gray-700 italic">
                                This dedicated space allows the Program Manager to provide weekly strategic narrative, moving the leadership team from "What Happened" (data) to "What It Means" (analysis) and "What We Do Next" (recommendations).
                            </p>
                            <div className="mt-4 p-3 bg-white border border-gray-300 h-16 text-sm text-gray-500 italic rounded">
                                *Example Synthesis: Headcount velocity for AI roles is 15 days behind target due to comp limits. Recommend re-allocating $500K from Morale Budget to Central Pool to fund market-rate adjustments.*
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </section>
    );
};

// Main Application Component
const App = () => {
    return (
        <div className="min-h-screen bg-gray-100 font-sans p-4 sm:p-8">
            <div className="max-w-7xl mx-auto">
                <ValuePropSection /> {/* NEW PITCH SECTION AT THE TOP */}

                {/* Header Section */}
                <header className="text-center mb-12 py-8 bg-white rounded-3xl shadow-xl">
                    <Briefcase className="w-10 h-10 mx-auto text-blue-700 mb-3" />
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2 leading-tight">
                        {planData.title}
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-2">
                        {planData.subtitle}
                    </p>
                    <div className="mt-4 flex justify-center space-x-4 text-sm font-medium text-gray-500">
                        <span>Role: Business Program Manager</span>
                        <span>|</span>
                        <span>Team: SME&C Global STU</span>
                    </div>
                </header>

                {/* Plan Sections */}
                <main>
                    {planData.phases.map((phase, index) => (
                        <PhaseSection
                            key={index}
                            phase={phase}
                        />
                    ))}
                </main>

                {/* Dashboard Concept Section */}
                <DashboardConcept />

                {/* Footer / Cultural Emphasis */}
                <footer className="mt-12 pt-8 text-center border-t-2 border-gray-200">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                        Culture & Values Alignment
                    </h3>
                    <p className="text-gray-600 max-w-4xl mx-auto italic">
                        All actions will embody Microsoft’s values of respect, integrity, and accountability, focusing on a growth mindset and driving inclusion within the high-performing SME&C organization.
                    </p>
                    <div className="mt-4 text-sm text-gray-500 flex items-center justify-center space-x-2">
                        <span>Built with</span>
                        <a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                            <span role="img" aria-label="copilot" className="text-xl">🤖</span>
                            <span className="font-semibold text-gray-700 underline">GitHub Copilot</span>
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    );
};

// Expose App to the global/window scope so the demo `index.html` can mount it.
window.App = App;