import { H4Title } from '../Title/Title';
import styles from './index.module.scss';

export default function NavBlock({ title }) {
  return (
    <div className={styles['nav-block']}>
      <H4Title title={title} />
      <ul className={styles['nav-block__list']}>
        <li>
          <a href="#">Фармакологічні властивості</a>
        </li>
        <li>
          <a href="#">Показания</a>
        </li>
        <li>
          <a href="#">Застосування</a>
        </li>
        <li>
          <a href="#">Побічні ефекти</a>
        </li>
        <li>
          <a href="#">Умови зберігання</a>
        </li>
        <li>
          <a href="#">Протипоказання</a>
        </li>
        <li>
          <a href="#">Особливі вказівки</a>
        </li>
        <li>
          <a href="#">Клінічні характеристики</a>
        </li>
        <li>
          <a href="#">Передозування</a>
        </li>
      </ul>
    </div>
  );
}
