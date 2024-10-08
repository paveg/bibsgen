import { Generator } from '@/components/generator';

import { SomeText } from './components/SomeText';

const Home = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-8 text-center">
      <SomeText />
      <Generator />
    </div>
  );
};

export default Home;
