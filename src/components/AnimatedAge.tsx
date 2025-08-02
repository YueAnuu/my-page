import { useEffect, useState } from 'react';

const AnimatedAge = () => {
  const [timeElapsed, setTimeElapsed] = useState('');

  useEffect(() => {
    const birthDate = new Date('2007-03-20T06:36:00+05:30'); // 20/03/2007 06:36AM IST

    const updateAge = () => {
      const now = new Date();
      const diffMs = now.getTime() - birthDate.getTime();
      const years = diffMs / (1000 * 60 * 60 * 24 * 365.25);
      setTimeElapsed(years.toFixed(8));
    };

    updateAge();
    const interval = setInterval(updateAge, 100);

    return () => clearInterval(interval);
  }, []);

  return <span>{timeElapsed} years old</span>;
};

export default AnimatedAge;