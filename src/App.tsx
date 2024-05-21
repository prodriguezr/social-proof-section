import { Stars, Comment } from './components';

function App() {
  return (
    <main className='w-[375px] flex flex-col'>
      <section className='mt-[82px] w-[327px] flex-col flex mx-auto mb-[39px]'>
        <h1 className='text-center flex mx-auto text-[40px] leading-[32px] font-bold tracking-[-1.43px] text-very-dark-magenta'>
          10,000+ of our users love our products.
        </h1>
        <h2 className='mt-[17px] text-[19px] text-center leading-[25px] h-[100px] align-top'>
          We only provide great products combined with excellent customer
          service. See what our satisfied customers are saying about our
          services.
        </h2>
      </section>
      <section className='h-[266px] flex mx-auto flex-col justify-center items-center gap-4 w-[327px] mb-[49px]'>
        <Stars qtyStars={5} description='Rated 5 Stars in Reviews' />
        <Stars qtyStars={5} description='Rated 5 Stars in Report Guru' />
        <Stars qtyStars={5} description='Rated 5 Stars in BestTech' />
      </section>
      <section className='w-[327px] flex mx-auto flex-col h-[776px] gap-4 mb-[99px]'>
        <Comment
          commenter='Colton Smith'
          photoImage='image-colton.jpg'
          status='Verified Buyer'
          content='We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!'
        />
        <Comment
          commenter='Irene Roberts'
          photoImage='image-irene.jpg'
          status='Verified Buyer'
          content='Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.'
        />
        <Comment
          commenter='Anne Wallace'
          photoImage='image-anne.jpg'
          status='Verified Buyer'
          content='Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!'
        />
      </section>
    </main>
  );
}

export default App;
