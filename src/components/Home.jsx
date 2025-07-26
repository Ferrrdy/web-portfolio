import ScrollVelocity from '../reactbits/ScrollVelocity';
import DecryptedText from '../reactbits/DecryptedText';
import { useEffect, useState } from 'react';

const Home = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRefreshKey(Date.now());
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div className="flex items-center justify-center mt-70 mb-30">
        <div className="text-center space-y-2">
          <h2 className="text-7xl sm:text-7xl md:text-7xl lg:text-8xl font-bold">
            <DecryptedText
              key={`ferdy-${refreshKey}`}
              text="FERDY"
              animateOn="view"
              revealDirection="center"
              className="inline-block"
            />
          </h2>
          <h2 className="text-7xl sm:text-7xl md:text-7xl lg:text-8xl font-bold">
            <DecryptedText
              key={`ashari-${refreshKey}`}
              text="ASHARI"
              animateOn="view"
              revealDirection="center"
              className="inline-block"
            />
          </h2>
          <h2 className="text-7xl sm:text-7xl md:text-7xl lg:text-8xl font-bold">
            <DecryptedText
              key={`putra-${refreshKey}`}
              text="PUTRA"
              animateOn="view"
              revealDirection="center"
              className="inline-block"
            />
          </h2>

          <ScrollVelocity
            texts={['FRONTEND WEB DEVELOPER']}
            velocity={50}
            className="custom-scroll-text mb-25 font-medium mt-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
