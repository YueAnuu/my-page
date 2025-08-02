import { Button } from '@/components/ui/button';
import { Mail, Github } from 'lucide-react';

interface SocialButtonProps {
  type: 'email' | 'github' | 'discord';
  href: string;
}

const SocialButton = ({ type, href }: SocialButtonProps) => {
  const Icon = type === 'email' ? Mail : type === 'github' ? Github : null;
  
  const getDisplayText = () => {
    if (type === 'discord') return 'discord';
    return type;
  };
  
  const getIconContent = () => {
    if (type === 'discord') {
      return <span className="w-4 h-4 mr-2 text-[#5865F2]">💬</span>;
    }
    return <Icon className="w-4 h-4 mr-2" />;
  };
  
  return (
    <Button
      variant="outline"
      size="sm"
      asChild
      className="border-border bg-transparent hover:bg-card text-foreground"
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        {getIconContent()}
        {getDisplayText()}
      </a>
    </Button>
  );
};

export default SocialButton;