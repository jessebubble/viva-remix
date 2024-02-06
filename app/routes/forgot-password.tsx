import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { PageIntro } from '~/components/PageIntro';

export default function ForgotPassword() {
   return (
      <>
         <PageIntro
            eyebrow="Forgot Password"
            title="What do we do now?"
            centered
         >
            <p>
               Keep calm and watch the video below. We'll get you back on track
               in no time
            </p>
         </PageIntro>
         <Container className="mt-24 sm:mt-32 lg:mt-40">
            <FadeIn>
               <iframe
                  width="100%"
                  height="500"
                  style={{ borderRadius: '1.5rem' }}
                  src="https://www.youtube.com/embed/videoseries?si=7WR9RyZYz0SxZzKC&amp;list=PLzEpVcJEUm9emILlivQKE1NR7UgFgXDKn"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               ></iframe>
            </FadeIn>
         </Container>
      </>
   );
}
