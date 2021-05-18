/* eslint-disable max-len */
import React from 'react';
import ReviewCard from './ReviewCard';

const reviews = [
  {
    review:
  <p>
    Książka bardzo kompleksowo przedstawia tematykę zdrowia w kontekście stylu i trybu życia, od odżywiania po aktywność fizyczną i psychiczną i nie tylko. Zawarta w niej jest duża dawka poukładanej, skondensowanej wiedzy, która przestawiona jest nie tylko w ujęciu teoretycznym, lecz w postaci praktycznych wskazówek, rad. Atutem książki jest również sposób prezentacji informacji - zwięzły, konkretny, mocno oparty w wiedzy naukowej, ale też przystępny, przez co łatwo się ją czyta i równie łatwo zapamiętuje.
    <br />
    <br />
    Jednym z głównych elementów składowych "Tenisa rytmicznego..." jest rzecz jasna trening fizyczny - w tym tytułowy tenis rytmiczny. Doktor Walczak w sposób dokładny i zrozumiały przedstawia kilka propozycji treningu (także w innych dyscyplinach, np. jazda na rowerze, bieganie), przeplatając je praktycznymi radami i własnymi doświadczeniami. Cała treść sprawia wrażenie niezwykle przemyślanej, rozsądnej, nierzadko sprzecznej z popularnymi w dzisiejszych czasach trendami promowanymi przez twórców intensywnych planów treningowych. W "Tenisie rytmicznym" autor stawia przede wszystkim na zdrowie (opierając swoje rady na wiedzy medycznej), czego sam jest żyjącym dowodem - w wieku prawie 90 lat nadal uprawia sport! Myślę, że takie kompendium zdrowego trybu życia w dzisiejszych czasach (zwłascza w dobie pandemii COVID19) jest szczególnie potrzebne, by pamiętać o tym, co jest dla naszego zdrowia i życia najważniejsze. Gorąco polecam każdemu!
  </p>,
    author: 'Jakub Jaskuła',
  },
];

const ReviewsPage = () => (
  <div className="flexColumn animated paddingTop">
    <h2 className="headerBig">Opinie naszych czytelników</h2>
    {reviews.map(({ review, author }) => (
      <ReviewCard review={review} author={author} />
    ))}
  </div>
);

export default ReviewsPage;
