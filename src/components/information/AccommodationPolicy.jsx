import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';
import './AccommodationPolicy.css';

const AccommodationPolicy = () => {
  // Scroll to the top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to handle printing the policy
  const handlePrintPolicy = () => {
    window.print();
  };

  return (
    <div className="policy-container">
      <Header />
      
      <main className="policy-main">
        <div className="policy-header">
          <div className="policy-header-overlay">
            <h1 className="policy-title">Политика конфиденциальности</h1>
            <p className="policy-subtitle">ALRA Eco Village ценит вашу конфиденциальность</p>
          </div>
        </div>
        
        <div className="policy-content">
          <div className="policy-actions">
            <button className="policy-print-btn" onClick={handlePrintPolicy}>
              <span className="policy-print-icon">🖨️</span> Распечатать документ
            </button>
            <div className="policy-last-update">Последнее обновление: 15.10.2023</div>
          </div>
          
          <div className="policy-navigation">
            <div className="policy-toc">
              <h3 className="policy-toc-title">Содержание</h3>
              <ul className="policy-toc-list">
                <li><a href="#introduction">1. Введение</a></li>
                <li><a href="#information-collection">2. Какую информацию мы собираем</a></li>
                <li><a href="#information-usage">3. Как мы используем вашу информацию</a></li>
                <li><a href="#information-sharing">4. С кем мы делимся вашей информацией</a></li>
                <li><a href="#cookies">5. Файлы Cookie и технологии отслеживания</a></li>
                <li><a href="#security">6. Безопасность данных</a></li>
                <li><a href="#rights">7. Ваши права</a></li>
                <li><a href="#changes">8. Изменения в политике конфиденциальности</a></li>
                <li><a href="#contact">9. Как с нами связаться</a></li>
              </ul>
            </div>
            
            <div className="policy-sections">
              <section id="introduction" className="policy-section">
                <h2 className="policy-section-title">1. Введение</h2>
                <div className="policy-section-content">
                  <p>
                    ALRA Eco Village (далее "мы", "нас" или "наш") обязуется защищать вашу конфиденциальность. Эта Политика конфиденциальности объясняет, как мы собираем, используем, раскрываем, обрабатываем и защищаем информацию, которую вы предоставляете нам, когда используете наш сайт или наши услуги.
                  </p>
                  <p>
                    Пожалуйста, внимательно прочитайте эту Политику конфиденциальности. Если вы не согласны с какими-либо условиями, пожалуйста, воздержитесь от использования нашего сайта и услуг.
                  </p>
                </div>
              </section>
              
              <section id="information-collection" className="policy-section">
                <h2 className="policy-section-title">2. Какую информацию мы собираем</h2>
                <div className="policy-section-content">
                  <p>
                    Мы можем собирать следующие типы информации:
                  </p>
                  <h3 className="policy-subsection-title">Личная информация</h3>
                  <p>
                    Когда вы бронируете проживание, регистрируетесь на нашем сайте, подписываетесь на рассылку или связываетесь с нами, мы можем собирать:
                  </p>
                  <ul className="policy-list">
                    <li>Полное имя</li>
                    <li>Контактную информацию (email, телефон, адрес)</li>
                    <li>Платежную информацию</li>
                    <li>Данные паспорта или иного удостоверения личности (для регистрации проживания)</li>
                    <li>Дату рождения</li>
                    <li>Предпочтения при проживании</li>
                  </ul>
                  
                  <h3 className="policy-subsection-title">Информация о использовании</h3>
                  <p>
                    Мы автоматически собираем информацию о том, как вы взаимодействуете с нашим сайтом:
                  </p>
                  <ul className="policy-list">
                    <li>IP-адрес</li>
                    <li>Тип устройства и браузера</li>
                    <li>Страницы, которые вы посещаете</li>
                    <li>Время и дата посещения</li>
                    <li>Реферальные URL</li>
                  </ul>
                </div>
              </section>
              
              <section id="information-usage" className="policy-section">
                <h2 className="policy-section-title">3. Как мы используем вашу информацию</h2>
                <div className="policy-section-content">
                  <p>
                    Мы используем собранную информацию для следующих целей:
                  </p>
                  <ul className="policy-list">
                    <li>Обработка бронирований и предоставление услуг</li>
                    <li>Создание и управление вашим аккаунтом</li>
                    <li>Отправка подтверждений, информации о бронировании и обновлений</li>
                    <li>Персонализация вашего опыта</li>
                    <li>Улучшение нашего сайта и услуг</li>
                    <li>Отправка маркетинговых и рекламных материалов (с вашего согласия)</li>
                    <li>Обеспечение безопасности и предотвращение мошенничества</li>
                    <li>Соблюдение юридических обязательств</li>
                  </ul>
                </div>
              </section>
              
              <section id="information-sharing" className="policy-section">
                <h2 className="policy-section-title">4. С кем мы делимся вашей информацией</h2>
                <div className="policy-section-content">
                  <p>
                    Мы можем делиться вашей информацией со следующими третьими сторонами:
                  </p>
                  <ul className="policy-list">
                    <li>Поставщики услуг и бизнес-партнеры, которые помогают нам предоставлять наши услуги</li>
                    <li>Платежные процессоры для обработки транзакций</li>
                    <li>Государственные органы, когда это требуется по закону</li>
                  </ul>
                  <p>
                    Мы не продаем вашу личную информацию третьим сторонам. Мы делимся вашей информацией только в случаях, описанных в этой Политике конфиденциальности.
                  </p>
                </div>
              </section>
              
              <section id="cookies" className="policy-section">
                <h2 className="policy-section-title">5. Файлы Cookie и технологии отслеживания</h2>
                <div className="policy-section-content">
                  <p>
                    Мы используем файлы cookie и аналогичные технологии для улучшения вашего опыта, анализа трафика и персонализации контента.
                  </p>
                  <p>
                    Вы можете контролировать использование файлов cookie через настройки вашего браузера. Однако отключение некоторых файлов cookie может ограничить функциональность нашего сайта.
                  </p>
                  <h3 className="policy-subsection-title">Типы используемых файлов cookie:</h3>
                  <ul className="policy-list">
                    <li><strong>Необходимые:</strong> Требуются для функционирования сайта</li>
                    <li><strong>Функциональные:</strong> Улучшают функциональность и персонализацию</li>
                    <li><strong>Аналитические:</strong> Помогают нам понять, как вы используете наш сайт</li>
                    <li><strong>Маркетинговые:</strong> Используются для показа релевантной рекламы</li>
                  </ul>
                </div>
              </section>
              
              <section id="security" className="policy-section">
                <h2 className="policy-section-title">6. Безопасность данных</h2>
                <div className="policy-section-content">
                  <p>
                    Мы принимаем соответствующие технические и организационные меры для защиты вашей личной информации от несанкционированного доступа, использования или раскрытия.
                  </p>
                  <p>
                    Однако, помните, что ни один метод передачи через Интернет или метод электронного хранения не является 100% безопасным. Хотя мы стремимся использовать коммерчески приемлемые средства для защиты вашей личной информации, мы не можем гарантировать её абсолютную безопасность.
                  </p>
                </div>
              </section>
              
              <section id="rights" className="policy-section">
                <h2 className="policy-section-title">7. Ваши права</h2>
                <div className="policy-section-content">
                  <p>
                    В зависимости от вашего местоположения, вы можете иметь следующие права в отношении ваших данных:
                  </p>
                  <ul className="policy-list">
                    <li>Право на доступ к вашей информации</li>
                    <li>Право на исправление неточной информации</li>
                    <li>Право на удаление вашей информации</li>
                    <li>Право ограничить обработку вашей информации</li>
                    <li>Право на перенос данных</li>
                    <li>Право на возражение против обработки</li>
                    <li>Право отозвать согласие</li>
                  </ul>
                  <p>
                    Чтобы воспользоваться этими правами, пожалуйста, свяжитесь с нами по контактным данным, указанным ниже.
                  </p>
                </div>
              </section>
              
              <section id="changes" className="policy-section">
                <h2 className="policy-section-title">8. Изменения в политике конфиденциальности</h2>
                <div className="policy-section-content">
                  <p>
                    Мы можем обновлять нашу Политику конфиденциальности время от времени. Мы будем уведомлять вас о любых изменениях, публикуя новую Политику конфиденциальности на этой странице и обновляя дату "последнего обновления".
                  </p>
                  <p>
                    Мы рекомендуем вам периодически просматривать эту страницу, чтобы быть в курсе любых изменений.
                  </p>
                </div>
              </section>
              
              <section id="contact" className="policy-section">
                <h2 className="policy-section-title">9. Как с нами связаться</h2>
                <div className="policy-section-content">
                  <p>
                    Если у вас есть вопросы или предложения относительно нашей Политики конфиденциальности, пожалуйста, свяжитесь с нами:
                  </p>
                  <div className="policy-contact-info">
                    <p><strong>Email:</strong> privacy@alra-eco.com</p>
                    <p><strong>Телефон:</strong> +7 (940) 123-45-67</p>
                    <p><strong>Адрес:</strong> Абхазия, г. Сухум, ул. Приморская, 123</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
          
          <div className="policy-back-link">
            <Link to="/contacts" className="policy-back-button">
              <span>←</span> Вернуться к контактам
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AccommodationPolicy; 