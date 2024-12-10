import CardItem from '../card-item/card-item';
import { OfferType } from '../../utils/types';

type CardListProps = {
  offers: OfferType[];
  onHandleActiveOfferChange: (id: string | null) => void;
}

function CardList({offers, onHandleActiveOfferChange}: CardListProps): JSX.Element {
  return(
    <div className='cities__places-list places-list tabs__content'>
      {offers.map((offer) => (<CardItem key={offer.id} onHandleActiveOfferChange={onHandleActiveOfferChange} pageType='cities' offer={offer} />))}
    </div>
  );
}

export default CardList;
