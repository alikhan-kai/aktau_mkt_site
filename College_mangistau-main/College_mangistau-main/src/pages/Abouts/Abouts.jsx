import DirectorBlog from '../../components/DirectorBlog/DirectorBlog';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useTranslation } from 'react-i18next';
import styles from './Abouts.module.css';
export default function About(){
    const { t } = useTranslation();
    return(
        <div className={styles.about}>
             <Header />
                <div className={styles.directorBlog}>
                    <DirectorBlog />
                </div>
                 <div className={styles.header}>
                    <div className={styles.headerInner}>
                        <h1 className={styles.title}>{t('about_page.title','О нас')}</h1>
                        <p className={styles.subtitle}>{t('about_page.subtitle','Информация про колледж')}</p>
                    </div>
                 </div>
                <div id="content" className={styles.siteContent}>
                <img src="/images/about.jpg" alt={t('about_page.title')} className={styles.image} />

                <div className={styles.container}>
                <div className={styles.innerWrapper}>
                    <div id="primary" className={styles.contentArea}>
                    <article className={styles.article}>
                        <div className={styles.entryContent}>
                        <p>{t('about_page.p1')}</p>

                        <p>{t('about_page.p2')}</p>

                        <p><strong>{t('about_page.contingent')}</strong></p>
                        <ul>
                            <li>{t('about_page.local_budget')}</li>
                            <li>{t('about_page.state_budget')}</li>
                        </ul>

                        <p>{t('about_page.languages_info')}</p>

                        <p>{t('about_page.start_date')}</p>

                        <p><strong>{t('about_page.infrastructure_title')}</strong></p>
                        <ul>
                            <li>{t('about_page.infra_b1')}</li>
                            <li>{t('about_page.infra_b2')}</li>
                            <li>{t('about_page.infra_b3')}</li>
                        </ul>

                        <p>{t('about_page.zhas_maman')}</p>
                        <p>{t('about_page.directions')}</p>
                        </div>
                    </article>
                    </div>
                </div>
                </div>
            </div>
            <Footer />
    </div>
    );
}