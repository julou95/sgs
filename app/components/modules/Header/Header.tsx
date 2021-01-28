import ScrollDown from '@element/ScrollDown/ScrollDown';
import styles from './Header.module.scss';

const Header: React.FC = () => (
  <header className={styles.header}>
      <div>
        <div className={styles.deconstructed}>
          SNITCHES
          <div>SNITCHES</div>
          <div>SNITCHES</div>
          <div>SNITCHES</div>
          <div>SNITCHES</div>
        </div>
        <div className={styles.deconstructed}>
          GET
          <div>GET</div>
          <div>GET</div>
          <div>GET</div>
          <div>GET</div>
        </div>
        <div className={styles.deconstructed}>
          STITCHES
          <div>STITCHES</div>
          <div>STITCHES</div>
          <div>STITCHES</div>
          <div>STITCHES</div>
        </div>
      </div>
      <div className={styles.scrollDown}>
        <ScrollDown />
      </div>
  </header>
);

export default Header;
