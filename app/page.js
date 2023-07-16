import MainForm from './MainForm.js';

import { getLifestyles } from './repositories/lifestyles/index.js';

export default async function Page() {
  const lifestyle = await getLifestyles();

  return (
    <main style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
      <MainForm lifestyle={lifestyle} />
    </main>
  );
}
