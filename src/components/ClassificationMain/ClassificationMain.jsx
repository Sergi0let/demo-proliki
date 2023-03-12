import Container from '@/src/common/Container/Container';
import Title, { TitleBig, TittleIntermidiate } from '@/src/common/Title/Title';
import Link from 'next/link';
import styles from './ClassificationMain.module.scss';
import atx_classification from '@/src/data/atx_classification';
import ItemClassification from '@/src/common/ItemClassification/ItemClassification';

const ClassificationMain = () => {
  return (
    <Container>
      <div className={styles.classification}>
        <ul className={styles.classification__crumbreads}>
          <li>
            <Link href="/">Proliki</Link>
          </li>
        </ul>
        <div className={styles.classification__title}>
          <TitleBig title="ATХ классификация" />
        </div>
        <ul className={styles.classification__list}>
          {atx_classification &&
            atx_classification.map((item) => (
              <li key={item.id} className={styles.itemClassification}>
                <span>{item.letter}</span>
                <Link href={`/atx_classification/${item.letter}`}>
                  {item.title}
                </Link>
              </li>
            ))}
        </ul>
        <Title title="Классификационная система ATC (Anatomical Therapeutic Chemical (АТС) classification system)" />
        <div className={styles['classification__block-text']}>
          <p>
            Классификационная система ATC (Anatomical Therapeutic Chemical (АТС)
            classification system) принята ВОЗ в качестве международного
            стандарта методологии, предназначенной для проведения статистических
            исследований в области потребления лекарственных средств в разных
            странах. Система АТС разрабатывается под эгидой ВОЗ с 1969 г. В
            начале 70-х гг. ХХ в. Норвежское агентство по контролю за
            лекарственными средствами (Norsk Medisinaldepot, NMD) модифицировало
            и расширило Анатомо-терапевтическую классификацию Европейской
            ассоциации исследований фармацевтического рынка (EPhMRA), создав
            систему, известную сегодня как классификационная система АТС.
            Вопросами АТС занимается координирующий орган — Центр ВОЗ по
            сотрудничеству в методологии статистических исследований.
          </p>
        </div>
        <TittleIntermidiate title="Структура и номенклатура системы АТС" />
        <div className={styles['classification__block-text']}>
          <p>
            В системе АТС лекарственные средства классифицируются в соответствии
            с их основным терапевтическим применением (то есть по основному
            активному ингредиенту). Основополагающий принцип состоит в том, что
            для каждой готовой лекарственной формы определен только один код
            АТС. Лекарственный препарат может иметь и более одного кода, если он
            содержит разные дозы активного вещества или представлен в нескольких
            лекарственных формах, терапевтические показания для применения
            которых различны. В случае, если лекарственный препарат имеет два и
            более одинаково важных показания или его основное терапевтическое
            применение отличается в разных странах, вопрос о том, какое
            показание следует учитывать как основное, решает Техническая рабочая
            группа ВОЗ и этому препарату обычно присваивается только один код.
            При включении новых лекарственных препаратов в официальный индекс
            кодов АТС Центр ВОЗ в первую очередь рассматривает простые
            лекарственные препараты (содержащие одно активное вещество), однако
            фиксированным комбинациям активных веществ, широко применяемым в
            различных странах, также присвоены коды АТС. Комбинированные
            препараты, активные ингредиенты которых относятся к одному 4-му
            терапевтическому уровню, обычно классифицируются с помощью кодов
            5-го уровня, имеющих серии 20 или 30; комбинированные препараты,
            активные ингредиенты которых не принадлежат к одной терапевтической
            группе 4-го уровня, классифицируются с помощью кодов 5-го уровня,
            имеющих серию 50.
          </p>
          <p>
            Обращаем внимание читателей «КОМПЕНДИУМА» на то, что для удобства
            пользования справочником препараты, не имеющие международных кодов,
            выделены в несколько дополнительных групп, отмеченных знаком «**».
            Коды этих групп официально не утверждены ВОЗ и могут не совпадать с
            таковыми в других странах.
          </p>
        </div>
        <TittleIntermidiate title="Принципы классификации АТС" />
        <div className={styles['classification__block-text']}>
          <p>
            Центр ВОЗ включает новые статьи в классификацию АТС только по заявке
            (производителей, агентств по контролю за лекарственными средствами,
            научно-исследовательских учреждений). При включении новых
            лекарственных средств в индекс кодов АТС Центр преимущественно
            рассматривает простые препараты (содержащие одну активную
            субстанцию, обычно имеющую INN и хорошо известные свойства).
          </p>
          <p>Отдельные коды АТС не присваивают:</p>
          <p className={styles['classification__block-text_list']}>
            <span>1.</span>Комбинированным препаратам (исключение — широко
            применяемые фиксированные комбинации активных субстанций)
          </p>
          <p className={styles['classification__block-text_list']}>
            <span>2</span>Новым субстанциям до подачи заявки на лицензирование;
          </p>
          <p className={styles['classification__block-text_list']}>
            <span>3.</span>Вспомогательным лекарственным средствам или средствам
            традиционной медицины.
          </p>
          <p>
            Присвоение кода АТС лекарственному средству также не является
            рекомендацией ВОЗ к его применению или оценкой его эффективности, в
            том числе по сравнению с другими лекарственными средствами. Коды АТС
            обычно публикуют ежегодно (последнее издание — ATC classification
            index with DDDs, January 2014, WHO Collaborating Centre for Drug
            Statistics Methodology, Oslo, Norway).
          </p>
          <p>
            В системе АТС простые лекарственные средства классифицируются в
            соответствии с основным терапевтическим применением (по активному
            ингредиенту). Главный принцип — всем лекарственным средствам,
            имеющим сходные ингредиенты, силу действия и лекарственную форму,
            присваивают только один код АТС. Лекарственное средство может иметь
            более одного кода, если выпускается в лекарственных формах с разной
            силой действия, составом или терапевтическими показаниями к
            применению. Различные лекарственные формы для местного или
            системного применения также имеют различные коды АТС. Если
            лекарственный препарат имеет два и более одинаково важных показания,
            Международная рабочая группа экспертов ВОЗ решает, какое показание
            считать основным, и в соответствии с ним присваивает единственный
            код.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default ClassificationMain;
