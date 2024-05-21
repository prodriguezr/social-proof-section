interface Props {
  commenter: string;
  photoImage: string;
  status: string;
  content: string;
}

export const Comment = ({ commenter, photoImage, status, content }: Props) => {
  return (
    <article className='w-full h-[248px] bg-very-dark-magenta rounded-lg px-8 pt-[40px] pb-[35px] flex flex-col'>
      <div className=' mb-[23px]'>
        <div className='flex flex-row mx-auto'>
          <div className='w-[40px] mr-4 justify-center'>
            <img
              src={`/${photoImage}`}
              alt={`${commenter} photo`}
              className='w-[40px] aspect-square rounded-full'
            />
          </div>
          <div className='flex flex-col mr-[23px]'>
            <p className='text-[17px] font-bold text-white'>{commenter}</p>
            <p className='text-[17px] text-soft-pink'>{status}</p>
          </div>
        </div>
      </div>
      <p className='text-white leading-[22px] tracking-[-0.3px] align-left text-[17px ]'>
        "{content}"
      </p>
    </article>
  );
};
