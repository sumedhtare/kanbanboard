import HomeIcon from '../assets/icons/home.svg';
import MessagesIcon from '../assets/icons/messages.svg';
import TasksIcon from '../assets/icons/tasks.svg';
import MembersIcon from '../assets/icons/members.svg';
import SettingsIcon from '../assets/icons/settings.svg';
import FilterIcon from '../assets/icons/filter.svg';
import TodayIcon from '../assets/icons/today.svg';
import User2 from '../assets/users/user2.svg';
import User3 from '../assets/users/user3.svg';
import User4 from '../assets/users/user4.svg';
import User5 from '../assets/users/user5.svg';
import User6 from '../assets/users/user6.svg';
import Img1 from '../assets/images/img1.svg';
import Img2 from '../assets/images/img2.svg';
import Img3 from '../assets/images/img3.svg';
import Img4 from '../assets/images/img4.svg';

export const sidebarNav = [
  {
    title: 'Home',
    icon: HomeIcon
  },
  {
    title: 'Messages',
    icon: MessagesIcon
  },
  {
    title: 'Tasks',
    icon: TasksIcon
  },
  {
    title: 'Members',
    icon: MembersIcon
  },
  {
    title: 'Settings',
    icon: SettingsIcon
  }
];

export const sidebarProjects = [
  {
    title: 'Mobile App',
    isSelected: true,
    color: 'green'
  },
  {
    title: 'Website Redesign',
    isSelected: false,
    color: 'yelloDivider'
  },
  {
    title: 'Design System',
    isSelected: false,
    color: 'pinkDivider'
  },
  {
    title: 'Wireframes',
    isSelected: false,
    color: 'blueDivider'
  }
];

export const dropDownData = [
  {
    title: 'Filter',
    icon: FilterIcon
  },
  {
    title: 'Today',
    icon: TodayIcon
  }
];

export const todoData = [
  {
    id: 1,
    title: 'Brainstorming',
    description: "Brainstorming brings team members' diverse experience into play.",
    priority: 'Low',
    users: [User2, User4, User5],
    comments: 12,
    files: 0
  },
  {
    id: 2,
    title: 'Research',
    description: 'User research helps you to create an optimal product for users.',
    priority: 'High',
    users: [User3, User6],
    comments: 10,
    files: 3
  },
  {
    id: 3,
    title: 'Wireframes',
    description: 'Low fidelity wireframes include the most basic content and visuals.',
    priority: 'High',
    users: [User3, User4, User5],
    comments: 12,
    files: 0
  },
  {
    id: 4,
    title: 'Brainstorming retro',
    description: "Brainstorming brings team members' diverse experience into play.",
    priority: 'Low',
    users: [User2, User4, User5],
    comments: 12,
    files: 0
  }
];

export const onProgressData = [
  {
    id: 5,
    title: 'Onboarding Illustrations',
    images: [Img1],
    priority: 'Low',
    users: [User4, User5, User2],
    comments: 14,
    files: 15
  },
  {
    id: 6,
    title: 'Moodboard',
    priority: 'Low',
    images: [Img2, Img3],
    users: [User5],
    comments: 9,
    files: 10
  },
  {
    id: 7,
    title: 'Wireframes 3',
    description: 'Low fidelity wireframes include the most basic content and visuals.',
    priority: 'High',
    users: [User3, User4, User5],
    comments: 12,
    files: 0
  }
];

export const completedData = [
  {
    id: 8,
    title: 'Mobile App Design',
    images: [Img4],
    priority: 'Low',
    users: [User6, User4],
    comments: 12,
    files: 15
  },
  {
    id: 9,
    title: 'Design System',
    priority: 'Low',
    description: 'It just needs to adapt the UI from what you did before',
    users: [User2, User4, User5],
    comments: 12,
    files: 15
  },
  {
    id: 10,
    title: 'Wireframes 2',
    description: 'Low fidelity wireframes include the most basic content and visuals.',
    priority: 'High',
    users: [User3, User4, User5],
    comments: 12,
    files: 0
  }
];
