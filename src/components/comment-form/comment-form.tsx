import { useState, ChangeEvent } from 'react';
import { MIN_LENGTH_OF_REVIEW, MAX_LENGTH_OF_REVIEW } from '../../utils/const';

type FormDataType = {
  rating: number;
  review: string;
}

function CommentForm(): JSX.Element {

  const initialValue: FormDataType = {
    rating: 0,
    review: ''
  };

  const [formData, setFormData] = useState(initialValue);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleValueChange = (evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = evt.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (formData.review.length > MIN_LENGTH_OF_REVIEW && formData.review.length < MAX_LENGTH_OF_REVIEW) {
      setIsButtonDisabled(false);
    }
  };


  const handleSubmitForm = (evt: ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setFormData(initialValue);
  };

  return (
    <form className='reviews__form form' onSubmit={handleSubmitForm}>
      <label className='reviews__label form__label' htmlFor='review'>
        Your review
      </label>

      <div className='reviews__rating-form form__rating'>
        <input
          className='form__rating-input visually-hidden'
          name='rating'
          value={5}
          id='5-stars'
          type='radio'
          onChange={handleValueChange}
        />
        <label
          htmlFor='5-stars'
          className='reviews__rating-label form__rating-label'
          title='perfect'
        >
          <svg className='form__star-image' width={37} height={33}>
            <use xlinkHref='#icon-star' />
          </svg>
        </label>
        <input
          className='form__rating-input visually-hidden'
          name='rating'
          value={4}
          id='4-stars'
          type='radio'
          onChange={handleValueChange}
        />
        <label
          htmlFor='4-stars'
          className='reviews__rating-label form__rating-label'
          title='good'
        >
          <svg className='form__star-image' width={37} height={33}>
            <use xlinkHref='#icon-star' />
          </svg>
        </label>
        <input
          className='form__rating-input visually-hidden'
          name='rating'
          value={3}
          id='3-stars'
          type='radio'
          onChange={handleValueChange}
        />
        <label
          htmlFor='3-stars'
          className='reviews__rating-label form__rating-label'
          title='not bad'
        >
          <svg className='form__star-image' width={37} height={33}>
            <use xlinkHref='#icon-star' />
          </svg>
        </label>
        <input
          className='form__rating-input visually-hidden'
          name='rating'
          value={2}
          id='2-stars'
          type='radio'
          onChange={handleValueChange}
        />
        <label
          htmlFor='2-stars'
          className='reviews__rating-label form__rating-label'
          title='badly'
        >
          <svg className='form__star-image' width={37} height={33}>
            <use xlinkHref='#icon-star' />
          </svg>
        </label>
        <input
          className='form__rating-input visually-hidden'
          name='rating'
          value={1}
          id='1-star'
          type='radio'
          onChange={handleValueChange}
        />
        <label
          htmlFor='1-star'
          className='reviews__rating-label form__rating-label'
          title='terribly'
        >
          <svg className='form__star-image' width={37} height={33}>
            <use xlinkHref='#icon-star' />
          </svg>
        </label>
      </div>
      <textarea
        className='reviews__textarea form__textarea'
        id='review'
        name='review'
        placeholder='Tell how was your stay, what you like and what can be improved'
        value={formData.review}
        onChange={handleValueChange}
      />
      <div className='reviews__button-wrapper'>
        <p className='reviews__help'>
          To submit review please make sure to set{' '}
          <span className='reviews__star'>rating</span> and describe your stay with
          at least <b className='reviews__text-amount'>50 characters</b>.
        </p>
        <button
          className='reviews__submit form__submit button'
          type='submit'
          disabled={isButtonDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
