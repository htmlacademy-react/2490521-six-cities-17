import { OfferType } from '../../utils/types';


type CardItemProps = {
  offer: OfferType;
  pageType: 'favorites' | 'near-places' | 'cities';
  onHandleActiveOfferChange?: (id: string | null) => void;
}

function CardItem({offer, onHandleActiveOfferChange, pageType}: CardItemProps): JSX.Element {
  const {price, type, rating, previewImage, isPremium, title} = offer;

  return(
    <article className={`${pageType}__card place-card`}
      onMouseEnter={() => onHandleActiveOfferChange?.(offer.id)}
      onMouseLeave={() => onHandleActiveOfferChange?.(null)}
    >
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : null}
      <div className={`${pageType}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={previewImage} width='150' height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default CardItem;
