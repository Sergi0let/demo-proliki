import Image from 'next/image';
import styles from './DrugsTable.module.scss';

const DrugsTable = () => {
  return (
    <ul className={styles.table}>
      <li>
        <a href="#">
          <Image
            src="/img/drugs/analogs/item-1.jpg"
            width={136}
            height={136}
            alt="item-1"
          />
          <h4>Ніфуроксазід</h4>
        </a>
        <h5>
          таблетки, покриті плівковою оболонкою 200 мг блістер у пачці, № 10, 20
        </h5>
        <p>Киевмедпрепарат</p>
        <div>
          <button className={styles.table__insturction}>Інструкція</button>
        </div>
      </li>
      <li>
        <Image
          src="/img/drugs/analogs/item-2.jpg"
          width={136}
          height={136}
          alt="item-1"
        />
        <a href="#">Ніфуроксазід</a>
        <h5>таблетки, вкриті оболонкою 0,1 г блістер № 30</h5>
        <p>Юнифарма</p>
        <div>
          <button className={styles.table__insturction}>Інструкція</button>
        </div>
      </li>
      <li>
        <Image
          src="/img/drugs/analogs/item-3.jpg"
          width={136}
          height={136}
          alt="item-1"
        />
        <a href="#">Ніфуроксазід</a>
        <h5>
          таблетки, покрытые пленочной оболочкой 200 мг блистер в пачке, № 10,
          20
        </h5>
        <p>Киевмедпрепарат</p>
        <div>
          <button className={styles.table__insturction}>Інструкція</button>
        </div>
      </li>
      <li>
        <Image
          src="/img/drugs/analogs/item-4.jpg"
          width={136}
          height={136}
          alt="item-1"
        />
        <a href="#">Ніфуроксазід</a>
        <h5>суспензия оральная 220 мг/5 мл флакон 100 мл, № 1</h5>
        <p>Киевмедпрепарат</p>
        <div>
          <button className={styles.table__insturction}>Інструкція</button>
        </div>
      </li>
      <li>
        <Image
          src="/img/drugs/analogs/item-5.jpg"
          width={136}
          height={136}
          alt="item-1"
        />
        <a href="#">Ніфуроксазід</a>
        <h5>
          суспензия оральная 220 мг/5 мл флакон полимерный 100 мл с дозирующей
          ложкой, в пачке, № 1
        </h5>
        <p>Киевмедпрепарат</p>
        <div>
          <button className={styles.table__insturction}>Інструкція</button>
        </div>
      </li>
      <li>
        <Image
          src="/img/drugs/analogs/no_photo.jpg"
          width={136}
          height={136}
          alt="item-1"
        />
        <a href="#">Ніфуроксазід</a>
        <h5>капсулы 200 мг блистер, № 10, 20</h5>
        <p>ООО ДКП &quot;Фармацевтиче...</p>
        <div>
          <button className={styles.table__insturction}>Інструкція</button>
        </div>
      </li>
      <li>
        <Image
          src="/img/drugs/analogs/item-6.jpg"
          width={136}
          height={136}
          alt="item-1"
        />
        <a href="#">Нифуроксазид Алкалоид</a>
        <h5>капсулы твердые 100 мг блистер, № 30</h5>
        <p>Alkaloid</p>
        <div>
          <button className={styles.table__insturction}>Інструкція</button>
        </div>
      </li>
      <li>
        <Image
          src="/img/drugs/analogs/item-7.jpg"
          width={136}
          height={136}
          alt="item-1"
        />
        <a href="#">Ніфуроксазід</a>
        <h5>капсулы твердые 200 мг блистер, № 20</h5>
        <p>Alkaloid</p>
        <div>
          <button className={styles.table__insturction}>Інструкція</button>
        </div>
      </li>
    </ul>
  );
};

export default DrugsTable;
