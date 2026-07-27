import Header from '../../components/Header/Header';
import DirectorBlog from '../../components/DirectorBlog/DirectorBlog';
import Footer from '../../components/Footer/Footer';
import styles from './WorldSkills.module.css';
import { useTranslation } from 'react-i18next';

export default function WorldSkills() {
    const { t } = useTranslation();

    return (
        <div>
            <Header />
            <div className={styles.directorBlog}>
                <DirectorBlog />
            </div>
            <div className={styles.header}>
                <div className={styles.headerInner}>
                    <h1 className={styles.title}>{t('worldskills_page.title', 'WorldSkills')}</h1>
                    <p className={styles.subtitle}>{t('worldskills_page.subtitle', 'Достижения колледжа в международных и республиканских чемпионатах')}</p>
                </div>
            </div>
            <div className={styles.container}>
                <p><strong><em>МАҢҒЫСТАУ ТУРИЗМ КОЛЛЕДЖІ / МАНГИСТАУСКИЙ КОЛЛЕДЖ ТУРИЗМА</em></strong></p>
                
                <p><strong>MasterSkills 2023-2024</strong></p>
                <p>Конкурс профессионального мастерства среди педагогов / Педагогтер арасындағы кәсіби шеберлік конкурсы:</p>
                <ul>
                    <li>«Кондитер ісі» – Бибіайша Кайырбаева (I орын / 1 место)</li>
                    <li>«Мейрамхана ісі» – Қойшиева Жансая (I орын / 1 место)</li>
                    <li>«Наубайшы ісі» – Иманғалиева Ұлпан (I орын / 1 место)</li>
                    <li>«Қонақ үй әкімшілігі» – Бисембайқызы Эльвира (I орын / 1 место)</li>
                    <li>«Аспаз ісі» – Нұрай Еламан (II орын / 2 место)</li>
                </ul>

                <p><strong>MasterSkills Республика 2023</strong></p>
                <ul>
                    <li>«Мейрамхана ісі» – Қойшиева Жансая (I орын)</li>
                    <li>«Наубайшы ісі» – Иманғалиева Ұлпан (I орын)</li>
                    <li>«Қонақ үй әкімшілігі» – Черипова Шынар (III орын)</li>
                    <li>«Кондитер» – Кайырбаева Бибі-Айша (III орын)</li>
                </ul>

                <p><strong>WorldSkills Aktau-2023 & WorldSkills Kazakhstan 2023</strong></p>
                <ul>
                    <li>«Наубайшы ісі» – Байаманов Тимур (II орын РК)</li>
                    <li>«Мейрамхана ісі» – Узбекова Арайлым (III орын РК)</li>
                    <li>«Кондитер ісі» – Савтаева Асем (I орын региональный)</li>
                    <li>«Қонақүй әкімшісі» – Джосабай Молдир (I орын региональный)</li>
                    <li>«Аспаз ісі» – Алдаяров Асанали (I орын региональный)</li>
                    <li>«Туризм» – Баржикова Гульхат (I орын региональный)</li>
                </ul>

                <p><strong>WorldSkills Aktau-2024 & WorldSkills Kazakhstan 2024</strong></p>
                <ul>
                    <li>«Аспаз ісі» – Ташкалов Султан (III орын РК, I орын региональный)</li>
                    <li>«Наубайшы ісі» – Байгараева Алма (I орын региональный)</li>
                    <li>«Кондитерлік іс» – Ақат Сафарина (I орын региональный)</li>
                    <li>«Мейрамхана ісі» – Коломиець Александр (I орын региональный)</li>
                    <li>«Қонақ үй әкімшілігі» – Ниязбекова Аида (I орын региональный)</li>
                    <li>«Визуалды мерчендайзинг» – Айкерім Культөре (I орын региональный)</li>
                </ul>

                <p><strong>MasterSkills 2024</strong></p>
                <ul>
                    <li>«Аспаз ісі» – Нуржигитова Жанат (II орын РК)</li>
                    <li>«Қонақ үй әкімшілігі» – Базарова Гүлнұр (III орын РК)</li>
                    <li>«Наубайшы ісі» – Ысқақова Аружан (II орын РК)</li>
                </ul>
            </div>
            <Footer />
        </div>
    );
}