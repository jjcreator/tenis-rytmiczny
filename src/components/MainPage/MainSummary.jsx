/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../modules/mainSummaryStyle.module.css';
import runnerImg from '../../images/runner1.jpg';

const text1 = 'Człowiek został wyposażony przez naturę w pewien potencjał intelektualny, który umożliwia nam uczenie się, przystosowanie do otoczenia, ale także, dokonywania zmian w swoim dotychczasowym sposobie egzystencji. To od nas zależy, czy, i w jakim stopniu wykorzystamy te możliwości, pozbędziemy się złych nawyków i przyswoimy zdrowy styl życia. Ta książka pomoże Ci skutecznie przebyć tę zmianę w sposób łagodny, pogodny, radosny.';

const { summary, summaryText, summaryImg } = styles;
const transformToBookText = (string) => (
  <div className={summaryText}>
    <span className="largeLetter">{string[0]}</span>
    {string.slice(1, string.length)}
  </div>

);

const MainSummary = () => (
  <section className={`flexColumn ${summary}`}>
    {transformToBookText(text1)}
    <img className={summaryImg} src={runnerImg} alt="biegnący mężczyzna" />
    <div className={summaryText}>
      <span className="largeLetter">J</span>
      eżeli dotychczas nie wybrałeś odpowiedniej aktywności fizycznej i nie zdecydowałeś się na uprawianie jakiejkolwiek dyscypliny sportowej, lecz chciałbyś prowadzić zdrowy styl życia, to mam dla ciebie jeszcze jedną propozycję. Jest to trenowany przeze mnie przez ostanie pięć lat -
      {' '}
      <span className="boldText">TENIS RYTMICZNY</span>
      . Od początku trenowania będzie rodziło się w Tobie nowe, pozytywne nastawienie do otoczenia, będzie rosła wiara we własne możliwości, będzie kształtował się nowy człowiek, a po trzech miesiącach systematycznego treningu nie będziesz sobie wyobrażał życia bez niego.
      {' '}
      <Link to="/ksiazka">
        <span className="boldText linkText">A więc do dzieła!</span>
      </Link>
    </div>
  </section>
);

export default MainSummary;
