import Header from "../../components/Header/Header";
import DirectorBlog from "../../components/DirectorBlog/DirectorBlog";
import Footer from "../../components/Footer/Footer";
import styles from "./Demo.module.css";
import { useTranslation } from "react-i18next";

export default function Demo() {
    const { t } = useTranslation();

    return (
        <div className={styles.pageWrapper}>
             <Header />
            <div className={styles.directorBlog}>
                <DirectorBlog />
            </div>
            <div className={styles.header}>
                <div className={styles.headerInner}>
                    <h1 className={styles.title}>{t('demo_page.title', 'Демонстрационный экзамен')}</h1>
                    <p className={styles.subtitle}>{t('demo_page.subtitle', 'Оценка профессиональных компетенций по стандартам WorldSkills')}</p>
                </div>
            </div>
            <main className={styles.container}>
                <section className={styles.langSection}>
                    <p className={styles.description}>
                        {t('demo_page.desc')}
                    </p>

                    <div className={styles.gridInfo}>
                        <div className={styles.infoBlock}>
                            <h3>{t('demo_page.goals_title', 'Цели:')}</h3>
                            <ul>
                                <li>{t('demo_page.g1')}</li>
                                <li>{t('demo_page.g2')}</li>
                                <li>{t('demo_page.g3')}</li>
                            </ul>
                        </div>
                        <div className={styles.infoBlock}>
                            <h3>{t('demo_page.features_title', 'Особенности:')}</h3>
                            <ul>
                                <li>{t('demo_page.f1')}</li>
                                <li>{t('demo_page.f2')}</li>
                                <li>{t('demo_page.f3')}</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.tableResponsive}>
                        <h3 className={styles.tableTitle}>{t('demo_page.table_title', 'Данные по выпуску и ДЭ')}</h3>
                        <table className={styles.statsTable}>
                            <thead>
                                <tr>
                                    <th>{t('demo_page.year', 'Год')}</th>
                                    <th>{t('demo_page.graduates', 'Выпускников')}</th>
                                    <th>{t('demo_page.specialties', 'Специальности (код - кол-во)')}</th>
                                    <th>{t('demo_page.passed', 'Сдали ДЭ')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2023-2024</td>
                                    <td>280</td>
                                    <td className={styles.smallText}>
                                        10130300: 140; 10130100: 42; 02310100: 44; 10150100: 34; 04140100: 20
                                    </td>
                                    <td>280</td>
                                </tr>
                                <tr>
                                    <td>2024-2025</td>
                                    <td>343</td>
                                    <td className={styles.smallText}>
                                        10130300: 148; 10130100: 49; 02310100: 44; 10150100: 58; 04140100: 43
                                    </td>
                                    <td>343 (16)</td>
                                </tr>
                                <tr>
                                    <td>2025-2026</td>
                                    <td>359</td>
                                    <td className={styles.smallText}>
                                        10130300: 188; 10130100: 49; 02310100: 50; 10150100: 25; 04140100: 47
                                    </td>
                                    <td>359 (36)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}