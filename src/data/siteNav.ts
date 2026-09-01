export interface NavItem {
  id: string
  label: string
  /** Short label for the mobile sheet / footer. */
  hint: string
}

export const navItems: NavItem[] = [
  { id: 'work', label: 'Work', hint: 'Selected projects' },
  { id: 'services', label: 'Services', hint: 'What I can build for you' },
  { id: 'skills', label: 'Skills', hint: 'Stack & toolbelt' },
  { id: 'journey', label: 'Journey', hint: 'Education & experience' },
  { id: 'about', label: 'About', hint: 'The person behind it' },
  { id: 'contact', label: 'Contact', hint: 'Let’s talk' },
]

export const sectionIds = ['home', ...navItems.map((n) => n.id)]
