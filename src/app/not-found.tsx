import { ButtonLink } from '@/components/atoms/ButtonLink';

const Custom404 = () => {
  return (
    <section className={`relative `}>
      <div className="container relative z-10 text-center">
        <div className="row justify-center">
          <div className="lg:col-8">
            <ButtonLink href="/" className="text-white bg-secondary ml-3">
              Home Page
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Custom404;
