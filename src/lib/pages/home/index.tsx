import { Generator } from '@/components/generator';

import { SomeText } from './components/SomeText';

const Home = () => {
  return (
    <div className="container mx-auto space-y-12 px-4 py-8">
      <div className="space-y-4 text-center">
        <SomeText />
      </div>
      <div className="flex justify-center">
        <Generator />
      </div>
    </div>
  );
};

export default Home;
