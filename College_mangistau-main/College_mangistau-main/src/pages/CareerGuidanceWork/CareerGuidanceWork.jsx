import Header from '../../components/Header/Header';
import DirectorBlog from '../../components/DirectorBlog/DirectorBlog';
import Footer from '../../components/Footer/Footer';
import styles from './CareerGuidanceWork.module.css';
import { useTranslation } from 'react-i18next';

export default function CareerGuidanceWork() {
    const { t } = useTranslation();

    return (
        <div>
            <Header />
            <div className={styles.directorBlog}>
                <DirectorBlog />
            </div>
            <div className={styles.header}>
                <div className={styles.headerInner}>
                    <h1 className={styles.title}>{t('careerguidance_page.title', 'Профориентационная работа')}</h1>
                    <p className={styles.subtitle}>{t('careerguidance_page.subtitle', 'Информация для абитуриентов и школьников')}</p>
                </div>
            </div>
            <div className={styles.container}>
                <iframe 
                    src="https://drive.google.com/file/d/1OfCu7I3wgoBV2KqJO8ZL2BqwtZnCgYI1/preview" 
                    width="100%" 
                    height="600" 
                    style={{ maxWidth: '900px', border: 'none', borderRadius: '12px' }}
                    title={t('careerguidance_page.title')}
                ></iframe>
            </div>
            <Footer />
        </div>
    );
}