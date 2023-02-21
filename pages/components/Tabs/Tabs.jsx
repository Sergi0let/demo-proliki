import React from 'react';

import styles from './Tabs.module.scss';

const Tabs = () => {
  return (
    <div className={styles.Tabs}>
      {/* Tab nav */}
      <ul className={styles.nav}>
        <li>Tab 1</li>
        <li>Tab 2</li>
      </ul>
      <div className="outlet">{/* content will be shown here */}</div>
    </div>
  );
};
export default Tabs;
