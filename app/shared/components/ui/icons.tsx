import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Calendar,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Eye,
  FileText,
  Filter,
  Globe,
  Home,
  Info,
  LayoutDashboard,
  List,
  Loader2,
  LogOut,
  Mail,
  MapPin,
  Menu,
  Moon,
  MoreHorizontal,
  Package,
  Phone,
  Plus,
  Search,
  Settings,
  Sun,
  Truck,
  User,
  Users,
  X,
} from 'lucide-react';

export const Icons = {
  alertCircle: AlertCircle,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  calendar: Calendar,
  check: Check,
  chevronDown: ChevronDown,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  clock: Clock,
  eye: Eye,
  fileText: FileText,
  filter: Filter,
  globe: Globe,
  home: Home,
  info: Info,
  layoutDashboard: LayoutDashboard,
  list: List,
  loader2: Loader2,
  logOut: LogOut,
  mail: Mail,
  mapPin: MapPin,
  menu: Menu,
  moon: Moon,
  moreHorizontal: MoreHorizontal,
  package: Package,
  phone: Phone,
  plus: Plus,
  search: Search,
  settings: Settings,
  sun: Sun,
  truck: Truck,
  user: User,
  users: Users,
  x: X,
} as const;

export type IconName = keyof typeof Icons;
