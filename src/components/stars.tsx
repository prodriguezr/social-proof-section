import star from '../assets/icon-star.svg';

interface Props {
  qtyStars?: number;
  description: string;
}
export const Stars = ({ qtyStars = 0, description }: Props) => {
  const images = Array.from({ length: qtyStars }, (_, index) => (
    <img key={index} src={star} alt={`star_${index}`} />
  ));

  return (
    <article className='h-[78px] flex flex-col items-center justify-center rounded-lg w-full bg-light-grayish-magenta'>
      <div className='flex flex-row gap-2 mt-2'>{images}</div>
      <p className='mt-[14px] text-[17px] font-bold text-very-dark-magenta'>
        {description}
      </p>
    </article>
  );
};
