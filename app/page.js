import 'bootstrap/dist/css/bootstrap.min.css';
import CustomButton from '@/components/CustomButton';
import styles from './page.module.css';

export default function Page() {
  return (
    <main className={styles.main}>
      <CustomButton />
    </main>
  );
}
