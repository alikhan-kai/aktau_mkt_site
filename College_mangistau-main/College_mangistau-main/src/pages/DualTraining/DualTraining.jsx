import Header from '../../components/Header/Header';
import DirectorBlog from '../../components/DirectorBlog/DirectorBlog';
import Footer from '../../components/Footer/Footer';
import styles from './DualTraining.module.css';
import { useTranslation } from 'react-i18next';

export default function DualTraining() {
    const { t } = useTranslation();

    return (
        <div>
            <Header />
            <div className={styles.directorBlog}>
                <DirectorBlog />
            </div>
            
            <div className={styles.header}>
                <div className={styles.headerInner}>
                    <h1 className={styles.title}>{t('dualtraining_page.title', 'Дуальное обучение')}</h1>
                    <p className={styles.subtitle}>{t('dualtraining_page.subtitle', 'Система содействия трудоустройству и практического обучения')}</p>
                </div>
            </div>

            <div className={styles.container}>
                <section className={styles.section}>
                    <h2>{t('dualtraining_page.title', 'Дуальное обучение')}</h2>
                    <p>{t('dualtraining_page.p1')}</p>
                    <p>{t('dualtraining_page.p2')}</p>
                    
                    <h3>{t('dualtraining_page.features_title', 'Особенности системы:')}</h3>
                    <ul className={styles.list}>
                        <li>{t('dualtraining_page.f1')}</li>
                        <li>{t('dualtraining_page.f2')}</li>
                        <li>{t('dualtraining_page.f3')}</li>
                        <li>{t('dualtraining_page.f4')}</li>
                    </ul>

                    <p>{t('dualtraining_page.codex')}</p>

                    <h3>{t('dualtraining_page.goals_title', 'Основные цели:')}</h3>
                    <ul className={styles.list}>
                        <li>{t('dualtraining_page.g1')}</li>
                        <li>{t('dualtraining_page.g2')}</li>
                        <li>{t('dualtraining_page.g3')}</li>
                        <li>{t('dualtraining_page.g4')}</li>
                    </ul>

                    <h3>{t('dualtraining_page.stats_title', 'Данные по дуальному обучению')}</h3>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th colSpan="2">2023-2024</th>
                                    <th colSpan="2">2024-2025</th>
                                    <th colSpan="2">2025-2026</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{t('dualtraining_page.contingent', 'контингент')}</td><td>1065</td>
                                    <td>{t('dualtraining_page.contingent', 'контингент')}</td><td>1125</td>
                                    <td>{t('dualtraining_page.contingent', 'контингент')}</td><td>1097</td>
                                </tr>
                                <tr>
                                    <td>{t('dualtraining_page.dual_count', 'дуальное обучение')}</td><td>172</td>
                                    <td>{t('dualtraining_page.dual_count', 'дуальное обучение')}</td><td>318</td>
                                    <td>{t('dualtraining_page.dual_count', 'дуальное обучение')}</td><td>404</td>
                                </tr>
                                <tr>
                                    <td>{t('dualtraining_page.catering', 'Организация питания')}</td><td>122</td>
                                    <td>{t('dualtraining_page.catering', 'Организация питания')}</td><td>243</td>
                                    <td>{t('dualtraining_page.catering', 'Организация питания')}</td><td>331</td>
                                </tr>
                                <tr>
                                    <td>{t('dualtraining_page.hotel', 'Гостиничный бизнес')}</td><td>50</td>
                                    <td>{t('dualtraining_page.hotel', 'Гостиничный бизнес')}</td><td>75</td>
                                    <td>{t('dualtraining_page.hotel', 'Гостиничный бизнес')}</td><td>73</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}