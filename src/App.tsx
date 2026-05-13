import { Route, Routes } from 'react-router-dom';
import { BaseLayout } from '@/layouts/BaseLayout';
import { Home } from '@/pages/Home';

function App() {
  return (
    <BaseLayout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BaseLayout>
  );
}

export default App;
