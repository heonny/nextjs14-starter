import { Icon } from '@iconify/react';
import { clsx } from 'clsx';

import { createTranslation } from '@/i18n/server.ts';

import styles from './Hello.module.scss';

export async function Hello() {
  const { t } = await createTranslation('common');
  return (
    <div className={styles['hello']}>
      <div className={styles['title']}>
        <Icon icon={'mdi:human-hello-variant'} width={30} height={30} />
        {t('HelloNext')}
      </div>
      <div className={styles['description']}>{t('MainDescription')}</div>
      <div className={clsx(styles['description'], styles['sub'])}>{t('MainDescription2')}</div>
    </div>
  );
}
