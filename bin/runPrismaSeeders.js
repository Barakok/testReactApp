import { lifestyleSeeder } from '../prisma/seeders/LifeStylesSeeder.js';
async function runSeeders() {
  await lifestyleSeeder();
  return;
}

runSeeders()
  .then(() => {
    console.log('Seeder success');
  })
  .catch(async (e) => {
    console.error('Error', e);
    process.exit(1);
  });
