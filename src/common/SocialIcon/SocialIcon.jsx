import styles from './SocialIcon.module.scss';

const SocialIcon = ({ link, type, bgColor }) => {
  return (
    <a href={link} className={styles.styles} style={{ background: bgColor }}>
      {type}
    </a>
  );
};

export default SocialIcon;
