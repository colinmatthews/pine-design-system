import type { NavigationData } from '../types/navigation';

export const mockNavigationData: NavigationData = {
  mainItems: [
    {
      id: 'get-started',
      label: 'Get Started',
      icon: 'rocket-tone',
      href: '/admin/sites/2148700613/get_started',
    },
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: 'home-tone',
      href: '/admin/sites/2148700613/dashboard',
    },
    {
      id: 'products',
      label: 'Products',
      icon: 'cube-tone',
      items: [
        {
          id: 'all-products',
          label: 'All Products',
          icon: '',
          href: '/admin/sites/2148700613/products',
        },
        {
          id: 'courses',
          label: 'Courses',
          icon: '',
          href: '/admin/sites/2148700613/courses',
        },
        {
          id: 'coaching',
          label: 'Coaching',
          icon: '',
          href: '/admin/sites/2148700613/coaching_programs/dashboard',
        },
        {
          id: 'community',
          label: 'Community',
          icon: '',
          href: '/admin/sites/2148700613/communities',
        },
        {
          id: 'podcasts',
          label: 'Podcasts',
          icon: '',
          href: '/admin/sites/2148700613/podcasts',
        },
        {
          id: 'newsletters',
          label: 'Newsletters',
          icon: '',
          href: '/admin/sites/2148700613/newsletters',
        },
        {
          id: 'downloads',
          label: 'Downloads',
          icon: '',
          href: '/admin/sites/2148700613/downloads',
        },
      ],
    },
    {
      id: 'sales',
      label: 'Sales',
      icon: 'credit-card-tone',
      items: [
        {
          id: 'payments',
          label: 'Payments',
          icon: '',
          href: '/admin/sites/2148700613/payments',
        },
        {
          id: 'offers',
          label: 'Offers',
          icon: '',
          href: '/admin/sites/2148700613/offers',
        },
        {
          id: 'cart',
          label: 'Cart',
          icon: '',
          href: '/admin/sites/2148700613/cart',
        },
        {
          id: 'invoices',
          label: 'Invoices',
          icon: '',
          href: '/admin/sites/2148700613/invoices',
        },
        {
          id: 'coupons',
          label: 'Coupons',
          icon: '',
          href: '/admin/sites/2148700613/coupons',
        },
        {
          id: 'affiliates',
          label: 'Affiliates',
          icon: '',
          href: '/admin/sites/2148700613/affiliates',
        },
      ],
    },
    {
      id: 'website',
      label: 'Website',
      icon: 'monitor-tone',
      items: [
        {
          id: 'design',
          label: 'Design',
          icon: '',
          href: '/admin/sites/2148700613/website_designs',
        },
        {
          id: 'website-pages',
          label: 'Website Pages',
          icon: '',
          href: '/admin/sites/2148700613/website_pages',
        },
        {
          id: 'landing-pages',
          label: 'Landing Pages',
          icon: '',
          href: '/admin/sites/2148700613/landing_pages',
        },
        {
          id: 'navigation',
          label: 'Navigation',
          icon: '',
          href: '/admin/sites/2148700613/navbars',
        },
        {
          id: 'blog',
          label: 'Blog',
          icon: '',
          href: '/admin/sites/2148700613/blog_posts',
        },
      ],
    },
    {
      id: 'branded-app',
      label: 'Branded App',
      icon: 'phone-tone',
      href: '/admin/sites/2148700613/branded_mobile_app/landing_page_v2',
    },
    {
      id: 'marketing',
      label: 'Marketing',
      icon: 'mail-tone',
      items: [
        {
          id: 'overview',
          label: 'Overview',
          icon: '',
          href: '/admin/sites/2148700613/marketing_overview',
        },
        {
          id: 'email-campaigns',
          label: 'Email Campaigns',
          icon: '',
          href: '/admin/sites/2148700613/email_campaigns',
        },
        {
          id: 'funnels',
          label: 'Funnels',
          icon: '',
          href: '/admin/sites/2148700613/pipelines',
        },
        {
          id: 'automations',
          label: 'Automations',
          icon: '',
          href: '/admin/sites/2148700613/automation_rules',
        },
        {
          id: 'events',
          label: 'Events',
          icon: '',
          href: '/admin/sites/2148700613/events',
        },
        {
          id: 'forms',
          label: 'Forms',
          icon: '',
          href: '/admin/sites/2148700613/forms',
        },
      ],
    },
    {
      id: 'contacts',
      label: 'Contacts',
      icon: 'users-tone',
      items: [
        {
          id: 'all-contacts',
          label: 'All Contacts',
          icon: '',
          href: '/admin/sites/2148700613/contacts',
        },
        {
          id: 'insights',
          label: 'Insights',
          icon: '',
          href: '/admin/sites/2148700613/contact_insights',
        },
        {
          id: 'assessments',
          label: 'Assessments',
          icon: '',
          href: '/admin/sites/2148700613/assessments',
        },
      ],
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: 'bar-chart-tone',
      href: '/admin/sites/2148700613/reports',
    },
    {
      id: 'creator-studio',
      label: 'Creator Studio',
      icon: 'clapperboard-tone',
      href: '/admin/sites/2148700613/creator_studio?track=true',
    },
    {
      id: 'more',
      label: 'More',
      icon: 'dots-horizontal-tone',
      items: [
        {
          id: 'expert-services',
          label: 'Expert Services',
          icon: '',
          href: 'https://experts.kajabi.com/directory?preferred=true',
          external: true,
        },
        {
          id: 'custom-templates',
          label: 'Custom Templates',
          icon: '',
          href: 'https://templates.kajabi.com',
          external: true,
        },
      ],
    },
  ],
  bottomItems: [
    {
      id: 'settings',
      label: 'Settings',
      icon: 'gear',
      href: '/admin/sites/2148700613/settings',
    },
    {
      id: 'support',
      label: 'Contact support',
      icon: 'question-circle',
      href: '#',
    },
  ],
};