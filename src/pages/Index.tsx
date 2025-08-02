import NetworkBackground from '@/components/NetworkBackground';
import AnimatedAge from '@/components/AnimatedAge';
import SocialButton from '@/components/SocialButton';

import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import { Card } from '@/components/ui/card';
import discordAvatar from '@/assets/discord-avatar.png';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative py-8">
      <NetworkBackground />
      <ThemeToggle />
      
      <div className="flex flex-col items-center gap-6 w-full">
        <Card className="max-w-lg w-full mx-4 p-8 bg-card border-border">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center mb-4">
              <img 
                src={discordAvatar} 
                alt="Anil's Avatar" 
                className="w-16 h-16 rounded-full border-2 border-border"
              />
            </div>
            
            <div className="space-y-1 text-sm text-foreground/80">
              <div className="flex items-center justify-center gap-2">
                <span>Anil‽!</span>
                <span>•</span>
                <span>he/him</span>
                <span>•</span>
                <AnimatedAge />
              </div>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-2xl font-bold text-foreground">
                About <strong>Me..</strong>
              </h1>
              
              <p className="text-foreground/70">
                Welcome to my little corner on the internet, a place where I build, break, and explore cool stuff.
              </p>
            </div>
            
            <div className="flex gap-4 justify-center">
              <SocialButton 
                type="email" 
                href="mailto:anilxdbusiness@gmail.com" 
              />
              <SocialButton 
                type="discord" 
                href="https://discord.com/users/799086431791480833" 
              />
              <SocialButton 
                type="github" 
                href="https://github.com/YueAnuu" 
              />
            </div>
          </div>
        </Card>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
