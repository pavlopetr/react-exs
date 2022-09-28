import styles from './Header.module.css'


const Header = () => {
  return (
    <header className={styles.header}>
      <a href="#" >Logo</a>
      <div >
        <p className={styles.headerUserInfo}>
          <span className={styles.headerUserAvatar}>U</span>
          <span className={styles.headerUserEmail}>user@mail.com</span> 
        </p>
      </div>
      <div className={styles.cartInfo}>
            <button type="button" className={styles.btnCart}>Cart</button>
            <p className={styles.cartDescr}>ProdNam: 0</p>
      </div>
    </header>
  );
};

export default Header;
