import DirectorBlog from '../../components/DirectorBlog/DirectorBlog';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import styles from './Students.module.css';
import { useTranslation } from 'react-i18next';

export default function Students(){
    const { t } = useTranslation();
    return(
        <div className={styles.container}> 
            <Header />
            <div className={styles.directorBlog}>
                <DirectorBlog />
            </div>
             <div className={styles.header}>
                <div className={styles.headerInner}>
                    <h1 className={styles.title}>{t('students_page.title','Студентам')}</h1>
                    <p className={styles.subtitle}>{t('students_page.subtitle','Информация для студентов')}</p>
                </div>
            </div>
               <p className={styles.p}>{t('students_page.intro','При поступлении в колледж путеводитель оказывает помощь студентам.')}</p>
                <p className={styles.p}>{t('students_page.leaders','Руководители групп 2019-2020 учебного года:')}</p>
                <p className={styles.p}>{t('students_page.timetable_label','Расписание звонков')}</p>
                <p>&nbsp;</p>
                <p><strong>{t('students_page.shift1','1 смена')}</strong></p>
                <table border="1px" className={styles.timetable}>
                <tbody>
                <tr>
                <td width="159">{t('students_page.double_lesson','Пара')}</td>
                <td width="160">{t('students_page.lesson_order','№ урока')}</td>
                <td width="160">{t('students_page.time','Время')}</td>
                <td width="160">{t('students_page.break','Перемена')}</td>
                </tr>
                <tr>
                <td width="159">1</td>
                <td width="160">1</td>
                <td width="160">8.15-8.55</td>
                <td width="160">5</td>
                </tr>
                <tr>
                <td width="159">&nbsp;</td>
                <td width="160">2</td>
                <td width="160">9.00-9.40</td>
                <td width="160">15</td>
                </tr>
                <tr>
                <td width="159">2</td>
                <td width="160">3</td>
                <td width="160">9.55-10.35</td>
                <td width="160">5</td>
                </tr>
                <tr>
                <td width="159">&nbsp;</td>
                <td width="160">4</td>
                <td width="160">10.40-11.20</td>
                <td width="160">15</td>
                </tr>
                <tr>
                <td width="159">3</td>
                <td width="160">5</td>
                <td width="160">11.35-12.20</td>
                <td width="160">5</td>
                </tr>
                <tr>
                <td width="159">&nbsp;</td>
                <td width="160">6</td>
                <td width="160">12.20-13.00</td>
                <td width="160">5</td>
                </tr>
                <tr>
                <td width="159">4</td>
                <td width="160">7</td>
                <td width="160">13.05-13.45</td>
                <td width="160">5</td>
                </tr>
                <tr>
                <td width="159">&nbsp;</td>
                <td width="160">8</td>
                <td width="160">13.50-14.30</td>
                <td width="160">&nbsp;</td>
                </tr>
                </tbody>
                </table>
                <p>&nbsp;</p>
                <p><strong>{t('students_page.shift2','2 смена')}</strong></p>
                <table border="1px" className={styles.timetable}>
                <tbody>
                <tr>
                <td width="159">{t('students_page.double_lesson','Пара')}</td>
                <td width="160">{t('students_page.lesson_order','№ урока')}</td>
                <td width="160">{t('students_page.time','Время')}</td>
                <td width="160">{t('students_page.break','Перемена')}</td>
                </tr>
                <tr>
                <td width="159">0</td>
                <td width="160">&nbsp;</td>
                <td width="160">12.00-12.40</td>
                <td width="160">5</td>
                </tr>
                <tr>
                <td width="159">&nbsp;</td>
                <td width="160">&nbsp;</td>
                <td width="160">12.45-13.25</td>
                <td width="160">5</td>
                </tr>
                <tr>
                <td width="159">1</td>
                <td width="160">1</td>
                <td width="160">13.30-14.10</td>
                <td width="160">5</td>
                </tr>
                <tr>
                <td width="159">&nbsp;</td>
                <td width="160">2</td>
                <td width="160">14.15-14.55</td>
                <td width="160">10</td>
                </tr>
                <tr>
                <td width="159">2</td>
                <td width="160">3</td>
                <td width="160">15.05-15.45</td>
                <td width="160">5</td>
                </tr>
                <tr>
                <td width="159">&nbsp;</td>
                <td width="160">4</td>
                <td width="160">15.50-16.30</td>
                <td width="160">10</td>
                </tr>
                <tr>
                <td width="159">2</td>
                <td width="160">5</td>
                <td width="160">16.40-17.20</td>
                <td width="160">5</td>
                </tr>
                <tr>
                <td width="159">&nbsp;</td>
                <td width="160">6</td>
                <td width="160">17.25-18.05</td>
                <td width="160">&nbsp;</td>
                </tr>
                </tbody>
                </table>
            <Footer />
        </div>
    )
}